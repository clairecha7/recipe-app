import React from "react";
import { Card, Container, Stack } from "../../components/UI";
import { AboutContainer, StyledImage } from "./About.styles";
import { MdEmail } from "react-icons/md";

const About = () => {
  return (
    <AboutContainer>
      <Stack direction="column" justify="center" align="center">
        <StyledImage src="/img/coding.svg" alt="coding" />
        <Container>
          <Card bg="#efefef" color="#333" shadow style={{ margin: "1rem" }}>
            <h1 className="text-center"> About Software Developer</h1>
            <h1 className="text-center text-secondary">John Doe</h1>
            <p>I'm currently learning Full-Stack Development Languages.</p>
            <p>
              I've already known JS, ReactJS, ReactNative, NodeJS, MongoDB,SQL,
              Python, AWS Services.
            </p>

            <Stack>
              <MdEmail className="mail-icon" />
              <a href="mailto:johndoe@gmail.com"> JohnDoe@gmail.com</a>
            </Stack>
          </Card>
        </Container>
      </Stack>
    </AboutContainer>
  );
};

export default About;
