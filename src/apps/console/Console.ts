import {App} from "../../app/app";
import ConsoleApp from "./ConsoleApp.svelte";

export default class Console extends App {

    public static readonly defaultOptions = {
        backgroundColor: <string> "#000000"
    } as const

    constructor() {
        super("Console", ConsoleApp)
    }
}
