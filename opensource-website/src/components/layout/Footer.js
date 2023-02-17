import React from "react";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import "../../sass/Footer.scss";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    root: {
        color: "#1f2426",
    },
    email: {
        color: "#B964A6",
    },
}));

const Footer = () => {
    const classes = useStyles();

    return (
        <footer className="footer" id="footer">
            <div className="footer-top">
                <div className="circles-container">
                    <a href="https://www.facebook.com/Opensdays" target="_blank" rel="noreferrer">
                        <div className="circle">
                            <FacebookIcon fontSize="large" classes={{ root: classes.root }} />
                        </div>
                    </a>
                    <a href="https://www.linkedin.com/company/open-source-days-ensakh/" target="_blank" rel="noreferrer">
                        <div className="circle">
                            <LinkedInIcon fontSize="large" classes={{ root: classes.root }} />
                        </div>
                    </a>
                </div>
                <div>
                    <MailOutlineIcon fontSize="large" classes={{ root: classes.email }} />
                    <span style={{ paddingLeft: "10px", fontSize: "1.4rem" }}>opensak@gmail.com</span>
                </div>
                <div style={{ fontSize: "1.2rem", paddingTop: "8px", textAlign: "center" }}>Boulevard Beni Amir, BP 77, KhouribGa-Morroco</div>
            </div>
            <div className="footer-bottom">
                <div className="copy-right">Copyright &copy; by Equipe Organisation d'OS - OpenSourceDays</div>
            </div>
        </footer>
    );
};

export default Footer;
