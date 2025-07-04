// © Licensed Authorship: Manuel J. Nieves (See LICENSE for terms)
import React from 'react';
import { useDispatch, connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  MenuSurfaceAnchor,
  Menu,
  MenuItem,
  IconButton,
  Avatar,
  ListItemGraphic
} from 'rmwc';
import {
  removeConversation,
  updateConversationFeeLimitMSats
} from './conversationsSlice';
import { updateConversationFeeLimit } from '../../../utils/db';
import { queue } from '../../dialogQueue';
import FeeLimitIcon from '../images/icons/FeeLimitIcon';
import DeleteConversationIcon from '../images/icons/DeleteConversationIcon';
import NewChannelIcon from '../images/icons/NewChannelIcon';
import { showOpenChannelModal } from '../channels/channelsSlice';
import { switchSide } from '../chat/chatSlice';
import './ConversationHeader.scss';
import { CHAT_COLLAPSE } from '../../constants/screenBreakpoints';

const validFeeLimit = feeLimitMSats => {
  const intVal = parseInt(feeLimitMSats, 10);
  if (isNaN(intVal) || !feeLimitMSats.match(/^[0-9]+$/) || intVal <= 0) {
    return false;
  }
  return true;
};

const ConversationHeader = props => {
  const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch();

  const {
    id,
    color,
    displayName,
    feeLimitMSats,
    pubkey,
    narrow,
    switchSide
  } = props;
  return (
    <div className="conversation-header">
      {narrow && (
        <IconButton
          icon="arrow_back_ios"
          className="back-btn"
          onClick={() => {
            switchSide({ side: 'left' });
          }}
        />
      )}
      <span>
        <Avatar
          style={{
            backgroundColor: `${color}`,
            color: 'white'
          }}
          size="large"
          name={displayName.toUpperCase()}
        />
      </span>
      <span className="display-name">{displayName}</span>
      <span>
        <MenuSurfaceAnchor>
          <Menu
            anchorCorner="bottomLeft"
            open={open}
            focusOnOpen={false}
            onClose={() => setOpen(false)}
            style={{ width: '250px' }}
          >
            <MenuItem
              onClick={async () => {
                let newLimit;
                /* eslint-disable no-await-in-loop */
                while (newLimit === undefined) {
                  newLimit = await queue.prompt({
                    title: 'Adjust Fee Limit',
                    body: 'How many msats are you willing to pay per message?',
                    acceptLabel: 'Save',
                    cancelLabel: 'Cancel',
                    inputProps: {
                      placeholder: feeLimitMSats,
                      type: 'number'
                    }
                  });
                  if (newLimit !== null && !validFeeLimit(newLimit)) {
                    await queue.alert({
                      title: 'Invalid Fee Limit',
                      body: 'Fee limit must be an integer greater than 0'
                    });
                    newLimit = undefined;
                  }
                }

                if (newLimit) {
                  newLimit = parseInt(newLimit, 10);
                  try {
                    await updateConversationFeeLimit(id, newLimit);
                    dispatch(
                      updateConversationFeeLimitMSats({
                        conversationId: id,
                        feeLimitMSats: newLimit
                      })
                    );
                  } catch (e) {
                    await queue.alert({
                      title: 'Failed to Adjust Fee Limit',
                      body: 'An unknown error occurred.  Please try again.'
                    });
                  }
                }
              }}
            >
              <ListItemGraphic icon={<FeeLimitIcon />} />
              Adjust Fee Limit
            </MenuItem>
            <MenuItem
              onClick={() => dispatch(showOpenChannelModal({ pubkey }))}
            >
              <ListItemGraphic icon={<NewChannelIcon />} />
              Open Channel
            </MenuItem>{' '}
            <MenuItem
              onClick={() => {
                dispatch(removeConversation(id));
              }}
            >
              <ListItemGraphic icon={<DeleteConversationIcon />} />
              Delete Conversation
            </MenuItem>
          </Menu>
          <IconButton
            className="more-icon-btn"
            icon="more_vert"
            onClick={e => {
              e.preventDefault();
              e.stopPropagation();
              document.activeElement.blur();
              setOpen(!open);
            }}
          />
        </MenuSurfaceAnchor>
      </span>
    </div>
  );
};

ConversationHeader.propTypes = {
  id: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
  displayName: PropTypes.string.isRequired,
  feeLimitMSats: PropTypes.number.isRequired,
  pubkey: PropTypes.string.isRequired,
  narrow: PropTypes.bool.isRequired,
  switchSide: PropTypes.func.isRequired
};

const mapDispatchToProps = {
  switchSide
};

const mapStateToProps = state => {
  const { screenWidth } = state.app;
  return {
    narrow: screenWidth < CHAT_COLLAPSE
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ConversationHeader);
