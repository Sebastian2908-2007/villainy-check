import { updateUserQuizStatus } from "./updateUserQuizStatus";
import { between } from "./between";

export const sendQuizResults = async (scoresData,recommends,tester) => {  
    await updateUserQuizStatus(tester._id);
    let quizData = {};
    const {typeA,typeB,balanced,idealOutcome} = scoresData;

function percentage(value1,value2)
{
  let percentage = (value2 - value1) / (value1) * 100;
  const finalValue = 100 + percentage;
  return finalValue;
}
const typeAPer = percentage(idealOutcome,typeA);
const typeBPer = percentage(idealOutcome,typeB);
const balancedPer = percentage(idealOutcome,balanced);

/*!!!!!!RESULTS RECOMMENDS DECISION!!!!!!!******/

/**CLIENT Specs if's & else if's*/

/**NEW RECOMMEND TYPES BELOW */
//Below runs on both villainys being greater than 0
if(typeAPer > 0 && typeBPer > 0) {
    // Both villainys FIELD IDEAS:"both a higher" "both b higher"
    if(typeAPer > typeBPer) {
        // A higher
        // run more score checks here for varying degrees
        // we need if statements or switch statement that checks what percentage of the total possible score each
        // variable is to deliver different results and recommendations based on the levels of villainy
        // it will be the same approach or similar to what I'm doing below
      if(between(typeAPer,0,50)) {
        quizData.recommendation = recommends.filter(rec => {
            return rec.typeOfRecommendation === 'mixed a higher start right';
        })[0];
      }else if(between(typeAPer,50,75)){
        quizData.recommendation = recommends.filter(rec => {
            return rec.typeOfRecommendation === 'mixed a higher mid right';
        })[0];
      }
      else if(between(typeAPer,75,100)){
        quizData.recommendation = recommends.filter(rec => {
            return rec.typeOfRecommendation === 'mixed a higher far right';
        })[0];
      }

    }else if(typeBPer > typeAPer){
        // B higher
        if(between(typeBPer,0,50)) {
            quizData.recommendation = recommends.filter(rec => {
                return rec.typeOfRecommendation === 'mixed b higher start left';
            })[0];
          }
          
          else if(between(typeBPer,50,75)){
            quizData.recommendation = recommends.filter(rec => {
                return rec.typeOfRecommendation === 'mixed b higher mid left';
            })[0];
          }

          else if(between(typeBPer,75,100)){
            quizData.recommendation = recommends.filter(rec => {
                return rec.typeOfRecommendation === 'mixed b higher far left';
            })[0];
          }
    

    }
    else if(typeBPer === typeAPer){
        // Type A & B equals
        if(between(typeBPer,0,50) && between(typeAPer,0,50)) {
            quizData.recommendation = recommends.filter(rec => {
                return rec.typeOfRecommendation === 'equals b&a start';
            })[0];
    
          }
          
          else if(between(typeBPer,50,75) && between(typeAPer,50,75)){
            quizData.recommendation = recommends.filter(rec => {
                return rec.typeOfRecommendation === 'equals b&a mid';
            })[0];
          }

          else if(between(typeBPer,75,100) && between(typeAPer,75,100)){
            quizData.recommendation = recommends.filter(rec => {
                return rec.typeOfRecommendation === 'equals b&a far';
            })[0];
          }
    
        // run more score checks here for varying degrees
    }
 
}
/**NEW RECOMMEND TYPES ABOVE */


// below runs when typeB or left villainy is the only villainy present
else if(typeBPer > 0 && typeAPer === 0) {
    // only type B villainy or lefts values
    if(between(typeBPer,0,50)) {
        quizData.recommendation = recommends.filter(rec => {
            return rec.typeOfRecommendation === 'start left';
        })[0];
    }

    if(between(typeBPer,50,75)) {
    quizData.recommendation = recommends.filter(rec => {
            return rec.typeOfRecommendation === 'mid left';
        })[0];
    }

    if(between(typeBPer,75,100)) {
        quizData.recommendation = recommends.filter(rec => {
            return rec.typeOfRecommendation === 'far left';
        })[0];
    }

}
// below runs when typeA or right villainy is the only villainy present
else if(typeAPer > 0 && typeBPer === 0) {
    // only type A villainy or rights values
    if(between(typeAPer,0,50)) {
        quizData.recommendation = recommends.filter(rec => {
            return rec.typeOfRecommendation === 'start right';
        })[0];
    }

    if(between(typeAPer,50,75)) {
        quizData.recommendation = recommends.filter(rec => {
            return rec.typeOfRecommendation === 'mid right';
        })[0];
    }

    if(between(typeAPer,75,100)) {
        quizData.recommendation = recommends.filter(rec => {
            return rec.typeOfRecommendation === 'far right';
        })[0];
    }
 
}
// below runs when no villainy is present
else if(typeAPer === 0 && typeBPer === 0) {
 // no villainy "Ideal"

 quizData.recommendation = recommends.filter(rec => {
    return rec.typeOfRecommendation === 'Ideal';
})[0];

};
/**CLIENT Specs if's & else if's !!!!ENDS!!!!*****/

/*!!!!!!RESULTS RECOMMENDS DECISION ENDS!!!!!!!******/


/**Decide wether we should send to an admin or a user*/
if(tester.isSubject) {
quizData.recipiant = tester.adminEmail;
}else{
    quizData.recipiant = tester.email;
}
/**Decide wether we should send to an admin or a user ends*/
quizData.firstName = tester.firstName;
quizData.lastName = tester.lastName;
try{
    fetch('/api/Users',{
        method:'PUT',
        headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({userId:tester._id,updatedData: {quizRecommendations: quizData.recommendation._id}})
    });
}catch(e) {
    console.log(e);
}

try{
const emailResponse = await fetch('/api/Email',{
    method:'POST',
    headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({quizData: quizData})
});
if(emailResponse.ok) {
    return emailResponse.ok;
}else{
    return false;
}
}catch(e) {
    console.log(e);
}
};