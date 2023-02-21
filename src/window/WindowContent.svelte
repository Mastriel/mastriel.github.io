<script lang="ts" >
    import {Window} from "./window";


    export let window : Window
    export let notImportant : boolean

    let { style, classes, height, width } = window.stores

</script>

<div style="height: {$height}px;{$style}" class={$classes} class:overflow-y-scroll={true} class:scrollbar-hide={true}>
    {#if (notImportant)}
        <div style="height: {$height}px; width: {$width}px" class="absolute"></div>
    {/if}

    <svelte:component this={window.component} window={window} process={window.process} />
</div>
