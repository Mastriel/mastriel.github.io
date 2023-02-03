import {App} from "../../app/app";
import chatroomIcon from "../../assets/chatroomIcon.svg"
import ChatroomApp from "./ChatroomApp.svelte";

export default class Chatroom extends App {

    constructor() {
        super("Chatroom", ChatroomApp, chatroomIcon)
    }
}
