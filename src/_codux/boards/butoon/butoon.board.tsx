import { createBoard } from '@wixc3/react-board';
import { Butoon } from '../../../components/butoon/butoon';

export default createBoard({
    name: 'active',
    Board: () => <Butoon state="active" />,
    isSnippet: true,
});
