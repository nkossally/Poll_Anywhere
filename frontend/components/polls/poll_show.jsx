import React from 'react';
import ChoiceShow from '../choices/choice_show';
import { BarChart, XAxis, YAxis, CartesianGrid, Tooltip, Bar, Legend, ResponsiveContainer } from 'recharts';

class PollShow extends React.Component {
  constructor( props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.showPoll(this.props.match.params.pollId);
    this.props.showAllChoices();
  }

  handleSubmit(action){
    return()=>{
      if (action === "destroyPoll"){
      this.props.destroyPoll(this.props.poll.id)
      }
    }
  }

  render(){
    let poll;
    let pollData = [];
    let totalCount = 0;
    if (!this.props.poll || !this.props.choices || !this.props.poll.choice_ids || !this.props.choices){
      return null;
    } else{
    poll  = this.props.poll;
    for (let i = 0; i < poll.choice_ids.length; i++) {
      let choice = this.props.choices[poll.choice_ids[i]];
      if(choice){
        totalCount += choice.response_ids.length;
        pollData.push({choice: choice.body, count: choice.response_ids.length})
      }  
    }
  }

  let pollDataPercents = pollData.map(datum=>{
    return {choice: datum.choice, count: 100*datum.count/totalCount}
  })
    


    return(
      <div className="poll-box">
        <div className="poll-show-left-box">
          
          <div className="poll-body">{poll.body} </div>
          <BarChart layout="vertical" width={800} height={250} data={pollDataPercents}>
            <XAxis type="number" />
            <YAxis dataKey="choice" type="category" />
            <Legend />
            <Bar dataKey="count" fill="#8884d8" />
          </BarChart>
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


      </div>
    )
  }

  

}

export default PollShow;