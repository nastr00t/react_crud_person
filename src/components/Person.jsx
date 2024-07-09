import PropTypes from 'prop-types';

export const Person = ({ name, role, img }) => {

    return (
        <div className='col'>

            <div className='card' style={{ width: "18rem;" }}>
                <img className='card-img-top' src={img} alt="person" />

                <div className='card-body'>
                    <h4 className='card-title'>{name}</h4>
                    <p className='card-text'>{role}</p>
                </div>
                <div className='container mb-4 text-center bg-light bg-gradient p-2'>
                    <button className='btn btn-outline-success me-2'>Editar</button>
                    <button className='btn btn-outline-danger'>Eliminar</button>
                </div>

            </div>

        </div>
    )
}


Person.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired
}
