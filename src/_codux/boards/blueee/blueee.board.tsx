import { createBoard } from '@wixc3/react-board';
import { Blueee } from '../../../components/blueee/blueee';

export default createBoard({
    name: 'Blueee',
    Board: () => <Blueee />,
    isSnippet: true,
});