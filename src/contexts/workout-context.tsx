/* eslint-disable @typescript-eslint/no-unused-vars */
import { createContext, useState, useEffect, ReactNode } from 'react';
import toast, { Toaster } from 'react-hot-toast';

interface Goal {
  id: number;
  name: string;
};

export interface Workout {
  date: string;
  time: string;
  goals: string[]
}

interface WorkoutContextType {
  isTiming: boolean;
  seconds: number;
  checkedGoals: { [key: number]: boolean };
  completedWorkouts: Workout[];
  goals: Goal[];
  handleStartWorkout: () => void;
  handleFinishWorkout: () => void;
  toggleGoal: (id: number) => void;
};

const WorkoutContext = createContext<WorkoutContextType | undefined>(undefined);

const goalsList = [
  { id: 1, name: '10,000 steps' },
  { id: 2, name: 'Drink 2L water' },
  { id: 3, name: 'Eat 5 servings of vegetables' },
];

const WorkoutProvider = ({ children }: { children: ReactNode }) => {
  const [isTiming, setIsTiming] = useState(false);
  const [seconds, setSeconds] = useState(0);
  const [checkedGoals, setCheckedGoals] = useState<{ [key: number]: boolean }>({});
  const [completedWorkouts, setCompletedWorkouts] = useState<Workout[]>([]);

  useEffect(() => {
    let timer: number | undefined;
    if (isTiming) {
      timer = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    } else {
      clearInterval(timer);
    }
    return () => clearInterval(timer);
  }, [isTiming]);

  const handleStartWorkout = () => {
    setIsTiming(true);
    setSeconds(0);
  };

  const handleFinishWorkout = () => {
    setIsTiming(false);
    const completedGoals = Object.entries(checkedGoals)
      .filter(([_, checked]) => checked)
      .map(([id]) => goalsList.find((goal) => goal.id === Number(id))?.name)
      .filter((goal): goal is string => goal !== undefined);

    const timeString = `${Math.floor(seconds / 60)}:${String(seconds % 60).padStart(2, '0')}`;
    const date = new Date().toLocaleDateString();

    setCompletedWorkouts((prev) => [
      ...prev,
      { date, time: timeString, goals: completedGoals },
    ]);

    toast.success(`Time: ${timeString}\nGoals Completed: ${completedGoals.length}`);

    setCheckedGoals({});
  };
  const toggleGoal = (id: number) => {
    setCheckedGoals((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <WorkoutContext.Provider
      value={{
        isTiming,
        seconds,
        checkedGoals,
        completedWorkouts,
        goals: goalsList,
        handleStartWorkout,
        handleFinishWorkout,
        toggleGoal,
      }}
    >
      {children}
      <Toaster />
    </WorkoutContext.Provider>
  );
};

export { WorkoutContext, WorkoutProvider };

