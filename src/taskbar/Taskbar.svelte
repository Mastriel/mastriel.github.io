<script lang="ts">

    import {Window} from "../window/window";
    import {Process} from "../app/process";
    import {getNewZIndex} from "../window/zIndex";
    import {flip} from "svelte/animate"

    let processes = Process.processesStore
    let activeWindow = Window.activeWindowStore


    $: isActive = (process: Process) =>
        $activeWindow?.process === process

    const toggleProcessVisibility = (process: Process) => {
        if (isActive(process)) {
            hideProcess(process)
        } else {
            showProcess(process)
            focusProcess(process)
        }

    }

    const showProcess = (process: Process) => {
        console.log(process)
        process.getWindows().forEach((w) => {
            w.unhide()
            w.zIndex = getNewZIndex()
        })
    }

    const hideProcess = (process: Process) => {
        process.getWindows().forEach((p) => {
            p.hide()
            Window.activeWindow = undefined
        })
    }

    const focusProcess = (process: Process) => {
        Window.activeWindow = process.lastActiveWindow
        console.log("Focus!")

        process.getWindows().sort((w) => w.zIndex).forEach((window) => {
            console.log("Window!")
            window.zIndex = getNewZIndex()
        })

    }

</script>

<div class="fixed bottom-0 z-0">
    <div class="h-12 w-screen z-0 bg-taskbar"></div>
</div>

<div class="fixed bottom-0 max-z-index">
    <div class="h-12 w-screen max-z-index bg-taskbar-blur"></div>
</div>

<div class="fixed bottom-0 max-z-index">
    <div class="h-12 w-screen max-z-index taskbar-contents flex items-center justify-center gap-1">
        {#each $processes as process (process)}
            <div class="{isActive(process) ? 'selected' : 'unselected'} process"
                 on:click={() => toggleProcessVisibility(process)}
                 animate:flip={{duration: 200}}>

                <img src={process.app.icon} width="30" height="30" alt={`${process.app.name}`} class="translate-y-2.5"/>

                {#if (isActive(process))}
                    <span class="text-center block">_</span>
                {:else}
                    <span class="text-center block">.</span>
                {/if}
            </div>
        {/each}
    </div>
</div>


<style>

    .selected {
        backdrop-filter: brightness(150%);
    }

    .unselected:hover {
        backdrop-filter: brightness(125%);
    }

    .process {
        @apply pl-2 pr-2;
        transition: backdrop-filter 0.2s ease;
    }

    .max-z-index {
        z-index: 218700001;
    }

    .bg-taskbar {
        background-image: linear-gradient(
                to right,
                rgba(68, 82, 53, 0.4),
                rgba(129, 121, 72, 0.4),
                rgba(111, 138, 77, 0.4));
    }

    .bg-taskbar-blur {
        backdrop-filter: blur(4px);

        background-image: linear-gradient(
                to right,
                rgba(68, 82, 53, 0.4),
                rgba(129, 121, 72, 0.4),
                rgba(111, 138, 77, 0.4));
    }

    .taskbar-contents {
        border-top: solid 2px;
        border-color: rgb(129, 121, 72);
    }
</style>