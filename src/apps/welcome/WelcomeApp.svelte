<script lang="ts">
    import {Process} from "../../app/process";
    import {Window} from "../../window/window";
    import {Welcome} from "./Welcome";
    import {defaultControlButtons} from "../../window/controlButtons";
    import LinkOption from "./LinkOption.svelte";
    import Hoverable from "../../components/Hoverable.svelte";
    import ScrambleText from "../../components/ScrambleText.svelte";

    export let process: Process<Welcome>
    export let window: Window

    window.icon = process.app.icon

    window.classes = "bg-gray-800"

    window.width = 600
    window.height = 310

    window.controlButtons = {
        close: false,
        minimize: true,
        maximize: false
    }

    let welcomeHovering : boolean = false

    const onWelcomeHover = () => {

    }

</script>

<div class="bg-gray-800 border-b-gray-700 pt-2 pb-2 drop-shadow-2xl">
    <div class="h-center welcome-header">
        <span class="grayed-out left text-4xl pt-4 pb-4"> -------[ </span>
        <ScrambleText value="welcome"/>
        <span class="grayed-out right text-4xl pt-4 pb-4"> ]------- </span>
    </div>
</div>

<div class="h-center">
    <hr class="w-full border-gray-700"/>
</div>

<div class="pt-6 options h-center">
    <div class="text-center">
        <LinkOption>about me</LinkOption>
        <LinkOption>projects</LinkOption>
        <LinkOption>???</LinkOption>
        <LinkOption>friends</LinkOption>
        <LinkOption>links</LinkOption>
    </div>
</div>

<style>

    .grayed-out {
        background-clip: text;
        color: transparent;
        transition-property: background-position;
    }

    .grayed-out.left {
        background-image: linear-gradient(90deg, transparent, rgb(107, 114, 128));
    }

    .grayed-out.right {
        background-image: linear-gradient(270deg, transparent, rgb(107, 114, 128));
    }

    p {
        display: block;
        color: #ffffff;
    }

</style>