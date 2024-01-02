import {Window} from "../window/window";
import {App} from "./app";
import type {Type} from "../util/typeUtils";
import {newPID} from "./pid";
import {ErrorPopup} from "../apps/shared/error/ErrorPopup";
import type {Writable} from "svelte/store";
import {get, writable} from "svelte/store";


export class Process<AppType extends App = App> {

    public readonly id: number
    public readonly app: AppType
    public mainWindow: Window

    public lastActiveWindow: Window

    public readonly options: object

    private constructor(app: AppType, id: number, options?: object) {
        this.id = id
        this.app = app
        if (options != undefined) this.options = options
    }

    public getWindows(): Window[] {
        return Window.getWindows().filter((window) => window.process == this) ?? []
    }

    public getImportantWindows(): Window[] {
        return this.getWindows().filter((window) => window.important) ?? []
    }

    public focus() {
        Window.activeWindow = this.mainWindow;
    }

    public spawnWindow = <T extends Window>(window: T): T => {
        return Window.spawn(window, this)
    }

    public kill = () => {
        for (const window of this.getWindows()) {
            window.close()
        }
        Process.processesStore.update(
            processes => processes.filter(
                (it) => it != this
            )
        )
    }

    public crash = (reason: string, spawner?: Window) => {
        this.spawnWindow(new ErrorPopup(
            `Fatal Error`,
            `${this.app.name} has crashed:\n${reason}`,
            spawner,
            true
        ))
    }

    public error = (reason: string, spawner?: Window) => {
        this.spawnWindow(new ErrorPopup(
            `Error`,
            `An error has occurred in ${this.app.name}:\n${reason}\n\n\nhi`,
            spawner,
            false
        ))
    }


    public static processesStore: Writable<readonly Process[]> = writable([])

    public static getProcesses = (): readonly Process[] => {
        return get(Process.processesStore)
    }
    public static spawn = <AppType extends App>(app: Type<AppType>, options?: object): Process<AppType> => {
        let appInstance = App.getAppByType(app)

        let finalOptions = Process.mergeOptions(options, app["defaultOptions"])
        let process = new Process(appInstance, newPID(), finalOptions)

        Process.processesStore.update((it) => [...it, process])

        let window = appInstance.mainWindow()

        window.x = (screen.width / 2) - (window.width / 2)
        window.y = (screen.height / 2) - (window.height / 2) - 100

        process.mainWindow = Window.spawn(window, process)
        process.lastActiveWindow = process.mainWindow


        console.log(window.height)


        return process
    }


    private static mergeOptions(options?: object, defaultOptions?: object) : object {
        return { ...defaultOptions, ...options }
    }

}