import React from "react";
import { Col, Container, Row } from "reactstrap";
import ocp from "../../assets/Sponsors/ocp.png";
import mgd from "../../assets/Sponsors/mgd.png";
import iam from "../../assets/Sponsors/iam.png";
import openstreetmap from "../../assets/Sponsors/openstreetmap.png";
import itroad from "../../assets/Sponsors/itroad.png";
import redbull from "../../assets/Sponsors/redbull.png";
import nextma from "../../assets/Sponsors/nextma.png";
import investtradehouse from "../../assets/Sponsors/investtradehouse.png";
import marocnumericcluster from "../../assets/Sponsors/marocnumericcluster.png";
import pepsi from "../../assets/Sponsors/pepsi.png";
import school1337 from "../../assets/Sponsors/1337.jpg";
import ensa from "../../assets/Sponsors/ensa.png";
import twoM from "../../assets/Sponsors/2m.png";
import alaoula from "../../assets/Sponsors/alaoula.png";
import hespress from "../../assets/Sponsors/hespress.png";
import radioplus from "../../assets/Sponsors/radioplus.png";
import twoMRadio from "../../assets/Sponsors/2mradio.jfif";
import hitRadio from "../../assets/Sponsors/hitradio.png";
import radiomars from "../../assets/Sponsors/radiomars.png";

const sponsors = [
  ocp,
  mgd,
  iam,
  itroad,
  redbull,
  nextma,
  investtradehouse,
  marocnumericcluster,
  pepsi,
];

const media = [
  twoM,
  hitRadio,
  twoMRadio,
  alaoula,
  hespress,
  radioplus,
  radiomars,
];

const Sponsors = () => {
  return (
    <div className="sponsors">
      <Container>
        <div className="heading">
          <span>Nos sponsors</span>
          <hr />
        </div>
        <Row
          md={5}
          sm={3}
          xs={2}
          style={{ justifyContent: "center", marginBottom: 100 }}
        >
          <Col style={{ padding: 20 }}>
            <div className="sponsor-image">
              <img src={ensa} alt="" />
              <div className="sponsorship">Organisateur</div>
            </div>
          </Col>
          <Col style={{ padding: 20 }}>
            <div className="sponsor-image">
              <img src={school1337} alt="" />
              <div className="sponsorship">Co-organisateur</div>
            </div>
          </Col>
        </Row>
        <Row md={5} sm={3} xs={2}>
          {sponsors.map((item, key) => (
            <Col key={key} style={{ padding: 20 }}>
              <div className="sponsor-image">
                <img src={item} alt="" />
              </div>
            </Col>
          ))}
        </Row>
        <Row style={{ justifyContent: "center", marginBottom: 100 }}>
          <Col md={5} style={{ padding: 20 }}>
            <div className="sponsor-image">
              <img src={openstreetmap} alt="" />
            </div>
          </Col>
        </Row>
        <Row md={5} sm={3} xs={2} style={{ justifyContent: "center" }}>
          {media.map((item, key) => (
            <Col key={key} style={{ padding: 20 }}>
              <div className="sponsor-image">
                <img src={item} alt="" />
                <div className="sponsorship">Média</div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Sponsors;
