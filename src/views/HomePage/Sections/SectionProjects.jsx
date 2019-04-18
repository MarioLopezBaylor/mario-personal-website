import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// Core Components
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
// Library Components
import Image from "react-image-webp";
// Assets
import refurPng from "assets/img/projects/refur.png";
import refurWebp from "assets/img/projects/refur.webp";
import wacodePng from "assets/img/projects/wacode.png";
import wacodeWebp from "assets/img/projects/wacode.webp";
import placeholderJpeg from "assets/img/image_placeholder.jpeg";
import placeholderWebp from "assets/img/image_placeholder.webp";
// Style Sheets
import projectsStyle from "assets/jss/material-kit-pro-react/views/sections/sectionProjects.jsx";

// In-line Styles
const wacodeStyles = { backgroundImage: wacodePng, opacity: "1" };
const refurStyles = { backgroundImage: refurPng, opacity: "1" };
const placeholderStyles = { backgroundImage: placeholderJpeg, opacity: "1" };

function SectionProjects({ ...props }) {
  const { classes, ...rest } = props;

  return (
    <div className="cd-section" {...rest}>
      <div className={classes.projects}>
        <div className={classes.container}>
          <h2 className={classes.title}>Projects</h2>
          <hr />
          <GridContainer>
            <GridItem
              xs={12}
              sm={8}
              md={8}
              className={`${classes.mlAuto} ${classes.mrAuto} ${
                classes.textCenter
              }`}
            >
              <h5 className={classes.description}>
                Howdy! Here is a brief look into some of the work I&#39;ve done
                in my free time. This is not up to date, and I will be adding
                more projects soon. For a more extensive list please check out
                my github&nbsp;
                <a
                  href="https://github.com/MarioLopezBaylor"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  here.
                </a>
              </h5>
              <div className={classes.sectionSpace} />
            </GridItem>
          </GridContainer>
          <GridContainer>
            <GridItem xs={12} sm={4} md={4}>
              <Card plain className={classes.card2}>
                <a
                  href="https://www.wacode.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <CardHeader image plain>
                    <Image
                      src={wacodePng}
                      webp={wacodeWebp}
                      alt="Wacode Site"
                    />
                    <div
                      className={classes.coloredShadow}
                      style={wacodeStyles}
                    />
                  </CardHeader>
                </a>
                <CardBody plain>
                  <a
                    href="https://www.wacode.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <h4 className={classes.cardTitle}>
                      Wacode Community Hackathon
                    </h4>
                  </a>
                  <h6 className={classes.description}>Website</h6>
                  <p
                    className={`${classes.description} ${classes.marginTop20}`}
                  >
                    Website built for the hackathon me and my team put together.
                    Used to relay information to our participants and volunteers
                    throughout the course of the event. I was able to build and
                    deploy this initial version of the website myself.
                  </p>
                </CardBody>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={4} md={4}>
              <Card plain className={classes.card2}>
                <a
                  href="https://giforgif-tempeturs.herokuapp.com/#/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <CardHeader image plain>
                    <Image
                      src={refurPng}
                      webp={refurWebp}
                      alt="ReFur Website"
                    />
                    <div
                      className={classes.coloredShadow}
                      style={refurStyles}
                    />
                  </CardHeader>
                </a>
                <CardBody plain>
                  <a
                    href="https://giforgif-tempeturs.herokuapp.com/#/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <h4 className={classes.cardTitle}>
                      ReFur: Pet Sitter Matching
                    </h4>
                  </a>
                  <h6 className={classes.description}>Web Application</h6>
                  <p
                    className={`${classes.description} ${classes.marginTop20}`}
                  >
                    Web application to help match pet sitters in your area to
                    pet owners in need. Was built as a part of my junior design
                    project. Me and my partner were able to work with Credera (a
                    consulting company based out of Dallas, TX) to put this
                    project together and deploy it in under 3 months.
                  </p>
                </CardBody>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={4} md={4}>
              <Card plain className={classes.card2}>
                <CardHeader image plain>
                  <Image
                    src={placeholderJpeg}
                    webp={placeholderWebp}
                    alt="Placeholder Project"
                  />
                  <div
                    className={classes.coloredShadow}
                    style={placeholderStyles}
                  />
                </CardHeader>
                <CardBody plain>
                  <h4 className={classes.cardTitle}>More to be added soon!</h4>
                  <h6 className={classes.description}>Variety</h6>
                  <p
                    className={`${classes.description} ${classes.marginTop20}`}
                  >
                    I&#39;ve worked on and will be working on more projects in
                    the very near future. Keep checking back for updates as I
                    continue to add them to my website!
                  </p>
                </CardBody>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    </div>
  );
}

export default withStyles(projectsStyle)(SectionProjects);
