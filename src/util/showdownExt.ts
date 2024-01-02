import type {
    Converter,
    ShowdownExtension,
} from "showdown";


export function blogExtension() : ShowdownExtension {
    return {
        type: 'output',
        filter: (text: string, converter: Converter) : string => {
            const parser = new DOMParser();
            const html = parser.parseFromString(text, "text/html");
            addClassesToAllChildren(html.documentElement)
            return html.documentElement.outerHTML
        }
    }
}


function addClassesToAllChildren(element: Element) {
    if (element.children.length == 0) return
    for (let child of element.children) {
        child.classList.add("md")
        addClassesToAllChildren(child)
    }
}