import { useRerender } from '@/modules/render-vue'

export const [activePage, setActivePage] = useRerender(1)
export const [isBoxShadow, setBoxShadow] = useRerender(false)

export const scrollStart = () => {
  setBoxShadow(true)
}
export const scrollEnd = () => {
  setBoxShadow(false)
}




// COLOR MODE============================================================
export const [isDarkMode, setDarkMode] = useRerender<boolean>(
  window.matchMedia('prefer-color-scheme: dark').matches,
)

export const toggleColorMode = () => {
  setDarkMode(!isDarkMode.value)
  if (isDarkMode.value) {
    document.body.classList.add('light')
    document.body.classList.remove('dark')
  } else {
    document.body.classList.add('dark')
    document.body.classList.remove('light')
  }
  console.log(isDarkMode.value)
}

// Show MENU PANEL ========================
export const [isMenu, setMenu] = useRerender<boolean>(false)
