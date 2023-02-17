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
      day: "16",
      month: "MaI",
    },
    events: [
      {
        start: "08:30",
        end: "09:00",
        title: "Acceuil des invités",
      },
      
      {
        start: "09:00",
        end: "09:45",
        title: "Mots d’ouverture:",
        speakers: [
          {
            name: "Président de l’université Sultan Moulay Slimane M.HMINA Nabil",
            post: "",
          },
          {
            name: "M.Hmina Nabil",
            post: "Président de l’université Moulay Slimane.",
          },
          {
            name: "M.SAJIEDDINE Mohammed",
            post: "Directeur de l’ENSA KHOURIBGA.",
          },
          {
            name: "M.HAFIDI Imad",
            post: "Fondateur d’Open source Days.",
          },
          {
            name: "Mme.Salma EL FADILI",
            post: "Président de comité organisateur.",
          },
          {
            name: "Lancement du Hackthon OpenHack ",
            post: "",
          },
        ],
      },
      {
        start: "9:45",
        end: "10:30",
        title: "Keynote d’ouverture:",
        speakers: [
          {
            name: "Ayoub KEBAILI",
            post: "Data & AI Lead Microsoft",
          },
        ],
      },
      {
        start: "10:30",
        end: "11:30",
        title: "Conférence 1:",
        speakers: [
          {
            name: "Larbi OUIZYME",
            post: "le cloud et le Big Data au service des objets connectés",
          },
        ],
      },
      {
        start: "11:30",
        end: "11:45",
        title:
          'Pause café',
      },
      {
        start: "11:45",
        end: "12:45",
        title: "Conférence 2:",
        speakers: [
          {
            name: "Soulaimane AMRI",
            post: "L'ingénieur à l'ère de la transformation digitale",
          },
        ],
      },
      {
        start: "12:45",
        end: "14:00",
        title: "Pause déjeuner",
      },
      {
        start: "14:00",
        end: "15:00",
        title: "Conférence 3:",
        speakers: [
          {
            name: "Badr BOUSSABAT",
            post: "Metaverse et IA: un futur Inclusive",
          },
        ],
      },
      {
        start: "15:00",
        end: "16:00",
        title: "Lancement des ateliers de formation:",
        speakers: [
          {
            name: "Nadiaa Naanaa",
            post: "Le Self service BI:enjeux et outils.",
          },
        ],
      },
      {
        start: "",
        end: "En parallèle",
        title: "Atelier de Ilham IKBAL:",
        speakers: [
          {
            name: "autour des métiers de la cybersécurité.",
            post: "",
          },
        ],
      },
      {
        start: "16:00",
        end: "18:00",
        title: "Suite des ateliers des formations:",
        speakers: [
          {
            name: "Amina MOUMNI",
            post: "Projet",
          },
        ],
      },
      {
        start: "18:00",
        end: "",
        title: "Cloture des ateliers, et visite du lieu de hackaton",
      },
    ],
    
  },
  
  {
    date: {
      day: "17",
      month: "Mai",
    },
    events: [
      {
        start: "08:30",
        end: "09:00",
        title: "Acceuil des invites",
      },
      {
        start: "09:00",
        end: "10:00",
        title:
          'Conférence 1:',
        speakers: [
          {
            name: "Mahdi CHALLIGUI:",
            post: "le role des datacenter en tant qu’Infrastructure sinequanone a la digitalisation.",
          },
        ],
      },
      {
        start: "10:00",
        end: "10:15",
        title: "Pause café",
      },
      {
        start: "10:15",
        end: "11:15",
        title:
          'Conférence 2:',
        speakers: [
          {
            name: "Homame SOUSSI",
            post: ": la transformation digitale basées sur les données.",
          },
        ],
      },
      {
        start: "12:15",
        end: "14:00",
        title: "Conférence 3:",
        speakers: [
          {
            name: "Amadou DIWARA",
            post: "l’intelligence collectif.",
          },
        ],
      },
      {
        start: "14:00",
        end: "15:00",
        title: "Lancement des ateliers de formation:",
        speakers: [
          {
            name: "Wajih OUTAL",
            post: "Azure Data et Power BI.",
          },
        ],
      },
      {
        start: "15:00",
        end: "16:00",
        title: 'Table ronde:',
        speakers: [
          {
            name: "Salah eddine MIMOUNIL",
            post: "",
          },
          {
            name: "Aziz NAWFAL (Almou9awil)",
            post: "",
          },
          {
            name: "Hanane BENHADDI",
            post: "",
          },
          {
            name: "Yassine EL HADDADI",
            post: "",
          },
        ],
        
      },
      {
        start: "16:00",
        end: "16:15",
        title: "Pause café ",
      },
      {
        start: "16:15",
        end: "17:30",
        title: "Les pitchs",
      },
      {
        start: "17:30",
        end: "18:30",
        title: "Cloture de la compétition",
      },
      {
        start: "18:30",
        end: "",
        title: "Cérémonie de Clôture (pause musicale)/sketch et remise des prix du hackaton OpenHack",
      },
      // {
      //   start: "16:15",
      //   end: "17:30",
      //   title: "Session partage d’expérience avec les Chairs des 9 dernières Edition d’Open source Days",
      // },
      // {
      //   start: "17:30",
      //   end: "18:00",
      //   title: "Cloture de la compétition",
      // },
      // {
      //   start: "18:00",
      //   end: "",
      //   title: "Cérémonie de Cloture (pause musicale) et remise des prix du hackaton Open Data",
      // },
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
