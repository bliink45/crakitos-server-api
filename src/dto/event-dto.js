import { eventType } from "../enum/eventType";

export class eventDto {
    type;
    data;

    constructor(v) {
        this.type = parseInt(v.type);
        
        switch(this.type) {
            case eventType.START:
                this.data = { id: this.data.id };
                break;
            case eventType.SHUTDOWN:
                break;
            case eventType.REBOOT:
                this.data = { id: this.data.id };
                break;
            case eventType.CRASH:
                break;
            default:
                throw new Error(`Unknown eventType "${this.type}"`);
        }
    }
}