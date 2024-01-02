import type {SvelteComponent} from "svelte";
import {attr} from "svelte/internal";

export const svelteCustomElement = (component: typeof SvelteComponent) : CustomElementConstructor => {
    return class extends HTMLElement {
        private element: SvelteComponent;

        constructor() {
            super()

            // Create the shadow root.
            const shadowRoot = this.attachShadow({mode: 'open'})

            let attributes = {}
            for (let attribute of this.attributes) {
                attributes[attribute.name] = attribute.value
            }

            // Instantiate the Svelte Component
            this.element = new component({
                // Tell it that it lives in the shadow root
                target: shadowRoot,
                // Pass any props
                props: {
                    ...attributes
                },
            })
        }

        disconnectedCallback(): void {
            // Destroy the Svelte component when this web component gets
            // disconnected. If this web component is expected to be moved
            // in the DOM, then you need to use `connectedCallback()` and
            // set it up again if necessary.
            this.element?.$destroy();
        }
    }
}