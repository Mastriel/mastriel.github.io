<script lang="ts">
    import {Process} from "../../app/process";
    import {Window} from "../../window/window";
    import {onMount} from "svelte";
    import type Friends from "./Friends";

    export let process: Process<Friends>
    export let window: Window

    window.classes = "bg-pink-200"
    window.icon = process.app.icon
</script>