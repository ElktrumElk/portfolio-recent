<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'

const canvasRef = ref<HTMLCanvasElement>()
let animFrameId: number
let ctx: CanvasRenderingContext2D | null = null

let width = 0
let height = 0
let scrollProgress = 0
let mouseX = 0
let mouseY = 0
let currentRotY = 0
let currentRotX = 0
let time = 0
let frameSkip = 0

const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent)
const LAT_LINES = isMobile ? 12 : 18
const LON_LINES = isMobile ? 16 : 26
const RATIO = isMobile ? 0.22 : 0.28
const DOTS_SKIP = isMobile ? 2 : 1

interface Spider3D {
  theta: number
  phi: number
  targetTheta: number
  targetPhi: number
  moveSpeed: number
  bodyR: number
  hideAlpha: number
}

const spider: Spider3D = {
  theta: Math.PI / 2,
  phi: 0,
  targetTheta: Math.PI / 3,
  targetPhi: Math.PI / 4,
  moveSpeed: 0.02,
  bodyR: 10,
  hideAlpha: 1,
}

function getColors() {
  const isDark =
    document.body.classList.contains('dark') ||
    (!document.body.classList.contains('light') &&
      window.matchMedia('(prefers-color-scheme: dark)').matches)
  return {
    grid: isDark ? '120, 210, 255' : '70, 120, 255',
    glow: isDark ? '80, 190, 255' : '50, 100, 255',
  }
}

function project(theta: number, phi: number): [number, number, number] {
  const base = Math.min(width, height) * RATIO
  const pulse = 1 + Math.sin(time * 0.015) * 0.015
  const r = base * pulse

  let x = r * Math.sin(theta) * Math.cos(phi)
  let y = r * Math.cos(theta)
  let z = r * Math.sin(theta) * Math.sin(phi)

  const cosY = Math.cos(currentRotY)
  const sinY = Math.sin(currentRotY)
  const x1 = x * cosY - z * sinY
  const z1 = x * sinY + z * cosY
  const y1 = y

  const cosX = Math.cos(currentRotX)
  const sinX = Math.sin(currentRotX)
  const y2 = y1 * cosX - z1 * sinX
  const z2 = y1 * sinX + z1 * cosX
  const x2 = x1

  return [width / 2 + x2, height / 2 - y2, z2]
}

function getRadius(): number {
  return Math.min(width, height) * RATIO * (1 + Math.sin(time * 0.015) * 0.015)
}

function pickNewTarget() {
  spider.targetTheta = Math.random() * Math.PI
  spider.targetPhi = Math.random() * Math.PI * 2
  spider.moveSpeed = 0.015 + Math.random() * 0.02
}

function drawSpider() {
  const [sx, sy, sz] = project(spider.theta, spider.phi)
  const r = getRadius()
  if (sz < -r * 0.5 || spider.hideAlpha < 0.05) return

  const depthFactor = Math.max(0.3, (sz + r) / (2 * r))
  const alpha = spider.hideAlpha * depthFactor

  const dTheta = spider.targetTheta - spider.theta
  const dPhi = spider.targetPhi - spider.phi
  const mag = Math.hypot(dTheta, dPhi)
  let heading = 0
  if (mag > 0.001) {
    const [nx, ny] = project(spider.theta + (dTheta / mag) * 0.01, spider.phi + (dPhi / mag) * 0.01)
    heading = Math.atan2(ny - sy, nx - sx)
  }

  ctx!.save()
  ctx!.globalAlpha = alpha
  ctx!.translate(sx, sy)
  ctx!.rotate(heading)

  const scale = 0.6 + 0.4 * depthFactor
  ctx!.scale(scale, scale)

  ctx!.strokeStyle = '#00ffff'
  ctx!.lineWidth = 1.5
  ctx!.shadowColor = '#00ffff'
  ctx!.shadowBlur = 3
  ctx!.fillStyle = '#111116'
  ctx!.beginPath()
  ctx!.arc(0, 0, spider.bodyR, 0, Math.PI * 2)
  ctx!.fill()
  ctx!.stroke()
  ctx!.shadowBlur = 0

  ctx!.fillStyle = '#0055ff'
  ctx!.fillRect(-3, -3, 6, 6)
  ctx!.fillStyle = '#ffffff'
  ctx!.fillRect(-1, -1, 2, 2)

  ctx!.fillStyle = '#00ffff'
  ctx!.beginPath()
  ctx!.arc(spider.bodyR - 1.5, -2.5, 1.2, 0, Math.PI * 2)
  ctx!.arc(spider.bodyR - 1.5, 2.5, 1.2, 0, Math.PI * 2)
  ctx!.fill()

  const legAngles = [-2, -1.2, -0.5, 0.5, 1.2, 2]
  const legLen = spider.bodyR * 2
  const legPhase = time * 0.05

  for (let i = 0; i < legAngles.length; i++) {
    const a = legAngles[i]!
    const lift = Math.sin(legPhase + i * 1.5) * 0.3 + 0.5
    const fx = Math.cos(a) * legLen
    const fy = Math.sin(a) * legLen + lift * 2.5
    const kx = Math.cos(a * 0.6) * legLen * 0.5
    const ky = Math.sin(a * 0.6) * legLen * 0.5 - lift * 3.5
    ctx!.strokeStyle = '#0055ff'
    ctx!.lineWidth = 1.2
    ctx!.beginPath()
    ctx!.moveTo(0, 0)
    ctx!.lineTo(kx, ky)
    ctx!.lineTo(fx, fy)
    ctx!.stroke()
    ctx!.fillStyle = '#00ffff'
    ctx!.beginPath()
    ctx!.arc(fx, fy, 1.5, 0, Math.PI * 2)
    ctx!.fill()
  }

  ctx!.restore()
}

