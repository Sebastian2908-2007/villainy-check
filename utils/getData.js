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
          return quiz;
  
       
  
         
        } else {
          // Handle error states, e.g., show an error message
          console.error('Error getting quiz:', response.statusText);
        }
      } catch (error) {
        console.error('Error getting quiz:', error.message);
      }
};

export const getSingleProduct = async (productId) => {
  try {
    // Send a request to your API endpoint to fetch the product
    const response = await fetch(`/api/Product/singleproduct/${productId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      // Successfully retrieved the product data
      const { product } = await response.json();
      return product;
    } else {
      // Handle error states, e.g., show an error message
      console.error('Error getting product:', response.statusText);
    }
  } catch (error) {
    console.error('Error getting product:', error.message);
  }
};
export const getSingleUser = async (userId) => {
  try {
    // Send a request to your API endpoint to fetch the product
    const response = await fetch(`/api/Users/singleuser/${userId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      // Successfully retrieved the product data
      const { user } = await response.json();
      return user;
    } else {
      // Handle error states, e.g., show an error message
      console.error('Error getting single user:', response.statusText);
    }
  } catch (error) {
    console.error('Error gettingsingle user:', error.message);
  }
};

export async function fetchQuizzes() {
  try {
    const response = await fetch('/api/Quiz'); // Replace with your API endpoint
    const data = await response.json();
    return data.quizzes;
  
  } catch (error) {
    console.error('Error fetching quizzes:', error);
  }
 
}

/**verify  logged in account (free)*/
export const verifyFreeLoggedIn = async () => {
 const response = await fetch('/api/Dashboard/free');
 if(response.ok) {
  const data = await response.json();
  return data;
 }else{
  return false;
 }
};
/**verify  logged in account (free)*/
export const verifyPaidLoggedIn = async () => {
 const response = await fetch('/api/Dashboard/paidadmin');
 if(response.ok) {
  const data = await response.json();
  return data;
 }else{
  return false;
 }
};
/**Added Jan 24 for super admin quiz ability*/
export const verifySuperAdmin = async () => {
 const response = await fetch('/api/Dashboard/superadmin');
 if(response.ok) {
  const data = await response.json();
  return data;
 }else{
  return false;
 }
};


export const getProducts = async () => {
  try{
 const response = await fetch('/api/Product',{
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
  }
 }
);
 if(response.ok) {
  const {products} = await response.json();
  return products;
 }
}catch(e) {
  console.log(e);
}
};
export const getUsers = async () => {
  try{
 const response = await fetch('/api/Users',{
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
  }
 }
);
 if(response.ok) {
  const {users} = await response.json();
  return users;
 }
}catch(e) {
  console.log(e);
}
};