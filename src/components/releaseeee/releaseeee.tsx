import classNames from 'classnames';
import styles from './releaseeee.module.scss';

export interface ReleaseeeeProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Releaseeee = ({ className }: ReleaseeeeProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <img src="/src/assets/download.jpeg" />
            <div
                className={classNames(
                    styles.sdds,
                    styles.dfghn,
                    styles.bvnvbdt,
                    styles.yuj,
                    styles.kk,
                    styles.nmbnm,
                    styles.uuuuu,
                    styles.dsfgdf,
                    styles.mnb,
                    styles.saasda,
                    styles.tyt,
                    styles.ghjli,
                    styles.llll,
                )}
            >
                <header>
                    <h1>Heading 1</h1>
                    <h2>Heading 2</h2>
                    <img src="/src/assets/ball.png" />
                    <h5>Heading 5</h5>
                </header>
                <pre />
            </div>
            <div>
                <div />
                <main className={styles.mainnn}>
                    <ol>
                        <li>First item</li>
                        <li>Second item</li>
                        <li>Third item</li>
                    </ol>
                </main>
                <div>
                    <form>
                        <button>sadfsadfsadfsadfsadfsadf</button>
                        <label>First name:</label>
                        <br />
                        <input type="text" />
                        <br />
                        <label>Last name:</label>
                        <br />
                        <input type="text" />
                        <br />
                        <br />
                        <input type="submit" value="Submit" />
                    </form>
                </div>
                <div>
                    <canvas className={styles.cancan} />
                </div>
            </div>
            <div>
                <footer className={classNames(styles.hhh, styles.yuj)}>
                    <pre>{'marquee'}</pre>
                </footer>
            </div>
            <div>
                <img
                    src="https://wixplosives.github.io/codux-assets-storage/add-panel/image-placeholder.jpg"
                    alt=""
                />
                <audio
                    controls={true}
                    src="https://wixplosives.github.io/codux-assets-storage/add-panel/audio-placeholder.mp3"
                ></audio>
                <video
                    controls={true}
                    src="https://wixplosives.github.io/codux-assets-storage/add-panel/video-placeholder.mp4"
                />
                <img src="/src/assets/profile pic.jpg" />
                <img src="/src/assets/codux.svg" />
            </div>
        </div>
    );
};
