export const updateUserQuizStatus = async (userId) => {
    try{
     const response = await fetch('/api/Users',{
        method:'PUT',
        headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            userId: userId,
            updatedData:{
                quizComplete: true,
            }
          })
     });
     if(response.ok) {
        return true;
     }
    }catch(e) {
        return false;
    }
};