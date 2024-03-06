import classNames from 'classnames';
import styles from './with-children.module.scss';
import Ball from '../../assets/ball.png';

export interface WithChildrenProps {
    className?: string;
    children: any;
}

export const WithChildren = ({ className, children }: WithChildrenProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            {children}ssddfsdfsdfsdfsdfsdf<p>dfjhdj</p>
            <img
                src="https://wixplosives.github.io/codux-assets-storage/add-panel/image-placeholder.jpg"
                alt=""
            />
            <img src={Ball} />
        </div>
    );
};
