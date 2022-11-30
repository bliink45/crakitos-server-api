import { eventType } from "../enum/eventType.js";

export class eventDto {
    type;
    name;
    ip;
    properties;
    message;

    constructor(v) {
        this.type = parseInt(v.type);
        this.name = v.name;
        this.ip = v.ip;
        this.properties = eventDto.parseProperties(v.properties);
        
        switch(this.type) {
            case eventType.START:
                this.message = `Le serveur a démarré`;
                break;
            case eventType.SHUTDOWN:
                this.message = `Le serveur s'est éteint`;
                break;
            case eventType.REBOOT:
                this.message = `Le serveur redémarré`;
                break;
            case eventType.CRASH:
                this.message = `Le serveur a été interrompu`;
                break;
            default:
                throw new Error(`Unknown eventType "${this.type}"`);
        }
    }

    static parseProperties(properties) {
        let out = {};

        let regexEpr = /[,]*(?<field>[a-z0-9\.-]+)=(?<value>[a-zA-Z0-9\-{}<>]*),/gm;

        let found;
        while ((found = regexEpr.exec(properties)) != null) {
            out[found.groups.field] = found.groups.value;
        }

        return out;
    }
}