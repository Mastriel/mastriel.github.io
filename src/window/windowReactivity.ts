import {get, writable, type Writable} from "svelte/store";
import type {EnabledControlButtons} from "./controlButtons";
import {defaultControlButtons} from "./controlButtons";


export abstract class WindowReactivity {

    public readonly stores : WindowStores

    public get x() { return get(this.stores.x) }
    public set x(value) { this.stores.x.set(value) }

    public get y() { return get(this.stores.y) }
    public set y(value) { this.stores.y.set(value) }

    public get width() { return get(this.stores.width) }
    public set width(value) { this.stores.width.set(value) }

    public get height() { return get(this.stores.height) }
    public set height(value) { this.stores.height.set(value) }

    public get title() { return get(this.stores.title) }
    public set title(value) { this.stores.title.set(value) }

    public get classes() { return get(this.stores.classes) }
    public set classes(value) { this.stores.classes.set(value) }

    public get style() { return get(this.stores.style) }
    public set style(value) { this.stores.style.set(value) }

    public get resizable() { return get(this.stores.resizable) }
    public set resizable(value) { this.stores.resizable.set(value) }

    public get important() { return get(this.stores.important) }
    public set important(value) { this.stores.important.set(value) }

    public get icon() { return get(this.stores.icon) }
    public set icon(value) { this.stores.icon.set(value) }

    public get controlButtons() { return get(this.stores.controlButtons) }
    public set controlButtons(value) { this.stores.controlButtons.set(value) }

    protected constructor(
        initialX: number,
        initialY: number,
        initialWidth: number,
        initialHeight: number
    ) {
        this.stores = new WindowStores(
            initialX,
            initialY,
            initialWidth,
            initialHeight
        )
    }
}

class WindowStores {
    public readonly classes = writable<string>("")
    public readonly style = writable<string>("")
    public readonly title = writable<string>()
    public readonly icon = writable<string>()

    public readonly resizable : Writable<boolean> = writable(false)
    public readonly important : Writable<boolean> = writable(false)
    public readonly controlButtons : Writable<EnabledControlButtons> = writable(defaultControlButtons())

    public readonly height : Writable<number>
    public readonly width : Writable<number>

    public readonly y : Writable<number>
    public readonly x : Writable<number>

    constructor(
        initialX: number,
        initialY: number,
        initialWidth: number,
        initialHeight: number
    ) {
        this.x = writable(initialX)
        this.y = writable(initialY)
        this.width = writable(initialWidth)
        this.height = writable(initialHeight)
    }
}