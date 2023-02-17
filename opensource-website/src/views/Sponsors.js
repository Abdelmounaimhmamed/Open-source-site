import React from "react";
import { Col, Container, Row } from "reactstrap";
import usms from "../assets/Sponsors/usms.png";
import khouribgapress from "../assets/Sponsors/khouribga-presse.png";
import banquepop from "../assets/Sponsors/banque-pop.png";
import sotreg from "../assets/Sponsors/storeg.PNG";
import UPTv from "../assets/Sponsors/UPtv.png";
import pulse from "../assets/Sponsors/pulse.png";
// import ahdat from "../assets/Sponsors/ahdat.png";
import joe from "../assets/Sponsors/joe.png";
import GABC from "../assets/Sponsors/GABC.png";
import pepsi from "../assets/Sponsors/pepsi.png";
import LayerCraft from "../assets/Sponsors/LayerCraft.png";
import ensa from "../assets/Sponsors/ensa.png";
import nrj from "../assets/Sponsors/nrj.png";
import indexgroup from "../assets/Sponsors/indexgroup.png";
// import hespress from "../assets/Sponsors/hespress.png";
// import radioplus from "../assets/Sponsors/radioplus.png";
// import twoMRadio from "../assets/Sponsors/2mradio.jfif";
import hitRadio from "../assets/Sponsors/hitradio.png";
// import radiomars from "../assets/Sponsors/radiomars.png";

const sponsors = [
  usms,
  // mgd,
  // iam,
  // itroad,
  // redbull,
  // nextma,
  // investtradehouse,
  // marocnumericcluster,
  banquepop,
  pepsi,
  indexgroup,
  sotreg,
  UPTv,
  pulse,
  joe,
  GABC,
  LayerCraft
];

const media = [
  // twoM,
  // hitRadio,
  // twoMRadio,
  // alaoula,
  // hespress,
  // radioplus,
  // radiomars,
  hitRadio,
  khouribgapress,
  // ahdat,
  nrj
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
          {/* <Col style={{ padding: 20 }}>
            <div className="sponsor-image">
              <img src={school1337} alt="" />
              <div className="sponsorship">Co-organisateur</div>
            </div>
          </Col> */}
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
        {/* <Row style={{ justifyContent: "center", marginBottom: 100 }}>
          <Col md={5} style={{ padding: 20 }}>
            <div className="sponsor-image">
              <img src={openstreetmap} alt="" />
            </div>
          </Col>
        </Row> */}
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
