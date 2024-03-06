export interface StageProbProps {
    className?: string;
    children: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const StageProb = ({ className, children }: StageProbProps) => {
    return (
        <div>
            <h1>{children}</h1>
            <h1>Heading 1</h1>

            <div>
                <img
                    src="https://wixplosives.github.io/codux-assets-storage/add-panel/image-placeholder.jpg"
                    alt="sdfs"
                />
            </div>
            <div></div>
        </div>
    );
};
