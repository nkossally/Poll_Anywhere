import React from 'react';
import ChoiceShow from '../choices/choice_show';
import { BarChart, XAxis, YAxis, CartesianGrid, Tooltip, Bar, Legend, ResponsiveContainer } from 'recharts';

class PollShow extends React.Component {
  constructor( props) {
    super(props)
    this.state = { pollData: []};
    this.responses = this.props.responses;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.insertData = this.insertData.bind(this);
  }

  getResponseCounts(){
    
}

  insertData(choiceData){
    debugger
    let newPollData = this.state.pollData.concat(choiceData);
    this.setState({pollData: newPollData})
    debugger
  }

  componentDidMount() {
    this.props.showPoll(this.props.match.params.pollId);
    this.props.showAllChoices();
    this.props.showAllResponses();
  }


  handleSubmit(action){
    return()=>{
      if (action === "destroyPoll"){
      this.props.destroyPoll(this.props.poll.id)
      }
    }
  }

  render(){
    if (!this.props.poll || !this.props.poll.choice_ids || !this.props.choices) return null;
    const { poll } = this.props;
    
    let that = this;
    let responseCounts = [];
    poll.choice_ids.forEach(choice_id =>{
      const choice = that.props.choices[choice_id];
      
      if(choice){
        responseCounts.push(< ChoiceShow choice={choice} insertData={that.insertData}/>)
        debugger
    }
  })




  
    return(
      <div className="poll-box">
        <div className="poll-show-left-box">
          
          <div className="poll-body">{poll.body} </div>
          {responseCounts}
          <div className="black-logo-container" ><  img src={window.logo_black} className="black-logo" /></div>    


        </div>
        <div className="poll-show-right-box">
          <button className="poll-show-edit" >
            Edit
          </button>
          <button className="poll-show-delete" onClick={this.handleSubmit("destroyPoll")} >
            Delete
          </button>
        </div>
        

          {/* <BarChart width={600} height={300} data={}> */}
          {/* <BarChart layout="vertical" width={800} height={250} data={data}>
            <CartesianGrid stroke="#ccc" />
            <XAxis type="number" />
            <YAxis dataKey="name" type="category" /> */}
            {/* <Legend />
            <Bar dataKey="amt" fill="#8884d8" />

            <Bar dataKey="pv" fill="#8884d8" />
          <Bar dataKey="uv" fill="#82ca9d" />
          </BarChart> */}

          {/* <BarChart layout="vertical" width={800} height={250} data={data}>
            <XAxis type="number" />
            <YAxis dataKey="name" type="category" />
            <Legend />
            <Bar dataKey="pv" fill="#8884d8" />
          </BarChart> */}
      </div>
    )
  }

  

}

export default PollShow;