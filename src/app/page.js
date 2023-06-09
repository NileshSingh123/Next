import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <User name="Neelesh" />
      <User name="Abhishek" />
      <h1>Hello page</h1>
    </main>
  );
}

const User = (props) => {
  return (
    <div>
      <h1>User name is {props.name}</h1>
    </div>
  );
};
