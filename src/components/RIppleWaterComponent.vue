<template>
  <!-- Active fixed viewport layer that never intercepts scrolling or native click events -->
  <div class="global-water-ripple-overlay">
    <canvas ref="rippleCanvas" class="water-ripple-canvas"></canvas>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'

const rippleCanvas = ref<HTMLCanvasElement>()
let animationFrameId = 0

interface WaterRipple {
  x: number
  y: number
  radius: number
  maxRadius: number
  alpha: number
  speed: number
}

let ripples: WaterRipple[] = []
let lastMouseX = 0
let lastMouseY = 0

// Tracking variable to check if a pointer button or finger is actively held down
let isPressing = false

// Helper function to extract exact X/Y coordinates regardless of Mouse vs Touch events
const getPointerCoordinates = (event: MouseEvent | TouchEvent, rect: DOMRect) => {
  if ('touches' in event) {
    // If it's a touch event, read the first active finger contact vector
    if (event.touches.length === 0) return { x: lastMouseX, y: lastMouseY }
    return {
      x: event.touches[0].clientX - rect.left,
      y: event.touches[0].clientY - rect.top,
    }
  } else {
    // Otherwise, parse standard cursor layout values
    return {
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    }
  }
}

// Handler when user presses down or touches the screen
const handlePointerDown = (event: MouseEvent | TouchEvent) => {
  isPressing = true

  const canvasElement = rippleCanvas.value!
  const rect = canvasElement.getBoundingClientRect()
  const { x, y } = getPointerCoordinates(event, rect)

  // Spawn an immediate ripple right at the contact point on initial press
  ripples.push({
    x,
    y,
    radius: 0,
    maxRadius: 400,
    alpha: 1.0,
    speed: 4.5,
  })

  lastMouseX = x
  lastMouseY = y
}

// Handler when user moves their cursor/finger across the canvas
const handlePointerMove = (event: MouseEvent | TouchEvent) => {
  // Exit early if the user is moving without holding down
  if (!isPressing) return

  const canvasElement = rippleCanvas.value!
  const rect = canvasElement.getBoundingClientRect()
  const { x, y } = getPointerCoordinates(event, rect)

  const distance = Math.hypot(x - lastMouseX, y - lastMouseY)

  // Dragging spawns continuous trailing waves if moved past threshold
  if (distance > 20) {
    ripples.push({
      x,
      y,
      radius: 0,
      maxRadius: 400,
      alpha: 1.0,
      speed: 4.5,
    })
    lastMouseX = x
    lastMouseY = y
  }
}

// Handler when user releases the mouse button or lifts their finger
const handlePointerUp = () => {
  isPressing = false
}

const draw = () => {
  const canvasElement = rippleCanvas.value!
  const ctx = canvasElement.getContext('2d')!

  const width = canvasElement.width
  const height = canvasElement.height

  ctx.clearRect(0, 0, width, height)

  const nextRipples: WaterRipple[] = []

  for (let i = 0; i < ripples.length; i++) {
    const r = ripples[i]

    r!.radius += r!.speed
    r!.alpha -= 0.012

    if (r!.radius < r!.maxRadius && r!.alpha > 0) {
      ctx.lineWidth = 6 * r!.alpha
      ctx.lineCap = 'round'

      // Ring A: Highlight layer
      ctx.strokeStyle = `rgba(255, 255, 255, ${r!.alpha * 0.25})`
      ctx.beginPath()
      ctx.arc(r!.x, r!.y, r!.radius, 0, Math.PI * 2)
      ctx.stroke()

      // Ring B: Deep shadow layer
      ctx.lineWidth = 3 * r!.alpha
      ctx.strokeStyle = `rgba(0, 180, 255, ${r!.alpha * 0.15})`
      ctx.beginPath()
      ctx.arc(r!.x + 2, r!.y + 2, r!.radius - 1, 0, Math.PI * 2)
      ctx.stroke()

      nextRipples.push(r)
    }
  }

  ripples = nextRipples
  animationFrameId = requestAnimationFrame(draw)
}

onMounted(() => {
  const canvasElement = rippleCanvas.value!
  const rect = canvasElement.getBoundingClientRect()
  const dpr = window.devicePixelRatio || 1

  canvasElement.width = rect.width * dpr
  canvasElement.height = rect.height * dpr
  canvasElement.getContext('2d')!.scale(dpr, dpr)

  // Global mouse event tracking bindings
  window.addEventListener('mousedown', handlePointerDown)
  window.addEventListener('mousemove', handlePointerMove)
  window.addEventListener('mouseup', handlePointerUp)

  // Global touch event tracking bindings (for mobile devices)
  window.addEventListener('touchstart', handlePointerDown)
  window.addEventListener('touchmove', handlePointerMove)
  window.addEventListener('touchend', handlePointerUp)

  // Ambient automatic baseline water droplets loop
  setInterval(() => {
    if (ripples.length < 2) {
      ripples.push({
        x: Math.random() * rect.width,
        y: Math.random() * rect.height,
        radius: 0,
        maxRadius: Math.random() * 200 + 200,
        alpha: 0.8,
        speed: 2.0,
      })
    }
  }, 3500)

  draw()
})

onBeforeUnmount(() => {
  // Clear event hooks to prevent browser storage leak exceptions
  window.removeEventListener('mousedown', handlePointerDown)
  window.removeEventListener('mousemove', handlePointerMove)
  window.removeEventListener('mouseup', handlePointerUp)

  window.removeEventListener('touchstart', handlePointerDown)
  window.removeEventListener('touchmove', handlePointerMove)
  window.removeEventListener('touchend', handlePointerUp)

  cancelAnimationFrame(animationFrameId)
})
</script>

<style scoped>
.global-water-ripple-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 9999;
  pointer-events: none; /* Completely transparent to scrolling interactions */
  background: transparent;
  overflow: hidden;
}

.water-ripple-canvas {
  width: 100%;
  height: 100%;
  display: block;
  pointer-events: none; /* Mouse wheel events filter down smoothly without blocking elements */
  mix-blend-mode: overlay;
}
</style>
