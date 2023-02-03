import {OPFSFileSystem} from "./OPFSFileSystem";

export type File = {
    readonly path: readonly string[]
    readonly name: string,
    readonly fullPath: string,
    readonly type: "folder" | "file"
}

export type Folder = File & {
    readonly type: "folder"
}

export function file(absolutePath: String) : File {
    let p = absolutePath.replace("\\", "/")
    if (p.startsWith("/")) p = p.substring(1)
    let path = p.split("/")//.filter((it) => it.length > 0)
    console.log(path.join("/"))

    let name = path[path.length-1]

    return {
        path: path,
        name: name,
        fullPath: path.join("/"),
        type: "file"
    }
}

export function folder(absolutePath: String) : Folder {
    let fi = file(absolutePath)
    return {

        ...<Folder> fi,
        type: "folder"
    }
}


export type FileMetadata = {
    lastModified: Date,
    size: () => Promise<number>
}


export interface FS {
    readString: (file: File) => Promise<string>,
    readBytes: (file: File) => Promise<Uint8Array>,
    readObject: <T extends object>(file: File) => Promise<T>,

    writeObject: (file: File, object: object) => Promise<void>,
    writeString: (file: File, content: string) => Promise<void>,
    writeBytes: (file: File, content: Uint8Array) => Promise<void>,

    createFile: (file: File) => Promise<void>,
    deleteFile: (file: File) => Promise<void>,
    exists: (file: File) => Promise<boolean>,
    createFolder: (folder: Folder, recursive: boolean) => Promise<void>,
    deleteFolder: (folder: Folder) => Promise<void>,
    getFiles: (folder: Folder) => Promise<readonly File[]>,

    getMetadata: (file: File) => Promise<FileMetadata>,
    copy: (from: File, to: File) => Promise<void>
}

export function setFs(newFs: FS) {
    fs = newFs
}

export let fs : FS



