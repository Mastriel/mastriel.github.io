<script lang="ts" >
    import {Window} from "./window";

    interface Props {
        window: Window;
        notImportant: boolean;
        mobile?: boolean;
    }

    let { window, notImportant, mobile = false }: Props = $props();

    let { style, classes, height, width } = window.stores

    const WinComponent = $derived(window.component);
</script>


<div style="{mobile ? 'height: calc(var(--mvh) * 100 - 96px); width: 100vw;' : `height: ${$height}px;`} {$style}" class="overflow-y-scroll scrollbar-hide overflow-clip {$classes}">
    {#if (notImportant)}
        <div style="height: {$height}px; width: {$width}px" class="absolute"></div>
    {/if}

    <WinComponent window={window} process={window.process} />
</div>
