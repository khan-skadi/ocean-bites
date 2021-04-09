import React from "react"
import Aos from "aos"
import "App.css"
import "aos/dist/aos.css"

const App = (): JSX.Element => {
  React.useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])

  return (
    <div className="appWrapper">
      <nav>
        <div style={{ display: "none" }} />
      </nav>
      <div className="section">
        <div className="landing-main">
          <div className="landing-bg" />

          <div className="landing-nav">
            <div className="landing-nav-wrapper">
              <p>Ocean Bites</p>
            </div>
          </div>

          <div className="landing-main-inner">
            <div className="hero-container">
              <div className="hero-wrapper">
                <p className="hero-text">
                  <span>where great food and great drinks meet</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section">App</div>
    </div>
  )
}

export default App
