
export enum CFEnvironment {
    SANDBOX = 'SANDBOX',
    PRODUCTION = 'PRODUCTION',
}
export class CFConfig {
    environment: CFEnvironment;
    apiVersion: string;
    clientId: string;
    clientSecret: string;
    timeout: Number;
    webProxy: any;

    constructor(environment: CFEnvironment, apiVersion: string, clientId: string, clientSecret: string, timeout = 180000, webProxy = null) {
        this.environment = environment;
        this.apiVersion = apiVersion;
        this.clientId = clientId;
        this.clientSecret = clientSecret;
        this.webProxy = webProxy;
        this.timeout = timeout;
    }
}