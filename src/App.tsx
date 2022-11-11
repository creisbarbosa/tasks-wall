import { format } from 'date-fns'
 
import { Task } from './components/Task';
import { TaskCreator } from './components/TaskCreator';

import styles from './App.module.css';

import './global.css';

const tasks = [
  {
    id: '1',
    title: 'Desafio Ignite',
    contents: [
      {
        id: '11',
        content: 'Fazer o design da página no Figma',
      },
      {
        id: '12',
        content: 'Fazer o front-end com react',
      },
      {
        id: '13',
        content: 'Fazer o front-end com react',
      },
    ],
  },
  {
    id: '2',
    title: 'Desafio NLW',
    contents: [
      {
        id: '21',
        content: 'Fazer o front com React Native',
      },
      {
        id: '22',
        content: 'Fazer o back com NodeJS',
      },
    ],
  },
];


export function App() {
  
  const currentDate = new Date();
  const currentDateFormat = format(currentDate, "EEE dd MMM")

  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <div className={styles.title}>
            <strong>Tasks Wall</strong>
            <time title={currentDate.toDateString()} dateTime=''>{currentDateFormat}<strong>.</strong></time>
        </div>
        <TaskCreator />
      </header>
      <main className={styles.gallery}>
        {tasks.map(tasks => {
          return(
            <Task
              key={tasks.id}
              title={tasks.title}
              contents={tasks.contents}
            />
          )
        })}
      </main>
    </div>
  )
}