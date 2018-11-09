import {defineAction} from 'redux-define';

const createDefineAction = action => defineAction(action, ['SUCCESS', 'FAILURE', 'REQUEST'])

export default createDefineAction;