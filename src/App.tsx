import styles from './App.module.css';

import { Task } from './components/Task';
import { TaskCreator } from './components/TaskCreator';

import './global.css';

export function App() {
  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <div className={styles.title}>
            <strong>Tasks Wall</strong>
            <time>Mon 24 Oct <strong>.</strong></time>
        </div>
        <TaskCreator />
      </header>
      <main className={styles.gallery}>
        <Task/>
        <Task/>
      </main>
      <footer>
        <h5>Created by @creisbarbosa whit ❖</h5>
      </footer>
    </div>
  )
}