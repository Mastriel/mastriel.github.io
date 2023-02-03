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

    function pageXY(e: MouseEvent | TouchEvent) : [number, number] {
        let pageX : number = 0
        let pageY : number = 0
        if (e instanceof MouseEvent) {
            pageX = e.pageX
            pageY = e.pageY
        } else if (e instanceof TouchEvent) {
            const touch = e.touches[0]
            pageX = touch.pageX
            pageY = touch.pageY
        }
        return [pageX, pageY]
    }

    function onTitleBarPress(e: MouseEvent | TouchEvent) {
        if (notImportant) return
        if (e instanceof MouseEvent && e.button !== 0) return

        let [pageX, pageY] = pageXY(e)

        const body = document.body;
        const box = titlebar.getBoundingClientRect();

        posRelativeToCursorX = pageX - (box.left + body.scrollLeft - body.clientLeft)
        posRelativeToCursorY = pageY - (box.top + body.scrollTop - body.clientTop)
        titlebarPressed = true
        if (window.zIndex <= getZIndex()) {
            window.zIndex = getNewZIndex()
        }

        if (e instanceof MouseEvent) {
            e.preventDefault()
        }
        document.addEventListener('mousemove', (ev) => {onTitleBarMove(ev)});
        document.addEventListener('mouseup', (ev) => {onTitleBarUnpress(ev)});

        document.addEventListener('touchmove', (ev) => {onTitleBarMove(ev)}, {passive: false});
        document.addEventListener('touchend', (ev) => {onTitleBarUnpress(ev)}, {passive: false});

        window.dragStart.trigger()

    }

    function onTitleBarUnpress(e: MouseEvent | TouchEvent) {
        if (e instanceof MouseEvent && e.button !== 0) return
        titlebarPressed = false

        if (e instanceof MouseEvent) {
            e.preventDefault()
        }

        document.removeEventListener('mousemove', (ev) => {onTitleBarMove(ev)});
        document.removeEventListener('mouseup', (ev) => {onTitleBarUnpress(ev)});

        document.removeEventListener('touchmove', (ev) => {onTitleBarMove(ev)});
        document.removeEventListener('touchend', (ev) => {onTitleBarUnpress(ev)});

        window.dragStop.trigger()
    }

    function onTitleBarMove(e: MouseEvent | TouchEvent) {
        if (notImportant) return

        if (!titlebarPressed) return

        let [pageX, pageY] = pageXY(e)

        window.x = pageX - (posRelativeToCursorX ?? 0)
        window.y = pageY - (posRelativeToCursorY ?? 0)

        e.preventDefault()
    }



</script>

<div class="absolute border rounded-t-md rounded-sm border-gray-800 drop-shadow-md window-spawn"
     class:hidden={!$isVisible}
     style="width: {$width}px; left: {$x}px; top: {$y}px; z-index: {$zIndex}"
     bind:this={window.windowElement}
     on:mousedown={() => makeActive()}>
    <div class="h-7 flex justify-between title-bar text-sm rounded-t-md rounded-sm select-none"
         style="width: {$width-2}px"
         bind:this={titlebar}
         on:mousedown={onTitleBarPress}
         on:mouseup={onTitleBarUnpress}
         on:mousemove={onTitleBarMove}>

        <div class="flex items-center">
            {#if ($icon !== undefined && $icon.length !== 0)}
                <img src={$icon} alt="{$title} icon" height={18} width={18} class="ml-1.5">
            {/if}
            {#if ($activeWindowStore === window)}
                <span class="pl-2">{$title}</span>
            {:else}
                <span class="pl-2 text-gray-400">{$title}</span>
            {/if}
        </div>
        <div class="flex items-center">
            <span class="pr-2.5 mb-1">
                {#if ($controlButtons.minimize)}
                    <span class="pr-1.5" on:click={() => window.hide()}>_</span>
                {/if}

                {#if ($controlButtons.maximize)}
                    <span class="pr-1.5">□</span>
                {/if}

                {#if ($controlButtons.close)}
                    <span on:click={() => window.close()}>x</span>
                {:else}
                    <span class="text-gray-500">x</span>
                {/if}
            </span>
        </div>
    </div>

    <WindowContent window={window} notImportant={notImportant} />
</div>



<style>

    .title-bar {
        background-color: #151c1a;
        border-bottom: 1px solid #212c29;
    }

</style>