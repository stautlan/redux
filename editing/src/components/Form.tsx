import React, { useState } from "react";
import { updateItem, deleteItem, addItem } from '../actions/actions';
import { useDispatch, useSelector } from 'react-redux';
import { IState } from "./reducers";

export const Form = () => { //: React.FC = () => {
    const [state, setState] = useState({
        id: "",
        text: "",
    })
    const [insertItem, setInsertItem] = useState<string>("");
    const dispatch = useDispatch();
    const items = useSelector((state: IState) => state.items);

    const handleAddItem = (text: string) => {
      dispatch(addItem(text));
      setInsertItem("");
    };

    const handleEditItem = (id: string, text: string) => {
      dispatch(updateItem(id, text));
      setState({id: "", text: ""});
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

    const onInsertItemHandler = ({target: {value}} : React.ChangeEvent<HTMLInputElement>) => {
        setInsertItem(value);
      }

    return (
        <div>
            <form onSubmit={event => event.preventDefault()}>
                <input type="text" id={state.id} value={state.text} onChange={onChangeHandler} />
                <button onClick={() => handleEditItem(state.id, state.text)}>Изменить</button>
            </form>
            <input type='text' value={insertItem} placeholder='Введите значение' 
            onChange={onInsertItemHandler} />
            <button onClick={() => insertItem && handleAddItem(insertItem)}>Добавить элемент</button>
            <h2>Список элементов</h2>
            <ul>
                {items.map((item) => (
                <li key={item.id}>
                    {item.name}
                    <button onClick={() => onChange(item.id, item.name)}>Редактировать</button>
                    <button onClick={() => handleDeleteItem(item.id)}>Удалить</button>
                </li>
                ))}
            </ul>
        </div>
      );
}