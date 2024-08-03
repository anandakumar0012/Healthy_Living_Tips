import React from 'react';
import "./care.css";
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';


const Care = () => {
    return (
        <>
            <div className='carousel-full' id='care'>
                <h2 className="text-center final-title">Take Care of Your Mind and It Will Take Care of You</h2>
                <Carousel
                    id="myCarousel"
                    className="text-center carousel-content"
                    controls={true}
                    indicators={true}
                    prevIcon={<FaChevronLeft className="carousel-control-icon" />}
                    nextIcon={<FaChevronRight className="carousel-control-icon" />}
                >
                    <Carousel.Item>
                        <div className="d-flex flex-column align-items-center">
                            <h3>Healthy Sleeping</h3>
                            <h4>
                                Ensure you get 7-8 hours of sleep every night<br />
                                <span style={{ fontStyle: 'normal' }}>To rejuvenate your body and mind</span>
                            </h4>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="d-flex flex-column align-items-center">
                            <h3>Healthy Exercise</h3>
                            <h4>
                                Incorporate at least 30 minutes of exercise<br />
                                <span style={{ fontStyle: 'normal' }}>into your daily routine to stay fit</span>
                            </h4>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="d-flex flex-column align-items-center">
                            <h3>Mental Health</h3>
                            <h4 className='carousel-text'>
                                Practice mindfulness and meditation to<br />
                                <span style={{ fontStyle: 'normal' }}>maintain your mental well-being.</span>
                            </h4>
                        </div>
                    </Carousel.Item>
                </Carousel>
            </div>
        </>
    );
};

export default Care;
