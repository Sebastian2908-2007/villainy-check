const answers = [
    {answerTxt:'disagree with this far more',answerType:'left'},
    {answerTxt:'disagree with this more',answerType:'left'},
    {answerTxt:'slightly disagree with this more',answerType:'left'},
    {answerTxt:'neutral/ both are equally disagreeable',answerType:'mid'},
    {answerTxt:'slightly disagree with this more',answerType:'right'},
    {answerTxt:'disagree with this more',answerType:'right'},
    {answerTxt:'disagree with this far more',answerType:'right'},
];
const answersLeft = [
    
];
const answersRight = [];
export const questions = [
    {   
        ques1:{
            text:"A past girlfriend or boyfriend requests a meeting and will become angry if you decline.",
              answers:[
            {answerTxt:'neutral/ both are equally disagreeable',answerType:'mid' ,correct:"true" },
            {answerTxt:'slightly disagree with this more',answerType:'start left',correct:"false"},
            {answerTxt:'disagree with this more',answerType:'mid left',correct:"false"},
            {answerTxt:'disagree with this far more',answerType:'far left',correct:"false"},
        ],
        },
        ques2:{
            text:"A past girlfriend or boyfriend will	attempt to steal half of a day's worth of wages from you.",
              answers:[
            {answerTxt:'neutral/ both are equally disagreeable',answerType:'mid' ,correct:"true"},
            {answerTxt:'slightly disagree with this more',answerType:'start right',correct:"false"},
            {answerTxt:'disagree with this more',answerType:'mid right',correct:"false"},
            {answerTxt:'disagree with this far more',answerType:'far right',correct:"false"},
        ],
        },
        
    
      
        correctAnswer: answers[3],
        correctType:'mid',
        answers: answers
    },

    {   
        ques1:{
            text:"A friend frequently asks to borrow your car",
              answers:[
            {answerTxt:'neutral/ both are equally disagreeable',answerType:'mid',correct:"false"},
            {answerTxt:'slightly disagree with this more',answerType:'start left',correct:"false"},
            {answerTxt:'disagree with this more',answerType:'mid left',correct:"false"},
            {answerTxt:'disagree with this far more',answerType:'far left',correct:"false"},
        ],
        },
        ques2:{
            text:"A friend takes your car without asking",
              answers:[
            {answerTxt:'neutral/ both are equally disagreeable',answerType:'mid',correct:"false"},
            {answerTxt:'slightly disagree with this more',answerType:'start right',correct:"false"},
            {answerTxt:'disagree with this more',answerType:'mid right',correct:"false"},
            {answerTxt:'disagree with this far more',answerType:'far right' ,correct:"true"},
        ],
        },
        
    
    
        correctAnswer: answers[6],
        correctType:'far right',
        answers: answers
    },

    {   
        ques1:{
            text:"A person you date becomes passive aggressive(and lashes out subtly) as a result",
              answers:[
            {answerTxt:'neutral/ both are equally disagreeable',answerType:'mid',correct:"false"},
            {answerTxt:'slightly disagree with this more',answerType:'start left',correct:"false"},
            {answerTxt:'disagree with this more',answerType:'mid left',correct:"false"},
            {answerTxt:'disagree with this far more',answerType:'far left' ,correct:"true"},
        ],
        },
        ques2:{
            text:"An old enemy finds your social media or some other information about you",
              answers:[
            {answerTxt:'neutral/ both are equally disagreeable',answerType:'mid',correct:"false"},
            {answerTxt:'slightly disagree with this more',answerType:'start right',correct:"false"},
            {answerTxt:'disagree with this more',answerType:'mid right',correct:"false"},
            {answerTxt:'disagree with this far more',answerType:'far right',correct:"false"},
        ],
        },
       
    
      
        correctAnswer: answers[0],
        correctType:'far left',
        answers: answers
    },

    {   
        ques1:{
            text:"A co-worker believes in astrology, witchcraft,yoga spiritualism, or black magic",
              answers:[
            {answerTxt:'neutral/ both are equally disagreeable',answerType:'mid',correct:"false"},
            {answerTxt:'slightly disagree with this more',answerType:'start left',correct:"false"},
            {answerTxt:'disagree with this more',answerType:'mid left',correct:"false"},
            {answerTxt:'disagree with this far more',answerType:'far left',correct:"false"},
        ],
        },
        ques2:{
            text:"A co-worker rephrases what you said into something that you did not intend",
              answers:[
            {answerTxt:'neutral/ both are equally disagreeable',answerType:'mid',correct:"false"},
            {answerTxt:'slightly disagree with this more',answerType:'start right',correct:"false"},
            {answerTxt:'disagree with this more',answerType:'mid right',correct:"false"},
            {answerTxt:'disagree with this far more',answerType:'far right',correct:"true"},
        ],
        },
       
    

        correctAnswer: answers[6],
        correctType:'far right',
        answers: answers
    },

    {   
        ques1:{
            text:"A friend who volunteers at the animal shelter scolds you for not volunteering as well.",
              answers:[
            {answerTxt:'neutral/ both are equally disagreeable',answerType:'mid',correct:"false"},
            {answerTxt:'slightly disagree with this more',answerType:'start left',correct:"false"},
            {answerTxt:'disagree with this more',answerType:'mid left',correct:"false"},
            {answerTxt:'disagree with this far more',answerType:'far left',correct:"true"},
        ],
        },
        ques2:{
            text:"After damaging your friends shoes, he reprimands you.",
              answers:[
            {answerTxt:'neutral/ both are equally disagreeable',answerType:'mid',correct:"false"},
            {answerTxt:'slightly disagree with this more',answerType:'start right',correct:"false"},
            {answerTxt:'disagree with this more',answerType:'mid right',correct:"false"},
            {answerTxt:'disagree with this far more',answerType:'far right',correct:"false"},
        ],
        },
        
    
     
        correctAnswer: answers[0],
        correctType:'far left',
        answers: answers
    },

    {   
        ques1:{
            text:"Without your input, someone develops rules that you must follow in the workplace.",
              answers:[
            {answerTxt:'neutral/ both are equally disagreeable',answerType:'mid',correct:"true"},
            {answerTxt:'slightly disagree with this more',answerType:'start left',correct:"false"},
            {answerTxt:'disagree with this more',answerType:'mid left',correct:"false"},
            {answerTxt:'disagree with this far more',answerType:'far left',correct:"false"},
        ],
        },
        ques2:{
            text:"Having come to an agreement on a particular protocal/rule, the other party neglects to follow it",
              answers:[
            {answerTxt:'neutral/ both are equally disagreeable',answerType:'mid',correct:"true"},
            {answerTxt:'slightly disagree with this more',answerType:'start right',correct:"false"},
            {answerTxt:'disagree with this more',answerType:'mid right',correct:"false"},
            {answerTxt:'disagree with this far more',answerType:'far right',correct:"false"},
        ],
        },
        
    

        correctAnswer: answers[3],
        correctType:'mid',
        answers: answers
    },

    {   
        ques1:{
            text:"Someone demands that others cannot shame him.",
              answers:[
            {answerTxt:'neutral/ both are equally disagreeable',answerType:'mid',correct:"false"},
            {answerTxt:'slightly disagree with this more',answerType:'start left',correct:"false"},
            {answerTxt:'disagree with this more',answerType:'mid left',correct:"false"},
            {answerTxt:'disagree with this far more',answerType:'far left',correct:"true"},
        ],
        },
        ques2:{
            text:"In a coffee shop, someone pretends to be higher status to attract attention",
              answers:[
            {answerTxt:'neutral/ both are equally disagreeable',answerType:'mid',correct:"false"},
            {answerTxt:'slightly disagree with this more',answerType:'start right',correct:"false"},
            {answerTxt:'disagree with this more',answerType:'mid right',correct:"false"},
            {answerTxt:'disagree with this far more',answerType:'far right',correct:"false"},
        ],
        },
     
    
       
        correctAnswer: answers[0],
        correctType:'far left',
        answers: answers
    },

    {  
         
        ques1:{
            text:"Your colleague buys products from a mega corporation",
              answers:[
            {answerTxt:'neutral/ both are equally disagreeable',answerType:'mid',correct:"true"},
            {answerTxt:'slightly disagree with this more',answerType:'left'},
            {answerTxt:'disagree with this more',answerType:'left'},
            {answerTxt:'disagree with this far more',answerType:'left'},
        ],
        },
        ques2:{
            text:"A homeless man uses the $20 you gave him to buy scratch-off tickets",
              answers:[
            {answerTxt:'neutral/ both are equally disagreeable',answerType:'mid' ,correct:"true"},
            {answerTxt:'slightly disagree with this more',answerType:'right'},
            {answerTxt:'disagree with this more',answerType:'right'},
            {answerTxt:'disagree with this far more',answerType:'right'},
        ],
        },
       
    
        
        correctAnswer: answers[3],
        correctType:'mid',
        answers: answers
    },

    {   

        ques1:{
            text:"A partner or employee agrees to work 30 hours/week, and refuses to work more when you are behind schedule",
              answers:[
            {answerTxt:'neutral/ both are equally disagreeable',answerType:'mid',correct:"false"},
            {answerTxt:'slightly disagree with this more',answerType:'left',correct:"false"},
            {answerTxt:'disagree with this more',answerType:'left',correct:"false"},
            {answerTxt:'disagree with this far more',answerType:'left',correct:"false"},
        ],
        },
        ques2:{
            text:"Your competitor reveals a minor secret of yours just before a review for a potential promotion",
              answers:[
            {answerTxt:'neutral/ both are equally disagreeable',answerType:'mid',correct:"false"},
            {answerTxt:'slightly disagree with this more',answerType:'right',correct:"false"},
            {answerTxt:'disagree with this more',answerType:'right',correct:"false"},
            {answerTxt:'disagree with this far more',answerType:'right' ,correct:"true"},
        ],

        },
    
        correctAnswer: answers[6],
        correctType:'right',
        answers: answers
    },
];