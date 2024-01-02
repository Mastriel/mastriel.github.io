import {App} from "../../app/app";
import chatroomIcon from "../../assets/chatroomIcon.svg"
import ChatroomApp from "./ChatroomApp.svelte";

export default class Chatroom extends App {

    constructor() {
        super("Chatroom", App.mainWindow(ChatroomApp, 600, 600), chatroomIcon)
    }
}
