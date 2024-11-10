import { useWorkout } from '../../hooks/useWorkout';
import styles from './styles.module.css';

export const DailyGoalsChecklist = () => {
  const { isTiming, goals, checkedGoals, toggleGoal } = useWorkout();

  return (
    <div className={styles.checklist}>
      {isTiming ? (
        <>
          <h3 style={{ marginBottom: '1rem' }}>Daily goals</h3>

          {goals.map((goal) => (
            <div key={goal.id} className={styles.goalItem}>
              <input
                type="checkbox"
                checked={checkedGoals[goal.id] || false}
                onChange={() => toggleGoal(goal.id)}
              />
              <label>{goal.name}</label>
            </div>
          ))}
        </>
      ) : (
        <div className={styles.noActivity}>
          <h3>No training in the activity</h3>
        </div>
      )}
    </div>
  );
};

