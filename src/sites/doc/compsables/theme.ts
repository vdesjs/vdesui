import { ref, Ref } from "@vue/reactivity"


type ThemeColor = 'white' | 'black'

const themeColor: Ref<ThemeColor> = ref('white')

function toggleTheme() {
    if (themeColor.value == 'white') {
        themeColor.value = 'black'
    } else {
        themeColor.value = 'white'
    }
}

export function useTheme() {

    return {
        themeColor,
        toggleTheme
    }
}
