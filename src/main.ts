import './app.css'
import './tailwind.css'
import Main from './Main.svelte'
import {App} from "./app/app";
import Console from "./apps/console/Console";
import {Process} from "./app/process";
import {Window} from "./window/window";
import type {ConsoleOptions} from "./apps/console/ConsoleOptions";
import Chatroom from "./apps/chatroom/Chatroom";
import {IndexedDbFileSystem} from "./fs/indexedDbFileSystem";
import {fs, setFs} from "./fs/fs";

const main = new Main({
    target: document.getElementById('app'),
})

try {
    let fs = new IndexedDbFileSystem()
    setFs(fs)
} catch (e) {
    console.error("Unable to initialize filesystem.", e)
}
App.registerApp(new Console())
App.registerApp(new Chatroom())

Process.spawn(Console, <ConsoleOptions> { backgroundColor: "#1a1d1e" })

export default main