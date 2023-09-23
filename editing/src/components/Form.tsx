import React, { useState, useEffect } from "react";
//import { connect } from 'react-redux';
import { updateItem, deleteItem, addItem } from '../actions/actions';
//import { nanoid } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from 'react-redux';
import { IState } from "./reducers";

/*export const Form: React.FC<FormProps> = ({ items, updateItem, deleteItem, addItem }) => {
    const [name, setName] = useState("");
    const [editItemId, setEditItemId] = useState<string | null>(null);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (name.trim() === '') {
            return;
        }

        if (editItemId) {
            // редактируем существующий элемент
            updateItem({ id: editItemId, name });
        } else {
            // добавляем новый элемент
            const newId = nanoid(); //items.length > 0 ? items[items.length - 1].id + 1 : 1;
            addItem({ id: newId, name });
        }

        setName('');
        setEditItemId(null);
    };

    const handleEdit = (id: string) => {
        const itemToEdit = items.find(item => item.id === id);
        
        if (itemToEdit) {
            setName(itemToEdit.name);
            setEditItemId(id);
        }
    };

    const handleDelete = (id: string) => {
        deleteItem(id);
    };

    useEffect(() => {
    setName('');
    setEditItemId(null);
    }, [items]);

    return (
        <div>
            <form onSubmit={handleSubmit}>
            <input type="text" value={name} onChange={e => setName(e.target.value)} />
            <button type="submit">{editItemId ? 'Редактировать' : 'Добавить'}</button>
            </form>

            <ul>
            {items.map(item => (
                <li key={item.id}>
                {item.name}
                <button onClick={() => handleEdit(item.id)}>Редактировать</button>
                <button onClick={() => handleDelete(item.id)}>Удалить</button>
                </li>
            ))}
            </ul>
        </div>
    );
}*/

export const Form = () => { //: React.FC = () => {
    const [state, setState] = useState({
        id: "",
        text: "",
    })
    const dispatch = useDispatch();
    const items = useSelector((state: IState) => state.items);

    const handleAddItem = (text: string) => {
      dispatch(addItem(text));
    };

    const handleEditItem = (id: string, text: string) => {
      dispatch(updateItem(id, text));
    };

    const handleDeleteItem = (id: string) => {
      dispatch(deleteItem(id));
    };

    const onChange = (id: string, value: string) => { 
        setState({id: id, text: value})
    }

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setState({id: e.currentTarget.id, text: e.currentTarget.value})
        
    }

    return (
        <div>
            <form onSubmit={event => event.preventDefault()}>
                <input type="text" id={state.id} value={state.text} onChange={onChangeHandler} />
                <button onClick={() => handleEditItem(state.id, state.text)}>Изменить</button>
            </form>
          <button onClick={() => handleAddItem('Новый элемент')}>Добавить элемент</button>
          <h2>Список элементов</h2>
          <ul>
            {items.map((item) => (
              <li key={item.id}>
                {item.name}
                {/* <button onClick={() => handleEditItem(item.id, 'Отредактировано')}>Редактировать</button> */}
                <button onClick={() => onChange(item.id, item.name)}>Редактировать</button>
                <button onClick={() => handleDeleteItem(item.id)}>Удалить</button>
              </li>
            ))}
          </ul>
        </div>
      );
}