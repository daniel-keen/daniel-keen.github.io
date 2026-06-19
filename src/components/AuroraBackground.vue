<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref } from 'vue'

const starCanvas = ref<HTMLCanvasElement | null>(null)
let raf = 0
let cleanupResize: (() => void) | null = null

onMounted(() => {
  const canvas = starCanvas.value
  if (!canvas) return
  const ctx = canvas.getContext('2d')
  if (!ctx) return

  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  let w = 0
  let h = 0

  const resize = () => {
    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    w = window.innerWidth
    h = window.innerHeight
    canvas.width = w * dpr
    canvas.height = h * dpr
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
  }
  resize()
  window.addEventListener('resize', resize)
  cleanupResize = () => window.removeEventListener('resize', resize)

  const N = 170
  const stars = Array.from({ length: N }, () => ({
    x: Math.random(),
    y: Math.random(),
    z: Math.random() * 0.7 + 0.3,
    tw: Math.random() * Math.PI * 2
  }))
  let shoot: { x: number; y: number; ang: number; t: number } | null = null
  let nextShoot = 140

  const frame = () => {
    ctx.clearRect(0, 0, w, h) // transparent — aurora shows through
    for (const st of stars) {
      // if (!reduce) st.x -= 0.00002 * st.z
      if (st.x < 0) st.x += 1
      st.tw += 0.01 * st.z
      const a = Math.max(0, 0.35 + 0.45 * Math.sin(st.tw))
      ctx.beginPath()
      ctx.arc(st.x * w, st.y * h, st.z * 1.6, 0, 7)
      ctx.fillStyle = `rgba(228,234,255,${a.toFixed(2)})`
      ctx.fill()
    }
    if (!reduce) {
      if (shoot) {
        shoot.t += 0.02
        const x = shoot.x + Math.cos(shoot.ang) * shoot.t * w
        const y = shoot.y + Math.sin(shoot.ang) * shoot.t * w
        const tx = x - Math.cos(shoot.ang) * 80
        const ty = y - Math.sin(shoot.ang) * 80
        const lg = ctx.createLinearGradient(tx, ty, x, y)
        lg.addColorStop(0, 'rgba(255,255,255,0)')
        lg.addColorStop(1, 'rgba(255,255,255,.9)')
        ctx.strokeStyle = lg
        ctx.lineWidth = 2
        ctx.beginPath()
        ctx.moveTo(tx, ty)
        ctx.lineTo(x, y)
        ctx.stroke()
        if (shoot.t > 1) shoot = null
      } else if (--nextShoot <= 0) {
        shoot = { x: Math.random() * w * 0.5 + w * 0.3, y: Math.random() * h * 0.4, ang: Math.PI * 0.18, t: 0 }
        nextShoot = 220 + Math.random() * 260
      }
    }
    raf = requestAnimationFrame(frame)
  }
  frame()
})

onBeforeUnmount(() => {
  cancelAnimationFrame(raf)
  if (cleanupResize) cleanupResize()
})
</script>

<template>
  <div class="aurora-bg" aria-hidden="true">
    <div class="sky-base"></div>
    <div class="aurora">
      <div class="blob b1"></div>
      <div class="blob b2"></div>
      <div class="blob b3"></div>
      <div class="blob b4"></div>
      <div class="blob b5"></div>
    </div>
    <canvas ref="starCanvas" class="stars"></canvas>
    <div class="vignette"></div>
    <div class="scrim"></div>
  </div>
</template>

<style scoped>
.aurora-bg {
  position: fixed;
  inset: 0;
  z-index: -1;
  overflow: hidden;
  pointer-events: none;
  background: #05060a;
}
.aurora-bg > * {
  position: absolute;
  inset: 0;
}

.sky-base {
  background:
    radial-gradient(90% 70% at 78% 12%, rgba(86, 28, 140, 0.4) 0%, transparent 55%),
    radial-gradient(85% 65% at 18% 88%, rgba(150, 28, 95, 0.3) 0%, transparent 55%),
    radial-gradient(120% 100% at 50% 0%, #0d0518 0%, #08040f 48%, #030206 100%);
}
/* No mix-blend-mode or animated filter here: on real GPUs that combination
   leaves square compositing artifacts (corner + beside every icon/SVG layer).
   Soft blurred blobs with normal alpha give the same look, artifact-free. */
.aurora {
  overflow: hidden;
}
.blob {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.62;
}
.b1 { width: 50%; height: 66%; left: -8%; top: -18%; background: #4a1d86; animation: drift1 19s ease-in-out infinite; }
.b2 { width: 54%; height: 72%; right: -12%; top: -12%; background: #8438df; animation: drift2 23s ease-in-out infinite; }
.b3 { width: 60%; height: 80%; left: 16%; bottom: -32%; background: #c12579; animation: drift3 26s ease-in-out infinite; }
.b4 { width: 46%; height: 60%; right: 2%; bottom: -22%; background: #6a31b0; animation: drift1 21s ease-in-out infinite reverse; }
.b5 { width: 40%; height: 54%; left: 38%; top: 24%; background: #a02479; animation: drift2 17s ease-in-out infinite reverse; }
@keyframes drift1 { 0%, 100% { transform: translate(0, 0) scale(1); } 50% { transform: translate(10%, 7%) scale(1.18); } }
@keyframes drift2 { 0%, 100% { transform: translate(0, 0) scale(1.05); } 50% { transform: translate(-9%, 9%) scale(0.88); } }
@keyframes drift3 { 0%, 100% { transform: translate(0, 0) scale(1); } 50% { transform: translate(7%, -11%) scale(1.22); } }

.stars { width: 100%; height: 100%; display: block; }

.vignette {
  background: radial-gradient(110% 80% at 50% 38%, transparent 55%, rgba(3, 4, 8, 0.6) 100%);
}
.scrim {
  background: radial-gradient(70% 60% at 50% 45%, rgba(4, 2, 10, 0.5) 0%, rgba(4, 2, 10, 0.28) 45%, transparent 78%);
}

@media (prefers-reduced-motion: reduce) {
  .aurora,
  .blob {
    animation: none;
  }
}
</style>
