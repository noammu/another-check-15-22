import classNames from 'classnames';
import styles from './check-flickering.module.scss';

export interface CheckFlickeringProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const CheckFlickering = ({ className }: CheckFlickeringProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            {' '}
            <h2>yoooדךלעחךלגכחעoooooooooooooooooooo</h2>check flickering and jdjajs
        </div>
    );
};
