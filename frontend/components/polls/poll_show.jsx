import React from 'react';
import ChoiceShow from '../choices/choice_show';
import { BarChart, XAxis, YAxis, CartesianGrid, Tooltip, Bar, Legend, ResponsiveContainer } from 'recharts';

class PollShow extends React.Component {
  constructor( props) {
    super(props)
    this.state = {responseReceived: false};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.receiveResponse = this.receiveResponse.bind(this);
  }

  componentDidMount() {
    this.props.showPoll(this.props.match.params.pollId);
    this.props.showAllChoices();
    let that = this;

    const pusher = new Pusher('a00864a1ebfc95672108', {
      cluster: 'us2',
      forceTLS: true
    });
    const channel = pusher.subscribe('response_channel');

    channel.bind('pusher:subscription_succeeded', function (members) {
      console.log('subscribed successful');
    });
    channel.bind('pusher:subscription_error', function (status) {
      console.log('subscribed error: ' + status);
    });
    channel.bind('respond', function (status) {
      console.log('response noted');
      that.receiveResponse;
    });



  }

  receiveResponse(){
    this.props.showPoll(this.props.match.params.pollId);
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
    if (!this.props.poll || !this.props.choices){
      return null;
    } else{
    poll  = this.props.poll;
    for (let i = 0; i < this.props.choices.length; i++) {
      let choice = this.props.choices[i];
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