import { format, formatDistanceToNow } from 'date-fns'
import ptBR from  'date-fns/locale/pt-BR'

import {CheckSquare, Trash} from 'phosphor-react'
import styles from './Task.module.css'

interface TaskProps {
  content: string
  publishedAt: Date
}

export function Task({ content, publishedAt }: TaskProps) {
  const publishedDateFormat = format(publishedAt, "d LLL 'às' HH:mm'h'", {
    locale: ptBR,
  })

	const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    addSuffix: true,
	})

  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <CheckSquare size={24} weight="bold"/>
        <p>{content}</p>
      </div>
      
      <div className={styles.info}>
        <time title={publishedDateFormat} dateTime={publishedAt.toISOString()}>{publishedDateRelativeToNow}</time>
        <button title="Delete task">
          <Trash size={20} />
        </button>
      </div>

    </div>
  )
}