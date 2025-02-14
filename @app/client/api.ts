/* tslint:disable */
/* eslint-disable */
/**
 * API
 * API
 *
 * The version of the OpenAPI document: 0.0.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { Configuration } from './configuration';
import globalAxios, { AxiosPromise, AxiosInstance } from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from './base';

/**
 * 
 * @export
 * @interface AccountDbo
 */
export interface AccountDbo {
    /**
     * 
     * @type {string}
     * @memberof AccountDbo
     */
    _id: string;
    /**
     * 
     * @type {string}
     * @memberof AccountDbo
     */
    email: string;
    /**
     * 
     * @type {boolean}
     * @memberof AccountDbo
     */
    verifiedEmail: boolean;
    /**
     * 
     * @type {string}
     * @memberof AccountDbo
     */
    nickname: string;
    /**
     * 
     * @type {string}
     * @memberof AccountDbo
     */
    profilePicureFile: string;
    /**
     * 
     * @type {string}
     * @memberof AccountDbo
     */
    remoteProfilePictureUrl: string;
    /**
     * 
     * @type {string}
     * @memberof AccountDbo
     */
    phoneNumber: string;
    /**
     * 
     * @type {string}
     * @memberof AccountDbo
     */
    birthday: string;
    /**
     * 
     * @type {string}
     * @memberof AccountDbo
     */
    gender: string;
    /**
     * 
     * @type {string}
     * @memberof AccountDbo
     */
    createdOn: string;
}
/**
 * 
 * @export
 * @interface ChangePassword
 */
export interface ChangePassword {
    /**
     * 
     * @type {string}
     * @memberof ChangePassword
     */
    oldPassword: string;
    /**
     * 
     * @type {string}
     * @memberof ChangePassword
     */
    newPassword: string;
}
/**
 * 
 * @export
 * @interface CreateAccountRequest
 */
export interface CreateAccountRequest {
    /**
     * 
     * @type {string}
     * @memberof CreateAccountRequest
     */
    birthday: string;
    /**
     * 
     * @type {string}
     * @memberof CreateAccountRequest
     */
    nickname: string;
    /**
     * 
     * @type {string}
     * @memberof CreateAccountRequest
     */
    phoneNumber: string;
    /**
     * 
     * @type {string}
     * @memberof CreateAccountRequest
     */
    gender: string;
    /**
     * 
     * @type {string}
     * @memberof CreateAccountRequest
     */
    email: string;
    /**
     * 
     * @type {string}
     * @memberof CreateAccountRequest
     */
    password: string;
}
/**
 * 
 * @export
 * @interface CreateAccountResponse
 */
export interface CreateAccountResponse {
    /**
     * 
     * @type {string}
     * @memberof CreateAccountResponse
     */
    accessToken: string;
    /**
     * 
     * @type {AccountDbo}
     * @memberof CreateAccountResponse
     */
    account: AccountDbo;
}
/**
 * 
 * @export
 * @interface LoginRequest
 */
export interface LoginRequest {
    /**
     * 
     * @type {string}
     * @memberof LoginRequest
     */
    email: string;
    /**
     * 
     * @type {string}
     * @memberof LoginRequest
     */
    password: string;
}
/**
 * 
 * @export
 * @interface LoginResponse
 */
export interface LoginResponse {
    /**
     * 
     * @type {string}
     * @memberof LoginResponse
     */
    accessToken: string;
}
/**
 * 
 * @export
 * @interface UpdateAccountInfo
 */
export interface UpdateAccountInfo {
    /**
     * 
     * @type {string}
     * @memberof UpdateAccountInfo
     */
    nickname: string;
}

/**
 * AccountApi - axios parameter creator
 * @export
 */
