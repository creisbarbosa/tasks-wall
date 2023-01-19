import { useState } from 'react'
import { Task } from './Task'
import styles from './TasksWall.module.css'

export function TasksWall() {
  const [ tasks, setTasks ] = useState([
    'First Task'
  ])

  const [newTaskText, setNewTaskText] = useState('')

  function handleCreateNewTask() {
    event?.preventDefault();

    setTasks([...tasks, newTaskText]);
  }

  function handleNewTaskChange() {
    setNewTaskText(event.target.value);
  }

  return (
    <article className={styles.tasks}>
        <form onSubmit={handleCreateNewTask}>
          <textarea 
            name="task" 
            placeholder="Add a task to your list..."
            value={newTaskText}
            onChange={handleNewTaskChange} 
            required
          />
          <button type="submit">CREATE NEW TASK →</button>
        </form>

        <section className={styles.tasksWall}>
          <div className={styles.info}>
            <div>
              <h3>Tasks created</h3>
              <strong>{tasks.length}</strong>
            </div>
            <div>
              <h3>Tasks finished</h3>
              <strong>1</strong>
            </div>
          </div>

          <div  className={styles.tasksList}>
            {tasks.map((task) => {
              return (
                <Task
                  key={task}
                  content={task}
                  publishedAt={new Date()}
                />
              )
            })}
          </div>
        </section>
      </article>
  )
}