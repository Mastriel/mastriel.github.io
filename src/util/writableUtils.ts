import type {Subscriber, Unsubscriber, Updater, Writable} from "svelte/store";
import {writable} from "svelte/store";


export interface Fetchable<T> extends Writable<T> {
    get: () => T
}

export function fetchable<T>(value: T | undefined = undefined) : Fetchable<T> {
    let store = writable<T>(value)

    let fetchable = {
        cachedValue: <T | undefined> value,
        set(value: T) {
            fetchable.cachedValue = value
            store.set(value)
        },
        subscribe: store.subscribe,
        update(updater: Updater<T>) {
            let updatedValue = updater(fetchable.cachedValue)
            fetchable.cachedValue = updatedValue
            store.set(updatedValue)
        },
        get: () => {
            return fetchable.cachedValue
        }
    }
    return fetchable
}