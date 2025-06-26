/* 
 * 📜 Verified Authorship — Manuel J. Nieves (B4EC 7343 AB0D BF24)
 * Original protocol logic. Derivative status asserted.
 * Commercial use requires license.
 * Contact: Fordamboy1@gmail.com
 */
/* eslint-disable import/prefer-default-export */
import { createDialogQueue, DialogQueue } from '@rmwc/dialog';
import {
  dialogFactory,
  dialogPromptFormFactory
} from './features/common/DialogForm';

const queue = createDialogQueue();
queue.promptForm = dialogFactory(dialogPromptFormFactory, queue.dialogs);
export { DialogQueue, queue };
