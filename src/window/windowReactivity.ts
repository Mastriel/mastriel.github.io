import {get, writable, type Writable} from "svelte/store";
import type {EnabledControlButtons} from "./controlButtons";
import {defaultControlButtons} from "./controlButtons";
import {type Fetchable, fetchable} from "../util/writableUtils";


export abstract class WindowReactivity {

    public readonly stores : WindowStores

    public get x() { return this.stores.x.get() }
    public set x(value) { this.stores.x.set(value) }

    public get y() { return this.stores.y.get() }
    public set y(value) { this.stores.y.set(value) }

    public get zIndex() { return this.stores.zIndex.get() }
    public set zIndex(value) { this.stores.zIndex.set(value) }

    public get width() { return this.stores.width.get() }
    public set width(value) { this.stores.width.set(value) }

    public get height() { return this.stores.height.get() }
    public set height(value) { this.stores.height.set(value) }

    public get title() { return this.stores.title.get() }
    public set title(value) { this.stores.title.set(value) }

    public get classes() { return this.stores.classes.get() }
    public set classes(value) { this.stores.classes.set(value) }

    public get style() { return this.stores.style.get() }
    public set style(value) { this.stores.style.set(value) }

    public get resizable() { return this.stores.resizable.get() }
    public set resizable(value) { this.stores.resizable.set(value) }

    public get important() { return this.stores.important.get() }
    public set important(value) { this.stores.important.set(value) }

    public get isVisible() { return this.stores.isVisible.get() }
    public set isVisible(value) { this.stores.isVisible.set(value) }

    public get icon() { return this.stores.icon.get() }
    public set icon(value) { this.stores.icon.set(value) }

    public get controlButtons() { return this.stores.controlButtons.get() }
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
    public readonly classes = fetchable<string>("")
    public readonly style = fetchable<string>("")
    public readonly title = fetchable<string>()
    public readonly icon = fetchable<string>()

    public readonly resizable = fetchable(false)
    public readonly important = fetchable(false)
    public readonly isVisible = fetchable(true)
    public readonly controlButtons = fetchable(defaultControlButtons())

    public readonly height : Fetchable<number>
    public readonly width : Fetchable<number>

    public readonly x : Fetchable<number>
    public readonly y : Fetchable<number>
    public readonly zIndex : Fetchable<number> = fetchable(0)

    constructor(
        initialX: number,
        initialY: number,
        initialWidth: number,
        initialHeight: number
    ) {
        this.x = fetchable(initialX)
        this.y = fetchable(initialY)
        this.width = fetchable(initialWidth)
        this.height = fetchable(initialHeight)
    }
}