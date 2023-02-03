
<script lang="ts">

    import {Process} from "../../../app/process.js";
    import {Window} from "../../../window/window"
    import {FileDialog} from "./FileDialog";
    import {file, folder, fs} from "../../../fs/fs.js";

    export let process: Process
    export let window: FileDialog

    let currentDirectory = "root"

    $: files = fs.getFiles(folder(currentDirectory))

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

</script>

<div class="bg-gray-800 border-b border-b-gray-700 pt-2 pb-2 mb-1 drop-shadow-xl">
    <div class="flex justify-center">
        <span class="text-sm">{currentDirectory}</span>

    </div>
</div>

{#await files}
    <span>loading...</span>
{:then f}
    {#each f as file, i (file.fullPath)}
        <span class="block pl-2" class:odd={i % 2 === 0}>{file.fullPath}</span>
    {/each}
{/await}


<style>
    .error-message {
        width: 350px
    }

    .odd {
        @apply bg-gray-800;
    }
</style>