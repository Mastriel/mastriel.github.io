import {Window} from "../../../window/window";
import FileDialogWindow from "./FileDialogWindow.svelte";
import type {File} from "../../../fs/fs";

export class FileDialog extends Window {

    private readonly promise : Promise<File>
    private resolve : (File) => void
    private reject : (string) => void

    constructor(public spawner: Window, public extensionMask?: string[]) {
        super(500, 500, 500, 400, FileDialogWindow);
        this.promise = new Promise<File>((resolve, reject) => {
            this.resolve = resolve
            this.reject = reject
        })
    }

    public returnFile = (file: File) => this.resolve(file)
    public returnNone = () => this.reject("process exit")

    public getFile = async () : Promise<File> => {
        return await this.promise
    }
}