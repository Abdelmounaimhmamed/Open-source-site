import React, { useState } from "react";
import { Col, Container, Row } from "reactstrap";
import { Transition } from "react-transition-group";
import { Link } from "react-scroll";

const duration = 300;

const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0,
};

const transitionStyles = {
  entering: { opacity: 1 },
  entered: { opacity: 1 },
  exiting: { opacity: 0 },
  exited: { opacity: 0 },
};

const schedule = [
  {
    date: {
      day: "30",
      month: "Mars",
    },
    events: [
      {
        start: "08:00",
        end: "09:30",
        title: "Acceuil des participants",
      },
      {
        start: "09:30",
        end: "10:00",
        title: "Mots d’ouverture",
        speakers: [
          {
            name: "M.Hmina Nabil",
            post: "Président de l’Université Sultan Moulay Slimane.",
          },
          {
            name: "Pr. Mohammed Sajieddine",
            post: "Directeur de l’ENSA de Khouribga.",
          },
          {
            name: "Pr. Abdelghani Ghazdali",
            post: "Coordonnateur d’Open Source Days",
          },
          {
            name: "Pr. Imad Hafidi",
            post: "Fondateur d’Open Source Days.",
          },
          {
            name: "M. Youssef Hablatou",
            post: "Président du comité de pilotage de l’Open Source Days",
          },
        ],
      },
      {
        start: "10:00",
        end: "11:00",
        title: 'Conférence 1: "Une brève introduction à la Blockchain"',
        speakers: [
          {
            name: "Samir Bennani",
            post: "MIT certified Blockchain expert",
          },
        ],
      },
      {
        start: "11:00",
        end: "11:30",
        title: "Pause-café",
      },
      {
        start: "11:30",
        end: "12:30",
        title:
          'Conférence 2: "Algorithmes de recommandation,Explication et dérives"',
        speakers: [
          {
            name: "Othman Safsafi",
            post: "PhD. Université de Sorbonne",
          },
        ],
      },
      {
        start: "12:30",
        end: "14:30",
        title: "Déjeuner",
      },
      {
        start: "14:30",
        end: "17:00",
        title: "Workshops (Online)",
        speakers: [
          {
            name: "LE DESIGN D'UN IOT",
            post: "ZABARI SAAD",
          },
          {
            name: "INTRO TO REACT NATIVE",
            post: "YOUSSOUF EL AZIZI",
          },
          {
            name: "CREATE YOUR FIRST SMART CONTRACT WITH SOLIDITY",
            post: "SOUHAIL MSSASSI",
          },
          {
            name: "GOOD DECISIONS MAKE GOOD DESIGN",
            post: "ISMAIL EL AZIZI",
          },
        ],
      },
      {
        start: "15:00",
        end: "19:30",
        title: "la Compétition OPENSOURCE 9.0",
      },
    ],
  },
  {
    date: {
      day: "31",
      month: "Mars",
    },
    events: [
      {
        start: "08:00",
        end: "09:00",
        title: "Accueil des participants",
      },
      {
        start: "09:00",
        end: "10:30",
        title:
          'Conférence 1: "Software Craftsmanship ou comment exceller en carrière technique ?"',
        speakers: [
          {
            name: "Sallah Kokaina",
            post: "",
          },
        ],
      },
      {
        start: "10:30",
        end: "11:15",
        title: "Pause-Café",
      },
      {
        start: "11:15",
        end: "12:15",
        title:
          'Keynote: "Comment activer correctement la mise à niveau vers le mode professionnel"',
        speakers: [
          {
            name: "Diaa Alhak EL FALLOUS",
            post: "",
          },
        ],
      },
      {
        start: "12:15",
        end: "14:00",
        title: "Déjeuner",
      },
      {
        start: "14:00",
        end: "16:30",
        title: "Workshops (Online)",
        speakers: [
          {
            name: "LET'S CREATE AN AI IN THIS SESSION",
            post: "ABDERRAHMAN JAIZE",
          },
          {
            name: "LEARN TO IMPLEMENT AUTHENTICATION CHEAPLY AND SECURELY",
            post: "SMAIL GHALLOU",
          },
          {
            name: "7 HABITUDES D’INGÉNIEURS QUI RÉUSSISSENT",
            post: "DJALAL E.B",
          },
          {
            name: "MICRO-FRONTEND ARCHITECTURE",
            post: "ABDERRAHIM SOUBAI-ELIDRISI",
          },
          {
            name:
              "DATABASES ARE THERE TO HELP YOU (POSTGRESQL, REDIS AS AN EXAMPLE)",
            post: "JAAFARI EL HOUSSEINE",
          },
        ],
      },
      {
        start: "16:30",
        end: "17:30",
        title: 'Table ronde "Covid et la Digitalisation"',
        speakers: [
          {
            name: "Mustapha Swinga",
            post: "",
          },
          {
            name: "Rachid El Idrissi",
            post: "",
          },
          {
            name: "Ihssane Benalluch",
            post: "",
          },
        ],
      },
      {
        start: "17:30",
        end: "18:00",
        title: "Sharing experience avec les lauréats d'ENSA Khouribga",
      },
      {
        start: "18:00",
        end: "18:15",
        title: "Cérémonie de clôture",
      },
    ],
  },
];

