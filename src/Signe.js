import PropTypes from 'prop-types';
// eslint-disable-next-line no-unused-vars
function Signe({ nom, chemimg, desc }) {
  return (
    <div className="w-full sm:w-1/2 md:w-1/4 bg-red-500 text-black">
      <h2>{nom}</h2>
      <img src={`images/${chemimg}`} alt={nom} />
      <p>{desc}</p>

    </div>

  );
}
Signe.propTypes = {

  nom: PropTypes.string.isRequired,
  chemimg: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,

};
export default Signe;
