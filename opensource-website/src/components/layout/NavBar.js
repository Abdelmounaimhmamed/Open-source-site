import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import "../../sass/NavBar.scss";
import logo from "../../assets/logo-white.png";
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem } from "reactstrap";
import { Link } from "react-scroll";

const Example = props => {
    const history = useHistory();
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    useEffect(() => {
        const root = document.getElementById("root");
        root.onscroll = e => {
            const navbar = document.querySelector(".site-navbar");
            if (root.scrollTop > 23) {
                navbar.style.position = "fixed";
                navbar.style.top = "0";
                navbar.style.left = "0";
                navbar.style.background = "#1f2426";
                navbar.style.boxShadow = "0px 0px 10px black";
            } else {
                navbar.style.position = "absolute";
                navbar.style.top = "30px";
                navbar.style.left = "unset";
                navbar.style.background = "none";
                navbar.style.boxShadow = "none";
            }
        };
    }, []);

    return (
        <div className="site-navbar">
            <Navbar dark expand="md">
                <NavbarBrand
                    href="/"
                    onClick={e => {
                        e.preventDefault();
                        history.push("/");
                    }}
                >
                    <img src={logo} style={{ width: "6vw" }} alt="" className="brand-logo" />
                    <span className="brand-name">Open Source Days {props.version}</span>
                </NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem className="nav-item">
                            <Link
                                onClick={e => {
                                    e.preventDefault();
                                    history.push(props.version === "9.0" ? `/` : `/opensource9`);
                                }}
                                href="/"
                            >
                                Open Source {props.version === "9.0" ? "10.0" : "9.0"}
                            </Link>
                        </NavItem>
                        <NavItem className="nav-item">
                            <Link containerId="root" to="home" spy={true} smooth={true} duration={500}>
                                Acceuil
                            </Link>
                        </NavItem>
                        <NavItem className="nav-item">
                            <Link containerId="root" to="about" spy={true} smooth={true} duration={500}>
                                À propos
                            </Link>
                        </NavItem>
                        <NavItem className="nav-item">
                            <Link containerId="root" to="speakers" spy={true} smooth={true} duration={500}>
                                Invités
                            </Link>
                        </NavItem>
                        <NavItem className="nav-item">
                            <Link containerId="root" to="schedules" spy={true} smooth={true} duration={500}>
                                Programme
                            </Link>
                        </NavItem>
                        {/* <NavItem className="nav-item">
                            <Link containerId="root" to="tickets" spy={true} smooth={true} duration={500}>
                                Billets
                            </Link>
                        </NavItem> */}
                        {/* <NavItem className="nav-item">
              <Link
                containerId='root'
                to='archive'
                spy={true}
                smooth={true}
                duration={500}
              >
              Archive
              </Link>
            </NavItem> */}
                        <NavItem className="nav-item">
                            <Link containerId="root" to="team" spy={true} smooth={true} duration={500}>
                                Équipe
                            </Link>
                        </NavItem>
                        <NavItem className="nav-item">
                            <Link containerId="root" to="sponsors" spy={true} smooth={true} duration={500}>
                                Sponsors
                            </Link>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
};

export default Example;
