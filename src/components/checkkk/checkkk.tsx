import { CheckFlickering } from '../check-flickering/check-flickering';
import classes from './checkkk.module.scss';
import { StageProb } from '../stage-prob/stage-prob';
export interface CheckkkProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */

export const Checkkk = ({ className }: CheckkkProps) => {
    let woohoo = 'wooohoo';
    const mamamia = 'mamamia';
    return (
        <div>
            <div className={classes.aba}>
                <div className={classes.ben}>stylingggggggggggggg</div>
            </div>
            <nav>
                <a href="/home">Home</a> | <a href="/about">About</a> | |{' '}
                <a href="/contact">Contact Us</a>
            </nav>
            <audio
                controls={true}
                src="https://wixplosives.github.io/codux-assets-storage/add-panel/audio-placeholder.mp3"
            />
            <div></div>
            <div className={classes.sdf}>
                <img
                    src="https://wixplosives.github.io/codux-assets-storage/add-panel/image-placeholder.jpg"
                    alt=""
                />
            </div>
            <span>{woohoo}</span>
            <div>
                <video
                    controls={true}
                    src="https://wixplosives.github.io/codux-assets-storage/add-panel/video-placeholder.mp4"
                />
                <CheckFlickering />
                <StageProb>
                    <div>
                        <label>A listkjhgkjhghjhgm,nbvhh</label>
                        <ul>
                            <li>Coffee</li>
                            <li>Tea</li>
                            <li>Milk</li>
                        </ul>
                    </div>
                    {mamamia}
                </StageProb>
                <div className={classes.grid}>
                    <h2>content</h2>
                    <p>blabla</p>
                    <span>blibli</span>
                    <br />
                    <h5>jeje</h5>
                    {['1', '2', '3'].map((e) => e + e)}
                    {false ? (
                        <pre>trueee</pre>
                    ) : (
                        <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a">
                            learn
                        </a>
                    )}
                </div>
                <CheckFlickering />
                <CheckFlickering />
            </div>
        </div>
    );
};
