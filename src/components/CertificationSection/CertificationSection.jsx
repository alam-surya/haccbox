import { useState } from 'react'
import doubleWallImage from '../../assets/images/double-wall.webp'
import fscImage from '../../assets/images/fsc.webp'
import './CertificationSection.css'

const certifications = [
  {
    id: 'double-wall',
    label: 'CERTIFICATION',
    title: 'Double Wall',
    description:
      'This certification ensures that our cartons meet construction standards and shipping requirements, with burst strength testing up to 200 lbs per square inch, maximum size of 57.7 inches, and gross weight of 11.6 lbs. These cartons are safe for shipping products that require extra protection.',
    image: doubleWallImage,
  },
  {
    id: 'fsc',
    label: 'CERTIFICATION',
    title: 'FSC',
    description:
      'FSC certification ensures that the raw materials we use—such as wood or paper—come from forests managed sustainably and do not harm the environment, local communities, or local economies. FSC-certified products support forest conservation and the long-term sustainability of natural resources.',
    image: fscImage,
  },
]

function CertificationSection() {
  const [activeCert, setActiveCert] = useState('double-wall')
  const activeCertData = certifications.find((c) => c.id === activeCert)

  return (
    <section className="certification-section">
      <div className="certification-bar-judul">
        <h2 className="certification-title">
          Certifications that back our quality, strength, and responsible sourcing.
        </h2>
      </div>
      <nav className="certification-nav" aria-label="Choose certification">
        {certifications.map((cert) => (
          <button
            key={cert.id}
            type="button"
            className={`certification-tab ${activeCert === cert.id ? 'active' : ''}`}
            onClick={() => setActiveCert(cert.id)}
            aria-selected={activeCert === cert.id}
          >
            {cert.title}
          </button>
        ))}
      </nav>
      <div className="certification-content">
        <div className="certification-content-left">
          {activeCertData && (
            <>
              <span className="certification-label">{activeCertData.label}</span>
              <h3 className="certification-heading">{activeCertData.title}</h3>
              <p className="certification-description">{activeCertData.description}</p>
            </>
          )}
        </div>
        <div className="certification-content-right">
          {activeCertData && (
            <img
              src={activeCertData.image}
              alt={activeCertData.title}
              className="certification-image"
              loading="lazy"
            />
          )}
        </div>
      </div>
    </section>
  )
}

export default CertificationSection
