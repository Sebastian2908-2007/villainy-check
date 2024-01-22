
import {
    Body,
    Column,
    Container,
    Head,
    Hr,
    Preview,
    Section,
    Tailwind
  } from '@react-email/components';
 import MyHtml from './MyHtml';
 import MyOtherHtml from './MyOtherHtml';
 import ScoreRange from './ScoreRange';
  import * as React from 'react'

 
  
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

  /*
ideal right ideal left  =  "Ideal"
* ideal right start left  =  "start left",
* ideal right mid left  =  "mid left",
* ideal right far left  =  "far left",
* start right ideal left  =  "start right",
* start right start left  =  "equals b&a start",
* start right mid left  

* start right far left  =  

* mid right ideal left  =  "mid right",

 mid right start left  =  
 mid right mid left  =  "equals b&a mid",
 mid right far left  =  
 far right ideal left  =  "far right"
 far right start left  =  
far right mid left  =  
 far right far left  =  "equals b&a far",

 severe Right ideal left
 severe Right start left
 severe Right mid left
 severe Right far left

 severe left ideal right
 severe left start right
 severe left mid right
 severe left far right

 ideal = ideal
 start = mild
 far = high
 severe = severly high
 */


  
  export const ResultsEmail = ({
   recommendation,firstName,lastName
  }) => {
    const {typeOfRecommendation,resultsMeaning,tipsSummary} = recommendation;
  /*const typeOfRecommendation = 'ideal right mid left';
const resultsMeaning = '<div>some stuff</div>';
const tipsSummary ='<ul><li>item one</li><li>item one</li><li>item one</li></ul>';
const firstName = 'Sebastian';
const lastName = 'Bowen';*/
 //console.log(typeOfRecommendation);
   
    return (
      <Tailwind>
    <html className='font-serif'>
      <Head />
      <Preview>Test results</Preview>
      <Body style={main}>
        <Container style={container}>
         
          <div className='w-full p-8'>
           <Column style={headerContent}>
              {/*<Heading style={headerContentTitle}>
            ~Helping ourselves understand people, and ourselves~
              </Heading>*/}
              <ScoreRange resultType={typeOfRecommendation} firstName={firstName} lastName={lastName}/>
            </Column>
           
    
    
          </div>
  
          <Section style={content}>
          
        
  
            <Hr style={divider} />
  
            <h2 className='font-serif text-base'>
            Our Recommendations
            </h2>
            
           
           <MyHtml resultsMeaning={resultsMeaning}/>
          
            <Hr style={divider} />
  
            <h2 className='font-serif text-base'>
            How to coach this person
            </h2>
  
            <Section >
            
            <MyOtherHtml tipsSummary={tipsSummary}/>
            
            </Section>
          </Section>
        </Container>
  
        <Section style={footer}>
          <p style={footerText}>
            You're receiving this email because Someone under your account has finished their quiz
          </p>
  
         
  
          <Hr style={footerDivider} />
  
        
        </Section>
      </Body>
    </html>
    </Tailwind>
  );
            };
  
  export default ResultsEmail;
  
  const main = {
    backgroundColor: '#f3f3f5',
    fontFamily: 'HelveticaNeue,Helvetica,Arial,sans-serif',
    padding: '10px'
  };
  
  const headerContent = { padding: '20px 30px 15px' };
 
  
  
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
  

  
  const header = {
    borderRadius: '5px 5px 0 0',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#849b9f',
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
  
 
