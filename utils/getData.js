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
        //  console.log(quiz,"QUIZ DATA FEtched");
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
      console.log(product, "Product Data Fetched");
      return product;
    } else {
      // Handle error states, e.g., show an error message
      console.error('Error getting product:', response.statusText);
    }
  } catch (error) {
    console.log(error);
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
      console.log(user, "single user Data Fetched");
      return user;
    } else {
      // Handle error states, e.g., show an error message
      console.error('Error getting single user:', response.statusText);
    }
  } catch (error) {
    console.log(error);
    console.error('Error gettingsingle user:', error.message);
  }
};
