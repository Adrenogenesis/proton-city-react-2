import React from "react";
// react component for creating beautiful carousel
import Carousel from "react-slick";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import LocationOn from "@material-ui/icons/LocationOn";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import { Link } from "react-router-dom";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import image0 from "assets/img/landing-min.jpg";
import image1 from "assets/img/bg-min.jpg";
import image2 from "assets/img/bg2-min.jpg";
import image3 from "assets/img/bg3-min.jpg";
import image4 from "assets/img/webhook-1-min.jpg";
import image5 from "assets/img/webhook-2-min.jpg";
import image6 from "assets/img/wordpress-min.jpg";
import styles from "assets/jss/material-kit-react/views/componentsSections/carouselStyle.js";

const useStyles = makeStyles(styles);

export default function SectionCarousel() {
  const classes = useStyles();
  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true
  };
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <GridContainer>
          <GridItem xs={12} sm={12} md={8} className={classes.marginAuto}>
            <Card carousel>
              <Carousel {...settings}>
                <div>
                  <Link to="" className={classes.link}>
                    <img
                      src={image0}
                      alt="First slide"
                      className="slick-image"
                    />
                  </Link>
                  <div className="slick-caption">
                    <h4>
                      <LocationOn className="slick-icons" />
                      Conception web.
                    </h4>
                  </div>
                </div>
                <div>
                  <Link to="pricing-page" className={classes.link}>
                    <img
                      src={image1}
                      alt="First slide"
                      className="slick-image"
                    />
                  </Link>
                  <div className="slick-caption">
                    <h4>
                      <LocationOn className="slick-icons" />
                      Développement
                    </h4>
                  </div>
                </div>
                <div>
                  <Link to="pricing-page" className={classes.link}>
                    <img
                      src={image2}
                      alt="Second slide"
                      className="slick-image"
                    />
                  </Link>
                  <div className="slick-caption">
                    <h4>
                      <LocationOn className="slick-icons" />
                      Webdesign
                    </h4>
                  </div>
                </div>
                <div>
                  <Link to="pricing-page" className={classes.link}>
                    <img
                      src={image3}
                      alt="Third slide"
                      className="slick-image"
                    />
                  </Link>
                  <div className="slick-caption">
                    <h4>
                      <LocationOn className="slick-icons" />
                      DNS
                    </h4>
                  </div>
                </div>
                <div>
                  <a href="https://pipedream.com/">
                    <img
                      src={image4}
                      alt="Third slide"
                      className="slick-image"
                    />
                  </a>
                  <div className="slick-caption">
                    <h4>
                      <LocationOn className="slick-icons" />
                      Webhook
                    </h4>
                  </div>
                </div>
                <div>
                  <a href="https://cuisinealancienne.com/">
                    <img
                      src={image6}
                      alt="Third slide"
                      className="slick-image"
                    />
                  </a>
                  <div className="slick-caption">
                    <h4>
                      <LocationOn className="slick-icons" />
                      WordPress
                    </h4>
                  </div>
                </div>
                <div>
                  <a href="https://www.vonage.com/">
                    <img
                      src={image5}
                      alt="Third slide"
                      className="slick-image"
                    />
                  </a>
                  <div className="slick-caption">
                    <h4>
                      <LocationOn className="slick-icons" />
                      Messaging
                    </h4>
                  </div>
                </div>
              </Carousel>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
