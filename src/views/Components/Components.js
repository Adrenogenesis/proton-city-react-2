import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react components for routing our app without refresh
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import ScrollableAnchor from "react-scrollable-anchor";
import Activateur from "./Sections/SectionActivateur";
// @material-ui/icons
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
// core components
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import SectionNavbars from "./Sections/SectionNavbars.js";
import Parallax from "components/Parallax/Parallax.js";
import City from "./City/App";
// sections for this page
import Catalogue from "./Sections/catalogue";
import SectionCompletedExamples from "./Sections/SectionCompletedExamples.js";
import SectionNotifications from "./Sections/SectionNotifications";
import SectionExamples from "./Sections/SectionExamples.js";
import SectionDownload from "./Sections/SectionDownload.js";
import SectionAuth from "./Sections/SectionAuth.js";
import ContactUs from "./Sections/ContactUs.js";
import styles from "assets/jss/material-kit-react/views/components.js";
import styled, { keyframes } from "styled-components";
import { rubberBand } from "react-animations";
import Pulse from "react-reveal/Pulse";
import CookieConsent from "react-cookie-consent";
import Flash from "./Sections/Flash";
import Modal from "./Sections/Alert";

const useStyles = makeStyles(styles);

const Bounce = styled.div`
  animation: 3s ${keyframes`${rubberBand}`} 3s;
`;

export default function Components() {
  const classes = useStyles();

  return (
    <div>
      <SectionNavbars />
      <Parallax image={require("assets/img/bg4-min.jpg")}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem>
              <div className={classes.brand}>
                <Pulse>
                  <h1 className={classes.title}>Frédéric Brodar</h1>
                </Pulse>
                <Bounce>
                  <h3 className={classes.subtitle}>
                    <strong>Création de site web sur mesure.</strong>
                  </h3>
                </Bounce>
                <br />
                <Catalogue />                
                <br />
                <Flash />               
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <GridItem md={12} className={classes.textCenter}>
          <Activateur />
          <div className={classNames(classes.cybs)}>
            <h4>Solutions web et Cybersécurité</h4>
            <h5>
              Je vous propose des solutions complètes de développement, d{"'"}
              audits de sécurité et de marketing de sites Web axées sur vos
              objectifs:
            </h5>
            <p>
              <ul>
                <li>
                  Définition de l{"'"}objectif avec une présentation technique
                  et fonctionnelle.
                </li>
                <li>
                  Elaboration du cahier des charges, et de la charte graphique.
                </li>
                <li>
                  L{"'"}expression des besoins et les vulnérabilités de
                  securité.
                </li>
                <li>
                  Le choix de la méthode de travail qui repose sur la méthode
                  Agile.
                </li>
                <li>
                  Un audit de sécurité complet, pour déceler les vulnérabilités
                  dans vos applications.
                </li>
              </ul>
            </p>
          </div>
          <Modal />
        </GridItem>
        <ScrollableAnchor id={"section-p1"}>
          <div></div>
        </ScrollableAnchor>
        <SectionCompletedExamples />
        <SectionDownload />
        <ScrollableAnchor id={"section-p2"}>
          <div></div>
        </ScrollableAnchor>
        <CookieConsent
          cookieName="protonwebmaster.com"
          style={{ background: "#353535", opacity: "0.33" }}
          buttonStyle={{ color: "#2dcef", fontSize: "13px" }}
          expires={90}
          buttonText="J'accepte les cookies! Ils sont utiles pour faire fonctionner le site."
          acceptOnScrollPercentage={50}
          acceptOnScroll={true}
          onAccept={({ acceptedByScrolling }) => {
            if (acceptedByScrolling) {
              // triggered if user scrolls past threshold
              alert(
                "L'acceptation a été déclenchée par le défilement de l'utilisateur, nous utilisons les cookies afin de fournir les services et fonctionnalités proposés sur notre site et afin d’améliorer l’expérience de nos utilisateurs. Les cookies sont des données qui sont téléchargés ou stockés sur votre ordinateur ou sur tout autre appareil."
              );
            } else {
              alert(
                "En cliquant sur ”OK”, vous acceptez l’utilisation des cookies."
              );
            }
          }}
        ></CookieConsent>
        <SectionNotifications />
        <SectionExamples />
        <City />
        <ScrollableAnchor id={"section-p3"}>
          <div></div>
        </ScrollableAnchor>
        <SectionAuth />
        <ScrollableAnchor id={"section-p4"}>
          <div></div>
        </ScrollableAnchor>
        <ContactUs />
        <GridItem md={12} className={classes.textCenter}>
          <a href="#section-p1">
            <ArrowUpwardIcon />
          </a>
        </GridItem>
      </div>
      <Footer />
    </div>
  );
}
