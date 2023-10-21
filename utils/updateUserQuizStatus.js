export const updateUserQuizStatus = async (userId) => {
    console.log(userId,'In function');
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
        console.log(e,'ERR in update quiz status');
        return false;
    }
};