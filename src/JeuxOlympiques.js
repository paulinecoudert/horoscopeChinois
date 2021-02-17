import { useState } from 'react';

const paysplus = [
  {
    pays: 'Belgique',
    points: 3,
    drapeau: 'belgique.png',
    id: 1,
  },
  {
    pays: 'France',
    points: 2,
    drapeau: 'france.png',
    id: 2,
  },
  {
    pays: 'Corée',
    points: 4,
    drapeau: 'coree.png',
    id: 3,
  },
  {
    pays: 'Usa',
    points: 6,
    drapeau: 'usa.png',
    id: 4,
  },
  {
    pays: 'Laos',
    points: 12,
    drapeau: 'laos.png',
    id: 5,
  },

];

function JeuxOlympiques() {
  const [pointsbe, setScoreBe] = useState(0);
  const [pointsfr, setScoreFr] = useState(0);

  const handleClick1 = () => {
    setScoreBe(pointsbe + 1);
  };
  const handleClick2 = () => {
    setScoreFr(pointsfr + 1);
  };

  const getWinner = () => {
    const max = Math.max(pointsfr, pointsbe);
    let winner = ' ';
    if (max === pointsbe) {
      // eslint-disable-next-line no-const-assign
      winner += 'Belgique';
    }

    if (max === pointsfr) {
      // eslint-disable-next-line no-const-assign
      winner += 'France';
    }
    return winner;
  };

  const winner = getWinner();

  return (

    <div className="flex justify-between ">

      <div>Belgique
        <h2 className="text-xl black bold">{paysplus[0].pays}</h2>
        <button onClick={handleClick1}><img src={`images/${paysplus[0].drapeau}`} alt="drapeau" /></button>
        <p className="text-xl bold ">{pointsbe}</p>
      </div>

      <div>France
        <h2 className="text-xl black bold">{paysplus[1].pays}</h2>
        <button onClick={handleClick2}><img src={`images/${paysplus[1].drapeau}`} alt="drapeau" /></button>
        <p className="text-xl bold ">{pointsfr}</p>
      </div>

      <p>le gagant est: {winner}</p>

    </div>

  );
}

export default JeuxOlympiques;
