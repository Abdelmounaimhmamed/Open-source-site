import React from "react";
import { Box, Grid, Avatar, Typography, makeStyles } from "@material-ui/core";
import "../sass/LandingPage.scss";
// import image1 from "../assets/Speakers/ Ismail Ghallou.jpg";
import image2 from "../assets/Speakers/Nadia NAANAA.png";
import image3 from "../assets/Speakers/Larbi OUIYZME.png";
import image4 from "../assets/Speakers/Badr Boussabat.png";
import image5 from "../assets/Speakers/Mehdi CHALLIGUI.png";
import image6 from "../assets/Speakers/Amadou Diawara.png";
import ikbal from "../assets/Speakers/ilhamikbal.png";
import moumni from "../assets/Speakers/moumni.png";
import ayoub from "../assets/Speakers/ayoub.png";
import unknown from "../assets/Team/comite_os_10/unknown.jpg";

const speakers = [
    {
        image: ayoub,
        name: "KBAILI Ayoub",
        introduction: "Data & AI Lead chez Microsoft Maroc",
    },
    {
        image: image2,
        name: "NAANAA Nadia",
        introduction: "Consultante Senior/Formatrice MSBI, Power BI",
    },
    {
        image: image3,
        name: "OUIYZME Larbi",
        introduction: `Consultant Systèmes, Réseaux et Cybersécurité ,
        Consultant / Formateur Technique francophone spécialisé sur les produits de la technologie Microsoft`,
    },
    {
        image: image4,
        name: "BOUASSABAT Badr",
        introduction: "President and founder of AI TOGETHER",
    },
    {
        image: image5,
        name: "CHALLIGUI Mehdi",
        introduction: `President of the Comission of the Promotion of Digital and Technologies`,
    },
    {
        image: image6,
        name: "DIAWARA Amadou",
        introduction: `President and Founder of Cluster Digital Africa & the 
        CEO of the Center for Innovation in Technological Research and Creative Industry (CIRTIC) MBA Management and management of IT projects`,
    },
    {
        image: moumni,
        name: "MOUMNI Amina",
    },
    {
        image: ikbal,
        name: "IKBAL Ilham",
        introduction: `ingenieur cybersécurité senior chez IDEMIA`,
    },
];

const useStyles = makeStyles(theme => ({
    speakers: {},

    speakerContainer: {
        paddingBottom: "7rem",
    },

    image: {
        width: theme.spacing(17),
        height: theme.spacing(17),

        [theme.breakpoints.down("xs")]: {
            width: theme.spacing(13),
            height: theme.spacing(13),
        },
    },

    speakername: {
        paddingTop: "1.5rem",
        color: "#B964A6",

        [theme.breakpoints.down("xs")]: {
            fontSize: "1.8rem",
        },
    },
}));

const Speakers = () => {
    const classes = useStyles();

    return (
        <Box className={classes.speakers} component="section" style={{ padding: "2rem" }}>
            <div className="heading">
                <span>Nos invités</span>
                <hr />
            </div>
            <Grid container justify="center">
                {speakers.map((speaker, index) => (
                    <Grid
                        item
                        lg={3}
                        md={4}
                        xs={6}
                        container
                        direction="column"
                        justify="center"
                        alignItems="center"
                        key={index}
                        className={classes.speakerContainer}
                    >
                        <Avatar className={classes.image} src={speaker.image} alt="speaker" />
                        <Typography className={classes.speakername} variant="h4">
                            {speaker.name}
                        </Typography>
                        <Typography variant="subtitle1">{speaker.introduction}</Typography>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default Speakers;
