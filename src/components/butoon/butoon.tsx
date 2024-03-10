import classNames from 'classnames';
import styles from './butoon.module.scss';

export interface ButoonProps {
    className?: string;
    state: 'active' | 'disabled';
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Butoon = ({ className, state }: ButoonProps) => {
    const bstate = state === 'active' ? styles.active : styles.disabled;
    return <button className={classNames(styles.root, bstate)}>Button</button>;
};
