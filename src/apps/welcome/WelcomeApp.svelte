<script lang="ts">
    import {Process} from "../../app/process";
    import {Window} from "../../window/window";
    import {Welcome} from "./Welcome";
    import LinkOption from "./LinkOption.svelte";
    import ScrambleText from "../../components/ScrambleText.svelte";
    import {Blog} from "../main/blog/Blog";
    import {isMobile} from "../../util/mobileUtils";
    import AboutMe from "../main/aboutme/AboutMe";
    import Friends from "../friends/Friends";

    export let process: Process<Welcome>
    export let window: Window

    window.icon = process.app.icon

    window.classes = "bg-gray-800"

    window.controlButtons = {
        close: false,
        minimize: true,
        maximize: false
    }

    let welcomeHovering : boolean = false

    const onBlogClick = () => {
        Process.spawn(Blog)
    }

</script>

<div class="bg-gray-800 border-b-gray-700 pt-2 pb-2 drop-shadow-2xl">
    <div class="h-center welcome-header">
        <span class="grayed-out left text-4xl pt-4 pb-4 whitespace-nowrap"> --------[ </span>
        <ScrambleText value="welcome"/>
        <span class="grayed-out right text-4xl pt-4 pb-4 whitespace-nowrap"> ]-------- </span>
    </div>
</div>

<div class="h-center">
    <hr class="w-full border-gray-700"/>
</div>

<div class="pt-6 options h-center">
    <div>
        <section class="text-center">
            <LinkOption onClick={() => Process.spawn(AboutMe).focus()}>about me</LinkOption>
            <LinkOption>projects</LinkOption>
            <LinkOption onClick={() => Process.spawn(Blog).focus()}>blog?</LinkOption>
            <LinkOption onClick={() => Process.spawn(Friends).focus()}>friends</LinkOption>
            <LinkOption>links</LinkOption>
        </section>

        {#if isMobile()}
            <section class="text-center pt-10 pb-10">
                <p style="color:#999999;" class="text-sm">experience best on desktop!</p>
            </section>
        {/if}
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