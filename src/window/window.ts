import type {Process} from "../app/process";
import type {SvelteComponent} from "svelte";
import type {Writable} from "svelte/store";
import {get, writable} from "svelte/store";
import {WindowReactivity} from "./windowReactivity";

export class Window extends WindowReactivity {

    public static readonly windowsStore : Writable<readonly Window[]> = writable([])
    public static windows : readonly Window[]

    public static readonly activeWindowStore : Writable<Window> = writable(undefined)
    public static get activeWindow() : Window { return get(this.activeWindowStore) }
    public static set activeWindow(value) { this.activeWindowStore.set(value) }

    public static getWindows() : readonly Window[] {
        return [...this.windows] as readonly Window[]
    }

    private _process : Process | undefined = undefined
    private _isVisible: boolean = true

    public get process() : Process { return this._process! }
    public get isAlive() : boolean { return this._process != undefined }
    public get isActive() : boolean { return Window.activeWindow == this }
    public get isVisible() : boolean { return this._isVisible }
    public set isVisible(value: boolean) { this._isVisible = value }

    public hide() { this.isVisible = false }
    public unhide() { this.isVisible = true }

    public close() {
        let windows = Window.windows.filter(window => window != this)
        Window.windowsStore.set(windows)
    }


    public constructor(
        initialX: number,
        initialY: number,
        initialWidth: number,
        initialHeight: number,
        public readonly component: typeof SvelteComponent
    ) {
        super(initialX, initialY, initialWidth, initialHeight)

    }

    public static spawn = <T extends Window>(window: T, process: Process) : T => {
        this.windowsStore.set([...this.windows, window])
        window._process = process


        window.title = window.process.app.name
        return window
    }

    static {
        this.windowsStore.subscribe((windows) => {
            this.windows = windows
        })
    }
}