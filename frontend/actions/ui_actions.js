export const SELECT_POLL = 'SELECT_POLL';
export const DESELECT_POLL = 'DESELECT_POLL';
export const SHOW_SELECTION = 'SHOW_SELECTION';


export const selectPoll = poll => {
  return {
    type: SELECT_POLL,
    poll: poll,
  };
};

export const deselectPoll = (poll) => {
  return {
    type: DESELECT_POLL,
    poll: poll,
  };
};

export const showSelection = () => {
  return {
    type: SHOW_SELECTION,
  };
};