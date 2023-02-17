import React from "react";
import { Box, Grid, Avatar, Typography, makeStyles } from "@material-ui/core";
import "../../sass/LandingPage.scss";
// import image1 from "../../assets/Speakers/ Ismail Ghallou.jpg";
import image2 from "../../assets/Speakers/Salah Kokaina.jpg";
import image3 from "../../assets/Speakers/abderrahman jaize.jpg";
import image4 from "../../assets/Speakers/Youssfi Mohammed.jpg";
import image5 from "../../assets/Speakers/Diaa Alhak EL FALLOUS.png";
import image6 from "../../assets/Speakers/Jaafari El Housseine .png";
import image7 from "../../assets/Speakers/Abderrahim Soubai Elidrissi.jpg";
import image8 from "../../assets/Speakers/Samir_Bennani_2019.jpg";
import image9 from "../../assets/Speakers/Ismail El Azizi.png";
import image10 from "../../assets/Speakers/Souhail mssassi.jpg";
import image11 from "../../assets/Speakers/ZABARI Saad.png";
import image12 from "../../assets/Speakers/othmane safsafi.jpg";
import image13 from "../../assets/Speakers/Youssouf EL AZIZI .jpeg";
import image14 from "../../assets/Speakers/djalal.jpeg";

const speakers = [
  // {
  //   image: image1,
  //   name: "Ismail Ghallou",
  //   introduction: "Software Consultant",
  // },
  {
    image: image2,
    name: "Salah Kokaina",
    introduction: "Senior Staff Engineer",
  },
  {
    image: image3,
    name: "Abderrahman Jaize",
    introduction: "Data Scientist",
  },
  {
    image: image5,
    name: "Diaa Alhak El Fallous",
    introduction: "IT Trainer",
  },
  {
    image: image6,
    name: "El Housseine Jaafari",
    introduction: "Software Engineer Consultant",
  },
  {
    image: image7,
    name: "Abderrahim Soubai Elidrissi",
    introduction: "Software Engineer & Cloud Architect",
  },
  {
    image: image8,
    name: "Samir Bennani",
    introduction: "Blockchain Senior Instructor & Consultant",
  },
  {
    image: image9,
    name: "Ismail El Azizi",
    introduction: "UI/UX Designer at OBytes",
  },
  {
    image: image10,
    name: "Souhail Mssassi",
    introduction: "PDG chez Crisis",
  },
  {
    image: image11,
    name: "Saad Zabari",
    introduction: "CEO Protomain",
  },
  {
    image: image12,
    name: "Othmane Safsafi",
    introduction: "Ph.D candidate at Sorbonne Université",
  },
  {
    image: image13,
    name: "Youssouf EL Azizi",
    introduction: "Full-stack engineer and mobile tribe lead at Obytes",
  },
  {
    image: image14,
    name: "Djalal E.B",
    introduction: "DevOps and Docker enthusiast",
  },
];

const useStyles = makeStyles((theme) => ({
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
    color: "tomato",

    [theme.breakpoints.down("xs")]: {
      fontSize: "1.8rem",
    },
  },
}));

const Speakers = () => {
  const classes = useStyles();

  return (
    <Box className={classes.speakers} component="section">
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
            <Avatar
              className={classes.image}
              src={speaker.image}
              alt="speaker"
            />
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
