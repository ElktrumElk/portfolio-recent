<template>
  <!-- pointer-events: none prevents this overlay from blocking clicks on your page -->
  <canvas ref="mouseCanvas" class="mouse-trail-canvas"></canvas>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'

const mouseCanvas = ref<HTMLCanvasElement>()
let animationFrameId = 0

interface MouseDust {
  x: number
  y: number
  vx: number // Horizontal velocity
  vy: number // Falling speed (gravity offset)
  alpha: number // Smooth opacity fading
  size: number
}

let dustParticles: MouseDust[] = []

const handleMouseMove = (event: MouseEvent) => {
  if (!mouseCanvas.value) return

  // Get mouse coordinates relative to the canvas bounding box
  const rect = mouseCanvas.value.getBoundingClientRect()

  // FIX: Removed the "* dpr" multiplier here.
  // Canvas handles DPR mapping via context sizing, so raw offsets must stay 1:1 with CSS layout.
  const mouseX = event.clientX - rect.left
  const mouseY = event.clientY - rect.top

  // Drop 4 dust particles behind the cursor on movement
  const spawnCount = 4
  for (let i = 0; i < spawnCount; i++) {
    dustParticles.push({
      x: mouseX,
      y: mouseY,
      vx: (Math.random() - 0.5) * 2.5,
      vy: (Math.random() - 0.3) * 1.5 + 0.5, // Natural downward drift
      alpha: 1.0, // Starts fully visible
      size: Math.random() * 2.5 + 1, // Randomized particle sizes
    })
  }
}

const draw = () => {
  if (!mouseCanvas.value) return
  const ctx = mouseCanvas.value.getContext('2d')
  if (!ctx) return

  // Read internal hardware dimensions
  const width = mouseCanvas.value.width
  const height = mouseCanvas.value.height

  // 1. Maintain complete transparency (No backdrop layers or fills)
  ctx.clearRect(0, 0, width, height)

  // 2. Loop and update the falling dust trail
  const nextDust: MouseDust[] = []

  for (let i = 0; i < dustParticles.length; i++) {
    const p = dustParticles[i]

    // Advance position coordinates based on current speed vectors
    p!.x += p!.vx
    p!.y += p!.vy
    p!.alpha -= 0.02 // Controls how long the trail stays visible

    if (p!.alpha > 0) {
      // Alternates colors between cyan and pure white for a sparkling look
      ctx.fillStyle =
        Math.random() > 0.4 ? `rgba(0, 255, 255, ${p!.alpha})` : `rgba(255, 255, 255, ${p!.alpha})`

      ctx.beginPath()

      // Draw path adjustments
      ctx.arc(p!.x, p!.y, p!.size, 0, Math.PI * 2)
      ctx.fill()

      nextDust.push(p!)
    }
  }

  dustParticles = nextDust
  animationFrameId = requestAnimationFrame(draw)
}

onMounted(() => {
  if (!mouseCanvas.value) return

  const rect = mouseCanvas.value.getBoundingClientRect()
  const dpr = window.devicePixelRatio || 1

  // Handle High-DPI mapping using layout rect variables
  mouseCanvas.value.width = rect.width * dpr
  mouseCanvas.value.height = rect.height * dpr

  // Scale context drawing actions automatically so raw layout variables work perfectly
  const ctx = mouseCanvas.value.getContext('2d')
  if (ctx) {
    ctx.scale(dpr, dpr)
  }

  // FIX: Listen to global window movements so canvas opacity properties don't drop target locks
  window.addEventListener('mousemove', handleMouseMove)

  draw()
})

onBeforeUnmount(() => {
  window.removeEventListener('mousemove', handleMouseMove)
  cancelAnimationFrame(animationFrameId)
})
</script>

<style scoped>
.mouse-trail-canvas {
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999; /* Keeps trail layers floating over all text */
  pointer-events: none; /* FIX: Allows clicks to pass through to buttons under the canvas */
  background: transparent;
  display: block;
}
</style>
