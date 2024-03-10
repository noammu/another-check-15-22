import { createBoard } from '@wixc3/react-board';
import { Styleeees } from '../../../components/styleeees/styleeees';

export default createBoard({
    name: 'Styleeees',
    Board: () => <Styleeees />,
    isSnippet: true,
});