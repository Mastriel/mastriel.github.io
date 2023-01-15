import './app.css'
import './tailwind.css'
import Main from './Main.svelte'
import {App} from "./app/app";
import Console from "./apps/console/Console";
import {Process} from "./app/process";
import {Window} from "./window/window";
import type {ConsoleOptions} from "./apps/console/ConsoleOptions";

const main = new Main({
  target: document.getElementById('app'),
})

App.registerApp(new Console())

Process.spawn(Console, <ConsoleOptions> { backgroundColor: "#1a1d1e" })

export default main