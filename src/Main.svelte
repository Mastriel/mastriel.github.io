<script lang="ts">
    import WindowContainer from "./window/WindowContainer.svelte";
    import Windows from "./window/Windows.svelte";
    import mastrielIcon from "./assets/mastrielIcon.svg";
    import Taskbar from "./taskbar/Taskbar.svelte";
</script>

<div class="absolute">
    <Windows/>
</div>

<Taskbar/>