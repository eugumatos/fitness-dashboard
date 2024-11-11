import { SwitchTheme } from '../SwitchTheme';
import { WorkoutChart } from "../WorkoutChart";
import { QuickActions } from "../QuickActions";
import { DailyGoalsChecklist } from "../DailyGoalsChecklist";
import { useTheme } from '../../hooks/useTheme';

import styles from "./styles.module.css";

export const Dashboard = () => {
  const { isDarkMode } = useTheme();


  return (
    <div className={`${styles.dashboard} ${isDarkMode ? styles.dark : ''}`}>
      <div className={styles.header}>
        <h1>Fitness Dashboard</h1>
        <SwitchTheme />
      </div>

      <div className={styles.workout}>
        <WorkoutChart />
        <QuickActions />
      </div>

      <DailyGoalsChecklist />
    </div>
  )
}