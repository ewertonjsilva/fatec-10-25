
import styles from './page.module.css';

export default function Login() {
    return (
        <div className={styles.loginContainer}>
            <div className={styles.loginBox}>
                <h1 className={styles.title}>Login</h1>
                
                <form>
                    <div className={styles.inputGroup}>
                        <input 
                            type="email" 
                            placeholder="E-mail"
                            className={styles.input}
                            required
                        />
                    </div>
                    
                    <div className={styles.inputGroup}>
                        <input 
                            type="password" 
                            placeholder="Senha"
                            className={styles.input}
                            required
                        />
                    </div>

                    <button type="submit" className={styles.button}>
                        Entrar
                    </button>

                    <div className={styles.links}>
                        <a href="/esqueci-senha" className={styles.link}>
                            Esqueci minha senha
                        </a>
                        <a href="/recuperar-senha" className={styles.link}>
                            Recuperar senha
                        </a>
                    </div>
                </form>
            </div>
        </div>
    );
}