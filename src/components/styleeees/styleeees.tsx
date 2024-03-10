import classNames from 'classnames';
import styles from './styleeees.module.scss';
import { Header } from '../header/header';
import { Butoon } from '../butoon/butoon';

export interface StyleeeesProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */

export const Styleeees = ({ className }: StyleeeesProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <Header className={styles.asd}>
                <header className={styles.header}>
                    <a href="/" className={styles.link}>
                        Link
                    </a>
                    <h1 className={styles.heading1}>Heading 1</h1>
                </header>
            </Header>
            <div className={styles.rap}>
                <aside className={styles.sidebar}>
                    <ul className={styles.ulul}>
                        <li>Item1</li>
                        <li>Item2</li>
                        <li>Item3</li>
                        <li>Item4</li>
                        <li>Item5</li>
                        <li>Item6</li>
                        <li>Reverso</li>
                    </ul>
                </aside>
                <main className={styles.main}>
                    <form className={styles.maform}>
                        <h1>Have you evaaaa seeen </h1>
                        <h5
                            className={classNames(
                                styles.h55,
                                styles.sdf,
                                styles.vbn,
                                styles.yuk,
                                styles.awe,
                                styles.mjm,
                                styles.mkm,
                                styles.auau,
                                styles.fgvb,
                                styles.vbmn,
                                styles.mmmm,
                                styles.ooo,
                                styles.kkk,
                                styles.gfg,
                            )}
                        >
                            the rain lol
                        </h5>
                        <label>First name:</label>
                        <br />
                        <input type="text" />
                        <br />
                        <label>Last name:</label>
                        <br />
                        <input type="text" />
                        <br />
                        <br />
                        <input type="submit" value="Submit" className={styles.inpton} />
                        <Butoon state="active" />
                    </form>
                </main>
            </div>
            <footer className={styles.foot}>
                <p className={styles.transition}>
                    Yo thanks for coming yeah cool click <a href="/">here lol</a>
                </p>
            </footer>
        </div>
    );
};
