import { createBoard } from '@wixc3/react-board';
import { Dupppp } from '../../../components/dupppp/dupppp';

export default createBoard({
    name: 'Dupppp',
    Board: () => <Dupppp />,
    isSnippet: true,
});