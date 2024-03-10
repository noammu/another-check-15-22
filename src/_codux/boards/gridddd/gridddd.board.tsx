import { createBoard } from '@wixc3/react-board';
import { Gridddd } from '../../../components/gridddd/gridddd';

export default createBoard({
    name: 'Gridddd',
    Board: () => <Gridddd />,
    isSnippet: true,
});