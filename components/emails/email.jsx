import { Button } from "@react-email/button";
import { Section } from "@react-email/section";
import { Row } from "@react-email/row";
import { Column } from "@react-email/column";
import { Heading } from '@react-email/heading';
import { Container } from '@react-email/container';
import { Text } from '@react-email/text';
import { Html } from "@react-email/html";




import * as React from "react";


export default function Email({recommendation,firstName,lastName}) {
    const {typeOfRecommendation,resultsMeaning,tipsSummary} = recommendation;
    
   


    
    
     

  return (
    <Html lang="en" dir="ltr">
      <Container
        style={{ background: "#999595", color: "#fde1e2", padding: "5%" }}
      >
       <Heading as="h1">
       Results for&nbsp;{firstName}&nbsp;{lastName}
       </Heading>
       <Heading as="h2">Score Type:&nbsp;{typeOfRecommendation}</Heading>
       <Section style={{padding:"10%"}}>
      <Row>
        <Column><Text>Results Meaning:&nbsp;{JSON.parse(resultsMeaning)}</Text></Column>
      </Row>
      <Row>
        <Column><Text>Tips On The Matter:&nbsp;{tipsSummary}</Text></Column>
      </Row>
    </Section>
      </Container>
    </Html>
  );
};
