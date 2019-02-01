import React from 'react';


const ChoiceShow = (ownProps) => {
  
  if (!ownProps.choice) return null
  const choice = ownProps.choice;
  return (
    <li>
        {choice.body}&nbsp;&nbsp;&nbsp;&nbsp;{choice.response_ids.length}
    </li>);
};

export default ChoiceShow;
