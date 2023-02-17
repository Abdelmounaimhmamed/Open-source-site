import React, { useState } from "react";
import { ReactComponent as Zoom } from "../../assets/zoom.svg";
import { ReactComponent as Live } from "../../assets/live.svg";
import { Col, Container, ModalBody, ModalFooter, ModalHeader, Row, Modal } from "reactstrap";
import { ExternalLink, Facebook } from "react-feather";

const StreamLinks = () => {
    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    return (
        <div className="stream-links">
            <Container>
                <div className="heading">
                    <span>Liens des conférences et workshops</span>
                    <hr />
                </div>
                <Row style={{ justifyContent: "center" }}>
                    <div className="sub-heading">
                        <span style={{ color: "white" }}>Conférences</span>
                        <hr style={{ background: "white" }} />
                    </div>
                    <Container>
                        <Row style={{ justifyContent: "center" }} noGutters>
                            <Col md={8}>
                                <div className="row-col-conference">
                                    <div className="conference-entry passed">
                                        "Une brève introduction à la Blockchain" par <span>Samir Bennani</span>
                                    </div>
                                    <div className="conference-entry passed">
                                        "Algorithmes de recommandation,Explication et dérives" par <span>Othman Safsafi</span>
                                    </div>
                                    <div className="conference-entry">
                                        "Software Craftsmanship ou comment exceller en carrière technique ?" par <span>Sallah Kokaina</span>
                                    </div>
                                    <div className="conference-entry">
                                        "Comment activer correctement la mise à niveau vers le mode professionnel" par <span>Diaa Alhak EL FALLOUS</span>
                                    </div>
                                </div>
                            </Col>
                            <Col>
                                <div className="row-col">
                                    <div className="col-button">
                                        <a className="botona button-zoom" href="https://us02web.zoom.us/j/89075656652?pwd=NEh1ZG4wM0hVQ0ROVE9KKzFZUUp5QT09" target="_blank" rel="noreferrer">
                                            <Zoom width={50} height={50} /> Allez sur Zoom <ExternalLink />
                                        </a>
                                        <div className="infos" onClick={toggle}>
                                            Informations sur la réunion
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                        <Row style={{ justifyContent: "center", marginTop: 50 }}>
                            <div className="sub-heading">
                                <span style={{ color: "white" }}>Workshops du jour 1</span>
                                <hr style={{ background: "white" }} />
                            </div>
                            <Container>
                                <Row style={{ justifyContent: "center" }} noGutters>
                                    <Col md={8}>
                                        <div className="row-col" style={{ background: "#DFDFDF" }}>
                                            <div className="workshop-entry passed">
                                                "LE DESIGN D'UN IOT" par <span>SAAD ZABARI</span>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col>
                                        <div className="row-col" style={{ background: "#DFDFDF" }}>
                                            <div className="col-button">
                                                <a className="botona button-facebook" href="https://fb.watch/4zNr6K8XRw/" target="_blank" rel="noreferrer">
                                                    <div className="fb-live">
                                                        <Facebook color="white" />
                                                    </div>{" "}
                                                    Allez sur Facebook <ExternalLink color="white" />
                                                </a>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                                <Row style={{ justifyContent: "center" }} noGutters>
                                    <Col md={8}>
                                        <div className="row-col">
                                            <div className="workshop-entry passed">
                                                "INTRO TO REACT NATIVE" par <span> YOUSSOUF EL AZIZI</span>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col>
                                        <div className="row-col">
                                            <div className="col-button">
                                                <a className="botona button-facebook" href="https://fb.watch/4zNyRLs5Ee/" target="_blank" rel="noreferrer">
                                                    <div className="fb-live">
                                                        <Facebook color="white" />
                                                    </div>{" "}
                                                    Allez sur Facebook <ExternalLink color="white" />
                                                </a>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                                <Row style={{ justifyContent: "center" }} noGutters>
                                    <Col md={8}>
                                        <div className="row-col" style={{ background: "#DFDFDF" }}>
                                            <div className="workshop-entry passed">
                                                "CREATE YOUR FIRST SMART CONTRACT WITH SOLIDITY" par <span>SOUHAIL MSSASSI</span>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col>
                                        <div className="row-col" style={{ background: "#DFDFDF" }}>
                                            <div className="col-button">
                                                <a className="botona button-facebook" href="https://fb.watch/4zNBzCFpFx/" target="_blank" rel="noreferrer">
                                                    <div className="fb-live">
                                                        <Facebook color="white" />
                                                    </div>{" "}
                                                    Allez sur Facebook <ExternalLink color="white" />
                                                </a>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                                <Row style={{ justifyContent: "center" }} noGutters>
                                    <Col md={8}>
                                        <div className="row-col">
                                            <div className="workshop-entry passed">
                                                "GOOD DECISIONS MAKE GOOD DESIGN" par <span> ISMAIL EL AZIZI</span>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col>
                                        <div className="row-col">
                                            <div className="col-button">
                                                <a className="botona button-facebook" href="https://fb.watch/4zNjsmQZy8/" target="_blank" rel="noreferrer">
                                                    <div className="fb-live">
                                                        <Facebook color="white" />
                                                    </div>{" "}
                                                    Allez sur Facebook <ExternalLink color="white" />
                                                </a>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </Container>
                        </Row>
                        <Row style={{ justifyContent: "center", marginTop: 50 }}>
                            <div className="sub-heading">
                                <span style={{ color: "white" }}>Workshops du jour 2</span>
                                <hr style={{ background: "white" }} />
                            </div>
                            <Container>
                                <Row style={{ justifyContent: "center" }} noGutters>
                                    <Col md={8}>
                                        <div className="row-col" style={{ background: "#DFDFDF" }}>
                                            <div className="workshop-entry">
                                                "LET'S CREATE AN AI IN THIS SESSION" par <span>ABDERRAHMAN JAIZE</span>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col>
                                        <div className="row-col" style={{ background: "#DFDFDF" }}>
                                            <div className="col-button">
                                                <a className="botona button-facebook" href="https://www.facebook.com/Opensdays/posts/2962573270654673" target="_blank" rel="noreferrer">
                                                    <div className="fb-live">
                                                        <Facebook color="white" />
                                                        <Live width={40} stroke="white" strokeWidth={20} height={40} fill="#B964A6" />
                                                    </div>{" "}
                                                    Allez sur Facebook <ExternalLink color="white" />
                                                </a>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                                <Row style={{ justifyContent: "center" }} noGutters>
                                    <Col md={8}>
                                        <div className="row-col">
                                            <div className="workshop-entry">
                                                "LEARN TO IMPLEMENT AUTHENTICATION CHEAPLY AND SECURELY" par <span> SMAIL GHALLOU</span>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col>
                                        <div className="row-col">
                                            <div className="col-button">
                                                <a className="botona button-facebook" href="https://www.facebook.com/Opensdays/posts/2962575113987822" target="_blank" rel="noreferrer">
                                                    <div className="fb-live">
                                                        <Facebook color="white" />
                                                        <Live width={40} stroke="white" strokeWidth={20} height={40} fill="#B964A6" />
                                                    </div>{" "}
                                                    Allez sur Facebook <ExternalLink color="white" />
                                                </a>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                                <Row style={{ justifyContent: "center" }} noGutters>
                                    <Col md={8}>
                                        <div className="row-col" style={{ background: "#DFDFDF" }}>
                                            <div className="workshop-entry">
                                                "7 HABITUDES D’INGÉNIEURS QUI RÉUSSISSENT" par <span>DJALAL E.B</span>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col>
                                        <div className="row-col" style={{ background: "#DFDFDF" }}>
                                            <div className="col-button">
                                                <a className="botona button-facebook" href="https://www.facebook.com/Opensdays/posts/2962574173987916" target="_blank" rel="noreferrer">
                                                    <div className="fb-live">
                                                        <Facebook color="white" />
                                                        <Live width={40} stroke="white" strokeWidth={20} height={40} fill="#B964A6" />
                                                    </div>{" "}
                                                    Allez sur Facebook <ExternalLink color="white" />
                                                </a>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                                <Row style={{ justifyContent: "center" }} noGutters>
                                    <Col md={8}>
                                        <div className="row-col">
                                            <div className="workshop-entry">
                                                "MICRO-FRONTEND ARCHITECTURE" par <span> ABDERRAHIM SOUBAI-ELIDRISI</span>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col>
                                        <div className="row-col">
                                            <div className="col-button">
                                                <a className="botona button-facebook" href="https://www.facebook.com/Opensdays/posts/2962575580654442" target="_blank" rel="noreferrer">
                                                    <div className="fb-live">
                                                        <Facebook color="white" />
                                                        <Live width={40} stroke="white" strokeWidth={20} height={40} fill="#B964A6" />
                                                    </div>{" "}
                                                    Allez sur Facebook <ExternalLink color="white" />
                                                </a>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                                <Row style={{ justifyContent: "center" }} noGutters>
                                    <Col md={8}>
                                        <div className="row-col" style={{ background: "#DFDFDF" }}>
                                            <div className="workshop-entry">
                                                "DATABASES ARE THERE TO HELP YOU (POSTGRESQL, REDIS AS AN EXAMPLE)" par <span> JAAFARI EL HOUSSEINE</span>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col>
                                        <div className="row-col" style={{ background: "#DFDFDF" }}>
                                            <div className="col-button">
                                                <a className="botona button-facebook" href="https://www.facebook.com/Opensdays/posts/2962576183987715" target="_blank" rel="noreferrer">
                                                    B964A6{" "}
                                                    <div className="fb-live">
                                                        <Facebook color="white" />
                                                        <Live width={40} stroke="white" strokeWidth={20} height={40} fill="#B964A6" />
                                                    </div>{" "}
                                                    Allez sur Facebook <ExternalLink color="white" />
                                                </a>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </Container>
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
