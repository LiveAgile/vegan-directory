import Link from 'next/link';
import styles from './MainNavigation.module.css';

export interface IMainNavigation {
  home: string;
  search: string;
  browse: string;
  addlisting: string;
}

const MainNavigation: React.FC<IMainNavigation> = ({
  home,
  search,
  browse,
  addlisting,
}) => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <h2>Vegan Directory</h2>
      </div>
      <nav>
        <ul>
          <li>
            <Link href="/">{home}</Link>
          </li>
          <li>
            <Link href="/search">{search}</Link>
          </li>
          <li>
            <Link href="/browse">{browse}</Link>
          </li>
          <li>
            <Link href="/add-listing">{addlisting}</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
