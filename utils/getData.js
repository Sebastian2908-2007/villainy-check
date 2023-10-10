export const getSingleQuiz = async (quizId) => {
    try {
        // Send questionData to your API endpoint using fetch or Axios
       
        const response = await fetch(`/api/Quiz/singlequiz/${quizId}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
         
        });
  
        if (response.ok) {
          // Successfully created a new question
          const { quiz } = await response.json();
          console.log(quiz,"QUIZ DATA FEtched");
          return quiz;
  
       
  
         
        } else {
          // Handle error states, e.g., show an error message
          console.error('Error getting quiz:', response.statusText);
        }
      } catch (error) {
        console.log(error);
        console.error('Error getting quiz:', error.message);
      }
};