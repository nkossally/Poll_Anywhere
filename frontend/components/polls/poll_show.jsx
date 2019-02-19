import React from 'react';
import ChoiceShow from '../choices/choice_show';
import { BarChart, XAxis, YAxis, CartesianGrid, Tooltip, Bar, Legend, ResponsiveContainer } from 'recharts';
import BlueNavBar from '../nav_bar/blue_nav_bar_container';
import { Link } from 'react-router-dom';

class PollShow extends React.Component {
  constructor( props) {
    super(props)
    this.state = {responseReceived: false};
    this.handleSubmit = this.handleDelete.bind(this);
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
      that.props.showAllChoices();
    });
  }

  receiveResponse(){
    this.props.showPoll(this.props.match.params.pollId);
  }

  handleDelete(){
    return()=>{
      this.props.destroyPoll(this.props.poll.id)
      // <Redirect></Redirect>
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
      <div>
        <BlueNavBar />
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
          <div className="poll-show-buttons">
            <Link to={`/polls/${poll.id}/edit`}>Edit</Link>
            <button className="poll-show-delete" onClick={this.handleDelete()} >
                Delete
            </button>
          </div>

        


        </div>
      </div>
    )
  }

  

}

export default PollShow;