import {
    Controller, Get, Post, Put, Body, HttpStatus, HttpException,
    BadRequestException,
} from '@nestjs/common';
import { ApiOperation, ApiTags, ApiCreatedResponse, ApiBadRequestResponse, ApiOkResponse } from '@nestjs/swagger';

import * as path from 'path';
import debug from 'debug';
import { pkg } from '../utils/environment';
const log = debug(`${pkg.name}:${path.basename(__filename)}`)
const axios = require('axios').default;

import { Collections } from '@app/db';
import { Auth, Password, AuthService, JwtClaims, JwtClaimFromContext } from '@app/auth';
import { TokenCache } from '@app/cache';

import * as dto from './rescuer.dto';
import { ObjectId } from 'mongodb';
import { RescuerGpsResponse } from './rescuer.dto';


const baseRobotUrl = '';

@ApiTags('rescuer')
@Controller('rescuer')
export class RescuerController {
    constructor(
        private readonly commandsCollection: Collections.CommandsService,
        private readonly settingsCollection: Collections.SettingsService,
        private readonly sensorCollection: Collections.SensorService,
        private readonly locationCollection: Collections.LocationService,
        private readonly alarmsCollection: Collections.AlarmsService,
    ) { }
    @Get("sensor-data")
    @ApiOperation({ summary: 'Check Sensor Data' }) // annotating on openapi/swagger
    @ApiOkResponse({ description: 'The Sensor Data', type: [dto.RescuerSensorDataResponse] }) // annotating on openapi/swagger
    async getSensorData(): Promise<any> { // name doesn't matter
        log("Sensor Data Ran")
        log("This ran")
        const result = await this.sensorCollection.list();
        log(result, "SENSOR DATA from DB")
        return result;
        // Grab the data from database
        // return [
        //     {
        //         timestamp: "123",
        //         smoke: 123,
        //         temperature: 123
        //     },
        //     {
        //         timestamp: "123",
        //         smoke: 123,
        //         temperature: 123
        //     },
        // ]
    }

    @Get("location")
    @ApiOperation({ summary: 'Check GPS Data' }) // annotating on openapi/swagger
    @ApiOkResponse({ description: 'The GPS Data', type: dto.RescuerGpsResponse }) // annotating on openapi/swagger
    async getGps(): Promise<any> { // name doesn't matter
        log("This ran")
        const result = await this.locationCollection.list();
        log(result, "GPS DATA from DB")
        return result;
        // return {
        //     long: 123.555,
        //     lat: 125.44
        // }
    }

    @Get("robot-status")
    @ApiOperation({ summary: 'Check Robot Status Data' }) // annotating on openapi/swagger
    @ApiOkResponse({ description: 'The Robot Status Data', type: dto.RescuerStatusResponse }) // annotating on openapi/swagger
    async getRobotStatus(): Promise<any> { // name doesn't matter
        log("This ran")
        const result = await this.settingsCollection.list();
        log(result, "SETTINGS DATA from DB")
        return result;
        // return {
        //     isAuto: false
        // }
    }


    @Get("alarms")
    @ApiOperation({ summary: 'Check Location Alarms Data' }) // annotating on openapi/swagger
    @ApiOkResponse({ description: 'The Location Alarms Data', type: [dto.RescuerLocationAlarmResponse] }) // annotating on openapi/swagger
    async getLocationAlarmStatus(): Promise<any> { // name doesn't matter
        log("This ran")

        // get data from database
        // const result = await this.commandsCollection.insertOne(...params);
        const result = await this.alarmsCollection.list();
        log(result, "ALARMS DATA from DB")
        return result;
        // return [ 
        //     {
        //         type: "sound",
        //         x: 15,
        //         y: 10
        //     },
        //     {
        //         type: "sound",
        //         x: 15,
        //         y: 10
        //     }
        // ]
    }

    @Post('robot-status')
    @ApiOperation({ summary: 'Robot Status', description: 'Accepts isAuto and other system parameters to set on robot' })
    // @ApiCreatedResponse({ description: 'Authenticated.', type: [dto.LoginResponse] }) // use an array, or make a class of items
    @ApiCreatedResponse({ description: 'Authenticated.', type: dto.RescuerStatusResponse })
    @ApiBadRequestResponse({ description: 'Invalid credentials.' })
    async sendRobotStatus(@Body() body: dto.RescuerStatusRequest): Promise<dto.RescuerStatusResponse> { // Promise is the good response expect. To throw a bad response from an API, use Throw keyword 
        const { isAuto } = body;
        log("robot-status");
        log(body, "body");

        // dispatch and send to database, IGNORE FOR NOW DON'T CARE
        // const params: Parameters<Collections.CommandsService['insertOne']> = [{
        //     isAuto
        // }];
        // const result = await this.commandsCollection.insertOne(...params);

        // dispatch to robot
        const sendCommand = isAuto ? "Auto" : "Manual"
        try {
            const params2: any = {
                action: sendCommand
            }
            const result2 = await axios({
                method: 'post',
                url: `${baseRobotUrl}/idk`,
                data: params2
            }).then(function (response: any) {
                console.log(response, "Respsonse that came back!")
            });
        } catch (error) {
            console.error(error);
        }
        return body
    }

    @Post('direction-input')
    @ApiOperation({ summary: 'Direction Input', description: 'Accepts D Pad Key values' })
    @ApiCreatedResponse({ description: 'Authenticated.', type: dto.RescuerDirectionInputRequest })
    @ApiBadRequestResponse({ description: 'Invalid credentials.' })
    async sendDirectionInput(@Body() body: dto.RescuerDirectionInputRequest): Promise<dto.RescuerDirectionInputRequest> { // Promise is the good response expect. To throw a bad response from an API, use Throw keyword 
        const { input } = body;
        log("direction-input");
        log(body, "body");

        // dispatch and send to database
        const params: Parameters<Collections.CommandsService['insertOne']> = [{
            input
        }];
        const result = await this.commandsCollection.insertOne(...params);

        // dispatch to robot
        try {
            const params2: any = {
                action: "Direction",
                direction: input,
                duration: 5
            }
            const result2 = await axios({
                method: 'post',
                url: `${baseRobotUrl}/idk`,
                data: params2
            }).then(function (response: any) {
                console.log(response, "Respsonse that came back!")
            });
        } catch (error) {
            console.error(error);
        }
        return body

    }


}
