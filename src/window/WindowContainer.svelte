<script lang="ts">
    import {Window} from "./window";
    import {getNewZIndex, getZIndex} from "./zIndex";
    import {onMount} from "svelte";

    export let window : Window

    let { classes, title, icon, x, y, width, height, style, controlButtons } = window.stores

    let titlebar : HTMLDivElement

    let posRelativeToCursorX : number
    let posRelativeToCursorY : number
    let titlebarPressed : boolean = false
    let zIndex : number
    onMount(() => {
        zIndex = getNewZIndex()
    })

    $: notImportant = window.process.getImportantWindows().length != 0 && !window.important

    function makeActive() {
        // don't allow non-important windows to gain focus when an important window exists for that process
        if (notImportant) return
        Window.activeWindowStore.set(window)
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
        if (zIndex <= getZIndex()) {
            zIndex = getNewZIndex()
        }

        if (e instanceof MouseEvent) {
            e.preventDefault()
        }
        document.addEventListener('mousemove', (ev) => {onTitleBarMove(ev)});
        document.addEventListener('mouseup', (ev) => {onTitleBarUnpress(ev)});

        document.addEventListener('touchmove', (ev) => {onTitleBarMove(ev)}, {passive: false});
        document.addEventListener('touchend', (ev) => {onTitleBarUnpress(ev)}, {passive: false});

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

<div class="absolute border rounded-t-md rounded-sm border-gray-800 drop-shadow-md"
     style="width: {$width}px; left: {$x}px; top: {$y}px; z-index: {zIndex}"
     on:mousedown={makeActive}>
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
                    <span class="pr-1.5">_</span>
                {/if}

                {#if ($controlButtons.maximize)}
                    <span class="pr-1.5">□</span>
                {/if}

                {#if ($controlButtons.close)}
                    <span on:mouseup={() => window.close()}>x</span>
                {:else}
                    <span class="text-gray-500">x</span>
                {/if}
            </span>
        </div>
    </div>
    <div style="height: {window.height}px;{$style}" class={$classes}>
        {#if (notImportant)}
            <div style="height: {$height}px; width: {$width}px" class="absolute"></div>
        {/if}
        <svelte:component this={window.component} window={window} process={window.process} />
    </div>
</div>

<style>

    .title-bar {
        background-color: #151c1a;
        border-bottom: 1px solid #212c29;
    }

</style>