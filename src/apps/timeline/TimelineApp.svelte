<script lang="ts">
    import {Process} from "../../app/process";
    import {Window} from "../../window/window";
    import Timeline from "../timeline/Timeline";
    import {fly} from "svelte/transition";
    import {onMount} from "svelte";

    export let process: Process<Timeline>
    export let window: Window

    type TimelineEvent = {
        event: string,
        description: string,
        date: string,
        backgroundColor: string,
        foregroundColor: string
    }

    let events : TimelineEvent[] = [
        {
            event: "Hammurabi Code",
            description: "The Hammurabi Code set out the standard to not allow stealing from others. Copyright indicates that you own a potentially infinitely reproducible good, and someone violating your copyright is essentially stealing.",
            date: "1750 BC",
            backgroundColor: "#0c1d3a",
            foregroundColor: "#c2d2ed"
        },
        {
            event: "Magna Carta",
            description: "The Magna Carta set out the principle that the king and other royals are not above the law. If a king or other government figure stole from you, you now had the right to be able to seek out penalty for this injustice.",
            date: "June 1215",
            backgroundColor: "#0c3a36",
            foregroundColor: "#c2eced"
        },
        {
            event: "Declaration of Independence",
            description: 'The declaration of independence had separated the United States from Great Britain, and caused a shift in what was believed to be theft. “No taxation with out representation” spread the idea that stealing can be a more fluid idea, and doesn’t have to be a directly violent action.',
            date: "August 1776",
            backgroundColor: "#0c3a23",
            foregroundColor: "#c2edce"
        },
        {
            event: "U.S. Constitution",
            description: "By setting up the 3 branches of government, the Constitution set up the ground work for our modern governmental system, and especially the Copyright Act of 1790.",
            date: "September 17th, 1787",
            backgroundColor: "#293a0c",
            foregroundColor: "#e4edc2"
        },
        {
            event: "Copyright Act of 1790",
            description: "The Copyright Act of 1790 laid out the ground work for the first ideas of copyright in the United States. Back then, you had to go to a copyright office to protect your works, and they were limited to things such as books, atlases, maps, and charts.",
            date: "May 31st, 1790",
            backgroundColor: "#3a1e0c",
            foregroundColor: "#edcfc2"
        },
        {
            event: "Bill of Rights",
            description: "The 7th amendment set up the basis to allow for juries to preside in trials worth over 20$ of damage, which would pertain to cases involving copyright.",
            date: "December 15th, 1791",
            backgroundColor: "#3a0c0c",
            foregroundColor: "#edc2c2"
        },
        {
            event: "Copyright Act of 1976",
            description: "This act extended copyright to include any work that could include authorship.",
            date: "October 19th, 1976",
            backgroundColor: "#3a0c2f",
            foregroundColor: "#edc2e9"
        },
        {
            event: "DMCA",
            description: "This act extended copyright again to include criminalizing the use of technology to circumvent digital copyright protection, as well as establishing a much more strict and rigid set of laws around accessing copyrighted works without authorization by the copyright holder. ",
            date: "October 12th, 1998",
            backgroundColor: "#120c3a",
            foregroundColor: "#cac2ed"
        },

    ]

    let selectedEventIndex = 0

    $: selectedEvent = events[selectedEventIndex]
    $: fgColor = selectedEvent.foregroundColor
    $: bgColor = selectedEvent.backgroundColor

    const numerals = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII']

    onMount(() => {
        window.title = "History of Copyright Law"
    })

    let previousEventIndex = 0
    const switchTo = (index: number) => {
        if (index == selectedEventIndex) return

        previousEventIndex = selectedEventIndex
        const alter = index < previousEventIndex ? () => selectedEventIndex-- : () => selectedEventIndex++
        const interval = setInterval(() => {
            alter()
            if (index == selectedEventIndex) clearInterval(interval)
        }, 50)
        console.log("switch!")
    }
    let isClosing : boolean = false
    window.closeRequest.listen(() => isClosing = true)

    $: flyIn = {y: previousEventIndex > selectedEventIndex ? -50 : 50, duration: 400}
    $: flyOut = isClosing ? {duration: 0} : undefined
</script>

<div class="w-full h-full" style="background-color:{bgColor}; color:{fgColor}">
    <div class="header flex justify-around pt-5 mr-40 ml-40 pb-4" style="--fgColor: {fgColor};color:{fgColor}">
        {#each numerals as numeral, i}
            {@const isActive = selectedEventIndex === i}
            <p class="header" class:font-extrabold={isActive} class:text-xl={isActive} on:click={() => switchTo(i)}>{numeral}</p>
        {/each}
    </div>
    <div class="line" style="--fgColor: {fgColor}; height:1px;"></div>
    {#each events as event, i}
        {#if selectedEventIndex === i}
            <div class="absolute pt-10" in:fly={flyIn} out:fly={flyOut}>
                <h1 class="text-center text-4xl mt-5 content">{event.event}</h1>
                <p class="text-center m-2 text-sm content">{event.date}</p>
                <p class="text-center m-8 text-md mt-5 content">{event.description}</p>
            </div>
        {/if}
    {/each}
</div>


<style>
    .line {
        background: linear-gradient(90deg, transparent 0%, var(--fgColor) 35%, var(--fgColor) 65%, transparent 100%);
    }

    p.header {
        transition: font-size 300ms ease-out, font-weight 300ms ease-out;
    }

    p.header:hover {
        cursor: pointer;
    }

    div {
        transition: background-color 300ms ease-in-out, color 300ms ease-in-out;
    }
</style>