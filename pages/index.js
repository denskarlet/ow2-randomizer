import { HeroClass } from "../components/HeroClass";
import { tanks, dps, healers } from "../utils/data";
import styles from '../styles/Home.module.css'
import { HeroClassSelection } from "../components/HeroClassSelection";

export default function Home() {
  return (
    <div>
      <h1>Overwatch 2 randomizer</h1>
      <HeroClassSelection />
      <div className={styles.container}>
        <HeroClass heroClass="Tanks" heroes={tanks} />
        <HeroClass heroClass="DPS" heroes={dps} />
        <HeroClass heroClass="Healers" heroes={healers} />
      </div>
    </div>
  );
}
