import styles from './IconButton.module.css';
import { CheckSquareOffset, PushPin } from 'phosphor-react';
 
export function IconButton() {
  return (
    <button className={styles.button}>
      <CheckSquareOffset size={24} />
    </button>
  );
}