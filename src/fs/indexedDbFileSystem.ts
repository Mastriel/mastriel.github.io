import type {Folder, File, FS, FileMetadata} from "./fs";
import {createFs} from "indexeddb-fs";
import {file, folder} from "./fs";

const fsdb = createFs({
    databaseVersion: 1,
    objectStoreName: 'files',
    rootDirectoryName: 'root',
    databaseName: 'filesystem',
});

export class IndexedDbFileSystem implements FS {

    public readonly exists = async (file: File): Promise<boolean> => {
        return await fsdb.exists(file.fullPath)
    }

    public readonly copy = async (from: File, to: File): Promise<void> => {
        await fsdb.copyFile(from.fullPath, to.fullPath)
    }

    public readonly createFile = async (file: File): Promise<void> => {
        await fsdb.writeFile(file.fullPath, "")
    }

    public readonly createFolder = async (folder: Folder, recursive: boolean): Promise<void> => {
        await fsdb.createDirectory(folder.fullPath)
    }

    public readonly getFiles = async (dir: Folder): Promise<readonly File[]> => {
        let files = await fsdb.readDirectory(dir.fullPath)
        return [
            ...files.files.map(it => file(it.fullPath)),
            ...files.directories.map(it => folder(it.fullPath))
        ]
    }

    public readonly getMetadata = async (file: File): Promise<FileMetadata> => {
        let details = await fsdb.fileDetails(file.fullPath)
        return {
            lastModified: new Date(details.createdAt),
            size: async () => {
                let data = await fsdb.readFile<Uint8Array>(file.fullPath)
                return data.byteLength
            }
        }
    }

    public readonly readBytes = async (file: File): Promise<Uint8Array> => {
        return await fsdb.readFile<Uint8Array>(file.fullPath)
    }

    public readonly readObject = async <T>(file: File): Promise<T> => {
        return await fsdb.readFile<T>(file.fullPath)
    }

    public readonly readString = async (file: File): Promise<string> => {
        return await fsdb.readFile<string>(file.fullPath)
    }

    public readonly writeBytes = async (file: File, content: Uint8Array): Promise<void> => {
        await fsdb.writeFile(file.fullPath, content)
    }

    public readonly writeObject = async (file: File, object: object): Promise<void> => {
        await fsdb.writeFile(file.fullPath, object)
    }

    public readonly writeString = async (file: File, content: string): Promise<void> => {
        await fsdb.writeFile(file.fullPath, content)
    }

    public readonly deleteFile = async (file: File): Promise<void> => {
        return fsdb.removeFile(file.fullPath)
    }

    public readonly deleteFolder = async (folder: Folder): Promise<void> => {
        await fsdb.removeDirectory(folder.fullPath)
    }

}