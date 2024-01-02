<script lang="ts">

    import {Window} from "./window";
    import WindowContainer from "./WindowContainer.svelte";
    import {isMobile} from "../util/mobileUtils";
    import WindowContainerMobile from "./WindowContainerMobile.svelte";
    let store = Window.windowsStore

    $: windows = $store

</script>

{#each windows as window (window)}
    {#if !isMobile()}
        <WindowContainer window={window}/>
    {:else}
        <WindowContainerMobile window={window}/>
    {/if}
{/each}
