// Fade Card Motion
export const fadeCard = (delay) => ({
  initial: {
    opacity: 0,
    scale: 0.5
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delay: delay,
      type: 'spring',
      stiffness: '100'
    }
  }
})
