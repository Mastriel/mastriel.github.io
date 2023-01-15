import {Window} from "../window/window";
import {App} from "./app";
import type {Type} from "../util/typeUtils";
import {newPID} from "./pid";
import {ErrorPopup} from "../apps/shared/error/ErrorPopup";


export class Process<AppType extends App = App> {

    public readonly id: number
    public readonly app: AppType
    public mainWindow: Window

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

    public spawnWindow = <T extends Window>(window: T): T => {
        return Window.spawn(window, this)
    }

    public kill = () => {
        for (const window of this.getWindows()) {
            window.close()
        }
        Process.processes = Process.processes.filter(process => process != this)
    }

    public crash = (reason: string) => {
        this.spawnWindow(new ErrorPopup(
            `Fatal Error`,
            `${this.app.name} has crashed:\n${reason}`,
            true
        ))
    }

    public error = (reason: string) => {
        this.spawnWindow(new ErrorPopup(
            `Error`,
            `An error has occurred in ${this.app.name}:\n${reason}\n\n\nhi`,
            false
        ))
    }


    private static processes: Process[] = []

    public static getProcesses = (): Process[] => {
        return [...Process.processes]
    }
    public static spawn = <AppType extends App>(app: Type<AppType>, options?: object): Process<AppType> => {
        let appInstance = App.getAppByType(app)

        let finalOptions = Process.mergeOptions(options, app["defaultOptions"])
        let process = new Process(appInstance, newPID(), finalOptions)

        let window = new Window(300, 300, 400, 400, appInstance.mainWindow)
        process.mainWindow = Window.spawn(window, process)

        return process
    }


    private static mergeOptions(options?: object, defaultOptions?: object) : object {
        return { ...defaultOptions, ...options }
    }

}