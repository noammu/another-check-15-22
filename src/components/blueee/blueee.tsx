import classNames from 'classnames';
import styles from './blueee.module.scss';
import { useState, useCallback } from 'react';
import { Button, Alert, Card, H5 } from '@blueprintjs/core';

export interface BlueeeProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */

export const Blueee = ({ className }: BlueeeProps) => {
    const [isOpen1, setIsOpen1] = useState(false);
    const onClose1 = useCallback(() => setIsOpen1(false), [setIsOpen1]);
    const [isOpen, setIsOpen] = useState(false);
    const onClose = useCallback(() => setIsOpen(false), [setIsOpen]);
    return (
        <div className={classNames(styles.root, className)}>
            <Card elevation={3}>
                <H5>
                    <a href="#"> Analytical applications</a>
                </H5>
                <p>
                    User interfaces that enable people to interact smoothly with data, ask better
                    questions, and make better decisions.
                </p>
                <Button text="Explore products" />
            </Card>
            <Button onClick={() => setIsOpen1(true)} text="Open file error alert" />
            <Alert confirmButtonText="Okay" isOpen={isOpen1} loading={false} onClose={onClose1}>
                <p>
                    Couldn't create the file because the containing folder doesn't exist anymore.
                    You will be redirected to your user folder.
                </p>
            </Alert>
            <Button onClick={() => setIsOpen(true)} text="Open file deletion alert" />
            <Alert
                confirmButtonText="Move to trash"
                loading={false}
                onClose={onClose}
                cancelButtonText={'Cancel'}
                icon={'trash'}
                intent="danger"
                isOpen={isOpen}
            >
                <p>
                    Are you sure you want to move filename to Trash? You will be able to restore it
                    later, but it will become private to you.
                </p>
            </Alert>
            Blueee
        </div>
    );
};