const Schedules = () => {
  const [day, setDay] = useState(0);
  const [inProp, setInProp] = useState(true);
  return (
    <div className="schedules">
      <Container>
        <div className="schedules-days">
          <div
            className={"button " + (day ? "primary-stroke" : "primary-fill")}
            onClick={() => {
              setInProp(false);
              setTimeout(() => {
                setInProp(true);
                setDay(0);
              }, duration);
            }}
          >
            1er jour
          </div>
          <div
            className={"button " + (!day ? "primary-stroke" : "primary-fill")}
            onClick={() => {
              setInProp(false);
              setTimeout(() => {
                setInProp(true);
                setDay(1);
              }, duration);
            }}
          >
            2ème jour
          </div>
        </div>
        <div className="schedules-schedules">
          <div className="date">
            <div className="day">{schedule[day].date.day}</div>
            <div className="month">{schedule[day].date.month}</div>
          </div>
          <div className="events">
            {schedule[day].events.map((event, key) => (
              <Transition timeout={duration} key={key} in={inProp}>
                {(state) => (
                  <div
                    className="event"
                    style={{
                      ...defaultStyle,
                      ...transitionStyles[state],
                    }}
                  >
                    <Container>
                      <Row>
                        <Col md={4}>
                          <div className="time">
                            <span>{event.start}</span> -{" "}
                            <span>{event.end}</span>
                          </div>
                        </Col>
                        <Col>
                          <div className="event-event">
                            <div className="title">{event.title}</div>
                            {event.speakers ? (
                              <div className="speakers">
                                {event.speakers.map((speaker, k) => (
                                  <div className="speaker" key={k}>
                                    <span className="name">
                                      {speaker.name}
                                      {speaker.post === "" ? "" : ": "}
                                    </span>
                                    <span className="post">{speaker.post}</span>
                                  </div>
                                ))}
                              </div>
                            ) : (
                              ""
                            )}
                          </div>
                        </Col>
                      </Row>
                    </Container>
                  </div>
                )}
              </Transition>
            ))}
          </div>
        </div>
        <div className="schedules-days">
          <Link to="schedules" smooth={true} duration={500} containerId="root">
            <div
              className={"button " + (day ? "primary-stroke" : "primary-fill")}
              onClick={() => {
                setInProp(false);
                setTimeout(() => {
                  setInProp(true);
                  setDay(0);
                }, duration);
              }}
            >
              1er jour
            </div>
          </Link>
          <Link to="schedules" smooth={true} duration={500} containerId="root">
            <div
              className={"button " + (!day ? "primary-stroke" : "primary-fill")}
              onClick={() => {
                setInProp(false);
                setTimeout(() => {
                  setInProp(true);
                  setDay(1);
                }, duration);
              }}
            >
              2ème jour
            </div>
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default Schedules;