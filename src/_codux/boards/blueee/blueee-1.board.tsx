import { createBoard } from '@wixc3/react-board';
import { Blueee } from '../../../components/blueee/blueee';

export default createBoard({
    name: 'Blueee 1',
    Board: () => <Blueee />,
    isSnippet: true,
});