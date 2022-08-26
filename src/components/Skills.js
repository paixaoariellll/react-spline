import 'react-multi-carousel/lib/styles.css';
import TrackVisibility from 'react-on-screen';

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
      <TrackVisibility>
        {({ isVisible }) =>
          <div className={isVisible ? "animate__animated animate__lightSpeedInLeft animate__delay-1s" : "animate__animated animate__lightSpeedOutRight animate__delay-1.5s"}>
            <div className="container">
              <h2 clasName="hability-s">Habilidades</h2>
            </div>
          </div>}
      </TrackVisibility>
    </section>
  )
}
