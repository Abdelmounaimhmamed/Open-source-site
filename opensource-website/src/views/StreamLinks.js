import React, { useState } from "react";
import { ReactComponent as Zoom } from "../assets/zoom.svg";
import { ReactComponent as Live } from "../assets/live.svg";
import { Col, Container, ModalBody, ModalFooter, ModalHeader, Row, Modal } from "reactstrap";
import { ExternalLink, Facebook } from "react-feather";

const StreamLinks = () => {
    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    return (
        <div className="stream-links">
            <Container>
                <div className="heading">
                    <span>Les conférences et les ateliers</span>
                    <hr />
                </div>
                <Row style={{ justifyContent: "center" }}>
                    <div className="sub-heading">
                        <span style={{ color: "white" }}>Conférences</span>
                        <hr style={{ background: "white" }} />
                    </div>
                    <Container>
                        <Row style={{ justifyContent: "center" }} noGutters>
                            <Col md={12}>
                                <div className="row-col-conference">
                                    <div className="conference-entry">
                                        "Le cloud et le Big Data au service des objets connectés" par <span>Larbi OUIYZME</span> à <span>14:00</span>
                                    </div>
                                    <div className="conference-entry">
                                        "Métavers et IA: un futur inclusif" par <span>Badr Boussabat</span> à <span>14:00</span>
                                    </div>
                                    <div className="conference-entry">
                                        "Le rôle des datacenter en tant qu infrastructure sinequanone à la digitalisation" par <span>Mehdi CHALLIGUI</span> à <span>14:00</span>
                                    </div>
                                    <div className="conference-entry">
                                        "L’intelligence collective pour le Développement de l’Afrique" par <span>Amadou Diawara</span> à <span>14:00</span>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </Row>
                <Row style={{ justifyContent: "center" }}>
                    <div className="sub-heading">
                        <span style={{ color: "white" }}>Workshops du jour 1</span>
                        <hr style={{ background: "white" }} />
                    </div>
                    <Container>
                        <Row style={{ justifyContent: "center" }} noGutters>
                            <Col md={12}>
                                <div className="row-col-conference">
                                    <div className="conference-entry"> 
                                    {/* add class "passed" */}
                                        "La self-service BI : enjeux et outils" par <span>Nadia NAANAA</span> à <span>14:00</span>
                                    </div>
                                    <div className="conference-entry">
                                        "Projet professionnel" par <span>Amina Moumni</span> à <span>14:00</span>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </Row>
            </Container>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>Informations sur la réunion Zoom</ModalHeader>
                <ModalBody>
                    <div className="modal-body">
                        <p>
                            <b>Heure :</b> 31 mars 2021 08:30 AM Casablanca
                        </p>
                        <p>
                            <b>Participer à la réunion Zoom:</b>{" "}
                            <a href="https://us02web.zoom.us/j/89075656652?pwd=NEh1ZG4wM0hVQ0ROVE9KKzFZUUp5QT09" target="_blank" rel="noreferrer">
                                Cliquez ici
                            </a>
                        </p>
                        <p>
                            <b>ID de réunion :</b> 890 7565 6652
                        </p>
                        <p>
                            <b>Code secret :</b> 408212{" "}
                        </p>
                    </div>
                </ModalBody>
                <ModalFooter>
                    <div onClick={toggle} style={{ cursor: "pointer", fontWeight: 700 }}>
                        Retour
                    </div>
                </ModalFooter>
            </Modal>
        </div>
    );
};

export default StreamLinks;
