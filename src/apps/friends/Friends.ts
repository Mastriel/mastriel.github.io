import {App} from "../../app/app";
import friendsIcon from "../../assets/friendsIcon.svg"
import FriendsApp from "./FriendsApp.svelte";
export default class Friends extends App {

    constructor() {
        super("Friends", App.mainWindow(FriendsApp, 600, 500), friendsIcon)
    }
}
