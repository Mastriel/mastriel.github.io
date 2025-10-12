<script lang="ts">
    import {Process} from "../../app/process";
    import {Window} from "../../window/window";
    import Chatroom from "./Chatroom";
    import {onMount} from "svelte";

    interface Props {
        process: Process<Chatroom>;
        window: Window;
    }

    let { process, window = $bindable() }: Props = $props();

    window.icon = process.app.icon

    let dragging = false
    let iFrame : HTMLIFrameElement = $state()
    const disablePointer = () => { if (iFrame != undefined) iFrame.style.pointerEvents = "none" }
    const enablePointer = () => { if (iFrame != undefined) iFrame.style.pointerEvents = "" }

    window.dragStart.listen(() => { disablePointer(); dragging = true })
    window.dragStop.listen(() => { enablePointer(); dragging = false })

    /*
    window.onUnfocus.listen(disablePointer)
    window.onFocus.listen(enablePointer)
    */

    let activeWindow = Window.activeWindowStore

</script>

<iframe bind:this={iFrame}
        class="w-full h-full {$activeWindow === window ? 'pointer-events-auto' : 'pointer-events-none'}"
        src="https://chatroom-d29ab.web.app/"></iframe>