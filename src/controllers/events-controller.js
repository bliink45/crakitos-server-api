import axios from "axios";
import { api } from "../data/api.js";

export class EventController {
    static async trigger(event) {
        console.log("event: ", event);

        /** TODO
         * Should trigger several request to others api
         */

        let triggerApiList = [ api["crakito-bot"] ];
        let promiseList = [];

        triggerApiList.forEach(api => {

            const data = {
                type: 0,
                data: event,
            };

            promiseList.push(
                axios.post(api.url + "/minecraft/event", data)
            );
        })

        Promise.all(triggerApiList).then(() => {
            console.log("Event triggered to these api:");
            triggerApiList.forEach(api => {
                let i = 1;
                console.log(`${i++}. ${api.name}`);
            })
        });
    }
}