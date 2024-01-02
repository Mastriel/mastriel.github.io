import type {File, FileMetadata, Folder, FS} from "./fs";
import {file} from "./fs";
import {root} from "postcss";



// maybe when OPFS is a more widely supported feature
// @ts-ignore
export class OPFSFileSystem implements FS {

    public static INSTANCE = new OPFSFileSystem()

    private root : FileSystemDirectoryHandle

    public readonly readString = async (file: File) : Promise<string> => {
        let handle = await this.root.getFileHandle(file.fullPath)
        let fsFile = await handle.getFile()
        return await fsFile.text()
    }

    public readonly readBytes = async (file: File) : Promise<Uint8Array> => {
        let handle = await this.root.getFileHandle(file.fullPath)
        let fsFile = await handle.getFile()
        let buffer = await fsFile.arrayBuffer()
        return new Uint8Array(buffer)
    }

    public readonly readObject = async <T extends object>(file: File) : Promise<T> => {
        let str = await this.readString(file)
        return <T> JSON.parse(str)
    }

    public readonly getFiles = async (folder: Folder) : Promise<readonly File[]> => {
        let handle = await this.root.getDirectoryHandle(folder.fullPath)
        let files = await handle.resolve(this.root)

        return files.map((it) => file(it))
    }


    public readonly writeString = async (file: File, content: string) => {
        let handle = await this.root.getFileHandle(file.fullPath, { create: true })
        let f = await handle.getFile()
    }

    private constructor() {
    }

    public readonly init = async () : Promise<this> => {
        let allowed = await navigator.storage.persist()
        if (!allowed) {
            console.log("Persist data denied")
        } else {
            console.log("Persistent data allowed")
        }
        this.root = await navigator.storage.getDirectory()

        return this
    }
}