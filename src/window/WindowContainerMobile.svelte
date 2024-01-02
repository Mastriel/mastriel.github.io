<script lang="ts">
    import {Window} from "./window";
    import {getNewZIndex, getZIndex} from "./zIndex";
    import {onMount} from "svelte";
    import WindowContent from "./WindowContent.svelte";

    export let window : Window

    let { classes, title, icon, x, y, width, height, style, controlButtons, isVisible, zIndex } = window.stores

    let titlebar : HTMLDivElement

    let posRelativeToCursorX : number
    let posRelativeToCursorY : number
    let titlebarPressed : boolean = false

    onMount(() => {
        window.zIndex = getNewZIndex()
    })

    $: notImportant = window.process.getImportantWindows().length != 0 && !window.important

    function makeActive() {
        // don't allow non-important windows to gain focus when an important window exists for that process
        if (notImportant) return
        Window.activeWindow = window
        if (window.zIndex <= getZIndex()) {
            window.zIndex = getNewZIndex()
        }
    }

    let { activeWindowStore } = Window
</script>


<div class="absolute border rounded-t-md rounded-sm border-gray-800 drop-shadow-md window-spawn"
     class:hidden={!$isVisible}
     style="z-index: {$zIndex}"
     bind:this={window.windowElement}
     on:mousedown={() => makeActive()}>
    <div class="h-12 flex justify-between title-bar text-sm rounded-t-md rounded-sm select-none "
         bind:this={titlebar}>

        <div class="flex items-center">
            {#if ($icon !== undefined && $icon.length !== 0)}
                <img src={$icon} alt="{$title} icon" height={32} width={32} class="ml-1.5">
            {/if}
            {#if ($activeWindowStore === window)}
                <span class="pl-4 text-xl text-ellipsis whitespace-nowrap overflow-hidden">{$title}</span>
            {:else}
                <span class="pl-4 text-gray-400 text-xl text-ellipsis whitespace-nowrap overflow-hidden">{$title}</span>
            {/if}
        </div>
        <div class="flex items-center">
            <div class="pr-2.5 mb-1 whitespace-nowrap">
                {#if ($controlButtons.minimize)}
                    <span class="pr-6" on:click={() => window.hide()}>_</span>
                {/if}

                {#if ($controlButtons.maximize)}
                    <span class="pr-6">□</span>
                {/if}

                {#if ($controlButtons.close)}
                    <span on:click={() => window.close()} class="pr-4">x</span>
                {:else}
                    <span class="text-gray-500 pr-4">x</span>
                {/if}
            </div>
        </div>
    </div>

    <WindowContent window={window} notImportant={notImportant} mobile={true} />
</div>

<style>
    .title-bar {
        background-color: #151c1a;
        border-bottom: 1px solid #212c29;
    }
</style>