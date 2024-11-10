import { WorkoutChart } from "../WorkoutChart";
import { QuickActions } from "../QuickActions";
import { DailyGoalsChecklist } from "../DailyGoalsChecklist";

import styles from "./styles.module.css";

export const Dashboard = () => {
  return (
    <div className={styles.dashboard}>
      <h1>Fitness Dashboard</h1>

      <div className={styles.workout}>
        <WorkoutChart />
        <QuickActions />
      </div>

      <DailyGoalsChecklist />
    </div>
  )
}