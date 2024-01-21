import React, { useState } from "react";
import { Link } from "react-router-dom";

function useTodoList() {
    const [items, setItems] = useState([]);
    const [newItem, setNewItem] = useState("");

    const handleAddItem = () => {
        if (newItem.trim() !== "") {
            setItems([...items, { text: newItem, completed: false }]);
            setNewItem("");
        }
    };

    const handleDeleteItem = (index) => {
        const newItems = [...items];
        newItems.splice(index, 1);
        setItems(newItems);
    };

    const handleToggleCompleted = (index) => {
        const newItems = [...items];
        newItems[index].completed = !newItems[index].completed;
        setItems(newItems);
    };

    return {
        items,
        newItem,
        setNewItem,
        handleAddItem,
        handleDeleteItem,
        handleToggleCompleted,
    };
}

function Hard() {
    const {
        items,
        newItem,
        setNewItem,
        handleAddItem,
        handleDeleteItem,
        handleToggleCompleted,
    } = useTodoList();

    return (
        <div>
            <Link to="/">
                <p>Home</p>
            </Link>

            <h1>Todo List</h1>

            <ul>
                {items.map((item, index) => (
                    <li key={index}>
                        <span
                            style={{
                                textDecoration: item.completed ? "line-through" : "none",
                            }}
                            onClick={() => handleToggleCompleted(index)}
                        >
                            {item.text}
                        </span>
                        <button onClick={() => handleDeleteItem(index)}>Delete</button>
                    </li>
                ))}
            </ul>

            <div>
                <input
                    type="text"
                    value={newItem}
                    onChange={(e) => setNewItem(e.target.value)}
                />
                <button onClick={handleAddItem}>Add</button>
            </div>
        </div>
    );
}

export default Hard;
