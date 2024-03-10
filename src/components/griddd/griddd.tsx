import classNames from 'classnames';
import styles from './griddd.module.scss';

export interface GridddProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Griddd = ({ className }: GridddProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div>&quot;@wixc3/react-board&quot;: &quot;^2.4.0&quot;,</div>
            <div className={styles.grid}>
                <h2>Replace content</h2>
            </div>
        </div>
    );
};
