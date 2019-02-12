import React from 'react';


// const ChoiceShow = (ownProps) => {
  
//   if (!ownProps.choice) return null
//   const choice = ownProps.choice;
//   return (
//     <li>
//         {choice.body}&nbsp;&nbsp;&nbsp;&nbsp;{choice.response_ids.length}
//     </li>);
// };

const ChoiceShow = (ownProps) => {
  
  if (!ownProps.choice) return null
  const choice = ownProps.choice;

  ownProps.insertData({choice: choice.body, count: choice.response_ids.length});
  debugger
  return (
    <li>
        {choice.body}&nbsp;&nbsp;&nbsp;&nbsp;{choice.response_ids.length}
    </li>);
};



export default ChoiceShow;
