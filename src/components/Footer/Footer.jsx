import React from 'react'
import "./footer.css";
import { Container, Row, Col } from 'react-bootstrap';
import { FaPhoneAlt, FaEnvelope, FaWhatsapp, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
  return (
    <footer className="footer text-light py-3">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={4} className="d-flex align-items-center justify-content-center justify-content-md-start mb-2 mb-md-0 footer-left">
            <FaPhoneAlt className="me-2" />
            <span>+91 9876543210</span>
            <FaEnvelope className="ms-4 me-2" />
            <span>healthyhub@gmail.com</span>
          </Col>
          <Col xs={12} md={4} className="text-center mb-2 mb-md-0 footer-right">
            <p className="mb-0">&copy; {new Date().getFullYear()} Healthy Hub. All rights reserved.</p>
          </Col>
          <Col xs={12} md={4} className="d-flex align-items-center justify-content-center justify-content-md-end">
            <a href="https://wa.me/1234567890" target='_Blank' className="text-light icon-circle me-3"><FaWhatsapp /></a>
            <a href="https://facebook.com" target='_Blank' className="text-light icon-circle me-3"><FaFacebook /></a>
            <a href="https://instagram.com" target='_Blank' className="text-light icon-circle me-3"><FaInstagram /></a>
            <a href="https://twitter.com" target='_Blank' className="text-light icon-circle"><FaTwitter /></a>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer