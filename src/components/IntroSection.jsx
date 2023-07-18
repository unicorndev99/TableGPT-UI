import React from "react";
import BotResponse from "./BotResponse";
import { Row, Col } from "antd";
import Box from "../assets/images/Box.png"

const IntroSection = () => {
  return (
    <div id="introsection">
      <h1 className="introduce_header_title">
        Unlock the power of AI
      </h1>
      <p className="introduce_header_subtitle">
        Meet the synapse of our ai chat app revolutionzing conversation
      </p>
      <Row className="sublist_row" justify="center" gutter={80}>
        <Col xs={24} sm={8} md={8} lg={8} >
          <p className="sublist_header"><img className="Box_icon" src={Box} />Amazon Product Features</p>
          <p className="sublist_title">Create key feature builet points for your Amazon listings</p>
        </Col>
        <Col xs={24} sm={8} md={8} lg={8} >
          <p className="sublist_header"><img className="Box_icon" src={Box} />Amazon Product Features</p>
          <p className="sublist_title">Create key feature builet points for your Amazon listings</p>
        </Col>
      </Row>
      <Row className="sublist_row" justify="center" gutter={80}>
        <Col xs={24} sm={8} md={8} lg={8} >
          <p className="sublist_header"><img className="Box_icon" src={Box} />Amazon Product Features</p>
          <p className="sublist_title">Create key feature builet points for your Amazon listings</p>
        </Col>
        <Col xs={24} sm={8} md={8} lg={8} >
          <p className="sublist_header"><img className="Box_icon" src={Box} />Amazon Product Features</p>
          <p className="sublist_title">Create key feature builet points for your Amazon listings</p>
        </Col>
      </Row>
      <Row className="sublist_row" justify="center" gutter={80}>
        <Col xs={24} sm={8} md={8} lg={8} >
          <p className="sublist_header"><img className="Box_icon" src={Box} />Amazon Product Features</p>
          <p className="sublist_title">Create key feature builet points for your Amazon listings</p>
        </Col>
        <Col xs={24} sm={8} md={8} lg={8} >
          <p className="sublist_header"><img className="Box_icon" src={Box} />Amazon Product Features</p>
          <p className="sublist_title">Create key feature builet points for your Amazon listings</p>
        </Col>
      </Row>
      <Row className="sublist_row" justify="center" gutter={80}>
        <Col xs={24} sm={8} md={8} lg={8} >
          <p className="sublist_header"><img className="Box_icon" src={Box} />Amazon Product Features</p>
          <p className="sublist_title">Create key feature builet points for your Amazon listings</p>
        </Col>
        <Col xs={24} sm={8} md={8} lg={8} >
          <p className="sublist_header"><img className="Box_icon" src={Box} />Amazon Product Features</p>
          <p className="sublist_title">Create key feature builet points for your Amazon listings</p>
        </Col>
      </Row>
    </div>
  );
};

export default IntroSection;
