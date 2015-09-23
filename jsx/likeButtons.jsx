var LikeButton = React.createClass({
	getInitialState: function(){
		return {
			likeCount: 0
		}
	},

	handleLikeClick: function() {
		var newCount = this.state.likeCount + 1;
		this.setState({likeCount: newCount});
	},

	render: function() {
		return (
			<div className="row">
				<div className="col-lg-6 col-md-6">
					<button className="btn btn-primary" onClick={this.handleLikeClick}>{this.props.name} ({this.state.likeCount})</button> 
				</div>
				<div className="col-lg-12 col-md-12"></div>
			</div>
			);
	}
});


var LikeButtonList = React.createClass({
	render: function(){
		var buttonItems = this.props.buttonTypesList.map(function(button){
			return <LikeButton name={button} />;
		});

		return (
			<ul>{buttonItems}</ul>
		);
	}
});

var buttonTypes = ['Burger', 'Pizza', 'Sub', 'Hot-dogs', 'BBQ', 'Kabab'];
React.render(<LikeButtonList buttonTypesList={buttonTypes} />, document.getElementById('likeButton'));