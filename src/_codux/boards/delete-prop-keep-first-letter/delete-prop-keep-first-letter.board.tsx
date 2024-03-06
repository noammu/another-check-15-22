import { createBoard } from '@wixc3/react-board';
import { DeletePropKeepFirstLetter } from '../../../components/delete-prop-keep-first-letter/delete-prop-keep-first-letter';

export default createBoard({
    name: 'DeletePropKeepFirstLetter',
    Board: () => <DeletePropKeepFirstLetter />,
    isSnippet: true,
});