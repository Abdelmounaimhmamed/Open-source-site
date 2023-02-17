import React from "react";
import { Box, Grid, Card, makeStyles } from "@material-ui/core";
import { Row } from "reactstrap";

const useStyles = makeStyles(theme => ({
    container: {
        width: "90%",
        margin: "0 auto",
    },

    root: {
        maxWidth: 300,
        height: 550,
        background: "white",
        color: "#B964A6",
        padding: "10px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",

        // '&-standard': {
        //   transform: 'scale(1.1)',
        // },
    },
}));

const Tickets = () => {
    const classes = useStyles();

    return (
        <div className={`tickets ${classes.container}`}>
            <Box component="div">
                <div className="heading">
                    <span>Billets</span>
                    <hr />
                </div>
                <Grid spacing={3} container justify="center">
                    <Grid item md={4} sm={12} container justify="center">
                        <Card className={classes.root}>
                            <div className="ticket-title">Pass Basique</div>
                            <div className="ticket-price">Gratuit</div>
                            <div className="ticket-benefits">
                                <ul>
                                    <li>1 billet invité</li>
                                    <li>Accès essentiel (ateliers, keynotes et salon d'exposition)</li>
                                    <li>Participation à la compétition</li>
                                    <li>Pauses café</li>
                                </ul>
                            </div>
                        </Card>
                    </Grid>
                    <Grid item md={4} sm={12} container justify="space-around">
                        <Card className={`${classes.root} animate`}>
                            <div className="ticket-title">Pass Standard</div>
                            <div className="ticket-price">50 MAD</div>
                            <div className="ticket-benefits">
                                <ul>
                                    <li>1 billet invité</li>
                                    <li>Accès essentiel (ateliers, keynotes et salon d'exposition)</li>
                                    <li>Participation à la compétition</li>
                                    <li>Pauses café</li>
                                    <li>Déjeuner gratuit pendant 2 jours</li>
                                </ul>
                            </div>
                        </Card>
                    </Grid>
                    <Grid item md={4} sm={12} container justify="center">
                        <Card className={classes.root}>
                            <div className="ticket-title">Pass Premium</div>
                            <div className="ticket-price">220 MAD</div>
                            <div className="ticket-benefits">
                                <ul>
                                    <li>1 billet invité</li>
                                    <li>Accès essentiel (ateliers, keynotes et salon d'exposition)</li>
                                    <li>Participation à la compétition</li>
                                    <li>Pauses café</li>
                                    <li>Déjeuner gratuit pendant 2 jours</li>
                                    <li>Une nuit d'hôtel</li>
                                </ul>
                            </div>
                        </Card>
                    </Grid>
                </Grid>
                <Row style={{ justifyContent: "center", marginTop: "30px" }}>
                    <a href="https://www.eventbrite.com/e/open-source-days-90-covid-19-entreprise-a-lere-digitale-tickets-139071276933" target="_blank" rel="noreferrer">
                        <div className="button primary-fill">Obtenez votre billet</div>
                    </a>
                </Row>
            </Box>
        </div>
    );
};

export default Tickets;
