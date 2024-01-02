<script lang="ts">
    export let value : string

    export let className : string

    export let offset : number = 0.05
    export let duration : number = 0.5

    export let distancePx : number = 2
</script>


<span class="{className}">
    {#each value as letter, i (i)}
        <span><span class="letter" style="--offset: {i*offset}s; --duration: {duration}s; --distance: {distancePx}px;">{letter}</span></span>
    {/each}
</span>

<!--suppress CssUnresolvedCustomProperty -->
<style>

    .letter {
        animation-timing-function: ease-in-out;
        animation-name: letter-bobble;
        animation-iteration-count: infinite;
        animation-duration: var(--duration);
        animation-delay: var(--offset);
        animation-fill-mode: both;
        transform-origin: center center;
        animation-direction: alternate;
        white-space: pre;
        display: inline-block;
    }

    @keyframes letter-bobble {
        0% {
            transform: translateY(var(--distance));
        }
        100% {
            transform: translateY(calc(var(--distance) * -1));
        }
    }

</style>