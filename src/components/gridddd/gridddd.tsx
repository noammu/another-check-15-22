import classNames from 'classnames';
import styles from './gridddd.module.scss';

export interface GriddddProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Gridddd = ({ className }: GriddddProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles.grid}>
                <h2>Replace content</h2>
            </div>
        </div>
    );
};
