import React from 'react';


const EditChoiceShow = (ownProps) => {
  
  if (!ownProps.choice) return null
  const choice = ownProps.choice;
  return (
    <li>
        {choice.body}
    </li>);
};

export default EditChoiceShow;
