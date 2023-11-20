import React, { useState } from 'react';
import refreshicon from '../assets/refresh-icon.png';
import './Generator.css';

const Generator = () => {
  const [quote, setQuote] = useState({ author: 'New author', text: 'New quote' });

  async function loadQuote() {
    try {
      const response = await fetch('https://api.api-ninjas.com/v1/quotes?category=', {
        headers: {
          'X-Api-Key': 'ofe3rvQ4D58YcB8C1curaA==rYxkURD6eqL8kjSX',
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error(`Failed to fetch. Status: ${response.status}`);
      }

      const data = await response.json();
      setQuote((prevQuote) => {
        // Assuming the API response structure is { quote: "New Quote", author: "New Author" }
        const newData = {
          text: data[0].quote || 'Default Quote',
          author: data[0].author || 'Default Author',
        };
        return newData; // Return the new state value
      });
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  return (
    <div className="container">
      <div className="Quote">{quote.text}</div>
      <div>
        <div className="line"></div>
        <div className="bottom">
          <div>
            <div className="Author">{quote.author}</div>
            <div className="icons">
              <img src={refreshicon} onClick={loadQuote} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Generator;

