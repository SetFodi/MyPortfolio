import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

const ScrollAnimations = ({ children, className = '' }) => {
  const containerRef = useRef(null)

  useEffect(() => {
    if (typeof window === 'undefined') return

    const ctx = gsap.context(() => {
      // Parallax elements
      gsap.utils.toArray('.parallax-slow').forEach(element => {
        gsap.to(element, {
          yPercent: -50,
          ease: 'none',
          scrollTrigger: {
            trigger: element,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true
          }
        })
      })

      gsap.utils.toArray('.parallax-fast').forEach(element => {
        gsap.to(element, {
          yPercent: -100,
          ease: 'none',
          scrollTrigger: {
            trigger: element,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true
          }
        })
      })

      // Reveal animations
      gsap.utils.toArray('.reveal-up').forEach(element => {
        gsap.fromTo(element, 
          {
            y: 100,
            opacity: 0
          },
          {
            y: 0,
            opacity: 1,
            duration: 1.2,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: element,
              start: 'top 80%',
              end: 'bottom 20%',
              toggleActions: 'play none none reverse'
            }
          }
        )
      })

      gsap.utils.toArray('.reveal-left').forEach(element => {
        gsap.fromTo(element, 
          {
            x: -100,
            opacity: 0
          },
          {
            x: 0,
            opacity: 1,
            duration: 1.2,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: element,
              start: 'top 80%',
              end: 'bottom 20%',
              toggleActions: 'play none none reverse'
            }
          }
        )
      })

      gsap.utils.toArray('.reveal-right').forEach(element => {
        gsap.fromTo(element, 
          {
            x: 100,
            opacity: 0
          },
          {
            x: 0,
            opacity: 1,
            duration: 1.2,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: element,
              start: 'top 80%',
              end: 'bottom 20%',
              toggleActions: 'play none none reverse'
            }
          }
        )
      })

      // Scale animations
      gsap.utils.toArray('.scale-in').forEach(element => {
        gsap.fromTo(element, 
          {
            scale: 0.8,
            opacity: 0
          },
          {
            scale: 1,
            opacity: 1,
            duration: 1,
            ease: 'back.out(1.7)',
            scrollTrigger: {
              trigger: element,
              start: 'top 80%',
              end: 'bottom 20%',
              toggleActions: 'play none none reverse'
            }
          }
        )
      })

      // Rotation animations
      gsap.utils.toArray('.rotate-in').forEach(element => {
        gsap.fromTo(element, 
          {
            rotation: -10,
            opacity: 0
          },
          {
            rotation: 0,
            opacity: 1,
            duration: 1.2,
            ease: 'back.out(1.7)',
            scrollTrigger: {
              trigger: element,
              start: 'top 80%',
              end: 'bottom 20%',
              toggleActions: 'play none none reverse'
            }
          }
        )
      })

      // Stagger animations
      gsap.utils.toArray('.stagger-children').forEach(container => {
        const children = container.children
        gsap.fromTo(children, 
          {
            y: 50,
            opacity: 0
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: 'power3.out',
            stagger: 0.1,
            scrollTrigger: {
              trigger: container,
              start: 'top 80%',
              end: 'bottom 20%',
              toggleActions: 'play none none reverse'
            }
          }
        )
      })

      // Text reveal animations
      gsap.utils.toArray('.text-reveal').forEach(element => {
        const words = element.textContent.split(' ')
        element.innerHTML = words.map(word => `<span class="word">${word}</span>`).join(' ')
        
        gsap.fromTo(element.querySelectorAll('.word'), 
          {
            y: 50,
            opacity: 0
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            ease: 'power3.out',
            stagger: 0.05,
            scrollTrigger: {
              trigger: element,
              start: 'top 80%',
              end: 'bottom 20%',
              toggleActions: 'play none none reverse'
            }
          }
        )
      })

      // Magnetic hover effects
      gsap.utils.toArray('.magnetic').forEach(element => {
        const handleMouseMove = (e) => {
          const rect = element.getBoundingClientRect()
          const centerX = rect.left + rect.width / 2
          const centerY = rect.top + rect.height / 2
          const deltaX = (e.clientX - centerX) * 0.2
          const deltaY = (e.clientY - centerY) * 0.2

          gsap.to(element, {
            x: deltaX,
            y: deltaY,
            duration: 0.3,
            ease: 'power2.out'
          })
        }

        const handleMouseLeave = () => {
          gsap.to(element, {
            x: 0,
            y: 0,
            duration: 0.5,
            ease: 'elastic.out(1, 0.3)'
          })
        }

        element.addEventListener('mousemove', handleMouseMove)
        element.addEventListener('mouseleave', handleMouseLeave)

        return () => {
          element.removeEventListener('mousemove', handleMouseMove)
          element.removeEventListener('mouseleave', handleMouseLeave)
        }
      })

      // Progress bar animation
      const progressBar = document.querySelector('.scroll-progress')
      if (progressBar) {
        gsap.to(progressBar, {
          scaleX: 1,
          transformOrigin: 'left center',
          ease: 'none',
          scrollTrigger: {
            trigger: 'body',
            start: 'top top',
            end: 'bottom bottom',
            scrub: true
          }
        })
      }

      // Smooth scroll for anchors
      gsap.utils.toArray('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
          e.preventDefault()
          const target = document.querySelector(this.getAttribute('href'))
          if (target) {
            gsap.to(window, {
              duration: 1.5,
              scrollTo: { y: target, offsetY: 100 },
              ease: 'power3.inOut'
            })
          }
        })
      })

    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  )
}

export default ScrollAnimations 