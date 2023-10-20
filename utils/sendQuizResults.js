import { updateUserQuizStatus } from "./updateUserQuizStatus";
export const sendQuizResults = async (scoresData,recommends,tester) => {
    await updateUserQuizStatus(tester._id);
    let quizData = {};
    const {typeA,typeB,balanced,idealOutcome} = scoresData;
    console.log(idealOutcome,'IOC');
//console.log(scoresData,'SCore data in func');
//console.log(recommends,'recommends data in func');
console.log(typeA,typeB,balanced);
console.log(typeA > typeB && typeA > balanced,'?????????????');

/*2 ARG was per*/
function percentage(value1,value2)
{
  //return (num/100)*per;
  let percentage = (value2 - value1) / (value1) * 100;
  const finalValue = 100 + percentage;
  return finalValue;
}
console.log(percentage(idealOutcome,typeB),'T B');
console.log(percentage(idealOutcome,typeA),'T A');
console.log(percentage(idealOutcome,balanced),'B');
;/**I need to pull in idealOutcome, get rid of subtraction of scores
 * At the end I need to take my three scores and divide them against the ideal outcome
 * depending on the scores percentage of the ideal outcome as well as the highest score
 * are the results we will send. Lets say the results intensity equals what percentage of
 * idealOutcome the highest score is
 */

/*!!!!!!RESULTS RECOMMENDS DECISION!!!!!!!******/
if(typeA > typeB && typeA > balanced) {
    console.log('set rec type a')
    quizData.recommendation = recommends.filter(rec => {
        return rec.typeOfRecommendation === 'far right';
    })[0];
};
if(typeB > typeA && typeB > balanced) {
    quizData.recommendation = recommends.filter(rec => {
        return rec.typeOfRecommendation === 'far left';
    })[0];
    console.log('set rec type a')
};
if(balanced > typeB && balanced > typeA) {
    quizData.recommendation = recommends.filter(rec => {
        return rec.typeOfRecommendation === 'Ideal';
    })[0];
    console.log('set rec type a')
};
if(typeA === typeB && balanced < typeA && balanced < typeB) {
    quizData.recommendation = recommends.filter(rec => {
        return rec.typeOfRecommendation === 'far left';
    })[0];
    console.log('set rec type MiNe RAN');
}
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
console.log(quizData);
/*try{
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
await fetch('/api/Email',{
    method:'POST',
    headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({quizData: quizData})
});
}catch(e) {
    console.log(e);
}*/
};