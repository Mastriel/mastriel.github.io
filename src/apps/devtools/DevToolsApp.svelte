<script lang="ts">
    import {Process} from "../../app/process";
    import {Window} from "../../window/window";
    import DevTools from "./DevTools";
    import {onMount} from "svelte";
    import {randomElement, randomNumber} from "../../util/randomUtils";
    import consoleIcon from "../../assets/consoleIcon.svg"
    import type {DevToolsOptions} from "./DevToolsOptions";
    import {delay} from "../../util/asyncUtils";
    import Chatroom from "../chatroom/Chatroom";
    import {FileDialog} from "../shared/filedialog/FileDialog";
    import type {File} from "../../fs/fs"
    import {file, fs} from "../../fs/fs";

    interface Props {
        process: Process<DevTools>;
        window: Window;
    }

    let { process, window = $bindable() }: Props = $props();
    let options = <DevToolsOptions> process.options



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
        let process = Process.spawn(DevTools)
        console.log("New process spawned!")
        console.log(process)
        Window.activeWindow = process.mainWindow

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
        process.error("User has initiated an error.", window)
    }

    const showUnrecoverableError = () => {
        process.crash("User has forced a crash.", window)
    }

    const turnInvisible = async () => {
        window.isVisible = false
        await delay(3000)
        window.isVisible = true
    }

    const openChatroom = async () => {
        let process = Process.spawn(Chatroom)
        Window.activeWindow = process.mainWindow
    }

    let selectedFile : File
    let fileContents : String = $state()
    const selectFile = async () => {
        let dialog = Window.spawn(new FileDialog(window, undefined), process)

        selectedFile = await dialog.getFile()
        fileContents = await fs.readString(selectedFile)
    }

    const createFile = async () => {
        await fs.writeString(file(`example-${randomNumber(1000)}.txt`), "hi!")
    }
</script>

<div class="pt-2 pl-3 options">
    <span class="link" onclick={removeProcess}>Remove process</span>
    <span class="link" onclick={updateColor}>Update color</span>
    <span class="link" onclick={updateTitle}>Update title</span>
    <span class="link" onclick={spawnAnother}>Spawn another</span>
    <span class="link" onclick={showError}>Show error</span>
    <span class="link" onclick={showUnrecoverableError}>Show unrecoverable error</span>
    <span class="link" onclick={turnInvisible}>Turn invisible temporarily</span>
    <span class="link" onclick={openChatroom}>Open Chatroom</span>
    <span class="link" onclick={selectFile}>Select File (selected: {fileContents ?? "none"})</span>
    <span class="link" onclick={createFile}>Create example.txt</span>
</div>


<style>

    .link {
        transition: color 150ms ease, padding-left 500ms cubic-bezier(.42,.34,.35,1);
        display: block;
        color: #9ca3af;
        max-width: max-content;

    }

    .link:hover {
        padding-left: 9px;
        color: #fff;
    }

    .options:hover .link:not(:hover) {
    }

</style>