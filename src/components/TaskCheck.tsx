import { useState } from "react";
import styles from "./TaskCheck.module.css"

interface TaskProps {
  task: string;
}

export function TaskCheck({ task }: TaskProps) {
  const [isChecked, setIsChecked] = useState(false)

  function handleCheckTask(){
    setIsChecked
  }

  return (
    <li className={styles.checkboxWrapper}>
      <label>
        <input 
          type="checkbox" 
          checked={isChecked}
          onChange={handleCheckTask}
        />
        <span>{task}</span>
      </label>
    </li>
  )
}