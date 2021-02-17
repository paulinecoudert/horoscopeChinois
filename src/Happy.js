import { useState } from 'react';

const panda = '🐼';
const buffle = '🐂';
const animaux = [panda, buffle, '🐷', '🦇'];

function Happy() {
  const getRandomInArray = (arr) => arr[Math.floor(Math.random() * arr.length)];
  const [happy, setHappy] = useState(panda);

  const handleClick = () => {
    const randomAnimal = getRandomInArray(animaux);
    // setHappy(happy === panda ? buffle : panda);
    setHappy(randomAnimal);
  };

  return (
    <div onClick={handleClick}>
      {happy}
    </div>
  );
}

export default Happy;
