import { createBoard } from '@wixc3/react-board';
import { Checkkk } from '../../../components/checkkk/checkkk';

export default createBoard({
    name: 'Checkkk',
    Board: () => <Checkkk />,

    isSnippet: true,

    environmentProps: {
        canvasWidth: 1000,
        canvasHeight: 1000,
    },
});
