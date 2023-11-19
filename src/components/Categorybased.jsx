// QuotesGenerator.jsx
import React, { useState, useEffect } from 'react';
import Dropdown from './Dropdown';
import './Categorybased.css';

const QuotesGenerator = () => {
  const [selectedCategory, setSelectedCategory] = useState(''); // State to hold the selected category
  const [quote, setQuote] = useState({ text: '', author: '' });

  const categories = [
    'age', 'alone', 'amazing', 'anger', 'architecture', 'art', 'attitude', 'beauty',
    'best', 'birthday', 'business', 'car', 'change', 'communications', 'computers', 'cool',
    'courage', 'dad', 'dating', 'death', 'design', 'dreams', 'education', 'environmental',
    'equality', 'experience', 'failure', 'faith', 'family', 'famous', 'fear', 'fitness',
    'food', 'forgiveness', 'freedom', 'friendship', 'funny', 'future', 'god', 'good',
    'government', 'graduation', 'great', 'happiness', 'health', 'history', 'home', 'hope',
    'humor', 'imagination', 'inspirational', 'intelligence', 'jealousy', 'knowledge',
    'leadership', 'learning', 'legal', 'life', 'love', 'marriage', 'medical', 'men', 'mom',
    'money', 'morning', 'movies', 'success'
  ];

  useEffect(() => {
    // Make the API request with the selected category when it changes
    if (selectedCategory) {
      fetch(`https://api.api-ninjas.com/v1/quotes?category=${selectedCategory}`, {
        headers: {
          'X-Api-Key': 'ofe3rvQ4D58YcB8C1curaA==rYxkURD6eqL8kjSX',
          'Content-Type': 'application/json',
        },
      })
        .then((response) => response.json())
        .then((data) => {
          // Assuming the API response structure is an array with quotes
          setQuote((prevQuote) => {
            // Make sure data is not an empty array
            if (data.length > 0) {
              const newData = {
                text: data[0].quote || 'Default Quote',
                author: data[0].author || 'Default Author',
              };
              return newData;
            } else {
              // If the data array is empty, return the previous state
              return prevQuote;
            }
          });
        })
        .catch((error) => console.error('Error fetching quote:', error));
    }
  }, [selectedCategory])

  return (
    <div className="dropdown">
      <Dropdown options={categories} onSelect={setSelectedCategory} />
      <div>
        <div className="contain">      
        <div className="Q">{quote.text}</div>
        <div className="l"></div>
        <div className="b">
          <div>
            <div className="A">{quote.author}</div>
            {/* Other components and buttons */}
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default QuotesGenerator;
