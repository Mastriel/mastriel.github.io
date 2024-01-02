import {App} from "../../app/app";
import icon from "../../assets/mastrielIcon.svg"
import TimelineApp from "./TimelineApp.svelte";

export default class Timeline extends App {

    constructor() {
        super("Chatroom", App.mainWindow(TimelineApp, 600, 450), icon)
    }
}
