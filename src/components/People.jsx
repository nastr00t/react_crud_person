import PropTypes from 'prop-types';
import { Person } from './Person';

export const People = ({ persons, setPersons }) => {
    return (
        <div>
            <h2>IT TEAM</h2>
            <div className='container'>
                <div className='row d-flex flex-wrap row-cols-1 row-cols-md-2 row-cols-lg-3'>
                    {persons.map((person) => {
                        return (
                            <div key={person.id}>
                                <Person
                                    id={person.id}
                                    name={person.name}
                                    img={person.img}
                                    role={person.role}
                                />
                            </div>
                        );
                    })}
                </div>
            </div>
            <div>
                <div className='card mt-2'>
                    <h3 className='card-title text-center text-white bg-dark bg-gradient p-3'>Crear un nuevo empleado</h3>
                    <div className='card-body my-4'>

                        <div className="mb-3">
                            <label for="name" className="form-label">Nombre</label>
                            <input type="text" className="form-control" id="name" aria-describedby="nameHelp" />
                        </div>

                        <div className="mb-3">
                            <label for="role" className="form-label">Cargo</label>
                            <input type="text" className="form-control" id="role" />
                        </div>
                        <div className="mb-3">
                            <select className="form-select" aria-label="Seleccione imagen" id="url">
                                <option selected>Seleccione Imagen</option>
                                <option value="https://bootdey.com/img/Content/avatar/avatar1.png">Avatar1 El</option>
                                <option value="https://bootdey.com/img/Content/avatar/avatar2.png">Avatar2 El</option>
                                <option value="https://bootdey.com/img/Content/avatar/avatar3.png">Avatar3 Ella</option>
                                <option value="https://bootdey.com/img/Content/avatar/avatar4.png">Avatar4 El</option>
                                <option value="https://bootdey.com/img/Content/avatar/avatar5.png">Avatar5 El</option>
                                <option value="https://bootdey.com/img/Content/avatar/avatar6.png">Avatar6 El</option>
                                <option value="https://bootdey.com/img/Content/avatar/avatar7.png">Avatar7 El</option>
                                <option value="https://bootdey.com/img/Content/avatar/avatar8.png">Avatar8 Ella</option>
                            </select>
                        </div>
                        <button type="submit" className="btn btn-primary">Ingresar</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
People.propTypes = {
    persons: PropTypes.object,
    setPersons: PropTypes.func
}