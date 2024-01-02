import BlogApp from "./BlogApp.svelte";
import {App} from "../../../app/app";
import type {SvelteComponent} from "svelte";
import {svelteCustomElement} from "./elements/svelteCustomElement";
import ScrambleText from "../../../components/ScrambleText.svelte";
import {type BlogEntry, getBlogEntry} from "./blogEntry";
import BouncingText from "../../../components/BouncingText.svelte";

const defineSvelteCustomElement = (name: string, component: typeof SvelteComponent) => {
    customElements.define(name, svelteCustomElement(component))
}

export class Blog extends App {

    public static readonly entries : BlogEntry[] = []

    private static readonly defineCustomElements = () => {
        defineSvelteCustomElement("m-scrbl", ScrambleText)
        defineSvelteCustomElement("m-bounce", BouncingText)
    }

    public static readonly registerBlogs = async () => {
        this.defineCustomElements()

        let entries = import.meta.glob("./entries/*.post", { as: "raw" })

        for (const entry in entries) {
            let contents = await entries[entry]()
            contents = contents.replaceAll("\r\n", "\n")

            this.entries.push(getBlogEntry(contents))
        }
    }

    constructor() {
        super("Blog", App.mainWindow(BlogApp, 700, 600))
    }
}