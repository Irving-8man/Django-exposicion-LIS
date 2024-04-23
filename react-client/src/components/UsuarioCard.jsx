import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

export function UsuarioCard({ usuario }) {
  //hooks
  const navigate = useNavigate();

  //estilos
  const classCard = "p-3 flex justify-between cursor-pointer border border-gray-600 rounded-lg hover:bg-zinc-300"
  const classCardNombre = "text-lg font-semibold "

  const handleClick = () => {
    navigate('/usuario/' + usuario.id);
  };

  return (
    <li>
      <div 
        onClick={handleClick}
        className={classCard}
      >
        <div className={classCardNombre}>
          <p>{usuario.nombre}</p>
          <p>{usuario.apellido}</p>
        </div>
        <p>Edad: {usuario.edad}</p>
      </div>
    </li>
  );
}

UsuarioCard.propTypes = {
  usuario: PropTypes.shape({
    id: PropTypes.number.isRequired,
    nombre: PropTypes.string.isRequired,
    apellido: PropTypes.string.isRequired,
    edad: PropTypes.number.isRequired,
  }).isRequired,
};
