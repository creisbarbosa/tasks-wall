import { Trash } from 'phosphor-react';
import { TaskCheck } from './TaskCheck';
import styles from './Task.module.css';

interface TaskProps {
  title: string;
  contents: [
    { content: string; }
  ]
}

export function Task({ title, contents }: TaskProps) {

  console.log(contents);

  return (
    <div className={styles.task}>
      <header>
        <span>{title}</span>
        <button
          type='button'
          title="Deletar comentário"
        >
          <Trash size={18} color="var(--gray-100)"/>
        </button>
      </header>
      <main>
        <ul>
          {contents.map(line => {
            return (
              <TaskCheck 
                task={line.content}
              />
            )
          })}
        </ul>
      </main>
    </div>
  );
}