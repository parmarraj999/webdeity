import React, { useState } from 'react';
import Confetti from 'react-confetti';

const ButtonEmoji = () => {
  const [isRaining, setIsRaining] = useState(false); // Track raining state
  const emojis = ['️', '', '', '', '', '']; // Choose your emojis

  const stopRain = () => setIsRaining(false); // Stop the rain

  const handleClick = () => {
    setIsRaining(true); // Start the rain

    // Set timeout to stop rain after 3 seconds for example
    setTimeout(stopRain, 5000);
  };

  return (
    <div>
      <button onClick={handleClick}>Make it rain! ☔️</button>
      {isRaining && (
        <Confetti
          particleCount={50} // Number of emojis to drop
          run={isRaining} // Trigger rain when true
          options={{
            shapes: emojis, // Use your chosen emojis
            start: { y: 0, x: Math.random() * window.innerWidth }, // Drop from top with random X
            end: { y: window.innerHeight }, // Fall to bottom
          }}
        />
      )}
    </div>
  );
};

export default ButtonEmoji;
