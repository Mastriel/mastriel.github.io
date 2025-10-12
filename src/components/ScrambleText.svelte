<script lang="ts">

    interface Props {
        class?: string;
        textValue: string;
    }

    const { class: classes = "text-4xl pt-4 pb-4 pl-2 pr-2", textValue: value = $bindable() }: Props = $props();

    const availableLetters =
        "abcdefghijklmnopqrstuvwxyz1234567890!".split("")

    let letters = $state(value.split(""))

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
                if (letters[i] == value.split("")[i]) {
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
            //value = letters.join("")
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

    export {
    	classes,
    	value,
    }
</script>

<svelte:options customElement="scramble-text"></svelte:options>



<span class={classes}>
    {#each letters as letter, i}
            <span onmouseenter={() => { onHover(i) }}
                  onmouseleave={onUnhover}>{letter}</span>
    {/each}
</span>
