import { eventType } from "../enum/eventType.js";

export class eventDto {
    type;
    data;

    constructor(v) {
        this.type = parseInt(v.type);
        this.data = v.data;
        
        switch(this.type) {
            case eventType.START:
                break;
            case eventType.SHUTDOWN:
                break;
            case eventType.REBOOT:
                break;
            case eventType.CRASH:
                break;
            default:
                throw new Error(`Unknown eventType "${this.type}"`);
        }
    }
}