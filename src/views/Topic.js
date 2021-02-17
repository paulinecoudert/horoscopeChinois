import { useParams } from 'react-router-dom';

const Topic = () => {
  const arr = [
    { nom: 'Rome', description: 'blablobli' },
    { nom: 'Milan', description: 'bliblobla', image: '/images/italie.jpg' },
  ];

  const { ville } = useParams();
  const infos = arr.find((item) => item.nom === ville);
  return (
    <p>
      <h3>{infos.nom} </h3>
      <p>{infos.description}</p>
      <img className="boule" src={infos.image} />
    </p>
  );
};

export default Topic;
