import Fade from "react-reveal/Fade";

export const Hero = () => (
  <div className="hero">
    <div className="hero-container">
      <div className="main">
        <div className="hero-illustration">
          <Fade duration={3500}>
            <lottie-player
              src="https://assets3.lottiefiles.com/packages/lf20_4amrqycb.json"
              background="transparent"
              speed="0.75"
              style={{
                opacity: 0.55
              }}
              loop
              autoplay
            ></lottie-player>
          </Fade>
        </div>
        <Fade>
          <div className="hero-text">
            <h1>Arrange in Style.</h1>
          </div>
          <div className="hero-cta">
            <div className="cta-text">
              <h6>
                Quality fresh-cut floral arrangements for any occasion,
                available to order on DoorDash
              </h6>
            </div>
          </div>
        </Fade>
        <div className="cta-button">
          <a href="https://www.doordash.com/store/7-elves-floral-and-convenient-market-san-francisco-22988096/?pickup=false">
            <button>Order Now</button>
          </a>
        </div>
      </div>
    </div>
  </div>
);
