import { IconButton } from './IconButton';
import styles from './TaskCreator.module.css';

export function TaskCreator() {
  return(
    <div>
      <div className={styles.creatorHeader}>
        <span>Create new task...</span>
        <IconButton />
      </div>
      <div className={styles.creatorModal}>
        <div className={styles.creatorModalHeader}>
          <span>Title</span>
          <IconButton />
        </div>
        <div className={styles.creatorModalInput} >
          <span><strong>+</strong> Add new item to the list</span>
        </div>
      </div>
    </div>
  );
}