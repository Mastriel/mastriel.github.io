<!--suppress CssUnusedSymbol -->
<script lang="ts">
    import {Process} from "../../../app/process";
    import {Window} from "../../../window/window";
    import {Blog} from "./Blog";

    export let process: Process<Blog>
    export let window: Window


    window.icon = process.app.icon

    window.style = "background-color: #21262e"

    let firstBlog = Blog.entries[0]

    console.log(Blog.entries)

</script>

<div class="pl-3 pr-5">
    {@html firstBlog.htmlContents}
</div>

<style>

    :global(.md) {
        color: #e5e7eb;
    }

    :global(h1.md) {
        @apply pt-5 pb-5 mb-3;
        font-size: xxx-large;
        border-bottom-style: solid;
        border-bottom-color: #9ca3af;
        border-bottom-width: 2px;
        font-weight: bolder;
    }

    :global(h2.md) {
        @apply pt-4 pb-1.5 mb-3;
        font-size: xx-large;
        border-bottom-style: solid ;
        border-bottom-color: #9ca3af;
        border-bottom-width: 1px;
        font-weight: bolder;

    }

    :global(h3.md) {
        @apply pt-4 pb-1.5;
        font-size: x-large;
        font-weight: bolder;

    }
    :global(h4.md) {
        @apply pt-2 pb-0.5;
        font-size: large;
        font-weight: bolder;
    }

    :global(p) {
        font-size: medium;
    }

</style>