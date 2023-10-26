import { updateUserQuizStatus } from "./updateUserQuizStatus";
import { between } from "./between";

export const sendQuizResults = async (scoresData,recommends,tester) => {
    //console.log(recommends,'RECOMMEnds in send');
    console.log(tester,'tester ata top');
    console.log(recommends,'REC AT TOP');
   
   /* const recommends = [
        {
            resultsMeaning
: 
"this person tends to lean far right and most likely lacks empathy. ",
tipsSummary
: 
"this person should realize that there is no way that they are always right.  and empathy",
typeOfRecommendation
: 
"far right",
__v
: 
0,
_id
: 
"652ed7b90ab29335fe9ae8d2",
        },
        {
            resultsMeaning
: 
"this person tends to lean far right and most likely lacks empathy. ",
tipsSummary
: 
"this person should realize that there is no way that they are always right.  and empathy",
typeOfRecommendation
: 
"mid right",
__v
: 
0,
_id
: 
"652ed7b90ab29335fe9ae8d2",
        },
        {
            resultsMeaning
: 
"this person tends to lean far right and most likely lacks empathy. ",
tipsSummary
: 
"this person should realize that there is no way that they are always right.  and empathy",
typeOfRecommendation
: 
"start right",
__v
: 
0,
_id
: 
"652ed7b90ab29335fe9ae8d2",
        },
        {
            resultsMeaning
: 
"this person tends to lean far right and most likely lacks empathy. ",
tipsSummary
: 
"this person should realize that there is no way that they are always right.  and empathy",
typeOfRecommendation
: 
"far left",
__v
: 
0,
_id
: 
"652ed7b90ab29335fe9ae8d2",
        },
        {
            resultsMeaning
: 
"this person tends to lean far right and most likely lacks empathy. ",
tipsSummary
: 
"this person should realize that there is no way that they are always right.  and empathy",
typeOfRecommendation
: 
"mid left",
__v
: 
0,
_id
: 
"652ed7b90ab29335fe9ae8d2",
        },
        {
            resultsMeaning
: 
"this person tends to lean far right and most likely lacks empathy. ",
tipsSummary
: 
"this person should realize that there is no way that they are always right.  and empathy",
typeOfRecommendation
: 
"start left",
__v
: 
0,
_id
: 
"652ed7b90ab29335fe9ae8d2",
        },
        
        {
            resultsMeaning
: 
"this person tends to lean far right and most likely lacks empathy. ",
tipsSummary
: 
"this person should realize that there is no way that they are always right.  and empathy",
typeOfRecommendation
: 
"equals b&a higher start",
__v
: 
0,
_id
: 
"652ed7b90ab29335fe9ae8d2",
        },
        {
            resultsMeaning
: 
"this person tends to lean far right and most likely lacks empathy. ",
tipsSummary
: 
"this person should realize that there is no way that they are always right.  and empathy",
typeOfRecommendation
: 
"equals b&a higher mid",
__v
: 
0,
_id
: 
"652ed7b90ab29335fe9ae8d2",
        },
        {
            resultsMeaning
: 
"this person tends to lean far right and most likely lacks empathy. ",
tipsSummary
: 
"this person should realize that there is no way that they are always right.  and empathy",
typeOfRecommendation
: 
"equals b&a higher far",
__v
: 
0,
_id
: 
"652ed7b90ab29335fe9ae8d2",
        },
        {
            resultsMeaning
: 
"this person tends to lean far right and most likely lacks empathy. ",
tipsSummary
: 
"this person should realize that there is no way that they are always right.  and empathy",
typeOfRecommendation
: 
"mixed a higher start right",
__v
: 
0,
_id
: 
"652ed7b90ab29335fe9ae8d2",
        },
        {
            resultsMeaning
: 
"this person tends to lean far right and most likely lacks empathy. ",
tipsSummary
: 
"this person should realize that there is no way that they are always right.  and empathy",
typeOfRecommendation
: 
"mixed a higher mid right",
__v
: 
0,
_id
: 
"652ed7b90ab29335fe9ae8d2",
        },
        {
            resultsMeaning
: 
"this person tends to lean far right and most likely lacks empathy. ",
tipsSummary
: 
"this person should realize that there is no way that they are always right.  and empathy",
typeOfRecommendation
: 
"mixed a higher far right",
__v
: 
0,
_id
: 
"652ed7b90ab29335fe9ae8d2",
        },
        {
            resultsMeaning
: 
"this person tends to lean far right and most likely lacks empathy. ",
tipsSummary
: 
"this person should realize that there is no way that they are always right.  and empathy",
typeOfRecommendation
: 
"mixed b higher start left",
__v
: 
0,
_id
: 
"652ed7b90ab29335fe9ae8d2",
        },
        {
            resultsMeaning
: 
"this person tends to lean far right and most likely lacks empathy. ",
tipsSummary
: 
"this person should realize that there is no way that they are always right.  and empathy",
typeOfRecommendation
: 
"mixed b higher mid left",
__v
: 
0,
_id
: 
"652ed7b90ab29335fe9ae8d2",
        },
        {
            resultsMeaning
: 
"this person tends to lean far right and most likely lacks empathy. ",
tipsSummary
: 
"this person should realize that there is no way that they are always right.  and empathy",
typeOfRecommendation
: 
"mixed b higher far left",
__v
: 
0,
_id
: 
"652ed7b90ab29335fe9ae8d2",
        },
       
    ];*/
    console.log(tester._id,'tester id before function');
    await updateUserQuizStatus(tester._id);
    let quizData = {};
    const {typeA,typeB,balanced,idealOutcome} = scoresData;
    console.log(idealOutcome,'IOC');
//console.log(scoresData,'SCore data in func');
//console.log(recommends,'recommends data in func');
console.log(typeA,typeB,balanced);
console.log(typeA > typeB && typeA > balanced,'?????????????');


function percentage(value1,value2)
{
  let percentage = (value2 - value1) / (value1) * 100;
  const finalValue = 100 + percentage;
  return finalValue;
}
const typeAPer = percentage(idealOutcome,typeA);
const typeBPer = percentage(idealOutcome,typeB);
const balancedPer = percentage(idealOutcome,balanced);
//console.log(typeAPer,'T B');
//console.log(typeBPer,'T A');
//console.log(balancedPer,'B');
//console.log(typeof balancedPer,'type');
;/**I need to pull in idealOutcome, get rid of subtraction of scores
 * At the end I need to take my three scores and divide them against the ideal outcome
 * depending on the scores percentage of the ideal outcome as well as the highest score
 * are the results we will send. Lets say the results intensity equals what percentage of
 * idealOutcome the highest score is
 */

/*!!!!!!RESULTS RECOMMENDS DECISION!!!!!!!******/
/*if(typeA > typeB && typeA > balanced) {
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
}*/

// client want 3 types of varying level results for the lefts and right levels a>k>A. villainy typA & typeB
// client also wants results for no villainy
//as well as results for both villainy types Mix typeA higher Mix typeB higher type A & B equal

/**CLIENT Specs if's & else if's*/

/**NEW RECOMMEND TYPES BELOW */
//Below runs on both villainys being greater than 0
if(typeAPer > 0 && typeBPer > 0) {
    // Both villainys FIELD IDEAS:"both a higher" "both b higher"
    if(typeAPer > typeBPer) {
        // A higher
        console.log('mixed a higher');
        console.log(typeAPer);
        console.log(typeBPer);
        /*quizData.recommendation = recommends.filter(rec => {
            return rec.typeOfRecommendation === 'mixed a higher';
        })[0];*/
        // run more score checks here for varying degrees
        // we need if statements or switch statement that checks what percentage of the total possible score each
        // variable is to deliver different results and recommendations based on the levels of villainy
        // it will be the same approach or similar to what I'm doing below
      if(between(typeAPer,0,50)) {
        console.log('mixed a higher start right');
        quizData.recommendation = recommends.filter(rec => {
            return rec.typeOfRecommendation === 'mixed a higher start right';
        })[0];
        console.log(quizData.recommendation,"AFTER SET In IF");

      }else if(between(typeAPer,50,75)){
           console.log('mixed a higher mid right');
        quizData.recommendation = recommends.filter(rec => {
            return rec.typeOfRecommendation === 'mixed a higher mid right';
        })[0];
        console.log(quizData.recommendation,"AFTER SET In IF");
      }
      else if(between(typeAPer,75,100)){
         console.log('mixed a higher far right');
        quizData.recommendation = recommends.filter(rec => {
            return rec.typeOfRecommendation === 'mixed a higher far right';
        })[0];
        console.log(quizData.recommendation,"AFTER SET In IF");
      }

    }else if(typeBPer > typeAPer){
        // B higher
        console.log('mixed B higher');
        /*quizData.recommendation = recommends.filter(rec => {
            return rec.typeOfRecommendation === 'mixed b higher';
        })[0];*/
        // run more score checks here for varying degrees

        if(between(typeBPer,0,50)) {
            console.log('mixed a higher start left',typeBPer);
            quizData.recommendation = recommends.filter(rec => {
                return rec.typeOfRecommendation === 'mixed b higher start left';
            })[0];
            console.log(quizData.recommendation,"AFTER SET In IF");
    
          }
          
          else if(between(typeBPer,50,75)){
               console.log('mixed a higher mid left');
            quizData.recommendation = recommends.filter(rec => {
                return rec.typeOfRecommendation === 'mixed b higher mid left';
            })[0];
            console.log(quizData.recommendation,"AFTER SET In IF");
          }

          else if(between(typeBPer,75,100)){
             console.log('mixed a higher far left');
            quizData.recommendation = recommends.filter(rec => {
                return rec.typeOfRecommendation === 'mixed b higher far left';
            })[0];
            console.log(quizData.recommendation,"AFTER SET In IF");
          }
    

    }
    else if(typeBPer === typeAPer){
        // Type A & B equals
        console.log('mixed A and B equals');
       /* quizData.recommendation = recommends.filter(rec => {
            return rec.typeOfRecommendation === 'mixed a and b equals';
        })[0];*/
        console.log(quizData.recommendation,"AFTER SET In IF");
        if(between(typeBPer,0,50) && between(typeAPer,0,50)) {
            console.log('mixed a higher start left');
            quizData.recommendation = recommends.filter(rec => {
                return rec.typeOfRecommendation === 'equals b&a start';
            })[0];
            console.log(quizData.recommendation,"AFTER SET In IF");
    
          }
          
          else if(between(typeBPer,50,75) && between(typeAPer,50,75)){
               console.log('mixed a higher mid left');
            quizData.recommendation = recommends.filter(rec => {
                return rec.typeOfRecommendation === 'equals b&a mid';
            })[0];
            console.log(quizData.recommendation,"AFTER SET In IF");
          }

          else if(between(typeBPer,75,100) && between(typeAPer,75,100)){
             console.log('mixed a higher far left');
            quizData.recommendation = recommends.filter(rec => {
                return rec.typeOfRecommendation === 'equals b&a far';
            })[0];
            console.log(quizData.recommendation,"AFTER SET In IF");
          }
    
        // run more score checks here for varying degrees
    }
 
}
/**NEW RECOMMEND TYPES ABOVE */


// below runs when typeB or left villainy is the only villainy present
else if(typeBPer > 0 && typeAPer === 0) {
    // only type B villainy or lefts values
    if(between(typeBPer,0,50)) {
        console.log(recommends,'REC');
        console.log(between(typeBPer,0,50),'typeB start left ran');
        quizData.recommendation = recommends.filter(rec => {
            return rec.typeOfRecommendation === 'start left';
        })[0];
        console.log(quizData.recommendation,"AFTER SET In IF");
    }

    if(between(typeBPer,50,75)) {
        console.log(between(typeBPer,50,75),'typeB mid left ran');
    quizData.recommendation = recommends.filter(rec => {
            return rec.typeOfRecommendation === 'mid left';
        })[0];
        console.log(quizData.recommendation,"AFTER SET In IF");
    }

    if(between(typeBPer,75,100)) {
        console.log(between(typeBPer,75,100),'typeB far left ran');
        quizData.recommendation = recommends.filter(rec => {
            return rec.typeOfRecommendation === 'far left';
        })[0];
        console.log(quizData.recommendation,"AFTER SET In IF");
    }

}
// below runs when typeA or right villainy is the only villainy present
else if(typeAPer > 0 && typeBPer === 0) {
    // only type A villainy or rights values
    if(between(typeAPer,0,50)) {
        console.log(between(typeAPer,0,50),'typeA start right ran');
        quizData.recommendation = recommends.filter(rec => {
            return rec.typeOfRecommendation === 'start right';
        })[0];
        console.log(quizData.recommendation,"AFTER SET In IF");
    }

    if(between(typeAPer,50,75)) {
        console.log(between(typeAPer,50,75),'typeA mid right ran');
        quizData.recommendation = recommends.filter(rec => {
            return rec.typeOfRecommendation === 'mid right';
        })[0];
        console.log(quizData.recommendation,"AFTER SET In IF");
    }

    if(between(typeAPer,75,100)) {
        console.log(between(typeAPer,75,100),'typeA far right ran');
        quizData.recommendation = recommends.filter(rec => {
            return rec.typeOfRecommendation === 'far right';
        })[0];
        console.log(quizData.recommendation,"AFTER SET In IF");
    }
 
}
// below runs when no villainy is present
else if(typeAPer === 0 && typeBPer === 0) {
 // no villainy "Ideal"
 console.log('here we deliver Ideal results Ran');
 quizData.recommendation = recommends.filter(rec => {
    return rec.typeOfRecommendation === 'Ideal';
})[0];
console.log(quizData.recommendation,"AFTER SET In IF");
};
/**CLIENT Specs if's & else if's !!!!ENDS!!!!*****/

/*!!!!!!RESULTS RECOMMENDS DECISION ENDS!!!!!!!******/
/*if(typeAPer === typeBPer && typeAPer > balancedPer && typeBPer > balancedPer) {
    console.log('equal villany');
    // results deleivery logic not sure of cat at this point
}else if(typeAPer > typeBPer && typeAPer > balancedPer) {
    console.log('villanyhigher type A');
    // typeA levels far right start right mid right
}
//No villainy



else if(typeBPer > typeAPer && typeBPer > balancedPer) {
    console.log('villanyhigher type b');
    // typeB levels far left start left mid left

}
else if(balancedPer > typeAPer && balancedPer > typeBPer) {
    console.log('Balanced is highest');
    // Balanced A.K.A. "ideal"
}
else if(balancedPer === typeAPer && balancedPer > typeBPer) {
    console.log('Balanced equals Type A villany');
    // balanced Equal typeA and they both outweigh typeB NOTE: no field thought of yet
}
else if(balancedPer === typeBPer && balancedPer > typeAPer) {
    console.log('Balanced equals Type B villany');
     // balanced Equal typeB and they both outweigh typeA NOTE: no field thought of yet
}

if(between(balancedPer,0,50)) {
    
    console.log(between(balancedPer,0,50),'between check')
    /*quizData.recommendation = recommends.filter(rec => {
        return rec.typeOfRecommendation === 'far right';
    })[0];*/
/*};*/

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