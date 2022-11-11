import { PushPin } from 'phosphor-react';
import { useState } from 'react';

import styles from './TaskCreator.module.css';

export function TaskCreator() {

  const [taskContent, setTaskContent] = useState([
    'First task of the day',
  ])


  function handleCreateNewTask() {
    event.preventDefault();
    setTaskContent([...taskContent, taskContent.length +1]);
  }

  return(
    <div className={styles.content}>
      <button className={styles.creatorButton} title="Create new task">
        <span>Create new task</span>
        <strong>↓</strong>
      </button>
      <form className={styles.creatorForm}>
        <div className={styles.creatorFormTitle}>
          <input
            name='task-title' 
            placeholder='Title'
          >
          </input>
          <button
            onClick={handleCreateNewTask}
            title="Pin comment"
            type="submit"
          >
            <PushPin size={24} color="var(--white)"/>
          </button>
        </div>
          {taskContent.map(tasks => {
            return (
              <input 
                className={styles.creatorFormTask}
                placeholder='+ Add new task'
                onChange={setTaskContent}
              ></input>
            )
          })}
      </form>
    </div>
  );
}