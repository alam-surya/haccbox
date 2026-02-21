import { DotLottieReact } from '@lottiefiles/dotlottie-react'
import './LoadingScreen.css'

const LOTTIE_URL = 'https://lottie.host/0fa341ac-7fff-4fd3-ab96-4fe98bc8240a/w1xkJN2lq1.lottie'

function LoadingScreen() {
  return (
    <div className="loading-screen" role="status" aria-label="Loading">
      <div className="loading-screen-lottie">
        <DotLottieReact
          className="loading-screen-lottie-canvas"
          src={LOTTIE_URL}
          loop
          autoplay
        />
      </div>
      <p className="loading-screen-text">Growing. Professional. Disciplined.</p>
    </div>
  )
}

export default LoadingScreen
