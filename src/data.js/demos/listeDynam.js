import { useState } from 'react';

function ListeDynamique() {
  const [list, setList] = useState([]);

  const arr1 = [...list, 'tipi', 'tipo'];

  return (
    <div>
      <button
        className="bg-gray-300"
        // eslint-disable-next-line no-undef
        onClick={() => {
          setList([...arr1, 'tilt']);
        }}
        type="button"
      >add toto
      </button>
      <ul>
        {list.map((item) => <li>{item}</li>)}
      </ul>
    </div>
  );
}

export default ListeDynamique;
