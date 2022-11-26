import { eventType } from "../enum/eventType.js";

export class eventDto {
    type;
    data;

    constructor(v) {
        this.type = parseInt(v.type);
        
        switch(this.type) {
            case eventType.START:
                this.data = { ip: v.data.ip };
                break;
            case eventType.SHUTDOWN:
                break;
            case eventType.REBOOT:
                this.data = { ip: v.data.ip };
                break;
            case eventType.CRASH:
                break;
            default:
                throw new Error(`Unknown eventType "${this.type}"`);
        }
    }
}