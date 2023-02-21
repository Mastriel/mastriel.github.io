import type {Folder, File, FS, FileMetadata} from "./fs";
import {createFs} from "indexeddb-fs";
import {file, folder, path} from "./fs";

const fsdb = createFs({
    databaseVersion: 1,
    objectStoreName: 'files',
    rootDirectoryName: 'root',
    databaseName: 'filesystem',
});

const prependRoot = <T extends File> (f: T) : string => {
    let p = ["root", ...path(f)].join("/")
    if (p.endsWith("/")) p = p.substring(0, p.length-1)
    return p
}

const removeRoot = (fullPath: string) : string => {
    const p = fullPath.split("/").reverse()
    p.pop()

    let path = "/" + p.reverse().join("/")
    if (!path.endsWith("/")) path = path + "/"

    return path
}

export class IndexedDbFileSystem implements FS {

    public readonly exists = async (file: File): Promise<boolean> => {
        return await fsdb.exists(prependRoot(file))
    }

    public readonly copy = async (from: File, to: File): Promise<void> => {
        await fsdb.copyFile(prependRoot(from), prependRoot(to))
    }

    public readonly createFile = async (file: File): Promise<void> => {
        await fsdb.writeFile(prependRoot(file), "")
    }

    public readonly createFolder = async (folder: Folder, recursive: boolean): Promise<void> => {
        await fsdb.createDirectory(prependRoot(folder))
    }

    public readonly getFiles = async (dir: Folder): Promise<readonly File[]> => {
        let files = await fsdb.readDirectory(prependRoot(dir))

        files.files.forEach((it) => console.log(it))
        const ret = [
            ...files.files.map(it => file(removeRoot(it.fullPath))),
            ...files.directories.map(it => folder(removeRoot(it.fullPath)))
        ]
        ret.forEach((it) => console.log(it))
        return ret
    }

    public readonly getMetadata = async (file: File): Promise<FileMetadata> => {
        let details = await fsdb.fileDetails(prependRoot(file))
        return {
            lastModified: new Date(details.createdAt),
            size: async () => {
                let data = await fsdb.readFile<Uint8Array>(prependRoot(file))
                return data.byteLength
            }
        }
    }

    public readonly readBytes = async (file: File): Promise<Uint8Array> => {
        return await fsdb.readFile<Uint8Array>(prependRoot(file))
    }

    public readonly readObject = async <T>(file: File): Promise<T> => {
        return await fsdb.readFile<T>(prependRoot(file))
    }

    public readonly readString = async (file: File): Promise<string> => {
        return await fsdb.readFile<string>(prependRoot(file))
    }

    public readonly writeBytes = async (file: File, content: Uint8Array): Promise<void> => {
        await fsdb.writeFile(prependRoot(file), content)
    }

    public readonly writeObject = async (file: File, object: object): Promise<void> => {
        await fsdb.writeFile(prependRoot(file), object)
    }

    public readonly writeString = async (file: File, content: string): Promise<void> => {
        await fsdb.writeFile(prependRoot(file), content)
    }

    public readonly deleteFile = async (file: File): Promise<void> => {
        return fsdb.removeFile(prependRoot(file))
    }

    public readonly deleteFolder = async (folder: Folder): Promise<void> => {
        await fsdb.removeDirectory(prependRoot(folder))
    }

}