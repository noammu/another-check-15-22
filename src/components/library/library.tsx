import classNames from 'classnames';
import styles from './library.module.scss';
import { Button, Toaster, OverlayToaster, Callout, Label, Checkbox } from '@blueprintjs/core';

export interface LibraryProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */

const toaster: Toaster = OverlayToaster.create({
    autoFocus: true,
    canEscapeKeyClear: true,
    maxToasts: 3,
    position: 'top',
    usePortal: true,
});

export const Library = ({ className }: LibraryProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div>
                <Button
                    intent="primary"
                    onClick={() =>
                        toaster.show({
                            action: { text: 'Cancel' },
                            isCloseButtonShown: false,
                            icon: 'cloud-upload',
                            intent: 'primary',
                            message: 'Loading...',
                        })
                    }
                >
                    DOYOULIKETHAT
                </Button>
                <div>
                    <Button
                        intent="primary"
                        onClick={() =>
                            toaster.show({
                                action: { text: 'Cancel' },
                                isCloseButtonShown: false,
                                icon: 'cloud-upload',
                                intent: 'primary',
                                message: 'Loading...',
                            })
                        }
                    >
                        DOYOULIKETHAT
                    </Button>
                </div>
                <Button
                    intent="primary"
                    onClick={() =>
                        toaster.show({
                            action: { text: 'Cancel' },
                            isCloseButtonShown: false,
                            icon: 'cloud-upload',
                            intent: 'primary',
                            message: 'Loading...',
                        })
                    }
                >
                    DOYOULIKETHAT
                </Button>
            </div>
            <div>
                <Callout intent="success">Callout text body</Callout>
            </div>
            <form>
                <Label>Assign responsibility</Label>
                <Checkbox label="Gilad Gray" checked />
                <Checkbox label="Jason Killian" />
                <Checkbox label="Antoine Llorca" disabled />
            </form>
        </div>
    );
};
