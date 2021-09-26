import { Collections } from '@app/db';
import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, MinLength, IsOptional } from 'class-validator';

// this is one object
// GET - REQUEST

export class RescuerDataResponse {
    @ApiProperty()
    readonly timestamp!: string;

    @ApiProperty()
    readonly smoke!: number;

    @ApiProperty()
    readonly temperature!: number;
}
export class RescuerGpsResponse {
    @ApiProperty()
    readonly timestamp!: number;

    @ApiProperty()
    readonly long!: number;

    @ApiProperty()
    readonly lat!: number;

    @ApiProperty()
    readonly coordX!: number;

    @ApiProperty()
    readonly coordY!: number;

    @ApiProperty()
    readonly coordInstance!: number;
}

export class RescuerStatusResponse {
    @ApiProperty()
    readonly isAuto!: boolean;
}

export class RescuerLocationsAlarmResponse {
    // @ApiProperty()
    // readonly type!: string;

    // @ApiProperty()
    // readonly x!: number;

    // @ApiProperty()
    // readonly y!: number

    @ApiProperty()
    readonly timestamp!: string;

    @ApiProperty()
    readonly type!: string;

    @ApiProperty()
    readonly coordInstance!: number

    @ApiProperty()
    readonly coordX!: number

    @ApiProperty()
    readonly coordY!: number

    @ApiProperty()
    readonly relX!: number

    @ApiProperty()
    readonly relY!: number
}

// POST request
export class RescuerStatusRequest {
    @ApiProperty()
    @IsNotEmpty()
    readonly isAuto!: boolean;
}

export class RescuerDirectionInputRequest {
    @ApiProperty()
    @IsNotEmpty()
    readonly input!: string;
}