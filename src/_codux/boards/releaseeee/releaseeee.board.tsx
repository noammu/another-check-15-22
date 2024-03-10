import { createBoard } from '@wixc3/react-board';
import { Releaseeee } from '../../../components/releaseeee/releaseeee';

export default createBoard({
    name: 'Releaseeee',
    Board: () => <Releaseeee />,
    isSnippet: true,
});