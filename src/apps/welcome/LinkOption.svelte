
<script lang="ts">
    import {isMobile} from "../../util/mobileUtils";

    export let onClick : () => void | undefined = undefined
</script>

<p class="link" class:disabled={onClick === undefined} class:mobile={isMobile()} on:click={onClick}><slot/></p>
<style>
    .link {
        @apply pt-2 text-center;
        transition: color 150ms ease;
        display: block;
        color: #ced5e1;
        max-width: max-content;
        font-size: 20px;
        text-align: center;
        min-width: 100%;
        text-shadow: #0f1512 1px 1px 2px;
    }

    .link.mobile {
        padding-top: calc(20%);
    }

    .link.disabled {
        color: #5c6067;
    }

    .link:hover:not(.disabled) {
        color: #fff;
    }
</style>