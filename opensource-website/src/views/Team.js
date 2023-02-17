import React from "react";
import { Col, Container, Row } from "reactstrap";
import hafidi from "../assets/Team/hafidi.jfif";
import ghazdali from "../assets/Team/ghazdali.jfif";
import fadili from "../assets/Team/comite_os_10/Fadili Salma.jpg";
import lhafidi from "../assets/Team/comite_os_10/HAFIDI LOUBNA.jpg";
import ihimmich from "../assets/Team/comite_os_10/HIMMICH IKRAM.jpg";
import malainine from "../assets/Team/comite_os_10/malainine.jpg";
import mjahed from "../assets/Team/comite_os_10/Mohammed_MJAHED.jpg";
import ettahiri from "../assets/Team/comite_os_10/Azizaettahiri.jpg";
import ahrouch from "../assets/Team/comite_os_10/hrouchaymane.jpg";
import mhabibi from "../assets/Team/comite_os_10/mhabibi.png";
import amatouk from "../assets/Team/comite_os_10/AFAF_MATOUK.jpg";
import slaanani from "../assets/Team/slaanani.jpg";
import mferdous from "../assets/Team/comite_os_10/mferdous.jpg";
import ajalal from "../assets/Team/comite_os_10/ajalal.jpg";
import melmouki from "../assets/Team/comite_os_10/melmouki.png";
import zghouzlani from "../assets/Team/comite_os_10/zghouzlani.png";
import ktantaoui from "../assets/Team/comite_os_10/ktantaoui.png";
import mguerrab from "../assets/Team/comite_os_10/mguerrab.png";
import unknown from "../assets/Team/comite_os_10/unknown.jpg";
import { Linkedin, Mail } from "react-feather";

const honorComittee = [
    {
        name: "N. HMINA",
        post: "Le Président de l'Université Sultan Moulay Slimane.",
    },
    {
        name: "M. SAJIEDDINE",
        post: "Le Directeur de l'Ecole Nationale des Sciences Appliquées de Khouribga.",
    },
    {
        name: "M-S. KADIRI",
        post: "Le Directeur adjoint de l'Ecole Nationale des Sciences Appliquées de Khouribga.",
    },
];

const teamVIP = [
    {
        fullname: "M. Abdelghni Ghazdali",
        picture: ghazdali,
        work: "Enseignant-Chercheur en Mathématiques Appliquées et Science des données, Ecole Nationale des Sciences Appliquées de Khouribga, USMS",
        post: "Coordinateur de l'événement",
        linkedin: "https://linkedin.com/in/abdelghani-ghazdali-20bb5442",
        email: "a.ghazdali@gmail.com",
    },
    {
        fullname: "M. Imad Hafidi",
        picture: hafidi,
        work: "Enseignant-Chercheur en Mathématiques Appliquées et Science des données, Ecole Nationale des Sciences Appliquées de Khouribga, USMS",
        post: "Fondateur de l'événement",
        email: "imad.hafidi@gmail.com",
        linkedin: "https://www.linkedin.com/in/hafidi-imad-689500107/",
    },
];

const team = [
    {
        fullname: "EL FADILI Salma",
        picture: fadili,
        work: "Étudiant en 2ème année Informatique et Ingénierie des Données.",
        post: "Présidente de l'événement",
    },
    {
        fullname: "HAFIDI Loubna",
        picture: lhafidi,
        work: "Étudiant en 2ème année Informatique et Ingénierie des Données.",
        post: "Responsable conférences et ateliers",
    },
    {
        fullname: "MATOUK Afaf",
        picture: amatouk,
        work: "Étudiante en 1ère année Informatique et Ingénierie des Données.",
        post: "Responsable Sponsoring et partenariat",
    },
    {
        fullname: "GUERRAB Mouna",
        picture: mguerrab,
        work: "Étudiante en 1ère année Informatique et Ingénierie des Données.",
        post: "Responsable divertissement",
    },
    {
        fullname: "HIMMICH Ikram",
        picture: ihimmich,
        work: "Étudiant en 2ème année Génie Informatique.",
        post: "Responsable des relations publiques",
    },
    {
        fullname: "GHOUZLANI Ziad",
        picture: zghouzlani,
        work: "Étudiant en 1ère année Génie Informatique.",
        post: "Responsable technique",
    },
    {
        fullname: "MJAHED Mohammed",
        picture: mjahed,
        work: "Étudiant en 1ére année Génie Informatique.",
        post: "Responsable technique",
    },
    {
        fullname: "MALAININE Mohammed",
        picture: malainine,
        work: "Étudiant en 1ère année Génie Informatique.",
        post: "Responsable technique",
    },
    {
        fullname: "HROUCH Aymane",
        picture: ahrouch,
        work: "Étudiant en 2éme année Informatique et Ingénierie des Données.",
        post: "Responsable technique",
    },
    {
        fullname: "LAANANI Souhaib",
        picture: slaanani,
        work: "Étudiant en 2éme année Génie Informatique.",
        post: "Responsable technique",
    },
    {
        fullname: "HABIBI Mohamed",
        picture: mhabibi,
        work: "Étudiant en 2ème année Informatique et Ingénierie des Données.",
        post: "Responsable compétition",
    },
    {
        fullname: "FERDOUS Mouhcine",
        picture: mferdous,
        work: "Étudiant en 2ème année Informatique et Ingénierie des Donnée",
        post: "Responsable logistique",
    },
    {
        fullname: "JALAL Alaaedine",
        picture: ajalal,
        work: "Étudiant en 2ème année Informatique et Ingénierie des Donnée",
        post: "Responsable logistique",
    },
    {
        fullname: "EL MOUKI Mohammed",
        picture: melmouki,
        work: "Étudiant en 2ème année Génie Informatique.",
        post: "Responsable sponsoring",
    },
    {
        fullname: "TANTAOUI Khaoula",
        picture: ktantaoui,
        work: "Étudiante en 2ème année Génie Informatique.",
        post: "Responsable sponsoring",
    },
    {
        fullname: "ETTAHIRI Aziza",
        picture: ettahiri,
        work: "Étudiant en 1ère année Génie Informatique.",
        post: "Responsable exposition",
    },
];

