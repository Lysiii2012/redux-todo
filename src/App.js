import './App.css'; 
import { useEffect, useState } from 'react';
import AddTodo from './components/AddTodo/AddTodo';
import Todos from './components/Todos/Todos';
import Title from './components/Title/Title';
import TodoCounter from './components/TodoCounter/TodoCounter';
import { Provider, useSelector } from 'react-redux'; 
import { store } from './store';
import { selectTodos } from './features/todo/todoSlice';

function App() {
    const [newTodo, setNewTodo] = useState('');
    const todos = useSelector(selectTodos);  
 
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    return (
        <Provider store={store}>
            <div className="App">
                <Title type="primary">Add Todo</Title>
                <AddTodo newTodo={newTodo} setNewTodo={setNewTodo} />
                <Todos />
                <footer>
                    <TodoCounter />
                </footer>
            </div>
        </Provider>
    );
}

export default App;

