import type {SvelteComponent} from "svelte";
import type {Type} from "../util/typeUtils";
import mastrielIcon from "../assets/mastrielIcon.svg"
import {Window} from "../window/window";
import type {EventFunction} from "../window/windowEvents";

export abstract class App {

    private static registeredApps: App[] = []

    /**
     * Register an app to be able to be instanced and used.
     *
     * @param app The app to register.
     */
    static readonly registerApp = (app: App) => {
        App.registeredApps.push(app)
    }

    /**
     *
     * @param name The name of the app that's being searched for.
     * @return An App if found, otherwise undefined.
     */
    static readonly getApp = (name: string): App | undefined => {
        return App.registeredApps.find((app) => app.name == name)
    }

    /**
     * @return An array of all apps. Changing this array does not modify the apps that are currently registered.
     */
    static readonly getAllApps = (): App[] => {
        return [...App.registeredApps]
    }

    /**
     * @param type The type of the app.
     * @return The App if available, otherwise an error is thrown.
     */
    static readonly getAppByType = <AppType extends App>(type: Type<AppType>): AppType => {
        let app: App | undefined = App.registeredApps.find((app) => app instanceof type)
        if (app == undefined) {
            throw new Error("Invalid app specified. Is it registered?")
        }
        return app as AppType
    }


    protected constructor(
        public readonly name: string,
        public readonly mainWindow: () => Window,
        public readonly icon: string = mastrielIcon,
    ) {
    }


    public static readonly mainWindow = (
        component: typeof SvelteComponent,
        width: number,
        height: number,
        spawnCallback: EventFunction = undefined
    ): () => Window => {
        return () => {
            let window = new Window(400, 400, width, height, component)

            if (spawnCallback) window.onSpawn.listen(spawnCallback)
            return window
        }
    }
}