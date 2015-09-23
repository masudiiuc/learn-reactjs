var Boom = React.createClass({

	getInitialState: function(){
		return {
			timeRemaining: 10
		}
	},

	countDown: function(){
		var actualRemainingTime = this.state.timeRemaining - 1;

		if (actualRemainingTime == 0) {
			this.setState({timeRemaining : 'Boom!'});
			clearInterval(this.intervalId);
		}else{
			this.setState({timeRemaining : actualRemainingTime});
		}
	},

	componentDidMount: function(){

		this.intervalId = setInterval(this.countDown, 1000);
	},

	render: function() {
		return (
			<div>
				<h1>{this.state.timeRemaining}</h1>
			</div>
		);
	}

});

React.render(<Boom />, document.getElementById('boom'));
