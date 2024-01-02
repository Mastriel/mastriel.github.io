<script lang="ts">

    export let className : string = "text-4xl pt-4 pb-4 pl-2 pr-2"
    export let value : string

    const originalValue = value

    const availableLetters =
        "abcdefghijklmnopqrstuvwxyz1234567890".split("")

    let letters = originalValue.split("")

    let intervalId : number | undefined
    let timeoutId : number | undefined

    let index : number = 0

    let lettersResetIntervals : number[] = []

    const cancelAllResetIntervals = () => {
        lettersResetIntervals.forEach((it) => window.clearInterval(it))
    }

    const resetLetters = () => {
        for (let [i, letter] of letters.entries()) {
            lettersResetIntervals[i] = window.setInterval(() => {
                if (letters[i] == originalValue.split("")[i]) {
                    window.clearInterval(lettersResetIntervals[i])
                    return
                }
                let nextLetter = getNextLetter(letter) ?? availableLetters[0]
                letters[i] = nextLetter
                letter = nextLetter
            }, 20+(Math.random()*10))
        }
    }

    const onHover = (index: number) => {
        cancelAllResetIntervals()
        intervalId = window.setInterval(() => {
            letterFunction(index)
            value = letters.join("")
        }, 3)
        window.clearTimeout(timeoutId)
        timeoutId = undefined
    }

    const letterFunction = (index: number) => {
        let nextLetter = getNextLetter(letters[index])
        if (nextLetter == undefined) {
            letters[index] = availableLetters[0]
            if (index != 0) letterFunction(index-1)
            return
        }
        letters[index] = nextLetter

    }

    const getNextLetter = (letter: string | undefined) => {
        if (letter == undefined) return undefined
        let nextLetterIndex = availableLetters.findIndex(value => value == letter) + 1
        return availableLetters[nextLetterIndex]
    }

    const onUnhover = () => {
        window.clearInterval(intervalId)
        intervalId = undefined

        timeoutId = window.setTimeout(resetLetters, 2000)
    }
</script>

<svelte:options tag="scramble-text"></svelte:options>



<span class={className}>
    {#each letters as letter, i}
            <span on:mouseenter={() => { onHover(i) }}
                  on:mouseleave={onUnhover}>{letter}</span>
    {/each}
</span>
