import {decodeFromProperties} from "../../../util/propertiesDecoder";
import {Converter as MDConverter} from "showdown";
import {blogExtension} from "../../../util/showdownExt";


export type BlogMetadata = {
    title: string,
    author: string,
    date: string
}


export type BlogEntry = BlogMetadata & {
    htmlContents: string
}


const METADATA_SPLITTER = "\n;----;\n"
const mdConverter = new MDConverter({
    extensions: [blogExtension]
})

export function getBlogEntry(fileContents: string) : BlogEntry {
    let splitContents = fileContents.split(METADATA_SPLITTER)
    console.log(splitContents)

    if (splitContents.length <= 1) {
        throw "Invalid .post format. Make sure there is a metadata section at the top."
    }
    let [metadataProps, contentsMd] = splitContents

    let metadata = decodeFromProperties<BlogMetadata>(metadataProps)

    let htmlContents = mdConverter.makeHtml(contentsMd)

    return {
        ...metadata,
        htmlContents
    }
}