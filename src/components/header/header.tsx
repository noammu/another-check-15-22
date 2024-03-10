import classNames from 'classnames';
import styles from './header.module.scss';

export interface HeaderProps {
    className?: string;
    children: any;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Header = ({ className, children }: HeaderProps) => {
    return <div className={classNames(styles.root, className)}>{children}</div>;
};
