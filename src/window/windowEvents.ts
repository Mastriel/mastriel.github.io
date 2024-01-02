import type {Window} from "./window";
import type {Unsubscriber} from "svelte/store";


export type EventFunction<T extends object = {}> = (window: Window, opts: T) => void

export class WindowEventHandler<T extends object = {}> {

    private readonly window : Window
    private listeners : EventFunction<T>[] = []

    constructor(window: Window, private defaultOptions: T = undefined) {
        this.window = window
    }

    public readonly listen = (func: EventFunction<T>) : Unsubscriber => {
        this.listeners.push(func)

        return () => {
            this.listeners = this.listeners.filter((it) => it != func)
        }
    }

    public readonly trigger = (opts: T = undefined) : T => {
        let options = opts ??  Object.assign({}, this.defaultOptions)

        this.listeners.forEach((listener) => {
            listener(this.window, options)
        })
        return options
    }
}
