import React from 'react';

const Blogs = () => {
    return (
         <div className='mx-40 my-40'>
            <div className='mb-6'>
                <h3 className='font-semibold'>1. When should you use context API ?</h3>
                <p>Ans: The Context API in React should be used when we need to share data between components that are not directly related to each other in the component tree. It provides a way to pass data through the component tree without having to pass props down manually at every level.
                If we want to change the theme of our application and have all components update accordingly, we can use the Context API to pass the theme data down the component tree.If we have components that require user authentication, we can use the Context API to pass the user's authentication status down the component tree. If we want to support multiple languages in our application, we can use the Context API to pass the selected language down the component tree.
                </p>
            </div>

            <div className='mb-6'>
                <h3 className='font-semibold'>2. What is custom Hook ?</h3>
                <p>Ans: A custom hook in React is a JavaScript function that starts with the prefix use and follows the rules of the useState, useEffect, or useContext hooks. Custom hooks allow us to extract reusable logic from a component and share it between components.

                    Custom hooks are useful when multiple components have similar logic or state management requirements. By creating a custom hook, we can encapsulate this logic in one place and reuse it in multiple components without duplicating code.</p>
            </div>
            
        </div>
     
    );
};

export default Blogs;