export const AccountApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Get account info
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        accountControllerAccountInfo: async (options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/account`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication bearer required
            // http bearer authentication required
            if (configuration && configuration.accessToken) {
                const accessToken = typeof configuration.accessToken === 'function'
                    ? await configuration.accessToken()
                    : await configuration.accessToken;
                localVarHeaderParameter["Authorization"] = "Bearer " + accessToken;
            }


    
            const queryParameters = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                queryParameters.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                queryParameters.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(queryParameters)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Change password
         * @param {ChangePassword} changePassword 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        accountControllerChangePassword: async (changePassword: ChangePassword, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'changePassword' is not null or undefined
            if (changePassword === null || changePassword === undefined) {
                throw new RequiredError('changePassword','Required parameter changePassword was null or undefined when calling accountControllerChangePassword.');
            }
            const localVarPath = `/account/change-password`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication bearer required
            // http bearer authentication required
            if (configuration && configuration.accessToken) {
                const accessToken = typeof configuration.accessToken === 'function'
                    ? await configuration.accessToken()
                    : await configuration.accessToken;
                localVarHeaderParameter["Authorization"] = "Bearer " + accessToken;
            }


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            const queryParameters = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                queryParameters.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                queryParameters.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(queryParameters)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            const nonString = typeof changePassword !== 'string';
            const needsSerialization = nonString && configuration && configuration.isJsonMime
                ? configuration.isJsonMime(localVarRequestOptions.headers['Content-Type'])
                : nonString;
            localVarRequestOptions.data =  needsSerialization
                ? JSON.stringify(changePassword !== undefined ? changePassword : {})
                : (changePassword || "");

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Create account
         * @param {CreateAccountRequest} createAccountRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        accountControllerCreateAccount: async (createAccountRequest: CreateAccountRequest, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'createAccountRequest' is not null or undefined
            if (createAccountRequest === null || createAccountRequest === undefined) {
                throw new RequiredError('createAccountRequest','Required parameter createAccountRequest was null or undefined when calling accountControllerCreateAccount.');
            }
            const localVarPath = `/account`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            const queryParameters = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                queryParameters.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                queryParameters.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(queryParameters)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            const nonString = typeof createAccountRequest !== 'string';
            const needsSerialization = nonString && configuration && configuration.isJsonMime
                ? configuration.isJsonMime(localVarRequestOptions.headers['Content-Type'])
                : nonString;
            localVarRequestOptions.data =  needsSerialization
                ? JSON.stringify(createAccountRequest !== undefined ? createAccountRequest : {})
                : (createAccountRequest || "");

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * Accepts username and password to return a account jwt
         * @summary Login
         * @param {LoginRequest} loginRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        accountControllerLogin: async (loginRequest: LoginRequest, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'loginRequest' is not null or undefined
            if (loginRequest === null || loginRequest === undefined) {
                throw new RequiredError('loginRequest','Required parameter loginRequest was null or undefined when calling accountControllerLogin.');
            }
            const localVarPath = `/account/login`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            const queryParameters = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                queryParameters.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                queryParameters.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(queryParameters)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            const nonString = typeof loginRequest !== 'string';
            const needsSerialization = nonString && configuration && configuration.isJsonMime
                ? configuration.isJsonMime(localVarRequestOptions.headers['Content-Type'])
                : nonString;
            localVarRequestOptions.data =  needsSerialization
                ? JSON.stringify(loginRequest !== undefined ? loginRequest : {})
                : (loginRequest || "");

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * Blacklist user jwt
         * @summary Logout
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        accountControllerLogout: async (options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/account/logout`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication bearer required
            // http bearer authentication required
            if (configuration && configuration.accessToken) {
                const accessToken = typeof configuration.accessToken === 'function'
                    ? await configuration.accessToken()
                    : await configuration.accessToken;
                localVarHeaderParameter["Authorization"] = "Bearer " + accessToken;
            }


    
            const queryParameters = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                queryParameters.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                queryParameters.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(queryParameters)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Update account info
         * @param {UpdateAccountInfo} updateAccountInfo 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        accountControllerUpdateAccountInfo: async (updateAccountInfo: UpdateAccountInfo, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'updateAccountInfo' is not null or undefined
            if (updateAccountInfo === null || updateAccountInfo === undefined) {
                throw new RequiredError('updateAccountInfo','Required parameter updateAccountInfo was null or undefined when calling accountControllerUpdateAccountInfo.');
            }
            const localVarPath = `/account`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PUT', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication bearer required
            // http bearer authentication required
            if (configuration && configuration.accessToken) {
                const accessToken = typeof configuration.accessToken === 'function'
                    ? await configuration.accessToken()
                    : await configuration.accessToken;
                localVarHeaderParameter["Authorization"] = "Bearer " + accessToken;
            }


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            const queryParameters = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                queryParameters.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                queryParameters.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(queryParameters)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            const nonString = typeof updateAccountInfo !== 'string';
            const needsSerialization = nonString && configuration && configuration.isJsonMime
                ? configuration.isJsonMime(localVarRequestOptions.headers['Content-Type'])
                : nonString;
            localVarRequestOptions.data =  needsSerialization
                ? JSON.stringify(updateAccountInfo !== undefined ? updateAccountInfo : {})
                : (updateAccountInfo || "");

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * AccountApi - functional programming interface
 * @export
 */
export const AccountApiFp = function(configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Get account info
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async accountControllerAccountInfo(options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AccountDbo>> {
            const localVarAxiosArgs = await AccountApiAxiosParamCreator(configuration).accountControllerAccountInfo(options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: (configuration?.basePath || basePath) + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Change password
         * @param {ChangePassword} changePassword 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async accountControllerChangePassword(changePassword: ChangePassword, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await AccountApiAxiosParamCreator(configuration).accountControllerChangePassword(changePassword, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: (configuration?.basePath || basePath) + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Create account
         * @param {CreateAccountRequest} createAccountRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async accountControllerCreateAccount(createAccountRequest: CreateAccountRequest, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CreateAccountResponse>> {
            const localVarAxiosArgs = await AccountApiAxiosParamCreator(configuration).accountControllerCreateAccount(createAccountRequest, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: (configuration?.basePath || basePath) + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Accepts username and password to return a account jwt
         * @summary Login
         * @param {LoginRequest} loginRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async accountControllerLogin(loginRequest: LoginRequest, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<LoginResponse>> {
            const localVarAxiosArgs = await AccountApiAxiosParamCreator(configuration).accountControllerLogin(loginRequest, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: (configuration?.basePath || basePath) + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Blacklist user jwt
         * @summary Logout
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async accountControllerLogout(options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await AccountApiAxiosParamCreator(configuration).accountControllerLogout(options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: (configuration?.basePath || basePath) + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Update account info
         * @param {UpdateAccountInfo} updateAccountInfo 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async accountControllerUpdateAccountInfo(updateAccountInfo: UpdateAccountInfo, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await AccountApiAxiosParamCreator(configuration).accountControllerUpdateAccountInfo(updateAccountInfo, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: (configuration?.basePath || basePath) + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * AccountApi - factory interface
 * @export
 */
export const AccountApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * 
         * @summary Get account info
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        accountControllerAccountInfo(options?: any): AxiosPromise<AccountDbo> {
            return AccountApiFp(configuration).accountControllerAccountInfo(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Change password
         * @param {ChangePassword} changePassword 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        accountControllerChangePassword(changePassword: ChangePassword, options?: any): AxiosPromise<void> {
            return AccountApiFp(configuration).accountControllerChangePassword(changePassword, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Create account
         * @param {CreateAccountRequest} createAccountRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        accountControllerCreateAccount(createAccountRequest: CreateAccountRequest, options?: any): AxiosPromise<CreateAccountResponse> {
            return AccountApiFp(configuration).accountControllerCreateAccount(createAccountRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * Accepts username and password to return a account jwt
         * @summary Login
         * @param {LoginRequest} loginRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        accountControllerLogin(loginRequest: LoginRequest, options?: any): AxiosPromise<LoginResponse> {
            return AccountApiFp(configuration).accountControllerLogin(loginRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * Blacklist user jwt
         * @summary Logout
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        accountControllerLogout(options?: any): AxiosPromise<void> {
            return AccountApiFp(configuration).accountControllerLogout(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Update account info
         * @param {UpdateAccountInfo} updateAccountInfo 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        accountControllerUpdateAccountInfo(updateAccountInfo: UpdateAccountInfo, options?: any): AxiosPromise<void> {
            return AccountApiFp(configuration).accountControllerUpdateAccountInfo(updateAccountInfo, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * AccountApi - interface
 * @export
 * @interface AccountApi
 */
export interface AccountApiInterface {
    /**
     * 
     * @summary Get account info
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AccountApiInterface
     */
    accountControllerAccountInfo(options?: any): AxiosPromise<AccountDbo>;

    /**
     * 
     * @summary Change password
     * @param {ChangePassword} changePassword 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AccountApiInterface
     */
    accountControllerChangePassword(changePassword: ChangePassword, options?: any): AxiosPromise<void>;

    /**
     * 
     * @summary Create account
     * @param {CreateAccountRequest} createAccountRequest 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AccountApiInterface
     */
    accountControllerCreateAccount(createAccountRequest: CreateAccountRequest, options?: any): AxiosPromise<CreateAccountResponse>;

    /**
     * Accepts username and password to return a account jwt
     * @summary Login
     * @param {LoginRequest} loginRequest 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AccountApiInterface
     */
    accountControllerLogin(loginRequest: LoginRequest, options?: any): AxiosPromise<LoginResponse>;

    /**
     * Blacklist user jwt
     * @summary Logout
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AccountApiInterface
     */
    accountControllerLogout(options?: any): AxiosPromise<void>;

    /**
     * 
     * @summary Update account info
     * @param {UpdateAccountInfo} updateAccountInfo 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AccountApiInterface
     */
    accountControllerUpdateAccountInfo(updateAccountInfo: UpdateAccountInfo, options?: any): AxiosPromise<void>;

}

/**
 * AccountApi - object-oriented interface
 * @export
 * @class AccountApi
 * @extends {BaseAPI}
 */
export class AccountApi extends BaseAPI implements AccountApiInterface {
    /**
     * 
     * @summary Get account info
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AccountApi
     */
    public accountControllerAccountInfo(options?: any) {
        return AccountApiFp(this.configuration).accountControllerAccountInfo(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Change password
     * @param {ChangePassword} changePassword 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AccountApi
     */
    public accountControllerChangePassword(changePassword: ChangePassword, options?: any) {
        return AccountApiFp(this.configuration).accountControllerChangePassword(changePassword, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Create account
     * @param {CreateAccountRequest} createAccountRequest 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AccountApi
     */
    public accountControllerCreateAccount(createAccountRequest: CreateAccountRequest, options?: any) {
        return AccountApiFp(this.configuration).accountControllerCreateAccount(createAccountRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Accepts username and password to return a account jwt
     * @summary Login
     * @param {LoginRequest} loginRequest 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AccountApi
     */
    public accountControllerLogin(loginRequest: LoginRequest, options?: any) {
        return AccountApiFp(this.configuration).accountControllerLogin(loginRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Blacklist user jwt
     * @summary Logout
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AccountApi
     */
    public accountControllerLogout(options?: any) {
        return AccountApiFp(this.configuration).accountControllerLogout(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Update account info
     * @param {UpdateAccountInfo} updateAccountInfo 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AccountApi
     */
    public accountControllerUpdateAccountInfo(updateAccountInfo: UpdateAccountInfo, options?: any) {
        return AccountApiFp(this.configuration).accountControllerUpdateAccountInfo(updateAccountInfo, options).then((request) => request(this.axios, this.basePath));
    }
}


/**
 * StatusApi - axios parameter creator
 * @export
 */
export const StatusApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Check server status
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        statusControllerStatus: async (options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/status`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            const queryParameters = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                queryParameters.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                queryParameters.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(queryParameters)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * StatusApi - functional programming interface
 * @export
 */
export const StatusApiFp = function(configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Check server status
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async statusControllerStatus(options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await StatusApiAxiosParamCreator(configuration).statusControllerStatus(options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: (configuration?.basePath || basePath) + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * StatusApi - factory interface
 * @export
 */
export const StatusApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * 
         * @summary Check server status
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        statusControllerStatus(options?: any): AxiosPromise<void> {
            return StatusApiFp(configuration).statusControllerStatus(options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * StatusApi - interface
 * @export
 * @interface StatusApi
 */
export interface StatusApiInterface {
    /**
     * 
     * @summary Check server status
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof StatusApiInterface
     */
    statusControllerStatus(options?: any): AxiosPromise<void>;

}

/**
 * StatusApi - object-oriented interface
 * @export
 * @class StatusApi
 * @extends {BaseAPI}
 */
export class StatusApi extends BaseAPI implements StatusApiInterface {
    /**
     * 
     * @summary Check server status
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof StatusApi
     */
    public statusControllerStatus(options?: any) {
        return StatusApiFp(this.configuration).statusControllerStatus(options).then((request) => request(this.axios, this.basePath));
    }
}


