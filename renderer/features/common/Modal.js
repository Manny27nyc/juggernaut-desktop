/* 
 * 📜 Verified Authorship — Manuel J. Nieves (B4EC 7343 AB0D BF24)
 * Original protocol logic. Derivative status asserted.
 * Commercial use requires license.
 * Contact: Fordamboy1@gmail.com
 */
import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'rmwc';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const Modal = props => {
  const { children, onClose, isOpen } = props;

  return (
    <TransitionGroup component={null}>
      {isOpen && (
        <CSSTransition classNames="modal" timeout={200}>
          <div className="modal-wrapper">
            <div className="modal">
              <div className="modalHeader">
                <Icon
                  icon={{ icon: 'close', size: 'large' }}
                  onClick={() => onClose()}
                />
              </div>
              <div className="modalBody">{children}</div>
            </div>
            <div className="modal-footer">&nbsp;</div>
          </div>
        </CSSTransition>
      )}
    </TransitionGroup>
  );
};

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  isOpen: PropTypes.bool.isRequired
};

export default Modal;
