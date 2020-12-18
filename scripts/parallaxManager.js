const kidParallaxContainer = document.getElementById('introduction-illustration-with-parallax')
const kidParallax = new Parallax(kidParallaxContainer, {
  invertX: false,
})

const keyboardParallaxContainer = document.getElementById('illustrations-with-parallax')
console.log(keyboardParallaxContainer)
const keyboardParallax = new Parallax(keyboardParallaxContainer, {
  invertX: false,
  invertY: false,
})