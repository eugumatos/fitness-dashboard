import { motion } from 'framer-motion';
import { useWorkout } from '../../hooks/useWorkout';
import { useDisclosure } from '../../hooks/useDisclosure';

import { CompletedWorkouts } from "../CompletedWorkouts";

import styles from "./styles.module.css"

export const QuickActions = () => {
  const { isTiming, seconds, completedWorkouts, handleStartWorkout, handleFinishWorkout } = useWorkout();

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div className={styles.quickActions}>
      <div className={styles.quickActionButtons}>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className={styles.actionButton}
          onClick={isTiming ? handleFinishWorkout : handleStartWorkout}
        >
          {isTiming ? 'Finish workout' : 'Start Workout'}
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className={`${styles.actionButton} ${styles.outilined}`}
          onClick={onOpen}
        >
          View Progress
        </motion.button>
      </div>

      {isTiming && (
        <div className={styles.timer}>
          <span>
            Timer: {Math.floor(seconds / 60)}:{String(seconds % 60).padStart(2, '0')}
          </span>
        </div>
      )}

      {isOpen && <CompletedWorkouts completedWorkouts={completedWorkouts} onClose={onClose} />}
    </div>
  );
};

