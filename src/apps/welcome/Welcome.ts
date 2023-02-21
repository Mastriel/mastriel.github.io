import {App} from "../../app/app";
import icon from "../../assets/welcomeIcon.svg";
import WelcomeApp from "./WelcomeApp.svelte";


export class Welcome extends App {

    constructor() {
        super("Welcome!", WelcomeApp, icon)
    }
}