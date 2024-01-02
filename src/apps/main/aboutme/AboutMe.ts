import {App} from "../../../app/app";
import chatroomIcon from "../../../assets/chatroomIcon.svg"
import AboutMeApp from "./AboutMeApp.svelte";

export default class AboutMe extends App {

    constructor() {
        super("it's me!", App.mainWindow(AboutMeApp, 600, 600), chatroomIcon)
    }
}
