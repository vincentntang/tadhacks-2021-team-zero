import * as accountService from './account.service';
export { AccountService } from './account.service';
import * as tokenService from './token.service';
export { TokenService } from './token.service';

//new
// import * as rescuerService from "./rescuer.service"
// export { RescuerService } from './rescuer.service';
import * as commandsService from "./commands.service"
export { CommandsService } from './commands.service';
import * as settingsService from "./settings.service"
export { SettingsService } from './settings.service';
import * as dataService from "./data.service"
export { DataService } from './data.service';
import * as locationsService from "./locations.service"
export { LocationsService } from './locations.service';
import * as alarmsService from "./alarms.service"
export { AlarmsService } from './alarms.service';

export const collectionProviders = [
    accountService,
    tokenService,
    // rescuerService
    commandsService,
    settingsService,
    dataService,
    locationsService,
    alarmsService
].map(service => service.collectionProvider)

export const collectionServices = [
    accountService.AccountService,
    tokenService.TokenService,
    // rescuerService.RescuerService
    commandsService.CommandsService,
    settingsService.SettingsService,
    dataService.DataService,
    locationsService.LocationsService,
    alarmsService.AlarmsService
];