import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Carousel } from 'react-bootstrap';
import dailyTips from './dailyTips.js';
import "./dailyTips.css"

const DailyTips = () => {

  const [currentTip, setCurrentTip] = useState(0);

  useEffect(() => {
    const tipIndex = new Date().getDate() % dailyTips.length;
    setCurrentTip(tipIndex);
  }, []);

  return (

    <Container className="my-5" id='dailyTips'>
      <Row className='dailyTips-top'>
        <Col md={7}>
          <h1 className="text-center mb-4 daily-title">Ignite Your Health Journey: Welcome to Your Healthy Hub!</h1>
        </Col>
        <Col md={5}>
          <p className="text-right daily-description">
          Discover practical advice and insights on leading a healthier life. Explore our articles on nutrition, 
          exercise, mental wellness, and more, to help you embrace a balanced lifestyle at every stage of life.
          </p>
        </Col>
      </Row>
      <Row>
        <Col>
          <Carousel
            className='carousel daily-carousel'
            controls={false}
            indicators={false}
            interval={86400000} // 24 hours in milliseconds
            slide={true}
            fade={true}
            activeIndex={currentTip}
            onSelect={(selectedIndex, e) => setCurrentTip(selectedIndex)}
          >
            {dailyTips.map((tip, index) => (
              <Carousel.Item className='carousel-item daily-item' key={index}>
                <p className="text-center lead sliding-text daily-sliding-text daily-lead">{tip}</p>
              </Carousel.Item>
            ))}
          </Carousel>
        </Col>
      </Row>
    </Container>

  )
}

export default DailyTips