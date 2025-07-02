import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

const ScrollAnimations = ({ children, className = '' }) => {
  const containerRef = useRef(null)
  const [isReduced, setIsReduced] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  // Check for reduced motion and mobile
  useEffect(() => {
    const checkReducedMotion = () => {
      const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
      setIsReduced(mediaQuery.matches)
    }
    
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    checkReducedMotion()
    checkMobile()
    
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    const handleChange = () => checkReducedMotion()
    const handleResize = () => checkMobile()
    
    mediaQuery.addEventListener('change', handleChange)
    window.addEventListener('resize', handleResize)
    
    return () => {
      mediaQuery.removeEventListener('change', handleChange)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  useEffect(() => {
    if (typeof window === 'undefined' || isReduced) return

    const ctx = gsap.context(() => {
      // Simplified parallax elements - only on desktop
      if (!isMobile) {
        gsap.utils.toArray('.parallax-slow').forEach(element => {
          gsap.to(element, {
            yPercent: -30, // Reduced from -50
            ease: 'none',
            scrollTrigger: {
              trigger: element,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 1, // Less intensive scrub
              invalidateOnRefresh: true,
            }
          })
        })

        gsap.utils.toArray('.parallax-fast').forEach(element => {
          gsap.to(element, {
            yPercent: -60, // Reduced from -100
            ease: 'none',
            scrollTrigger: {
              trigger: element,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 1,
              invalidateOnRefresh: true,
            }
          })
        })
      }

      // Simplified reveal animations with better performance
      gsap.utils.toArray('.reveal-up').forEach(element => {
        gsap.fromTo(element, 
          {
            y: isMobile ? 30 : 60, // Reduced movement on mobile
            opacity: 0
          },
          {
            y: 0,
            opacity: 1,
            duration: isMobile ? 0.6 : 0.8, // Faster on mobile
            ease: 'power2.out', // Simpler easing
            scrollTrigger: {
              trigger: element,
              start: 'top 85%', // Earlier trigger
              toggleActions: 'play none none none', // Simplified toggle actions
              once: true, // Only animate once for better performance
            }
          }
        )
      })

      gsap.utils.toArray('.reveal-left').forEach(element => {
        gsap.fromTo(element, 
          {
            x: isMobile ? -30 : -60,
            opacity: 0
          },
          {
            x: 0,
            opacity: 1,
            duration: isMobile ? 0.6 : 0.8,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: element,
              start: 'top 85%',
              toggleActions: 'play none none none',
              once: true,
            }
          }
        )
      })

      gsap.utils.toArray('.reveal-right').forEach(element => {
        gsap.fromTo(element, 
          {
            x: isMobile ? 30 : 60,
            opacity: 0
          },
          {
            x: 0,
            opacity: 1,
            duration: isMobile ? 0.6 : 0.8,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: element,
              start: 'top 85%',
              toggleActions: 'play none none none',
              once: true,
            }
          }
        )
      })

      // Simplified scale animations
      gsap.utils.toArray('.scale-in').forEach(element => {
        gsap.fromTo(element, 
          {
            scale: 0.9, // Less dramatic scaling
            opacity: 0
          },
          {
            scale: 1,
            opacity: 1,
            duration: isMobile ? 0.5 : 0.7,
            ease: 'power2.out', // Simpler easing
            scrollTrigger: {
              trigger: element,
              start: 'top 85%',
              toggleActions: 'play none none none',
              once: true,
            }
          }
        )
      })

      // Only enable rotation animations on desktop
      if (!isMobile) {
        gsap.utils.toArray('.rotate-in').forEach(element => {
          gsap.fromTo(element, 
            {
              rotation: -5, // Reduced rotation
              opacity: 0
            },
            {
              rotation: 0,
              opacity: 1,
              duration: 0.8,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: element,
                start: 'top 85%',
                toggleActions: 'play none none none',
                once: true,
              }
            }
          )
        })
      }

      // Simplified stagger animations
      gsap.utils.toArray('.stagger-children').forEach(container => {
        const children = container.children
        gsap.fromTo(children, 
          {
            y: isMobile ? 20 : 30,
            opacity: 0
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.5,
            ease: 'power2.out',
            stagger: isMobile ? 0.05 : 0.08, // Faster stagger on mobile
            scrollTrigger: {
              trigger: container,
              start: 'top 85%',
              toggleActions: 'play none none none',
              once: true,
            }
          }
        )
      })

      // Simplified text reveal animations - only on desktop
      if (!isMobile) {
        gsap.utils.toArray('.text-reveal').forEach(element => {
          // Skip if already processed
          if (element.querySelector('.word')) return
          
          const words = element.textContent.split(' ')
          element.innerHTML = words.map(word => `<span class="word">${word}</span>`).join(' ')
          
          gsap.fromTo(element.querySelectorAll('.word'), 
            {
              y: 20,
              opacity: 0
            },
            {
              y: 0,
              opacity: 1,
              duration: 0.4,
              ease: 'power2.out',
              stagger: 0.03, // Faster stagger
              scrollTrigger: {
                trigger: element,
                start: 'top 85%',
                toggleActions: 'play none none none',
                once: true,
              }
            }
          )
        })
      }

      // Simplified magnetic hover effects - only on desktop with hover capability
      if (!isMobile && window.matchMedia('(hover: hover)').matches) {
        gsap.utils.toArray('.magnetic').forEach(element => {
          let isActive = false
          
          const handleMouseMove = (e) => {
            if (isActive) return // Prevent multiple simultaneous animations
            
            const rect = element.getBoundingClientRect()
            const centerX = rect.left + rect.width / 2
            const centerY = rect.top + rect.height / 2
            const deltaX = (e.clientX - centerX) * 0.1 // Reduced intensity
            const deltaY = (e.clientY - centerY) * 0.1

            isActive = true
            gsap.to(element, {
              x: deltaX,
              y: deltaY,
              duration: 0.2, // Faster response
              ease: 'power2.out',
              onComplete: () => { isActive = false }
            })
          }

          const handleMouseLeave = () => {
            isActive = true
            gsap.to(element, {
              x: 0,
              y: 0,
              duration: 0.3,
              ease: 'power2.out',
              onComplete: () => { isActive = false }
            })
          }

          element.addEventListener('mousemove', handleMouseMove, { passive: true })
          element.addEventListener('mouseleave', handleMouseLeave, { passive: true })

          return () => {
            element.removeEventListener('mousemove', handleMouseMove)
            element.removeEventListener('mouseleave', handleMouseLeave)
          }
        })
      }

      // Simplified progress bar animation - only on desktop
      if (!isMobile) {
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
              scrub: 0.5, // Lighter scrub
              invalidateOnRefresh: true,
            }
          })
        }
      }

      // Simplified smooth scroll for anchors - only on desktop
      if (!isMobile) {
        gsap.utils.toArray('a[href^="#"]').forEach(anchor => {
          const handleClick = function (e) {
            e.preventDefault()
            const target = document.querySelector(this.getAttribute('href'))
            if (target) {
              gsap.to(window, {
                duration: 1,
                scrollTo: { y: target, offsetY: 80 }, // Reduced offset
                ease: 'power2.inOut'
              })
            }
          }
          
          anchor.addEventListener('click', handleClick)
          
          return () => {
            anchor.removeEventListener('click', handleClick)
          }
        })
      }

    }, containerRef)

    return () => ctx.revert()
  }, [isReduced, isMobile])

  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  )
}

export default ScrollAnimations 