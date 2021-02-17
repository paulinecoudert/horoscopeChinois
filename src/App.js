// eslint-disable-next-line import/no-unresolved
import { useEffect, useState } from 'react';
// import signes from './data.js/signes';
import { getSign } from './helpers';
// eslint-disable-next-line no-unused-vars
import Signe from './Signe';
import Modal from './Modal';

function App() {
  const [signes, setSignes] = useState([]);
  const [sign, setSign] = useState('Inconnue');// renvoie sur le {sign}
  const [signIndex, setSignIndex] = useState(0);
  // eslint-disable-next-line max-len
  const [modalVisible, setModalVisible] = useState(false);// creation de ma variable modalvisible et son etat set de base caché

  useEffect(() => fetch('https://raw.githubusercontent.com/ltruchot/es3-to-esnext-challenges/master/011-horoscope_chinois/signes.json')
    .then((res) => res.json())
    .then((data) => {
      setSignes(data);
    }), []);

  function Signe({ nom, chemimg, desc }) {
    return (
      <div className="w-full sm:w-1/2 md:w-1/4 bg-gray-200 text-black">
        <h3>{nom}</h3>
        <img src={`images/${chemimg}`} alt={nom} />
        <p>{desc}</p>

      </div>

    );
  }

  const signescompo = signes.length > 0 ? signes.map((signe) => (
    <Signe
      nom={signe.nom}
      chemimg={signe.img}
      desc={signe.description}
      Key={signe.id}
    />
  )) : 'loading...';

  const calculatesigne = () => {
    const ipt = document.getElementById('ipt');
    const val = Number(ipt.value); // cast pour avoir un chiffre
    const idx = getSign(val);
    setSignIndex(idx);
    setSign(signes[idx].nom);
    setModalVisible(true); // le setModalVisible devient visible
  };

  return (
    <div>
      <div className="py-4">
        Quel est votre année de naissance?
        <input className="bg-gray-200" id="ipt" />
        <button className="bg-pink-200 text-black" onClick={calculatesigne}>Réponse</button>{sign}
      </div>

      <div className="flex flex-wrap">
        {signescompo}
      </div>

      {signes[signIndex] ? (
        <Modal close title="le signe est:" visible={modalVisible} hideModal={() => setModalVisible(false)}>
          <h3>{sign}</h3>
          <p>{signes[signIndex].description}</p>

        </Modal>
      ) : null}

    </div>
  );
}

export default App;
