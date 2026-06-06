import { useRerender } from '@/modules/render-vue'

export const [activePage, setActivePage] = useRerender(1)
export const [isBoxShadow, setBoxShadow] = useRerender(false)

export const scrollStart = () => {
  setBoxShadow(true)
}
export const scrollEnd = () => {
  setBoxShadow(false)
}

const hadnleElement = (e: IntersectionObserverEntry[]) => {
  const deviceWidth = window.screen.width
  if (deviceWidth > 800) {
    const obj = e[0]?.target as HTMLElement
    obj.style.opacity = '0'
    obj.style.transform = 'scale(.9)'
    obj.style.transition = 'opacity 1s ease, transform 1s ease'
    obj.style.transform = 'scale(1)'

    if (e[0]?.isIntersecting) {
      requestAnimationFrame(() => {
        obj.style.opacity = '1'
        obj.scrollIntoView(true)
      })
    } else {
      obj.style.opacity = '0'
      obj.style.transform = 'scale(.9)'
    }
  }
}

const observer1 = new IntersectionObserver((e) => hadnleElement(e), { threshold: 0 })

export const handleObserve = () => {
  const obj = document.getElementById('skill')
  const project = document.getElementById('project')
  const review = document.getElementById('review')
  const about = document.getElementById('about')
  const comment = document.getElementById('comments')

  observer1.observe(obj as Element)
  observer1.observe(project as Element)
  observer1.observe(review as Element)
  observer1.observe(about as Element)
  observer1.observe(comment as Element)
}
