import React from "react";
import { Container } from "reactstrap";
import img1 from "../assets/1603733356037.jpg";
import img2 from "../assets/ensa.jpeg";
import img3 from "../assets/open source.jpg";
import img4 from "../assets/last.jpg";

const AboutUs = () => {
    return (
        <Container className=".container">
            <div className="heading">
                <span>À propos de nous</span>
                <hr />
            </div>
            <div className="about-us">
                <div className="lead" style={{ textAlign: "center" }}>
                    <p>
                        L'évènement « Open source Days » organisé par le département de Mathématiques et Informatique de l'École Nationale des Sciences Appliquées de Khouribga est une manifestation innovante qui rassemble les étudiants, ingénieurs et scientifiques issus des milieux professionnels et
                        académiques. , cette année nous allons organiser la 10éme édition des Open Source Days qui aura lieu le 16 et 17 Mai sous le thème : A decade of open source : Visualization , innovation and dedication , une édition spéciale (anniversary edition) pour rendre hommage à ceux qui
                        ont travaillé dur au cours de ces 9 dernières années afin que Open Source days soit un succès et qui ont cru en notre mission et nos valeurs communes. C’est notre façon de dire “merci” à toutes les parties prenantes qui ont fait de l’Open source ce qu’il est .. Plus de 600
                        participants sont attendus à l’occasion de la 10ème édition. C’est donc le bon endroit pour échanger des idées, partager des compétences, discuter et traiter des sujets et des problématiques en cohérence avec l’avancement des technologies, ainsi donner aux étudiants les
                        opportunités d’améliorer leurs connaissances en digitalisation et découvrir des nouvelles technologies.
                    </p>
                </div>
                <div className="vertic" />
                <div className="Gallery">
                    <div className="row">
                        <img src={img1} alt="" className="img" />
                        <img src={img2} alt="" className="img" />
                    </div>
                    <div className="row">
                        <img src={img4} alt="" className="img img-last" />
                        <img src={img3} alt="" className="img img-last" />
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default AboutUs;
