<script lang="ts">
    import WindowContainer from "./window/WindowContainer.svelte";
    import Windows from "./window/Windows.svelte";
    import mastrielIcon from "./assets/mastrielIcon.svg";
    import Taskbar from "./taskbar/Taskbar.svelte";
</script>

<div class="flex items-center justify-center h-screen w-screen absolute">
    <img src={mastrielIcon} alt="Site icon" height={256} width={256} class="drop-shadow-3xl">
</div>

<div class="absolute">
    <Windows/>
</div>

<Taskbar/>