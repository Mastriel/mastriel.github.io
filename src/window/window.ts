import type {Process} from "../app/process";
import type {SvelteComponent} from "svelte";
import type {Writable} from "svelte/store";
import {get, writable} from "svelte/store";
import {WindowReactivity} from "./windowReactivity";
import {WindowEventHandler} from "./windowEvents";
import type {Fetchable} from "../util/writableUtils";
import {fetchable} from "../util/writableUtils";
import type {App} from "../app/app";

export class Window extends WindowReactivity {

    public static readonly windowsStore : Fetchable<readonly Window[]> = fetchable([])
    public static windows : readonly Window[]

    public static readonly activeWindowStore : Fetchable<Window> = fetchable(undefined)
    public static get activeWindow() : Window { return this.activeWindowStore.get() }
    public static set activeWindow(window: Window) {
        if (window != this.activeWindow) {
            this.activeWindow?.onUnfocus?.trigger()
        }

        if (window != undefined) {
            window.process.lastActiveWindow = window
            window.onFocus.trigger()
        }

        this.activeWindowStore.set(window);
    }

    public static getWindows() : readonly Window[] {
        return [...this.windows] as readonly Window[]
    }

    public static spawn = <T extends Window>(window: T, process: Process) : T => {
        this.windowsStore.set([...this.windows, window])
        window._process = process

        if (window.title == undefined) {
            window.title = window.process.app.name
        }
        window.onSpawn.trigger()
        return window
    }

    static {
        this.windowsStore.subscribe((windows) => {
            this.windows = windows
        })
    }

    public constructor(
        initialX: number,
        initialY: number,
        initialWidth: number,
        initialHeight: number,
        public readonly component: typeof SvelteComponent
    ) {
        let [x, y] = [initialX, initialY];
        while (true) {
            if (Window.windows.find((it) => it.x == x && it.y == y) == undefined) break
            console.log("addition")
            x += 24
            y += 24
        }
        super(x, y, initialWidth, initialHeight)
    }

    private _process : Process | undefined = undefined

    public windowElement : HTMLDivElement

    public get process() : Process { return this._process! }
    public get isAlive() : boolean { return this._process != undefined }
    public get isActive() : boolean { return Window.activeWindow == this }

    public override get isVisible() { return get(this.stores.isVisible) }

    // THIS WILL NOT INSTANTLY UPDATE!! The animation must complete before this updates.
    public override set isVisible(value) {
        if (value == false) {
            this.playCloseAnimation()
            this.onPopInEnd(() => {
                this.stores.isVisible.set(false)
                if (Window.activeWindow == this) Window.activeWindow = undefined
            })

        } else {
            this.stores.isVisible.set(true)
        }
    }

    public hide() { this.isVisible = false }

    public unhide() { this.isVisible = true }

    public close() : boolean {
        const { cancelled } = this.closeRequest.trigger()
        if (cancelled) {
            return false
        }
        this.playCloseAnimation()

        this.onPopInEnd(this.kill)
        return true
    }

    private onPopInEnd = (fun: () => void) => {
        let window = this.windowElement
        let listener = (animation: AnimationEvent) => {
            if (animation.animationName == "pop-in") {
                window.removeEventListener("animationend", listener)
                fun()
                window.style.animationDirection = "normal"
            }
        }

        this.windowElement.addEventListener("animationend", listener)
    }

    private playCloseAnimation = () => {
        this.windowElement.classList.remove("window-spawn")
        this.windowElement.style.animationDirection = "reverse"
        this.windowElement.offsetWidth
        this.windowElement.classList.add("window-spawn")
    }

    public kill = () => {
        this.closeEvent.trigger()
        let windows = Window.windows.filter(window => window != this)
        Window.windowsStore.set(windows)
        if (this.process.getWindows().length == 0) {
            this.process.kill()
        }
    }

    public readonly dragStart = new WindowEventHandler(this)
    public readonly dragStop = new WindowEventHandler(this)

    public readonly onFocus = new WindowEventHandler(this)
    public readonly onUnfocus = new WindowEventHandler(this)

    /**
     * Triggered directly before this window is removed from {@link Window.windows}
     */
    public readonly closeEvent = new WindowEventHandler(this)

    /**
     * Triggered directly before this window is removed from {@link Window.windows}
     */
    public readonly closeRequest = new WindowEventHandler(this, { cancelled: false })

    public readonly onSpawn = new WindowEventHandler(this)
}