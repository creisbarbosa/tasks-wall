import './global.css';
import styles from './App.module.css';

import { Header } from './components/Header';
import { TasksWall } from './components/TasksWall';

export function App() {

  return (
    <div className={styles.wrapper}>
      <Header />
      <TasksWall />
    </div>
  )
}