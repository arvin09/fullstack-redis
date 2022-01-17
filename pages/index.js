import CarForm from "../lib/CarForm";
import SearchForm from "../lib/SearchForm";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <h1>Create a car</h1>
      <CarForm />
      <h1>Search Car</h1>
      <SearchForm />
    </div>
  );
}
