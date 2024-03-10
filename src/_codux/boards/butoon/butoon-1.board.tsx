import { createBoard } from '@wixc3/react-board';
import { Butoon } from '../../../components/butoon/butoon';

export default createBoard({
    name: 'disabled',
    Board: () => <Butoon state="disabled" />,
    isSnippet: true,
});