const organisationCommitee = ["A. GHAZDALI", "A. METRANE", "A. IFZARNE", "A. DARGHAM", "A. AZOUANI", "B. OUARTASSI", "F. ENNAJI", "H. KHALFI", "I. HAFIDI", "I. ABOULKHIR", "N. IDRISSI FATMI", "N. LAMGHARI", "N. SOUSSI", "Y. EL HADFI", "Y. ROCHD"];

const Team = () => {
    return (
        <div className="team">
            <Container>
                <div className="heading">
                    <span>Comité d'honneur</span>
                    <hr />
                </div>
                <Row style={{ marginBottom: 100, justifyContent: "center" }}>
                    <Col md={8}>
                        <div className="list">
                            {honorComittee.map((item, key) => (
                                <div key={key} className="list-item">
                                    <span className="name">{item.name}</span>
                                    <span className="post">{item.post}</span>
                                </div>
                            ))}
                        </div>
                    </Col>
                </Row>
                <div className="heading">
                    <span>Notre équipe</span>
                    <hr />
                </div>
                <Row md={3} sm={1} xs={1} style={{ marginBottom: 100, justifyContent: "center" }}>
                    {teamVIP.map((item, key) => (
                        <Col key={key} style={{ marginBottom: 100 }}>
                            <div className="team-member-card">
                                <div className="image" style={{ backgroundImage: `url('${item.picture}')` }}></div>
                                <div className="fullname">{item.fullname}</div>
                                <div className="work">{item.work}</div>
                                <div className="post">{item.post}</div>
                                <div className="socials">
                                    {item.email ? (
                                        <a href={`mailto:${item.email}`}>
                                            <Mail />
                                        </a>
                                    ) : (
                                        ""
                                    )}
                                    {item.linkedin ? (
                                        <a href={item.linkedin} target="_blank" rel="noreferrer">
                                            <Linkedin />
                                        </a>
                                    ) : (
                                        ""
                                    )}
                                </div>
                            </div>
                        </Col>
                    ))}
                </Row>
                <Row md={4} sm={3} xs={1} style={{ justifyContent: "center" }}>
                    {team.map((item, key) => (
                        <Col key={key} style={{ marginBottom: 100 }}>
                            <div className="team-member-card">
                                <div className="image" style={{ backgroundImage: `url('${item.picture}')` }}></div>
                                <div className="fullname">{item.fullname}</div>
                                <div className="work">{item.work}</div>
                                <div className="post">{item.post}</div>
                                <div className="socials">
                                    {item.email ? (
                                        <a href={`mailto:${item.email}`}>
                                            <Mail />
                                        </a>
                                    ) : (
                                        ""
                                    )}
                                    {item.linkedin ? (
                                        <a href={item.linkedin} target="_blank" rel="noreferrer">
                                            <Linkedin />
                                        </a>
                                    ) : (
                                        ""
                                    )}
                                </div>
                            </div>
                        </Col>
                    ))}
                </Row>
                <div className="heading">
                    <span>Comité d'organisation</span>
                    <hr />
                </div>
                <div className="sub-heading">
                    <span>Enseignants-Chercheurs</span>
                    <hr />
                </div>
                <Row style={{ marginBottom: 100, justifyContent: "center" }}>
                    <Col md={8}>
                        <div className="list">
                            {organisationCommitee.map((item, key) => (
                                <div key={key} className="list-item">
                                    <span className="name">{item}</span>
                                </div>
                            ))}
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Team;
