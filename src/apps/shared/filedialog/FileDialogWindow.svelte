
<script lang="ts">

    import {Process} from "../../../app/process.js";
    import {Window} from "../../../window/window"
    import {FileDialog} from "./FileDialog";
    import {name, file, folder, fs, parent, type File, type Folder} from "../../../fs/fs.js";
    import fileIcon from "../../../assets/fileIcon.svg";
    import folderIcon from "../../../assets/folderIcon.svg";
    import folderBackIcon from "../../../assets/folderBackIcon.svg";

    export let process: Process
    export let window: FileDialog

    let currentDirectory = "/"

    $: files = fs.getFiles(folder(currentDirectory)).catch(console.error)

    window.classes = "bg-gray-900"
    window.title = "Select a File"
    window.important = true

    window.controlButtons = {
        maximize: false,
        minimize: false,
        close: true
    }

    Window.activeWindow = window

    window.closeEvent.listen(() => {
        window.returnNone()
    })

    const icon = (f: File) : string => {
        if (f.type == "folder") {
            return folderIcon
        } else {
            return fileIcon
        }
    }

    const selectFile = (f: File) => {
        if (f.type == "folder") {
            openFolder(<Folder> f)
            return
        }
        window.returnFile(f)
        window.close()
    }

    const openFolder = (folder: Folder) => {
        currentDirectory = folder.fullPath
    }

    const createFolder = () => {
        fs.createFolder(folder(currentDirectory + "/folder"), false)
    }

    const goToParent = () => {
        currentDirectory = parent(folder(currentDirectory)).fullPath
    }

    $: additionalSlash = () => {
        if (currentDirectory == "/") return ""
        return "/"
    }
</script>

<div class="bg-gray-800 border-b border-b-gray-700 pt-2 pb-2 drop-shadow-xl">
    <div class="flex justify-between items-center">
        <span class="text-sm pl-5">{currentDirectory}{additionalSlash()}</span>
        <div class="flex pr-2">
            <div on:click={goToParent} class="flex icon-button p-0.5">
                <img src={folderBackIcon} alt="file icon" height={24} width={24}>
            </div>
        </div>
    </div>
</div>

{#await files}
    <span>loading...</span>
{:then f}
    <div class="files-size overflow-y-scroll">
    {#each f as file, i (file.fullPath)}
        <div class="flex flex-grow" class:odd={i % 2 === 0} on:click={() => selectFile(file)}>
            <img src={icon(file)} alt="file icon" height={18} width={18}>
            <span class="block pl-1" >{name(file)}</span>
        </div>
    {/each}
    </div>
{:catch e}
    <span>cannot load files! {e}</span>
{/await}


<style>

    .icon-button {
        transition: background-color 100ms linear;
    }
    .icon-button:hover {
        box-shadow: inset 0 0 0 1px #9dddee;
        background-color: rgba(165, 239, 217, 0.62);
    }

    .files-size {
        height: calc(100% - 45px);
    }

    .odd {
        @apply bg-gray-800;
    }
</style>