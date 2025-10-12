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

    interface Props {
        process: Process<Welcome>;
        window: Window;
    }

    let { process, window = $bindable() }: Props = $props();

    window.icon = process.app.icon

    window.topClasses = "bg-blur-very-strong bg-black/50"
    window.classes = "welcome-app-bg"

    window.controlButtons = {
        close: false,
        minimize: true,
        maximize: false
    }

</script>

<div class="flex flex-col h-full w-full">
    <div class="bg-gray-800/50 border-b-gray-700 border-b pt-2 pb-2 drop-shadow-2xl">
        <div class="h-center">
            <ScrambleText class="font-bold text-xl" textValue="hello!!"/>
        </div>
    </div>

    <div class="text-base mx-2 mt-2 h-full mb-2 rounded-[8px] border border-gray-600 h-center from-black/40 to-black/10 bg-gradient-to-b">
        <div>
            <section class="text-center">
                <LinkOption onClick={() => Process.spawn(AboutMe).focus()}>about me</LinkOption>
                <LinkOption href="https://github.com/Mastriel">projects</LinkOption>
                <LinkOption onClick={() => Process.spawn(Blog).focus()}>blog</LinkOption>
                <LinkOption href="mailto:zac@calathea.dev">contact</LinkOption>
                <LinkOption>links</LinkOption>
            </section>

            {#if isMobile()}
                <section class="text-center pt-10 pb-10">
                    <p style="color:#999999;" class="text-sm">experience best on desktop!</p>
                </section>
            {/if}
        </div>
    </div>
</div>



<style>

    p {
        display: block;
        color: #ffffff;
    }

    :global(.welcome-app-bg) {
        background-color: #52525b99;
    }

</style>