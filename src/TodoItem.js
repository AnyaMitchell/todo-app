import { useState } from 'react';

function TodoItem({ task, deleteTask, toggleComplete, editTask }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(task.text);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    editTask(task.id, editedText);
    setIsEditing(false);
  };

  const handleInputChange = (e) => {
    setEditedText(e.target.value);
  };

  return (
    <li className={task.completed ? 'completed' : ''}>
      {isEditing ? (
        <>
          <input
            type="text"
            value={editedText}
            onChange={handleInputChange}
          />
          <button onClick={handleSave} className="edit-task">Save</button>
        </>
      ) : (
        <>
          <span>{task.text}</span>
          <div>
            <button onClick={() => toggleComplete(task.id)} className="complete-task">
              {task.completed ? 'Undo' : 'Complete'}
            </button>
            <button onClick={handleEdit} className="edit-task">Edit</button>
            <button onClick={() => deleteTask(task.id)} className="delete-task">Delete</button>
          </div>
        </>
      )}
    </li>
  );
}

export default TodoItem;

