import classNames from 'classnames';
import styles from './from-check.module.scss';
import { ReactComponent as ReactSvg } from '../../assets/react.svg';
import Download from '../../assets/download.jpeg';
import Profilepic from '../../assets/profile pic.jpg';
import { ReactComponent as ScssSvg } from '../../assets/scss.svg';

export interface FromCheckProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const FromCheck = ({ className }: FromCheckProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div>
                <img src={Profilepic} />
            </div>
            <img src={Download} />
            <div>
                <h1>Heading 1</h1>
            </div>
            <form>
                <article>
                    {' '}
                    skdjgfhskjdhgskjdgfh ksjdghksjad glkjaf hsl sak gkhglja hfhg sg sdfgsdfgd sg
                </article>
                <label>First name:</label>
                <br />
                <ReactSvg />
                <input type="text" />
                <br />
                <label>Last name:</label>
                <br />
                <input type="text" />
                <br />
                <br />
                <input type="submit" value="Submit" />
            </form>
            <div className={styles.grid}>
                <ScssSvg />
                <ReactSvg />
            </div>
            <ScssSvg />
            <div>
                <button>Button</button>
            </div>
        </div>
    );
};
