<script lang="ts">
    import {Process} from "../../app/process";
    import {Window} from "../../window/window";
    import Console from "./Console";
    import {onMount} from "svelte";
    import {randomElement} from "../../util/randomUtils";
    import consoleIcon from "../../assets/consoleIcon.svg"
    import {ErrorPopup} from "../shared/error/ErrorPopup";
    import type {ConsoleOptions} from "./ConsoleOptions";

    export let process: Process<Console>
    export let window: Window
    let options = <ConsoleOptions> process.options



    window.icon = consoleIcon
    window.style = "background-color: " + options.backgroundColor

    let randomId = Math.random()
    let debugTitleNumber : number
    onMount(() => {
        debugTitleNumber = 0
    })

    function removeProcess() {
        process.kill()
        console.log("Process killed!")
    }
    const spawnAnother = () => {
        let process = Process.spawn(Console)
        console.log("New process spawned!")
        console.log(process)
    }

    const updateColor = () => {
        let colors = ["bg-red", "bg-blue", "bg-lime", "bg-black"]
        window.classes = randomElement(colors)
        console.log("Color updated!")
    }

    const updateTitle = () => {
        debugTitleNumber += 1
        window.title = debugTitleNumber.toString()
        console.log("Title updated!")
    }

    const showError = () => {
        process.error("User has initiated an error.")
    }

    const showUnrecoverableError = () => {
        process.crash("User has forced a crash.")
    }
</script>

<div class="pl-2 pt-2">
    <!-- <h1 on:click={spawnAnother}>Spawn another {randomId}</h1> -->
    <a on:click={removeProcess}>Remove process</a>
    <br>
    <a on:click={updateColor}>Update color</a>
    <br>
    <a on:click={updateTitle}>Update title</a>
    <br>
    <a on:click={spawnAnother}>Spawn another</a>
    <br>
    <a on:click={showError}>Show error</a>
    <br>
    <a on:click={showUnrecoverableError}>Show unrecoverable error</a>
    <br>
</div>