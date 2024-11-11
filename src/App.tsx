import { WorkoutProvider } from './contexts/workout-context';
import { ThemeProvider } from './contexts/theme-context';
import { Dashboard } from './components/Dashboard';

import './styles/globals.css';

export function App() {
  return (
    <ThemeProvider>
      <WorkoutProvider>
        <Dashboard />
      </WorkoutProvider>
    </ThemeProvider>
  );
}

