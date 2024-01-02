<script lang="ts">
    import {Process} from "../../../app/process";
    import {Window} from "../../../window/window";
    import AboutMe from "./AboutMe";
    import {onMount} from "svelte";
    import BrandItem from "./BrandItem.svelte";
    import BouncingText from "../../../components/BouncingText.svelte";
    import {randomElement} from "../../../util/randomUtils";
    import {isMobile} from "../../../util/mobileUtils";

    export let process: Process<AboutMe>
    export let window: Window

    window.icon = process.app.icon


    window.classes = "about-me-app h-full"

    let randomQuote : string

    onMount(() => {
        randomQuote = randomElement([
            'hooray!',
            'ermmm..... 🤓',
            'wah wah wahh wah wahh?',
            'do you think the super saiyan stays on during sex?',
            'womp womp',
            'let me run the numbers'
        ])
    })

    const discordIconUrl = "https://assets-global.website-files.com/6257adef93867e50d84d30e2/636e0a69f118df70ad7828d4_icon_clyde_blurple_RGB.svg"

</script>

<h1 class="text-3xl text-center mt-10 pt-3 pb-3 font-bold text-black title">
    hi, i'm <BouncingText value="Mastriel" duration={0.5} distancePx={2} offset={0.1} />!
</h1>


<div class="flex justify-center pt-10">
    <div>
        <img src="/pfp.png" class="pfp" alt="my pfp!" width={164}>
    </div>
</div>

<div class="flex justify-center">
    <div>
        <p class="pt-2 text-center text-gray-500 text-xs">he/they</p>
        <p class="text-center text-gray-500 text-xs">'{randomQuote}'</p>
    </div>
</div>

<div class="pt-10">

    <div class="flex justify-center">
        <div class="w-3/4">
            <p class="text-center">hi, i program things and talk about <a href="https://store.steampowered.com/app/1150690/OMORI/" target="_blank">OMORI</a>.</p>
            <p class="text-center">kotlin, c#, and ts developer (in that order)</p>
            <br>
            <p class="text-center">i also like cooking, graphic design, and playing games with my friends.</p>

        </div>
    </div>
</div>

{#if isMobile()}
    <div class="pt-20"></div>
{/if}

<div class="absolute bottom-0 w-full pt-3 pb-4 footer flex justify-around flex-wrap">
    <BrandItem text="Mastriel" imageUrl={discordIconUrl} color="#5865F2"/>
    <BrandItem text="Mastriel" link="https://github.com/Mastriel" imageUrl="/github-mark-white.svg" color="white"/>
</div>


<style>

    a {
        color: #9effc0;
        text-decoration: inherit;
    }

    a:hover {
        color: #62bb82;
    }

    .pfp {
        border-radius: 50%;
    }

    :root {
        --bg-color: #1a1a1a;
    }

    .footer {
        background-color: #1e282c;
    }

    /*noinspection CssNonIntegerLengthInPixels*/
    .footer::before {
        top: -7.5px;
        content: '';
        position: absolute;
        width: 100%;


        background: url("/Spike.svg") repeat-x;
        height: 7.5px;
        background-size: 10px 12px;
        background-position-y: -3px;
        animation: infinite ease-out;
        animation-duration: 3s;
        animation-name: footer;
        animation-fill-mode: backwards;
    }

    @keyframes footer {
        0% {
            background-position-y: -1px;
        }
        50% {
            background-position-y: -3px;
        }
        100% {
            background-position-y: -1px;
        }
    }

    :global(.about-me-app) {
        background-color: var(--bg-color);
    }

    .title {
        background-image: linear-gradient(45deg, #9effc0, #51e4f8);
        /* transform: skewY(-4deg); */
        transform: skewY(-4deg);
        animation: ease-in-out;
    }
</style>