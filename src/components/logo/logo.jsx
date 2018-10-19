import React from 'react';
import { onlyUpdateForKeys } from 'recompose';
import { Col, Row, Image } from 'react-bootstrap';

const Logo = () => (
  <Row className="sidebar sidebar__header">
    <Col md={4} className="sidebar__logo_big">
      <Image src="/pubic/images/logo1.gif" className="sidebar__logo-img" />
    </Col>
    <Col className="sidebar__header-caption" md={8}>Status Sender</Col>
  </Row>
);

export default onlyUpdateForKeys(['isActive'])(Logo);
