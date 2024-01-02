<script lang="ts" >
    import {Window} from "./window";


    export let window : Window
    export let notImportant : boolean

    export let mobile : boolean = false

    let { style, classes, height, width } = window.stores
</script>

<div style="{mobile ? 'height: calc(var(--mvh) * 100 - 96px); width: 100vw;' : `height: ${$height}px;`} {$style}" class="overflow-y-scroll scrollbar-hide overflow-clip {$classes}">
    {#if (notImportant)}
        <div style="height: {$height}px; width: {$width}px" class="absolute"></div>
    {/if}

    <svelte:component this={window.component} window={window} process={window.process} />
</div>
