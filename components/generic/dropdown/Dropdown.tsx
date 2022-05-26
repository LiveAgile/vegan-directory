import Link from 'next/link';
import { useState } from 'react';
import styles from './Dropdown.module.css';
import { Menuitems } from './MenuItems';

export interface IDropdown {
  id?: string;
}

const Dropdown: React.FC<IDropdown> = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  return (
    <>
      <ul
        className={
          click ? styles['dropdown-menu clicked'] : styles['dropdown-menu']
        }
      >
        {Menuitems.map((item, index) => {
          return (
            <li key={index}>
              <Link href={item.path}>
                <a
                  className={styles[`${item.cName}`]}
                  onClick={() => setClick(false)}
                >
                  {item.title}
                </a>
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Dropdown;
