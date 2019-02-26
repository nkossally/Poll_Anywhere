import React from 'react';
import ChoiceShow from '../choices/choice_show';
import { BarChart, XAxis, YAxis, CartesianGrid, Tooltip, Bar, Legend, ResponsiveContainer } from 'recharts';
import BlueNavBar from '../nav_bar/blue_nav_bar_container';
import { Link, Redirect } from 'react-router-dom';

class PollShow extends React.Component {
  constructor( props) {
    super(props)
    this.state = {responseReceived: false};
    this.handleSubmit = this.handleDelete.bind(this);
    this.receiveResponse = this.receiveResponse.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.toggleActiveStatus = this.toggleActiveStatus.bind(this);
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
      this.props.destroyPoll(this.props.poll.id)
      this.props.history.push(`/users/${this.props.userId}`);

    
  }

  toggleActiveStatus(){

      let poll = this.props.poll;
      let inactivePoll = {active: false};
      let activePoll = {active: true};
      for(let i=0; i<this.props.polls.length; i++){
        let currPoll = this.props.polls[i];

        if(currPoll.id === poll.id){
          let updatedPoll = poll.active ? inactivePoll : activePoll;
          this.props.updatePoll(updatedPoll, poll.id)
        } else {
          this.props.updatePoll(inactivePoll, currPoll.id)
        }
      }

    
  
  }

  render(){
    let poll;
    let pollData = [];
    let totalCount = 0;
    let respondText;
    let respondTextLink;
    if (!this.props.poll || !this.props.choices){
      return null;
    } else{
    poll  = this.props.poll;
    respondText = poll.active ? "Respond at " : "When this poll is active, respond at ";
    respondTextLink = poll.active ? <Link className="respond-link" to={`/${this.props.userId}/respond`} >pollanythere.herokuapp.com/#/{this.props.userId}/respond</Link> :
      `pollanythere.herokuapp.com/#/${this.props.userId}/respond`

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
          <ul className="poll-show-left-box">
            <li className="poll-body">{poll.body} </li>
            <li className="poll-show-respond-text">
              {respondText}
              {respondTextLink}
            </li>
            <li>
              <ul className="chart-and-buttons">
                <li className="chart-container">
                    <ResponsiveContainer >
                    <BarChart layout="vertical"  data={pollDataPercents}>
                      <XAxis type="number" />
                      <YAxis dataKey="choice" type="category" />
                      <Legend />
                      <Bar dataKey="count" fill="#8884d8" />
                    </BarChart>
                    </ResponsiveContainer>
                </li>
                <li className="poll-show-buttons">
                  <div id={this.props.poll.active ? "active-blue-poll": ""}><button className="poll-show-activate" id="extend-button" onClick={this.toggleActiveStatus} > {this.props.poll.active ? "Deactivate" : "Activate" }  <i id="poll-show-activate-icon" className="fas fa-toggle-on"></i></button></div>
                  <div><Link id="extend-button" to={`/polls/${poll.id}/edit`}>Edit</Link></div>
                  <div><button id="extend-button" className="poll-show-delete" onClick={this.handleDelete} >
                    Delete
                  </button></div>
                </li>
              </ul>
            </li>
            <div className="black-logo-container" ><  img src={window.logo_black} className="black-logo" /></div>    

          </ul>

        


        </div>
      </div>
    )
  }

  

}

export default PollShow;