import styles from "@/styles/Home.module.css";
import AuthWrapper from "./AuthWrapper";
import MainPrompt from "../components/MainPrompt/MainPrompt";
import CheckoutButton from './checkout';

const Home = () => {
  return (
    <AuthWrapper>
      <div className={styles.main}>
        <MainPrompt />
      </div>
      <div>
        <CheckoutButton />
      </div>
    </AuthWrapper>
  );
};

export default Home;
