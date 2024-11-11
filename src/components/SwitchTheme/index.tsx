import { useTheme } from '../../hooks/useTheme';
import styles from './styles.module.css';

export const SwitchTheme = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <label className={styles.switch}>
      <input
        type="checkbox"
        checked={isDarkMode}
        onChange={toggleTheme}
        className={styles.checkbox}
      />
      <span className={styles.slider}></span>
    </label>
  )
}