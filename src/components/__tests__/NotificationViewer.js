import NotificationViewer from "../NotificationsViewer";
import renderer  from "react-test-renderer";
import React from "react";
import {delay} from "redux-saga"


jest.mock("../../services/NotificationService");

const notificationService = require("../../services/NotificationService").default;

beforeAll(()=>{
    notificationService.__setCount(42);
});

describe("Notification viewer",()=>{
    it("should display the correct number of notifications", async ()=>{
        const tree = renderer.create(
            <NotificationViewer />
        )

        await delay();
        
        const instance = tree.root;
        const component = instance.findByProps({className:`notifications`});
        //console.log("Component ",component[0]._fiber.stateNode.children[0].text);
        const text = component.children[0];
        //const text = component[0]._fiber.stateNode.children[0].text;
        expect(text).toEqual("42 Notifications Awaiting---");

    });

});
