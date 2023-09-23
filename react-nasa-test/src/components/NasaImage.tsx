import React, { useEffect, useState } from 'react';
import './NasaImage.css'

// Define the NASA API key
const API_KEY = 'bArs10qVPMxJk49pW1diSTQnXcKSvuhlLJTxO4b3';

// Function to generate a random date within a given range
function getRandomDate(startDate: Date, endDate: Date): Date {
  const startMillis = startDate.getTime();
  const endMillis = endDate.getTime();
  const randomMillis = startMillis + Math.random() * (endMillis - startMillis);
  const randomDate = new Date(randomMillis);
  return randomDate;
}

// Define the date range for APOD (June 16, 1995, to today)
const startDate = new Date('1995-06-16');
const endDate = new Date();

// Generate a random date within the date range
const randomDate = getRandomDate(startDate, endDate);

// Format the random date as 'YYYY-MM-DD'
const formattedDate = randomDate.toISOString().split('T')[0];

const NasaImage: React.FC = () => {

  const [imageURL, setImageURL] = useState<string | null>(null);

  useEffect(() => {
    // Make an API call to fetch a random APOD image
    async function fetchRandomAPOD() {
      try {
        const response = await fetch(
          `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&date=${formattedDate}`
        );
        if (response.ok) {
          const searchData = await response.json();
          setImageURL(searchData.url);
        } else {
          console.error(
            'Failed to fetch data from NASA API:',
            response.status,
            response.statusText
          );
        }
      } catch (error) {
        console.error('An error occurred:', error);
      }
    }

    // Call the function to fetch the random APOD image
    fetchRandomAPOD();
  }, []);

  return (

    <div className="centered-container">
      {imageURL && <img src={imageURL} className="centered-image"/>}
    </div>
  );
};

export default NasaImage;
