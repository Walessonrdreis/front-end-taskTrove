import React, { useState } from 'react';

import NewTaskForm from '../../Pages/newTaskForm/newTaskForm';
import NavbarLink from '../Navbar/Navbar.styles';



const TaskManager = () => {
  const [showForm, setShowForm] = useState(false);

  const handleShowForm = () => {
    setShowForm(true);
  };

  return (
    <div>
      <NavbarLink onClick={handleShowForm}>Nova Tarefa</NavbarLink>
      {showForm && <NewTaskForm />}
    </div>
  );
};

export default TaskManager;
