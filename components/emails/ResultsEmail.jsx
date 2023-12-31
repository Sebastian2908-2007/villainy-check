import {
    Body,
    Column,
    Container,
    Head,
    Heading,
    Hr,
    Html,
    Img,
    Link,
    Preview,
    Section,
    Text,
    Row,
  } from '@react-email/components';
  import * as React from 'react';
  
 
  
  const baseUrl = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : '';
  
  const PropDefaults = {
    tips: [
      {
        id: 1,
        description:
          'To find a specific phrase, enter it in quotes: "local storage"',
      },
      {
        id: 1,
        description:
          'To search within specific tag(s), enter them in square brackets: [javascript]',
      },
      {
        id: 1,
        description:
          'Combine them to get even more precise results - [javascript] "local storage" searches for the phrase “local storage” in questions that have the [javascript] tag',
      },
    ],
  };
  
  export const ResultsEmail = ({
    recommendation,firstName,lastName
  }) => {
    const {typeOfRecommendation,resultsMeaning,tipsSummary} = recommendation;
    return (
    
    <Html>
      <Head />
      <Preview>Test results</Preview>
      <Body style={main}>
        <Container style={container}>
          {/*<Section style={logo}>
            <Img width={146} src={`http://localhost:3000//static/stack-overflow-logo.png`} />
          </Section>*/}
          <Row style={header}>
            <Column style={headerContent}>
              <Heading style={headerContentTitle}>
            ~Helping ourselves understand people, and ourselves~
              </Heading>
              <Text style={headerContentSubtitle}>
                Tips and tricks For whats been found&nbsp;{firstName}&nbsp;{lastName}
              </Text>
            </Column>
            <Column style={headerImageContainer}>
              {/*<Img
                width={340}
                src={`${baseUrl}/static/stack-overflow-header.png`}
              />*/}
            </Column>
          </Row>
  
          <Section style={content}>
            <Heading as="h2" style={title}>
              Searching for solutions
            </Heading>
            <Text style={paragraph}>
            In the realm of our company, Lon Fuller's work becomes a compass for navigating
             complex challenges. By adhering to the principles of legality, morality, and justice, we employ Fuller's
              insights to guide our search for solutions that are not only legally sound but also ethically
               robust. With Fuller's wisdom as our North Star, we embark on a quest to
                harmonize law and ethics, ensuring that our solutions are grounded in both justice
                 and righteousness. It is our most sincere hope that you will use our state of the art testing to do the same{' '}
            </Text>
  
            <Hr style={divider} />
  
            <Heading as="h2" style={title}>
              Our recommendations and Insights into these results
            </Heading>
            {/*<Text style={paragraph}>
              {`The Meaning of these ${typeOfRecommendation} Results:`}
            </Text>*/}
            <Text style={paragraph}>
           {resultsMeaning}
            </Text>
            {/*<ul>
              {tips?.map((tip) => (
                <li key={tip.id}>
                  <Text style={paragraph}>{tip.description}</Text>
                </li>
              ))}
              </ul>*/}
  
           
  
            <Hr style={divider} />
  
            <Heading as="h2" style={title}>
              Our Tips Based on these results
            </Heading>
  
            <Section >
            <Text style={paragraph}>
              {tipsSummary}
            </Text>
            </Section>
          </Section>
        </Container>
  
        <Section style={footer}>
          <Text style={footerText}>
            You're receiving this email because Someone under your account has finished their quiz
          </Text>
  
          <Link href="/" style={footerLink}>
            Unsubscribe from emails like this{' '}
          </Link>
          <Link href="/" style={footerLink}>
            Edit email settings{' '}
          </Link>
          <Link href="/" style={footerLink}>
            Contact us
          </Link>
          <Link href="/" style={footerLink}>
            Privacy
          </Link>
  
          <Hr style={footerDivider} />
  
         {/* <Img width={111} src={`${baseUrl}/static/stack-overflow-logo-sm.png`} />*/}
          <Text style={footerAddress}>
            <strong>Human Risk Project</strong>, 1111 William Street, 888th Floor, New
            Tuskaloo, AR 11188
          </Text>
          <Text style={footerHeart}>{'<3'}</Text>
        </Section>
      </Body>
    </Html>
  );
            };
  
  export default ResultsEmail;
  
  const main = {
    backgroundColor: '#f3f3f5',
    fontFamily: 'HelveticaNeue,Helvetica,Arial,sans-serif',
  };
  
  const headerContent = { padding: '20px 30px 15px' };
  
  const headerContentTitle = {
    color: '#fff',
    fontSize: '27px',
    fontWeight: 'bold',
    lineHeight: '27px',
  };
  
  const headerContentSubtitle = {
    color: '#fff',
    fontSize: '17px',
  };
  
  const headerImageContainer = {
    padding: '30px 10px',
  };
  
  const title = {
    margin: '0 0 15px',
    fontWeight: 'bold',
    fontSize: '21px',
    lineHeight: '21px',
    color: '#0c0d0e',
  };
  
  const paragraph = {
    fontSize: '15px',
    lineHeight: '21px',
    color: '#3c3f44',
  };
  
  const divider = {
    margin: '30px 0',
  };
  
  const container = {
    maxWidth: '680px',
    width: '100%',
    margin: '0 auto',
    backgroundColor: '#ffffff',
  };
  
  const footer = {
    width: '680px',
    margin: '32px auto 0 auto',
    padding: '0 30px',
  };
  
  const content = {
    padding: '30px 30px 40px 30px',
  };
  
  const logo = {
    display: 'flex',
    background: '#f3f3f5',
    padding: '20px 30px',
  };
  
  const header = {
    borderRadius: '5px 5px 0 0',
    display: 'flex',
    flexDireciont: 'column',
    backgroundColor: '#849b9f',
  };
  
  const buttonContainer = {
    marginTop: '24px',
    display: 'block',
  };
  
  const button = {
    backgroundColor: '#0095ff',
    border: '1px solid #0077cc',
    fontSize: '17px',
    lineHeight: '17px',
    padding: '13px 17px',
    borderRadius: '4px',
    maxWidth: '120px',
    color: '#fff',
  };
  
  const footerDivider = {
    ...divider,
    borderColor: '#d6d8db',
  };
  
  const footerText = {
    fontSize: '12px',
    lineHeight: '15px',
    color: '#9199a1',
    margin: '0',
  };
  
  const footerLink = {
    display: 'inline-block',
    color: '#9199a1',
    textDecoration: 'underline',
    fontSize: '12px',
    marginRight: '10px',
    marginBottom: '0',
    marginTop: '8px',
  };
  
  const footerAddress = {
    margin: '4px 0',
    fontSize: '12px',
    lineHeight: '15px',
    color: '#9199a1',
  };
  
  const footerHeart = {
    borderRadius: '1px',
    border: '1px solid #d6d9dc',
    padding: '4px 6px 3px 6px',
    fontSize: '11px',
    lineHeight: '11px',
    fontFamily: 'Consolas,monospace',
    color: '#e06c77',
    maxWidth: 'min-content',
    margin: '0 0 32px 0',
  };
  