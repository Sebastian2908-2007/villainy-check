import { updateUserQuizStatus } from "./updateUserQuizStatus";
export const sendQuizResults = async (scoresData,recommends,tester) => {
    await updateUserQuizStatus(tester._id);
    let quizData = {};
    const {typeA,typeB,balanced,idealOutcome} = scoresData;
//console.log(scoresData,'SCore data in func');
//console.log(recommends,'recommends data in func');
console.log(typeA,typeB,balanced);
console.log(typeA > typeB && typeA > balanced,'?????????????');
/*!!!!!!RESULTS RECOMMENDS DECISION!!!!!!!******/
if(typeA > typeB && typeA > balanced) {
    quizData.recommendation = recommends.filter(rec => {
        return rec.typeOfRecommendation === 'far right';
    })[0];
};
if(typeB > typeA && typeB > balanced) {
    quizData.recommendation = recommends.filter(rec => {
        return rec.typeOfRecommendation === 'far left';
    })[0];
};
if(balanced > typeB && balanced > typeA) {
    quizData.recommendation = recommends.filter(rec => {
        return rec.typeOfRecommendation === 'Ideal';
    })[0];
};
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
await fetch('/api/Email',{
    method:'POST',
    headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({quizData: quizData})
});
}catch(e) {
    console.log(e);
}
};