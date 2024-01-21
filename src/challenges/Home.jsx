import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

export default function Header() {
    return (
        <header>
            <div className="App-headerr">
                <ul>
                    <li>
                        <Link to="/Easy">
                            <p>Easy</p>
                        </Link>
                    </li>

                    <li>
                        <Link to="/Medium">
                            <p>Medium</p>
                        </Link>
                    </li>

                    <li>
                        <Link to="/Hard">
                            <p>Hard</p>
                        </Link>
                    </li>
                </ul>
            </div>
        </header>
    );
}
