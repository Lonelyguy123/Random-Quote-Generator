import React from 'react';
import { Link } from 'react-router-dom';
import './Homepage.css';

const Homepage = () => {
  return (
    <div>
      <h1 className="titl">Quote Geneartor</h1>
      <p className="para">This application generates random quotes. You can either generate a random quote or choose a category to get a quote from.</p>
      <Link to="/Generator"><button className="button1">Random Quotes</button></Link>
      <Link to="/Categorybased"><button className="button1">Category based Random quotes</button></Link>
    </div>
  );
}

export default Homepage; 