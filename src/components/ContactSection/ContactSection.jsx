import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import hbLogo from '../../assets/images/hb-logo.webp'
import './ContactSection.css'

function ContactSection() {
  const sectionRef = useRef(null)
  const contactInfoRef = useRef(null)
  const isInView = useInView(sectionRef, { once: false, amount: 0.3 })

  const contactInfo = {
    email: 'cahabsoro@gmail.com',
    phone: '+62 882-0036-89555'
  }

  // Animation variants for contact info
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  }


  return (
    <section ref={sectionRef} className="contact-section" id="contact">
      <div className="contact-main-content">
        {/* Left Section - Contact Info */}
        <motion.div 
          ref={contactInfoRef} 
          className="contact-info"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.h2 className="contact-heading" variants={itemVariants}>
            NEW BUSINESS INQUIRIES
          </motion.h2>
          
          <div className="contact-details">
            <motion.a 
              href={`mailto:${contactInfo.email}`}
              className="contact-link contact-email"
              variants={itemVariants}
            >
              {contactInfo.email}
            </motion.a>
            
            <motion.a
              href={`tel:${contactInfo.phone.replace(/\s/g, '')}`}
              className="contact-link contact-phone"
              variants={itemVariants}
            >
              {contactInfo.phone}
            </motion.a>
          </div>
        </motion.div>

        {/* Right Section - Logo */}
        <motion.div 
          className="contact-logo"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
        >
          <img src={hbLogo} alt="Haccbox Logo" className="hb-logo" />
        </motion.div>
      </div>
    </section>
  )
}

export default ContactSection
