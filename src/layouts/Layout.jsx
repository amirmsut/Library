// styles
import styles from "./Layout.module.css";
function Layout({ children }) {
    return (
        <>
            <header className={styles.header}>
                <h1>Book App</h1>
                <p>
                    <a href="http://dotnet1.ir">amirmsut | Library Project</a>
                </p>
            </header>
            {children}
            <footer className={styles.footer}>
                <p>Developed by Amf</p>
            </footer>
        </>
    );
}
export default Layout;
