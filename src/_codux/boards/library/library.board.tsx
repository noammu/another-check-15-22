import { createBoard } from '@wixc3/react-board';
import { Library } from '../../../components/library/library';

export default createBoard({
    name: 'Library',
    Board: () => <Library />,
    isSnippet: true,
});