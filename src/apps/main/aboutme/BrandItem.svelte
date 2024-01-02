<script lang="ts">
    export let imageUrl : string
    export let color : string
    export let text : string
    export let link : string | undefined = undefined

</script>


<a class="flex justify-center mt-1" href={link}>
    <img alt={text} src={imageUrl} height={24} width={24}>
    <h1 class="select-text pl-2" style="color: {color}">{text}</h1>
</a>