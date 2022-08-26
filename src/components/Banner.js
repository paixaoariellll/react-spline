import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import Spline from '@splinetool/react-spline';
import Marquee from "react-fast-marquee";


export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ["Ariel Paixão", "Desenvolvedor Web", "Web Designer", "UI/UX Designer", "Apenas uma pessoa qualquer com a capacidade de insistir... "];
  const period = 1500;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(200);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="banner" id="home">
      <Spline className="spline" scene="https://prod.spline.design/vAzYzlA0jZnIc5ON/scene.splinecode" />
      <Container>
        <Row id="board" className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomInLeft animate__delay-4s" : "animate__animated animate__zoomOut animate__delay-0.5s"}>
                  <h1 className="ola">Olá mundo!</h1>
                  <h1 style={{ color: '#08c5de', fontFamily: 'Array' }} >{`Eu sou `}
                    <span style={{ color: 'white' }} className="txt-rotate" dataPeriod="500" data-rotate='[ "Ariel Paixão", "desenvolvedor web", "web designer", "UI/UX Designer", "apenas uma pessoa com a capacidade de insistir. " ]'>
                      <span className="wrap">{text}</span>
                    </span>
                  </h1>
                  <Marquee speed={'40'} pauseOnHover gradientColor={'rgb(248,251,253)'} >
                    <p style={{ paddingBottom: '0' }} className="text-banner">"A ceita que dói menos: Critóvão é o melhor!"</p>
                  </Marquee>
                  <p style={{ left: '70%', fontSize: '14px', paddingTop: '0' }}>Ariel Paixão</p>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section >
  )
}
