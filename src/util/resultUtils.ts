



export type Result<T, E = Error> =
    | { ok: true; value: T }
    | { ok: false; error: E };


export function wrapSuccess<T>(value: T) : Result<T, any> {
    return {
        ok: true,
        value: value
    }
}