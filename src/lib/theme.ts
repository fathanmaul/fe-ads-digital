import {Theme} from '@/lib/types';
function toggleTheme({
  theme
}: {
  theme: Theme
}): void {
  localStorage.setItem('theme', theme);
  getTheme()
}

function getTheme(): Theme {

  const theme = localStorage.getItem("theme") as Theme || Theme.Light;
  if (theme === Theme.Dark) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
  return theme;
}

export { toggleTheme, getTheme };