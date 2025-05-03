import { gsap } from "gsap"

// Optional: Configure GSAP globally
export const setupGsap = () => {
  gsap.defaults({
    ease: "power3.out",
    duration: 0.8,
  })
}

export default gsap
