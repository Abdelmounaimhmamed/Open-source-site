import React, { useEffect, useState } from "react";
import countdown from "countdown";
import "../sass/Counter.scss";
import moment from "moment";
import { Row, Col } from "reactstrap";
import { ChevronsDown } from "react-feather";
import { Link } from "react-scroll";

const Counter = () => {
  const [counter, setCounter] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    diff: 999,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      // const eventDate = new Date("03-30-2021");
      const eventDate = 1652686200000;
      const ctdwn = countdown(
        null,
        eventDate,
        countdown.DAYS | countdown.HOURS | countdown.MINUTES | countdown.SECONDS
      );
      setCounter({
        days: ctdwn.days,
        hours: ctdwn.hours,
        minutes: ctdwn.minutes,
        seconds: ctdwn.seconds,
        diff: eventDate - moment().valueOf(),
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return counter.diff > 0 ? (
    <div className="counter">
      <Row>
        <Col md={6} xs={3}>
          <div className="counter-card">
            <div className="counter-card-number">{counter.days}</div>
            <div className="counter-card-title">Jours</div>
          </div>
        </Col>
        <Col md={6} xs={3}>
          <div className="counter-card">
            <div className="counter-card-number">{counter.hours}</div>
            <div className="counter-card-title">Heures</div>
          </div>
        </Col>
        <Col md={6} xs={3}>
          <div className="counter-card">
            <div className="counter-card-number">{counter.minutes}</div>
            <div className="counter-card-title">Minutes</div>
          </div>
        </Col>
        <Col md={6} xs={3}>
          <div className="counter-card">
            <div className="counter-card-number">{counter.seconds}</div>
            <div className="counter-card-title">Secondes</div>
          </div>
        </Col>
      </Row>
    </div>
  ) : (
    <div className="links-available-container">
      <div className="links-available">
      L'horaire de l’événement est disponible
      </div>
      <Link to="streamLinks" smooth={true} duration={500} containerId="root">
        <div className="scroll-tosee">
          <ChevronsDown className="animate" size={80} />
          <span>
            Faites défiler la page pour vivre une expérience incroyable
          </span>
        </div>
      </Link>
    </div>
  );
};

export default Counter;
