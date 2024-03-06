import { createBoard } from '@wixc3/react-board';
import { CheckChildren } from '../../../components/check-children/check-children';

export default createBoard({
    name: 'CheckChildren',
    Board: () => <CheckChildren />,
    isSnippet: true,
});