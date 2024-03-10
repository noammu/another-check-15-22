import { createBoard } from '@wixc3/react-board';
import { Weirdo } from '../../../components/weirdo/weirdo';

export default createBoard({
    name: 'Weirdo',
    Board: () => <Weirdo />,
    isSnippet: true,
});