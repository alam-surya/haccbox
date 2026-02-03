import { useState } from 'react'
import doubleWallImage from '../../assets/images/double-wall.webp'
import fscImage from '../../assets/images/fsc.webp'
import { useLanguage } from '../../context/LanguageContext'
import './CertificationSection.css'

function CertificationSection() {
  const [activeCert, setActiveCert] = useState('double-wall')
  const { t } = useLanguage()
  const certs = [
    { id: 'double-wall', ...t.certification.doubleWall, image: doubleWallImage },
    { id: 'fsc', ...t.certification.fsc, image: fscImage }
  ]
  const activeCertData = certs.find((c) => c.id === activeCert)

  return (
    <section className="certification-section">
      <div className="certification-bar-judul">
        <h2 className="certification-title">
          {t.certification.title}
        </h2>
      </div>
      <nav className="certification-nav" aria-label="Choose certification">
        {certs.map((cert) => (
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
              <span className="certification-label">{t.certification.label}</span>
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
