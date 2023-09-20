import styles from './footer.module.css';

import gitHubIcon from '../../assets/github-icon.png';

export default function Footer() {
  return (
    <footer>
      <button><img src={ gitHubIcon } alt="git hub icon" /></button>
    </footer>
  );
}
