import {App} from "../../app/app";
import DevToolsApp from "./DevToolsApp.svelte";
import consoleIcon from "../../assets/consoleIcon.svg"

export default class DevTools extends App {

    public static readonly defaultOptions = {
        backgroundColor: <string> "#000000"
    } as const

    constructor() {
        super("Developer Console", App.mainWindow(DevToolsApp, 350, 600), consoleIcon)
    }
}
