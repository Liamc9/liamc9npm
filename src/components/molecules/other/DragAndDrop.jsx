// IMPORTS
import React, { useState, useEffect, useRef } from 'react';
import dragula from 'dragula';
import 'dragula/dist/dragula.css'; // Import Dragula CSS

// CREATE FUNCTION COMPONENT
export default function DragAndDrop() {
  // State for tasks in each column
  const [tasks, setTasks] = useState({
    toDo: ['Analysis', 'Coding', 'Card Sorting', 'Measure'],
    doing: ['Hypothesis', 'User Testing', 'Prototype'],
    done: ['Ideation', 'Sketches'],
    trash: ['Interviews', 'Research'],
  });

  // Refs for each column to initialize Dragula
  const toDoRef = useRef(null);
  const doingRef = useRef(null);
  const doneRef = useRef(null);
  const trashRef = useRef(null);

  // useEffect to initialize Dragula after component mounts
  useEffect(() => {
    const drake = dragula(
      [toDoRef.current, doingRef.current, doneRef.current, trashRef.current],
      {
        removeOnSpill: false,
      }
    )
      .on('drag', (el) => {
        el.classList.remove('ex-moved');
      })
      .on('drop', (el) => {
        el.classList.add('ex-moved');
      })
      .on('over', (el, container) => {
        container.classList.add('ex-over');
      })
      .on('out', (el, container) => {
        container.classList.remove('ex-over');
      });

    // Cleanup on unmount
    return () => {
      drake.destroy();
    };
  }, []);

  // Function to add a new task
  const addTask = () => {
    const inputTask = document.getElementById('taskText').value.trim();
    if (inputTask === '') return;

    setTasks((prevTasks) => ({
      ...prevTasks,
      toDo: [...prevTasks.toDo, inputTask],
    }));

    document.getElementById('taskText').value = '';
  };

  // Function to handle Enter key press in input
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      addTask();
    }
  };

  // Function to delete all tasks in Trash
  const emptyTrash = () => {
    setTasks((prevTasks) => ({
      ...prevTasks,
      trash: [],
    }));
  };

  return (
    <>
        <style>
                {`
                @import url("https://fonts.googleapis.com/css?family=Arimo:400,700|Roboto+Slab:400,700");

:root {
  font-size: calc(0.5vw + 1vh);
}

* {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

body {
  min-width: 420px;
}

h1,
h4 {
  font-family: "Arimo", sans-serif;
  line-height: 1.3;
}

header h1 {
  font-size: 2.4rem;
  margin: 4rem auto;
}

span {
  font-size: 3rem;
}

p {
  font-family: "Roboto Slab", serif;
}

a,
a:link,
a:active,
a:visited {
  color: #0066aa;
  text-decoration: none;
  border-bottom: #000013 0.16rem solid;
}

a:hover {
  color: #000013;
  border-bottom: #0066aa 0.16rem solid;
}

header,
footer {
  width: 40rem;
  margin: 2rem auto;
  text-align: center;
}

.add-task-container {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  width: 20rem;
  height: 5.3rem;
  margin: auto;
  background: #a8a8a8;
  border: #000013 0.2rem solid;
  border-radius: 0.2rem;
  padding: 0.4rem;
}

.main-container {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}

.columns {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: start;
  -ms-flex-align: start;
  align-items: flex-start;
  margin: 1.6rem auto;
}

.column {
  width: 8.4rem;
  margin: 0 0.6rem;
  background: #a8a8a8;
  border: #000013 0.2rem solid;
  border-radius: 0.2rem;
}

.column-header {
  padding: 0.1rem;
  border-bottom: #000013 0.2rem solid;
}

.column-header h4 {
  text-align: center;
}

.to-do-column .column-header {
  background: #ff872f;
}

.doing-column .column-header {
  background: #13a4d9;
}

.done-column .column-header {
  background: #15d072;
}

.trash-column .column-header {
  background: #ff4444;
}

.task-list {
  min-height: 3rem;
}

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

li {
  list-style-type: none;
}

.column-button {
  text-align: center;
  padding: 0.1rem;
}

.button {
  font-family: "Arimo", sans-serif;
  font-weight: 700;
  border: #000013 0.14rem solid;
  border-radius: 0.2rem;
  color: #000013;
  padding: 0.6rem 1rem;
  margin-bottom: 0.3rem;
  cursor: pointer;
}

.delete-button {
  background-color: #ff4444;
  margin: 0.1rem auto 0.6rem auto;
}

.delete-button:hover {
  background-color: #fa7070;
}

.add-button {
  background-color: #ffcb1e;
  padding: 0 1rem;
  height: 2.8rem;
  width: 10rem;
  margin-top: 0.6rem;
}

.add-button:hover {
  background-color: #ffdd6e;
}

.task {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  vertical-align: middle;
  list-style-type: none;
  background: #fff;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
  margin: 0.4rem;
  height: 4rem;
  border: #000013 0.15rem solid;
  border-radius: 0.2rem;
  cursor: move;
  text-align: center;
  vertical-align: middle;
}

#taskText {
  background: #fff;
  border: #000013 0.15rem solid;
  border-radius: 0.2rem;
  text-align: center;
  font-family: "Roboto Slab", serif;
  height: 4rem;
  width: 7rem;
  margin: auto 0.8rem auto 0.1rem;
}

.task p {
  margin: auto;
}

/* Dragula CSS Release 3.2.0 from: https://github.com/bevacqua/dragula */

.gu-mirror {
  position: fixed !important;
  margin: 0 !important;
  z-index: 9999 !important;
  opacity: 0.8;
  -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=80)";
  filter: alpha(opacity=80);
}

.gu-hide {
  display: none !important;
}

.gu-unselectable {
  -webkit-user-select: none !important;
  -moz-user-select: none !important;
  -ms-user-select: none !important;
  user-select: none !important;
}

.gu-transit {
  opacity: 0.2;
  -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=20)";
  filter: alpha(opacity=20);
}

                `}
            </style>

      <div className="add-task-container">
        <input
          type="text"
          maxLength="12"
          id="taskText"
          placeholder="New Task..."
          onKeyDown={handleKeyDown}
        />
        <button id="add" className="button add-button" onClick={addTask}>
          Add New Task
        </button>
      </div>

      <div className="main-container">
        <ul className="columns">
          {/* To Do Column */}
          <li className="column to-do-column">
            <div className="column-header">
              <h4>To Do</h4>
            </div>
            <ul className="task-list" id="to-do" ref={toDoRef}>
              {tasks.toDo.map((task, index) => (
                <li key={index} className="task">
                  <p>{task}</p>
                </li>
              ))}
            </ul>
          </li>

          {/* Doing Column */}
          <li className="column doing-column">
            <div className="column-header">
              <h4>Doing</h4>
            </div>
            <ul className="task-list" id="doing" ref={doingRef}>
              {tasks.doing.map((task, index) => (
                <li key={index} className="task">
                  <p>{task}</p>
                </li>
              ))}
            </ul>
          </li>

          {/* Done Column */}
          <li className="column done-column">
            <div className="column-header">
              <h4>Done</h4>
            </div>
            <ul className="task-list" id="done" ref={doneRef}>
              {tasks.done.map((task, index) => (
                <li key={index} className="task">
                  <p>{task}</p>
                </li>
              ))}
            </ul>
          </li>

          {/* Trash Column */}
          <li className="column trash-column">
            <div className="column-header">
              <h4>Trash</h4>
            </div>
            <ul className="task-list" id="trash" ref={trashRef}>
              {tasks.trash.map((task, index) => (
                <li key={index} className="task">
                  <p>{task}</p>
                </li>
              ))}
            </ul>
            <div className="column-button">
              <button className="button delete-button" onClick={emptyTrash}>
                Delete
              </button>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
}
