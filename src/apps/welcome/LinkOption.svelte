
<script lang="ts">
    export let onClick : () => void | undefined = undefined
</script>

{#if (onClick != undefined)}
    <p class="link" on:click={onClick}><slot/></p>
{:else}
    <p class="link disabled" on:click={onClick}><slot/></p>
{/if}
<style>
    .link {
        @apply pt-2 text-center;
        transition: color 150ms ease;
        display: block;
        color: #9ca3af;
        max-width: max-content;
        font-size: 20px;
        text-align: center;
        min-width: 100%;
    }

    .link.disabled {
        color: #5c6067;
    }

    .link:hover:not(.disabled) {
        color: #fff;
    }
</style>