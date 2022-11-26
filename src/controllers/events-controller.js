import axios from "axios";
import { api } from "../data/api.js";

export class EventController {
    static async trigger(event) {
        console.log("event: ", event);
        event.data.name = "crakitos-server-api";

        /** TODO
         * Should trigger several request to others api
         */

        let triggerApiList = [ api["bliink45-bot"], api["crakito-bot"] ];
        let promiseList = [];

        triggerApiList.forEach(api => {

            const data = {
                type: 0,
                data: {
                    type: 0,
                    data: event.data,
                }
            };

            promiseList.push(
                axios.post(api.url + "/minecraft", data)
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