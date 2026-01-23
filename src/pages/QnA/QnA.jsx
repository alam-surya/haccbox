import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import heroVideo from '../../assets/videos/retro-hero.mp4'
import './QnA.css'

gsap.registerPlugin(ScrollTrigger)

function QnA() {
  const heroRef = useRef(null)
  const videoRef = useRef(null)
  const scrollIndicatorRef = useRef(null)
  const qnaSectionRef = useRef(null)
  const accordionItemsRef = useRef([])
  const [openItems, setOpenItems] = useState(new Set())

  const qnaData = [
    {
      question: "What types of custom packaging do you offer?",
      answer: "We offer a wide range of custom packaging solutions including corrugated boxes, wooden crates, foam packaging, and specialized protective packaging. Our solutions are tailored to meet the specific needs of your products, ensuring optimal protection during shipping and handling."
    },
    {
      question: "Do your packaging solutions meet export standards?",
      answer: "Yes, all our packaging solutions are designed to meet international export standards. We ensure compliance with ISPM 15 (wood packaging), customs requirements, and shipping regulations. Our team stays updated with the latest international standards to guarantee your products can be shipped globally without issues."
    },
    {
      question: "What is the minimum order quantity?",
      answer: "Our minimum order quantity varies depending on the type of packaging and customization required. For standard packaging solutions, we typically require a minimum order of 100 units. For highly customized solutions, we can discuss flexible minimums based on your specific needs. Contact us for a detailed quote tailored to your requirements."
    },
    {
      question: "How long does production take?",
      answer: "Production time depends on the complexity and quantity of your order. Standard packaging orders typically take 7-14 business days, while custom designs may require 14-21 business days. For urgent orders, we offer expedited production services. We'll provide you with a detailed timeline during the quotation process."
    },
    {
      question: "What materials do you use for packaging?",
      answer: "We use a variety of high-quality materials including corrugated cardboard, plywood, MDF, foam (EPS, EPE, EPP), bubble wrap, and protective films. All materials are selected based on your product's requirements, ensuring durability, protection, and compliance with export and laboratory standards. We can also source eco-friendly materials upon request."
    },
    {
      question: "Can you provide packaging for laboratory standards?",
      answer: "Yes, we specialize in packaging solutions that meet laboratory and medical equipment standards. Our packaging is designed to protect sensitive equipment from shock, vibration, moisture, and contamination. We work with clients in the medical, pharmaceutical, and scientific industries to ensure their equipment arrives in perfect condition."
    },
    {
      question: "Do you offer design services?",
      answer: "Yes, we provide comprehensive design services including structural design, graphics design, and 3D prototyping. Our design team works closely with you to create packaging that not only protects your products but also enhances your brand image. We can create custom solutions from concept to production."
    },
    {
      question: "What industries do you serve?",
      answer: "We serve a diverse range of industries including furniture manufacturing, homeware, electronics, medical equipment, laboratory instruments, automotive parts, and consumer goods. Our expertise spans from small-scale local businesses to large international corporations requiring export-ready packaging solutions."
    }
  ]

  // Scroll indicator setup
  useEffect(() => {
    const scrollIndicator = scrollIndicatorRef.current

    if (scrollIndicator) {
      // Animate scroll indicator
      gsap.set(scrollIndicator, { opacity: 0, y: -10 })
      
      const indicatorTl = gsap.timeline({ delay: 1 })
      indicatorTl.to(scrollIndicator, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power2.out'
      })
      .to(scrollIndicator, {
        y: 10,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut'
      })

      // Smooth scroll on click
      const handleScrollClick = () => {
        const qnaSection = qnaSectionRef.current
        if (qnaSection) {
          qnaSection.scrollIntoView({ behavior: 'smooth' })
        }
      }

      scrollIndicator.addEventListener('click', handleScrollClick)

      return () => {
        indicatorTl.kill()
        scrollIndicator.removeEventListener('click', handleScrollClick)
      }
    }
  }, [])

  useEffect(() => {
    // Animate QnA section on scroll
    const qnaSection = qnaSectionRef.current
    if (!qnaSection) return

    gsap.fromTo(
      qnaSection,
      {
        opacity: 0,
        y: 50
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: qnaSection,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse'
        }
      }
    )

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  const toggleAccordion = (index) => {
    const item = accordionItemsRef.current[index]
    if (!item) return

    const questionElement = item.querySelector('.qna-question')
    const answerElement = item.querySelector('.qna-answer')
    const iconElement = item.querySelector('.qna-icon')
    
    if (!questionElement || !answerElement || !iconElement) return

    const isOpen = openItems.has(index)
    const newOpenItems = new Set(openItems)

    if (isOpen) {
      // Close
      newOpenItems.delete(index)
      gsap.to(answerElement, {
        height: 0,
        opacity: 0,
        duration: 0.4,
        ease: 'power2.in',
        onComplete: () => {
          answerElement.style.display = 'none'
        }
      })
      gsap.to(iconElement, {
        rotation: 0,
        duration: 0.4,
        ease: 'power2.in'
      })
    } else {
      // Open
      newOpenItems.add(index)
      answerElement.style.display = 'block'
      const height = answerElement.scrollHeight
      gsap.fromTo(answerElement, 
        { height: 0, opacity: 0 },
        {
          height: height,
          opacity: 1,
          duration: 0.4,
          ease: 'power2.out'
        }
      )
      gsap.to(iconElement, {
        rotation: 180,
        duration: 0.4,
        ease: 'power2.out'
      })
    }

    setOpenItems(newOpenItems)
  }

  return (
    <div className="qna-page">
      {/* Hero Section */}
      <section ref={heroRef} className="about-hero">
        <div className="hero-video-container">
          <video
            ref={videoRef}
            className="hero-video"
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
          >
            <source 
              src={heroVideo} 
              type="video/mp4" 
            />
            {/* Fallback if video doesn't load */}
            Your browser does not support the video tag.
          </video>
          <div className="hero-overlay"></div>
        </div>
        <div className="about-hero-content">
          <h1 className="about-hero-title">QnA</h1>
          <p className="about-hero-subtitle">
            frequently asked questions about our packaging solutions
          </p>
        </div>
        <div 
          ref={scrollIndicatorRef}
          className="scroll-indicator"
          aria-label="Scroll down"
        >
          <svg 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2"
          >
            <path d="M6 9l6 6 6-6" />
          </svg>
        </div>
      </section>

      {/* QnA Section */}
      <section ref={qnaSectionRef} className="qna-section">
        <div className="qna-container">
          <div className="qna-list">
            {qnaData.map((item, index) => (
              <div
                key={index}
                ref={(el) => (accordionItemsRef.current[index] = el)}
                className="qna-item"
              >
                <button
                  className="qna-question"
                  onClick={() => toggleAccordion(index)}
                  aria-expanded={openItems.has(index)}
                >
                  <span className="qna-question-text">{item.question}</span>
                  <svg
                    className="qna-icon"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </button>
                <div className="qna-answer" style={{ display: 'none', height: 0 }}>
                  <p>{item.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default QnA

