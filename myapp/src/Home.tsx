import React from 'react';
import Rpc from './reusable-persentaion-component.tsx';
const Home = () => {
    return (
        <div>
            <h1>Welcome to the Home Page!</h1>
            <p>This is where you can find the latest updates and information.</p>
            <p>Feel free to navigate through the site using the links above.</p>
            <Rpc 
                img={""} 
                invertAlignment={false} 
                invertColors={true} 
                bigText="Big Text Here" 
                smallText="Small Text Here" 
                buttonText="Click Me" 
                />
        </div>
    );
};

export default Home;
