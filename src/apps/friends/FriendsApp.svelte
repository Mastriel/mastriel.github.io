<script lang="ts">
    import {Process} from "../../app/process";
    import {Window} from "../../window/window";
    import {onMount} from "svelte";
    import type Friends from "./Friends";

    interface Props {
        process: Process<Friends>;
        window: Window;
    }

    let { process, window = $bindable() }: Props = $props();

    window.classes = "bg-pink-200"
    window.icon = process.app.icon
</script>