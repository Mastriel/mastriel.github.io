
<script lang="ts">

    import {Process} from "../../../app/process.js";
    import {Window} from "../../../window/window"
    import {ErrorPopup} from "./ErrorPopup.js";

    export let process: Process
    export let window: ErrorPopup

    let { width } = window.stores

    window.classes = "bg-red-900"
    window.title = window.errorTitle
    window.important = true

    window.controlButtons = {
        maximize: false,
        minimize: false,
        close: false
    }

    Window.activeWindow = window

    window.closeEvent.listen(() => {
        Window.activeWindow = window.spawner
    })

    const closeWindow = () => {
        window.close()
        Window.activeWindow = process.mainWindow
    }
    const endProcess = () => {
        process.kill()
    }
</script>

<div class="bg-red-800 border-b border-b-red-700 pt-3 drop-shadow-xl">
    <div class="h-20 error-message overflow-y-scroll scrollbar-hide" style="width: {$width}px;">
        <div class="flex justify-center">
            <span class="text-center error-message whitespace-pre-line select-text" style="">{window.message}</span>
        </div>
    </div>
</div>
<div class="flex justify-around pt-5">
    {#if (!window.unrecoverable)}
        <button on:mousedown={closeWindow}>Continue</button>
    {/if}
    <button on:mousedown={endProcess}>End Process</button>
</div>


<style>
    .error-message {
        width: 350px
    }
</style>