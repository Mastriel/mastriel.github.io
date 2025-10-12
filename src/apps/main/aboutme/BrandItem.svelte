<script lang="ts">
    interface Props {
        imageUrl: string;
        color: string;
        text: string;
        link?: string | undefined;
    }

    let {
        imageUrl,
        color,
        text,
        link = undefined
    }: Props = $props();

</script>


<a class="flex justify-center mt-1" href={link}>
    <img alt={text} src={imageUrl} height={24} width={24}>
    <h1 class="select-text pl-2" style="color: {color}">{text}</h1>
</a>