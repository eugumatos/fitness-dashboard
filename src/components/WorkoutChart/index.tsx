import { Line } from 'react-chartjs-2';
import { useWorkout } from '../../hooks/useWorkout';
import 'chart.js/auto';

import styles from "./styles.module.css";

export const WorkoutChart = () => {
  const { completedWorkouts } = useWorkout();

  const workoutProgress = Array(7).fill(0);

  completedWorkouts.forEach((workout) => {
    const dayOfWeek = new Date(workout.date).getDay();
    workoutProgress[dayOfWeek] += workout.goals.length;
  });

  const data = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        label: 'Workout progress',
        data: workoutProgress,
        borderColor: '#000',
        backgroundColor: '#fff',
        fill: true,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
        max: 3,
        ticks: {
          stepSize: 1,
          callback: (value: string | number) => typeof value === 'number' && value <= 3 ? value : null
        },
        title: {
          display: true,
          text: 'Exercises Completed',
          font: {
            size: 14
          }
        }
      },
    },
  };

  return (
    <div className={styles.containerChart}>
      <div className={styles.contentChart}>
        <Line data={data} options={options} />
      </div>
    </div>
  );
};
