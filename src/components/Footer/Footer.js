/*eslint-disable*/
import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
// material-ui core components
import { List, ListItem } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import styles from "assets/jss/material-kit-react/components/footerStyle.js";
import Social from "./Social";

const useStyles = makeStyles(styles);

export default function Footer(props) {
  const classes = useStyles();
  const { whiteFont } = props;
  const footerClasses = classNames({
    [classes.footer]: true,
    [classes.footerWhiteFont]: whiteFont
  });
  const aClasses = classNames({
    [classes.a]: true,
    [classes.footerWhiteFont]: whiteFont
  });
  return (
     <footer className={footerClasses}>
      <div className={classes.container}>
         <Social />
          <div className={classes.left}>
          <List className={classes.list}>
            <ListItem className={classes.inlineBlock}>
              <a
                href="https://twitter.com/Adrenogenesis"
                className={classes.block}
                target="_blank"
              >
                Twitter
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a
                href="https://adrenogenesis.com"
                className={classes.block}
                target="_blank"
              >
                Adrenogenesis
              </a>
            </ListItem>
            <Link to="prestations-page" className={classes.link}>
            <ListItem className={classes.inlineBlock}>
            <a
                href="https://cuisinealancienne.com/"
                className={classes.block}
                target="_blank"
              >
                Cuisinealancienne
              </a>                  
            </ListItem>
              </Link>
            <Link to="legale-page" className={classes.link}>
            <ListItem className={classes.inlineBlock}>
              <p
                className={classes.block}
                >
                Mentions légales
              </p>
            </ListItem>
            </Link>
            <ListItem className={classes.inlineBlock}>
                Partenaires:
            </ListItem>
            <ListItem className={classes.inlineBlock}>
               <a
                href="https://github.com/Adrenogenesis/"
                className={classes.block}
                target="_blank"
              >
               <img src="https://far.adrenogenesis.com/images/logo-github.png" alt="github" height="40px" width="40px"/> 
              </a>
            </ListItem>
          
          </List>
        </div>
       <div className={classes.right}>PROTONWEBMASTER - <a href="tel:0659910270">Tél: 06.59.91.02.70 - </a>
           &copy; {1900 + new Date().getYear()} - protonwebmaster.com - <a href="https://fr.reactjs.org/">ReactJs</a> Website. Webmaster Bourges.       
       </div>
      </div>
   </footer>
  );
}
Footer.propTypes = {
  whiteFont: PropTypes.bool
};
