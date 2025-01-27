import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const Todo = ({ id, title, desc, onRemoveTodo }) => {
    const onDelete = () => {
        onRemoveTodo(id);
    };

    return (
        <div className="flex justify-center">
            <article className="p-4 border rounded shadow-md mb-4 mt-4 w-1/2 hover:shadow-lg transition duration-500 ease-in-out">
                <div className="flex justify-between items-center">
                    <div>
                        <h3 className="text-xl font-bold mb-2">{title}</h3>
                        <p className="text-gray-700">{desc}</p>
                    </div>
                    <div>
                        <button className="text-red-500 hover:text-red-700" onClick={onDelete}>
                            <FontAwesomeIcon icon={faTrash} />
                        </button>
                    </div>
                </div>
            </article>
        </div>
    );
};

export default Todo;
