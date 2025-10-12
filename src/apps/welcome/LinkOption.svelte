
<script lang="ts">
    import {isMobile} from "../../util/mobileUtils";

    interface Props {
        onClick?: () => void | undefined;
        children?: import('svelte').Snippet;
        href?: string;
    }

    let { onClick = undefined, children, href }: Props = $props();

    let isActive = $derived(onClick !== undefined || href !== undefined);
</script>

<a class="link" class:disabled={!isActive} {href} target="_blank" class:mobile={isMobile()} onclick={onClick}>{@render children?.()}</a>
<style>
    .link {
        @apply pt-2 text-center;
        transition: color 150ms ease;
        display: block;
        color: #ced5e1;
        max-width: max-content;
        font-size: 16px;
        text-align: center;
        min-width: 100%;
        text-shadow: #0f151255 1px 1px 2px;
        cursor: pointer;
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