import PropTypes from 'prop-types';
import { Person } from './Person';
import { useState } from 'react';

export const People = ({ persons, setPersons }) => {

    // Estado para identificar a la persona que se está editando
    const [editingId, setEditingId] = useState(null);

    // Estado para la persona que se editó
    const [editedPerson, setEditedPerson] = useState({
        name: '',
        rol: '',
        img: ''
    });

    // Estado para establecer si se está editando o no
    const [isEditing, setIsEditing] = useState(false);

    // Método para capturar los datos desde el formulario
    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditedPerson(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    // Método para crear nuevo empleado
    const handleCreate = (e) => {

        // Prevenir que el navegador se actualice
        e.preventDefault();

        setPersons([...persons, { id: persons.length + 1, ...editedPerson }]);

        // Resetear la variable de estado de editedPerson
        setEditedPerson({ name: '', role: '', img: '' });

    }

    // Método para editar los datos de una persona
    const handleEdit = (id, e) => {

        // Establecemos el Id de la persona a editar
        setEditingId(id);

        // Activar el estado de edición
        setIsEditing(true);

        // Buscar la persona a editar
        const personToEdit = persons.find(person => person.id === id);

        setEditedPerson({ ...personToEdit });

    }

    // Método para actualizar los datos modificados
    const handleSave = (e) => {

        // Prevenir que el navegador se actualice
        e.preventDefault();

        // Actualizar el estado de persons al guardar los datos modificados
        const updatedPersons = persons.map(person => person.id === editingId ? editedPerson : person);

        // Actualizar los datos de la persona en el array
        setPersons(updatedPersons);

        // Desactivar el estado de edición
        setIsEditing(false);

        // Resetear la variable de estado editingId a null
        setEditingId(null);

        // Resetear la variable de estado editedPerson
        setEditedPerson({ name: '', role: '', img: '' });
    }

    return (
        <div>
            <h2 className='text-center my-2'>IT TEAM</h2>
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
                                    handleEdit={() => handleEdit(person.id)}
                                />
                            </div>
                        );
                    })}
                </div>
            </div>
            <div>
                <form className='rounded'>
                <div className='card mt-2'>
                        <h3 className='card-title text-center text-white bg-dark bg-gradient p-3'>

                            {!isEditing ? 'Crear un nuevo empleado' : 'Actualizar Empleado'}
                        </h3>
                    <div className='card-body my-4'>

                        <div className="mb-3">
                            <label for="name" className="form-label">Nombre</label>
                                <input type="text" className="form-control" id="name" name="name" value={editedPerson.name} onChange={handleChange} aria-describedby="nameHelp" />
                        </div>

                        <div className="mb-3">
                            <label for="role" className="form-label">Cargo</label>
                                <input type="text" className="form-control" id="role" name='role' value={editedPerson.role} onChange={handleChange} />
                        </div>
                        <div className="mb-3">
                                <label for="url" className="form-label">Avatar</label>
                                <select className="form-select" aria-label="Seleccione imagen" id="url" name='url' onChange={handleChange} >
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
                            <button type="submit" className="btn btn-primary" onClick={isEditing ? handleSave : handleCreate}>{isEditing ? 'Modificar' : 'Crear'}</button>

                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}
People.propTypes = {
    persons: PropTypes.array,
    setPersons: PropTypes.func
}