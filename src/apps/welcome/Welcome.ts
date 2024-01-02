import {App} from "../../app/app";
import icon from "../../assets/welcomeIcon.svg";
import WelcomeApp from "./WelcomeApp.svelte";
import {Window} from "../../window/window";


export class Welcome extends App {

    constructor() {

        super("Welcome!", App.mainWindow(WelcomeApp, 600, 310, Welcome.onWindowSpawn), icon)
    }

    private static readonly onWindowSpawn = (window: Window) => {
        window.x = screen.width / 10
        Window.activeWindow = window;
    }
}