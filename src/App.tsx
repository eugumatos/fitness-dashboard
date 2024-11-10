import { WorkoutProvider } from './contexts/workout-context';
import { Dashboard } from './components/Dashboard';

import './styles/globals.css';

export function App() {
  return (
    <WorkoutProvider>
      <Dashboard />
    </WorkoutProvider>
  );
}

