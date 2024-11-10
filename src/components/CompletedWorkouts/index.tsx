import { motion } from 'framer-motion';
import { Workout } from '../../contexts/workout-context';

import styles from './styles.module.css';

interface CompletedWorkouts {
  completedWorkouts: Workout[];
  onClose: () => void;
}

export const CompletedWorkouts = ({ completedWorkouts, onClose }: CompletedWorkouts) => {
  return (
    <motion.div
      className={styles.modal}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className={styles.modalContent}>
        <h2>Completed Workouts</h2>
        <ul>
          {completedWorkouts.length === 0 ? (
            <li>No workouts completed yet!</li>
          ) : (
            completedWorkouts.map((workout, index) => (
              <li key={index}>
                <strong>{workout.date}</strong>: {workout.time} - Goals: {workout.goals.join(', ')}
              </li>
            ))
          )}
        </ul>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className={styles.closeModalButton}
          onClick={onClose}
        >
          Close
        </motion.button>
      </div>
    </motion.div>
  )
}