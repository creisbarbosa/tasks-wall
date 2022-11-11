import { Trash } from 'phosphor-react';
import styles from './Task.module.css';

export function Task() {
  return (
    <div className={styles.task}>
      <header>
        <span>Desafio Ignite</span>
        <button
          type='button'
          title="Deletar comentário"
        >
          <Trash size={18}/>
        </button>
      </header>
      <main>
        <ul>
          <li>
            <label className="checkbox-container">
              <input
                type="checkbox"
                readOnly
                checked={false}
              />
              <span className="checkmark"></span>
            </label>
            <p>Fazer o design da página no Figma com todos os itens flexíveis</p>
          </li>
          <li>
            <label className="checkbox-container">
              <input
                type="checkbox"
                readOnly
                checked={true}
              />
              <span className="checkmark"></span>
            </label>
            <p>Fazer o design da página no Figma</p>
          </li>
        </ul>
      </main>
    </div>
  );
}