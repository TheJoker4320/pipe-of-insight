import React from 'react';
import '../../css/Pages/StartPage/Card.startpage.css';
import { saveSnapshotFile } from 'jest-snapshot/build/utils';

export default function Card({nextPage, setFile}) {
    return (
        <div className="welcome-card">
                <h1 className= "title">Welcome!</h1>
                <p className= "content">This is the offcial app for the FRC team 4320 The Joker
                    for their vision framework, enjoy using it.
                </p>
                <p className= "writter"><b>- The Joker 4320</b></p>
                <ul className= "create-pipes">

                    <li>
                        <button className="pipes-btns" id= "new-pipe" onClick= {(e) => {
                            e.preventDefault();
                            nextPage();
                        }}>
                            New Pipeline
                        </button>
                    </li>
                    <li>
                        <input type="file" className="pipes-input" id= "file" accept= ".json"
                        onChange= {(e) => {
                            e.preventDefault();
                            setFile(e.target.value);
                        }}/>
                        <label 
                        htmlFor="file"
                        className="pipes-label" id="use-pipe"> Use Pipeline</label>
                    </li>
                </ul>  
        </div>
    )
}
