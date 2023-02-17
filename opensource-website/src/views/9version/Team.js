import React from "react";
import { Col, Container, Row } from "reactstrap";
import hafidi from "../../assets/Team/hafidi.jfif";
import ghazdali from "../../assets/Team/ghazdali.jfif";
import hablatou from "../../assets/Team/hablatou.png";
import belaassri from "../../assets/Team/belaassri.jpg";
import hantari from "../../assets/Team/hamza.jpeg";
import laafia from "../../assets/Team/laafia.jpeg";
import laabsi from "../../assets/Team/laabssi.jpg";
import brahmi from "../../assets/Team/brahmi.jpg";
import salek from "../../assets/Team/salek.jpg";
import mahdar from "../../assets/Team/mahdar.jpeg";
import arouini from "../../assets/Team/arouini.JPG";
import moktafi from "../../assets/Team/moktafi.PNG";
import tarhate from "../../assets/Team/tarhate.jpeg";
import knouzi from "../../assets/Team/knouzi.JPG";
import zkim from "../../assets/Team/zkim.jpg";
import slaanani from "../../assets/Team/slaanani.jpg";
import ayman from "../../assets/Team/ayman.jfif";
import { Linkedin, Mail } from "react-feather";

const honorComittee = [
  {
    name: "N. HMINA",
    post: "Le Président de l'Université Sultan Moulay Slimane.",
  },
  {
    name: "M. SAJIEDDINE",
    post:
      "Le Directeur de l'Ecole Nationale des Sciences Appliquées de Khouribga.",
  },
  {
    name: "M-S. KADIRI",
    post:
      "Le Directeur adjoint de l'Ecole Nationale des Sciences Appliquées de Khouribga.",
  },
];

const teamVIP = [
  {
    fullname: "M. Abdelghni Ghazdali",
    picture: ghazdali,
    work:
      "Enseignant-Chercheur en Mathématiques Appliquées et Science des données, Ecole Nationale des Sciences Appliquées de Khouribga, USMS",
    post: "Coordinateur de l'événement",
    linkedin: "https://linkedin.com/in/abdelghani-ghazdali-20bb5442",
    email: "a.ghazdali@gmail.com",
  },
  {
    fullname: "M. Imad Hafidi",
    picture: hafidi,
    work:
      "Enseignant-Chercheur en Mathématiques Appliquées et Science des données, Ecole Nationale des Sciences Appliquées de Khouribga, USMS",
    post: "Fondateur de l'événement",
    email: "imad.hafidi@gmail.com",
    linkedin: "https://www.linkedin.com/in/hafidi-imad-689500107/",
  },
];

