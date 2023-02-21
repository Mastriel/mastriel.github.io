import './app.css'
import './tailwind.css'
import Main from './Main.svelte'
import {App} from "./app/app";
import DevTools from "./apps/devtools/DevTools";
import {Process} from "./app/process";
import {Window} from "./window/window";
import type {DevToolsOptions} from "./apps/devtools/DevToolsOptions";
import Chatroom from "./apps/chatroom/Chatroom";
import {IndexedDbFileSystem} from "./fs/indexedDbFileSystem";
import {fs, setFs} from "./fs/fs";
import {Welcome} from "./apps/welcome/Welcome";

const main = new Main({
    target: document.getElementById('app'),
})

try {
    setFs(new IndexedDbFileSystem())
} catch (e) {
    console.error("Unable to initialize filesystem.", e)
}
App.registerApp(new DevTools())
App.registerApp(new Chatroom())
App.registerApp(new Welcome())

document.addEventListener("keydown", (ev) => {
    if (ev.ctrlKey == true && ev.altKey == true && ev.key == "d") {
        Process.spawn(DevTools, <DevToolsOptions> { backgroundColor: "#1a1d1e" })
    }
})

Process.spawn(Welcome)

export default main