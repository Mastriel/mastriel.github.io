import './app.css'
import './tailwind.css'
import Main from './Main.svelte'
import {App} from "./app/app";
import DevTools from "./apps/devtools/DevTools";
import {Process} from "./app/process";
import type {DevToolsOptions} from "./apps/devtools/DevToolsOptions";
import Chatroom from "./apps/chatroom/Chatroom";
import {IndexedDbFileSystem} from "./fs/indexedDbFileSystem";
import {fs, setFs} from "./fs/fs";
import {Welcome} from "./apps/welcome/Welcome";
import {Blog} from "./apps/main/blog/Blog";
import AboutMe from "./apps/main/aboutme/AboutMe";
import {isMobile} from "./util/mobileUtils";
import {enableMvh} from "./util/vhUtils";
import Timeline from "./apps/timeline/Timeline";
import Friends from "./apps/friends/Friends";

const main = new Main({
    target: document.getElementById('app'),
})

try {
    setFs(new IndexedDbFileSystem())
} catch (e) {
    console.error("Unable to initialize filesystem.", e)
}

Blog.registerBlogs().then(_ => {})
App.registerApp(new DevTools())
App.registerApp(new Chatroom())
App.registerApp(new Welcome())
App.registerApp(new Blog())
App.registerApp(new AboutMe())
App.registerApp(new Timeline())
App.registerApp(new Friends())

document.addEventListener("keydown", (ev) => {
    if (ev.ctrlKey == true && ev.altKey == true && ev.key.toLowerCase() == "d") {
        Process.spawn(DevTools, <DevToolsOptions> { backgroundColor: "#1a1d1e" })
    }
    if (ev.ctrlKey == true && ev.altKey == true && ev.key.toLowerCase() == "t") {
        console.log("spawned")
        Process.spawn(Timeline)
    }
})

Process.spawn(Welcome)

if (isMobile()) {
    window.addEventListener("scroll", preventMotion, false);
    document.addEventListener("touchmove", preventMotion, false);

    function preventMotion(event: Event)
    {
        event.preventDefault();
        event.stopPropagation();
    }
}

enableMvh()

export default main