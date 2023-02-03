export function randomElement<T>(array: T[]) : T {
    return array[Math.floor((Math.random()*array.length))]
}

export function randomNumber(max: number) : number {
    return Math.floor((Math.random()*max))
}