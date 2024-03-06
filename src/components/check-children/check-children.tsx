import classNames from 'classnames';
import styles from './check-children.module.scss';
import { WithChildren } from '../with-children/with-children';
import { useState } from 'react';

export interface CheckChildrenProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const CheckChildren = ({ className }: CheckChildrenProps) => {
    const [count, setCount] = useState(0);
    const handleOnClick = () => {
        setCount((prev) => prev + 1);
    };
    return (
        <div className={classNames(styles.root, className)}>
            <button onClick={handleOnClick}>
                <h1>My count:{count} </h1>Button
            </button>
            <WithChildren>
                <div />
                <div />
                <h1>
                    <div />a chidfghdfghld
                    <div />
                </h1>
            </WithChildren>
            <WithChildren>
                <h1>dfghfdgh</h1>
            </WithChildren>
            <div />
        </div>
    );
};
