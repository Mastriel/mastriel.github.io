<script lang="ts">

    interface Props {
        hovering?: boolean;
        onHover?: any;
        onUnhover?: any;
        children?: import('svelte').Snippet;
    }

    let {
        hovering = $bindable(false),
        onHover = () => { },
        onUnhover = () => { },
        children
    }: Props = $props();
</script>


<div onmouseenter={() => { onHover(); hovering = true }}
     onmouseleave={() => { onUnhover(); hovering = false }}>
    {@render children?.()}
</div>