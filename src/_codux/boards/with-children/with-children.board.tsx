import { createBoard } from '@wixc3/react-board';
import { WithChildren } from '../../../components/with-children/with-children';

export default createBoard({
    name: 'WithChildren',
    Board: () => <WithChildren />,
    isSnippet: true,
});