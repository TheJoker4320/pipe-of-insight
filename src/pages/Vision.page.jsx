import React from 'react';
import TaskBar from '../components/pages/TaskBar.visionpage';
import '../css/Pages/VisionPage/VisionPage.css';

export default function Vision(props) {
    console.log(props.obj);
    return (
        <div className="vision-page">
            <div>
                <TaskBar
                names= {Object.keys(props.obj)}
                />
            </div>
            <p>dsdf</p>
        </div>
    )
}
