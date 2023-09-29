import React, { useState } from 'react'
import { updateItem, deleteItem, addItem, filterItem } from '../actions/actions';
import { useDispatch, useSelector } from 'react-redux';
import { IState } from "./reducers";

//export default function Form({}: Props) {
export const Form = () => {
  const [state, setState] = useState({
    id: "", 
    text: "",
  });
  const [filterState, setFilterState] = useState<string>("");
  const [insertItem, setInsertItem] = useState("");

  const dispatch = useDispatch();
  const items = useSelector((state: IState) => state.items);

  // Добавить элемент
  const handleAddItem = (text: string) => {
    dispatch(addItem(text));
    setInsertItem("");
  };

  // Редактировать элемент
  const handleEditItem = (id: string, text: string) => {
    dispatch(updateItem(id, text));
    setState({id: "", text: ""});
  };

  const handleDeleteItem = (id: string) => {
    dispatch(deleteItem(id));
  };

  /*const handleFilterItem = (text: string) => {
    dispatch(filterItem(text));
  }*/

  const onChange = (id: string, value: string) => { 
    setState({id: id, text: value})
  }

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setState({id: e.currentTarget.id, text: e.currentTarget.value})
  }

  const onChangeFilterHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setFilterState(e.currentTarget.value);
    //handleFilterItem(e.currentTarget.value);
  }

  const filteredItem = items.filter(
    item => item.name.toLocaleLowerCase()
    .includes(filterState.toLocaleLowerCase()));

  const onInsertItemHandler = ({target: {value}} : React.ChangeEvent<HTMLInputElement>) => {
    setInsertItem(value);
  }

  return (
    <div>
        <form onSubmit={event => event.preventDefault()}>
          <label htmlFor='searchFor'>Найти: </label>
          <input type='text' id={state.id} onChange={onChangeFilterHandler} />
        </form>
        {/* <form onSubmit={event => event.preventDefault()}> */}
        <div className={state.text.length>0?'':'hide'}>
            <input type="text" id={state.id} value={state.text} onChange={onChangeHandler} />
            <button onClick={() => handleEditItem(state.id, state.text)}>Изменить</button>
        </div>
        <br />
        {/* </form> */}
        <input type='text' value={insertItem} placeholder='Введите значение' onChange={onInsertItemHandler} />
      <button onClick={() => insertItem && handleAddItem(insertItem)}>Добавить элемент</button>
      <h2>Список элементов</h2>
      <ul>
        {filteredItem.map((item) => (
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