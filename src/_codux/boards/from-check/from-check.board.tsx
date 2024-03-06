import { createBoard } from '@wixc3/react-board';
import { FromCheck } from '../../../components/from-check/from-check';

export default createBoard({
    name: 'FromCheck',
    Board: () => <FromCheck />,
    isSnippet: true,
    environmentProps: {
        windowWidth: 1342,
    },
});
