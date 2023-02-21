<script lang="ts">
    export let hovering : boolean = false

    export let onHover = () => { }
    export let onUnhover = () => { }
</script>


<div on:mouseenter={() => { onHover(); hovering = true }}
     on:mouseleave={() => { onUnhover(); hovering = false }}>
    <slot/>
</div>