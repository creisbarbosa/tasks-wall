import { useState } from 'react'
import { Task } from './Task'
import styles from './TasksWall.module.css'
import { v4 as uuidv4 } from 'uuid'



export function TasksWall() {

  const [tasks, setTasks] = useState([
    {
      id: uuidv4(),
      title: 'First task',
      isComplete: true,
    },
    {
      id: uuidv4(),
      title: 'Second task',
      isComplete: true,
    },
    {
      id: uuidv4(),
      title: 'Second task',
      isComplete: false,
    },
    {
      id: uuidv4(),
      title: 'Second task',
      isComplete: false,
    },
  ]);

  const completedTasks = tasks.length > 0 ? (tasks.filter(task => task.isComplete === true).length) : 0

  return (
    <article className={styles.tasks}>
        <form >
          <textarea 
            name="task" 
            placeholder="Add a task to your list..."
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
              <strong>{completedTasks}</strong>
            </div>
          </div>

          <div  className={styles.tasksList}>
            {tasks.length > 0 ?
              tasks.map((task) => {
                return (
                  <Task
                    key={task.id}
                    content={task.title}
                    isCompleted={task.isComplete}
                    publishedAt={new Date()}
                  />
              )}) :
                <div>
                  <strong>Você ainda não tem tarefas cadastradas</strong>
                  <p>Crie tarefas e organize seus items a fazer</p>
                </div>
                }
          </div>
        </section>
      </article>
  )
}