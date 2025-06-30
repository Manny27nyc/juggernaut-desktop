// © Licensed Authorship: Manuel J. Nieves (See LICENSE for terms)
/* eslint-disable import/prefer-default-export */
import { createDialogQueue, DialogQueue } from '@rmwc/dialog';
import {
  dialogFactory,
  dialogPromptFormFactory
} from './features/common/DialogForm';

const queue = createDialogQueue();
queue.promptForm = dialogFactory(dialogPromptFormFactory, queue.dialogs);
export { DialogQueue, queue };
