import React from 'react';
import { FormContainer, Form, Label, Input, Button } from './newTaskForm.styles';


const NewTaskForm = ({ handleSubmit }) => {
  return (
    <FormContainer>
      <Form onSubmit={handleSubmit}>
        <Label>Titulo:</Label>
        <Input type="text" name="title" />
        <Label>Categoria:</Label>
        <Input type="text" name="title" />
        <Label>Descrição:</Label>
        <Input type="text" name="description" />
        <Button type="submit">Criar Tarefa</Button>
        <Button> Voltar</Button>
        
      </Form>
    </FormContainer>
  );
};

export default NewTaskForm;