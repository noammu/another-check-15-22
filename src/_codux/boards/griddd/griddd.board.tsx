import { createBoard } from '@wixc3/react-board';
import { Griddd } from '../../../components/griddd/griddd';

export default createBoard({
    name: 'Griddd',
    Board: () => <Griddd />,
    isSnippet: true,
});