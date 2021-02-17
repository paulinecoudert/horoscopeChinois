import { useRef, useState } from 'react';

const Budget = () => {
  const [somme, setSomme] = useState(0); // mon resultat et mon opération
  const val1 = useRef(); // fait appel à la valeur1
  const val2 = useRef(); // fait appel à la valeur2

  const calculateSomme = () => {
    setSomme(Number(val1.current.value) + (Number(val2.current.value))); // Je caste Number pour qu'il fasse le calcul
  };

  return (
    <div>
      Quel est ton salaire?
      <input ref={val1} type="number" onInput={calculateSomme} className="bg-gray-200" id="ipt" />

      Quel est ton salaire?
      <input ref={val2} type="number" onInput={calculateSomme} className="bg-gray-200" id="ipt" />

      <p>Le Total est: {somme} </p>

    </div>

  );
};
export default Budget;