const team = [
  {
    fullname: "Youssef Hablatou",
    picture: hablatou,
    work: "Étudiant en 2ème année Informatique et Ingénierie des Données.",
    post: "Président de l'événement",
    email: "yhablatou@gmail.com",
    linkedin: "https://www.linkedin.com/in/youssef-hablatou-4248381a9/",
  },
  {
    fullname: "Hamza El Hantari",
    picture: hantari,
    work: "Étudiant en 2ème année Informatique et Ingénierie des Données.",
    post: "Vice président de l'événement",
    email: "hamza.hantari2010@gmail.com",
    linkedin: "https://www.linkedin.com/in/hamza-el-hantari-7b5a33204",
  },
  {
    fullname: "Siham Belaâssri",
    picture: belaassri,
    work: "Étudiante en 1ère année Génie Informatique.",
    post: "Responsable des relations publiques",
    email: "siham.belaassri11@gmail.com",
    linkedin: "http://linkedin.com/in/siham-belaassri-b875b0193",
  },
  {
    fullname: "Aicha Laafia",
    picture: laafia,
    work: "Étudiante en 1ère année Génie Informatique.",
    post: "Responsable Administration",
    email: "aichalaafia1@gmail.com",
    linkedin: "https://www.linkedin.com/in/aicha-laafia-0266a6126/",
  },
  {
    fullname: "Youssef Zkim",
    picture: zkim,
    work: "Étudiant en 1ère année Génie Informatique.",
    post: "Responsable Technique",
    email: "youssef.zkim1998@gmail.com",
    linkedin: "https://www.linkedin.com/in/youssef-zkim",
  },
  {
    fullname: "Souhaib Laanani",
    picture: slaanani,
    work: "Étudiant en Tronc Commun.",
    post: "Responsable Technique",
    email: "souhaib.laanani@gmail.com",
    linkedin: "https://www.linkedin.com/in/souhaib-laanani/",
  },
  {
    fullname: "Wissal Laabsi",
    picture: laabsi,
    work: "Étudiante en 1ère année Génie Informatique.",
    post: "Responsable du rédaction",
    email: "wissallabssi@gmail.com",
    linkedin: "https://www.linkedin.com/in/wissal-laabssi-1821a6168",
  },
  {
    fullname: "Ilyass Brahmi",
    picture: brahmi,
    work: "Étudiant en 2ème année Informatique et Ingénierie des Données.",
    post: "Responsable Logistiques",
    email: "ilyassbrahmi3@gmail.com",
    linkedin: "https://www.linkedin.com/in/ilyass-brahmi-a4467b19b/",
  },
  {
    fullname: "Omar Salek",
    picture: salek,
    work: "Étudiant en 2ème année Informatique et Ingénierie des Données.",
    post: "Responsable du compétition",
    email: "omarsalek98@gmail.com",
    linkedin: "https://www.linkedin.com/in/omar-salek-404523162/",
  },
  {
    fullname: "Anas Mahdar",
    picture: mahdar,
    work: "Étudiant en 2ème année Informatique et Ingénierie des Données.",
    post: "Responsable Sponsoring",
    linkedin: "https://www.linkedin.com/in/anas-mahdar",
    email: "anasmahdar60@gmail.com",
  },
  {
    fullname: "Youssef Arouini",
    picture: arouini,
    work: "Étudiant en 2ème année Informatique et Ingénierie des Données.",
    post: "Responsable Sponsoring",
    email: "arouiniyoussef@gmail.com",
    linkedin: "https://www.linkedin.com/in/youssef-arouini-05161312b/",
  },
  {
    fullname: "Mouad El Moktafi",
    picture: moktafi,
    work: "Étudiant en 2ème année Génie Informatique.",
    post: "Responsable Logistiques",
    email: "moaad.elmouktafi@icloud.com",
    linkedin: "https://www.linkedin.com/in/moaad-elmouktafi-33094b137",
  },
  {
    fullname: "Oumaima Tarhate",
    picture: tarhate,
    work: "Étudiante en 2ème année Informatique et Ingénierie des Données.",
    post: "Responsable du compétition",
    email: "tarhateomaima@gmail.com",
    linkedin: "https://linkedin.com/in/tarhate-omaima-0631001ab",
  },
  {
    fullname: "Maryam Knouzi",
    picture: knouzi,
    work: "Étudiante en 2ème année Master Big Data et Aide à la Décision.",
    post: "Responsable du divertissement",
    email: "maryamknouzi@gmail.com",
    linkedin: "https://www.linkedin.com/in/maryam-knouzi-10b954164",
  },
  {
    fullname: "Aymane Lemlih",
    picture: ayman,
    work: "Étudiant en 2ème année Génie Informatique.",
    post: "Responsable Technique",
    email: "aymanelemlih@gmail.com",
    linkedin: "https://www.linkedin.com/in/aymane-lemlih-a71261163/"
  }
];

const organisationCommitee = [
  "A. GHAZDALI",
  "A. METRANE",
  "A. IFZARNE",
  "A. DARGHAM",
  "A. AZOUANI",
  "B. OUARTASSI",
  "F. ENNAJI",
  "H. KHALFI",
  "I. HAFIDI",
  "I. ABOULKHIR",
  "N. IDRISSI FATMI",
  "N. LAMGHARI",
  "N. SOUSSI",
  "Y. EL HADFI",
  "Y. ROCHD",
];

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
        <Row
          md={3}
          sm={1}
          xs={1}
          style={{ marginBottom: 100, justifyContent: "center" }}
        >
          {teamVIP.map((item, key) => (
            <Col key={key} style={{ marginBottom: 100 }}>
              <div className="team-member-card">
                <div
                  className="image"
                  style={{ backgroundImage: `url('${item.picture}')` }}
                ></div>
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
                <div
                  className="image"
                  style={{ backgroundImage: `url('${item.picture}')` }}
                ></div>
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
