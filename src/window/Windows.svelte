<script lang="ts">

    import {Window} from "./window";
    import WindowContainer from "./WindowContainer.svelte";
    let store = Window.windowsStore

    $: windows = $store

</script>

{#each windows as window (window)}
    <WindowContainer window={window}/>
{/each}
