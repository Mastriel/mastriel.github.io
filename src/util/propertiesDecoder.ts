

type PropertiesType = {
    [p: string]: string
}


export function decodeFromProperties<T extends PropertiesType = {}>(str: string) : T {
    let lines = str.split("\n")

    let obj = {}
    for (let line in lines) {
        let splitLine = line.split("=", 1)
        if (splitLine.length <= 1) {
            continue
        }
        let [key, value] = splitLine
        obj[key] = value
    }

    return <T> obj
}