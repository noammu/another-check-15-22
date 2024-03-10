import classNames from 'classnames';
import styles from './dupppp.module.scss';

export interface DuppppProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Dupppp = ({ className }: DuppppProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div>
                <div />
                <div />
                <div />
                <div />
            </div>
        </div>
    );
};
