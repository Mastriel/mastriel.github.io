export type EnabledControlButtons = {
    close: boolean,
    minimize: boolean,
    maximize: boolean
}

export function defaultControlButtons() : EnabledControlButtons {
    return <EnabledControlButtons> {
        close: true,
        minimize: true,
        maximize: false
    }
}