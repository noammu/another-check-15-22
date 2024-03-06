import { createBoard } from '@wixc3/react-board';
import { CheckFlickering } from '../../../components/check-flickering/check-flickering';

export default createBoard({
    name: 'CheckFlickering',
    Board: () => <CheckFlickering />,
    isSnippet: true,
});