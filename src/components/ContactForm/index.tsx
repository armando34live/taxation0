import React from "react";
import styles from "@/components/ContactForm/ContactForm.module.css";
const ContactForm = (): React.ReactElement => {
  return (
    <>
    
    <div className={`${styles.column} ${styles.right}` }>
            <div className={styles.text}>Mensagem de Contato</div>
            <form>
              <div className={styles.field }>
                <div className={`${styles.field} ${styles.name}` }>
                  <input type="text" placeholder="Digite o nome" required />
                </div>
                <div className={`${styles.field} ${styles.email}` }>
                  <input type="email" placeholder="Digite o e-mail" required />
                </div>
              </div>

              <div className={styles.field} >
                <input type="text" placeholder="Digite o assunto" required />
              </div>

              <div className={`${styles.field} ${styles.textarea}` }>
                <textarea
                  cols={30} 
                  rows= {19}
                  placeholder="Digite o conteúdo"
                  required
                ></textarea>
              </div>

              <div className={styles.buttonArea}>
                <button type="submit">Enviar</button>
              </div>
            </form>
          </div>
     
    </>
  );
};

export default ContactForm;