function draw() {
  if (!ctx) {
    animFrameId = requestAnimationFrame(draw)
    return
  }

  if (isMobile) {
    frameSkip++
    if (frameSkip < 2) {
      animFrameId = requestAnimationFrame(draw)
      return
    }
    frameSkip = 0
  }

  const container = document.querySelector<HTMLElement>('.home, .project, .contact')
  if (container) {
    const { scrollTop, scrollHeight, clientHeight } = container
    const maxScroll = scrollHeight - clientHeight
    scrollProgress = maxScroll > 0 ? scrollTop / maxScroll : 0
  }

  const idleRotation = time * 0.002
  const targetRotY = scrollProgress * Math.PI * 6 + idleRotation + mouseX * 0.3
  const targetRotX = scrollProgress * Math.PI * 0.8 - mouseY * 0.2

  const smoothFactor = 0.06
  currentRotY += (targetRotY - currentRotY) * smoothFactor
  currentRotX += (targetRotX - currentRotX) * smoothFactor

  time += 1

  const dpr = window.devicePixelRatio || 1
  ctx.clearRect(0, 0, width, height)

  const cx = width / 2
  const cy = height / 2
  const r = getRadius()
  const { grid, glow } = getColors()

  const og = ctx.createRadialGradient(cx, cy, r * 0.8, cx, cy, r * 2.2)
  og.addColorStop(0, `rgba(${glow}, 0.08)`)
  og.addColorStop(0.5, `rgba(${glow}, 0.03)`)
  og.addColorStop(1, `rgba(${glow}, 0)`)
  ctx.beginPath()
  ctx.arc(cx, cy, r * 2.2, 0, Math.PI * 2)
  ctx.fillStyle = og
  ctx.fill()

  const ig = ctx.createRadialGradient(cx, cy, 0, cx, cy, r)
  ig.addColorStop(0, `rgba(${glow}, 0.04)`)
  ig.addColorStop(0.5, `rgba(${glow}, 0.02)`)
  ig.addColorStop(1, `rgba(${glow}, 0)`)
  ctx.beginPath()
  ctx.arc(cx, cy, r, 0, Math.PI * 2)
  ctx.fillStyle = ig
  ctx.fill()

  for (let i = 0; i < LON_LINES; i++) {
    const phi = (i / LON_LINES) * Math.PI * 2
    ctx.beginPath()
    for (let j = 0; j <= 40; j++) {
      const theta = (j / 40) * Math.PI
      const [px, py] = project(theta, phi)
      if (j === 0) ctx.moveTo(px, py)
      else ctx.lineTo(px, py)
    }
    const depth = (Math.cos(phi - currentRotY) + 1) / 2
    ctx.strokeStyle = `rgba(${grid}, ${0.06 + 0.35 * depth})`
    ctx.lineWidth = 0.7
    ctx.stroke()
  }

  for (let i = 1; i < LAT_LINES; i++) {
    const theta = (i / LAT_LINES) * Math.PI
    ctx.beginPath()
    for (let j = 0; j <= 60; j++) {
      const phi = (j / 60) * Math.PI * 2
      const [px, py] = project(theta, phi)
      if (j === 0) ctx.moveTo(px, py)
      else ctx.lineTo(px, py)
    }
    ctx.closePath()
    const latFactor = 1 - Math.abs(i / LAT_LINES - 0.5) * 2
    ctx.strokeStyle = `rgba(${grid}, ${0.08 + 0.3 * latFactor})`
    ctx.lineWidth = 0.7
    ctx.stroke()
  }

  ctx.beginPath()
  ctx.arc(cx, cy, r, 0, Math.PI * 2)
  ctx.strokeStyle = `rgba(${grid}, 0.15)`
  ctx.lineWidth = 1.5
  ctx.stroke()

  for (let i = 0; i < LAT_LINES; i += DOTS_SKIP) {
    const theta = ((i + 0.5) / LAT_LINES) * Math.PI
    for (let j = 0; j < LON_LINES; j += DOTS_SKIP) {
      const phi = (j / LON_LINES) * Math.PI * 2
      const [px, py, pz] = project(theta, phi)
      if (pz > 0) {
        const d = pz / r
        ctx.beginPath()
        ctx.arc(px, py, 1.2 * (0.5 + d * 0.8), 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${grid}, ${0.2 + d * 0.5})`
        ctx.fill()
      }
    }
  }

  const dTheta = spider.targetTheta - spider.theta
  const dPhi = spider.targetPhi - spider.phi
  spider.theta += dTheta * spider.moveSpeed
  spider.phi += dPhi * spider.moveSpeed

  if (Math.abs(dTheta) < 0.01 && Math.abs(dPhi) < 0.01) {
    pickNewTarget()
  }

  drawSpider()

  animFrameId = requestAnimationFrame(draw)
}

function resize() {
  const canvas = canvasRef.value
  if (!canvas) return
  const dpr = window.devicePixelRatio || 1
  width = window.innerWidth
  height = window.innerHeight
  canvas.width = width * dpr
  canvas.height = height * dpr
  canvas.style.width = `${width}px`
  canvas.style.height = `${height}px`
  ctx = canvas.getContext('2d')
  if (ctx) ctx.scale(dpr, dpr)
}

function handleMouseMove(e: MouseEvent) {
  mouseX = (e.clientX / width - 0.5) * 2
  mouseY = (e.clientY / height - 0.5) * 2
}

let hideTimer: ReturnType<typeof setTimeout>

function scurry() {
  spider.targetTheta = Math.PI * 0.85 + Math.random() * 0.1
  spider.targetPhi = currentRotY + Math.PI
  spider.moveSpeed = 0.08
}

function comeBack() {
  hideTimer = setTimeout(() => {
    spider.hideAlpha = 1
    pickNewTarget()
  }, 3000)
}

function handlePointerDown() {
  scurry()
  clearTimeout(hideTimer)
}

function handlePointerUp() {
  comeBack()
}

onMounted(() => {
  resize()
  window.addEventListener('resize', resize)
  window.addEventListener('mousemove', handleMouseMove)
  window.addEventListener('mousedown', handlePointerDown)
  window.addEventListener('mouseup', handlePointerUp)
  window.addEventListener('touchstart', handlePointerDown, { passive: true })
  window.addEventListener('touchend', handlePointerUp, { passive: true })
  draw()
})

onBeforeUnmount(() => {
  cancelAnimationFrame(animFrameId)
  clearTimeout(hideTimer)
  window.removeEventListener('resize', resize)
  window.removeEventListener('mousemove', handleMouseMove)
  window.removeEventListener('mousedown', handlePointerDown)
  window.removeEventListener('mouseup', handlePointerUp)
  window.removeEventListener('touchstart', handlePointerDown)
  window.removeEventListener('touchend', handlePointerUp)
})
</script>

<template>
  <canvas ref="canvasRef" class="uv-sphere-overlay" />
</template>

<style scoped>
.uv-sphere-overlay {
  position: fixed;
  inset: 0;
  width: 100vw;
  height: 100vh;
  pointer-events: none;
  z-index: 0;
}
</style>
