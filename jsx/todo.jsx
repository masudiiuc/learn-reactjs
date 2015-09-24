var Header = React.createClass({
	
	getInitialState: function(){
		return {

		};
	},

	render: function(){
		return (
				<header>
					<nav className="navbar navbar-inverse navbar-fixed-top">
				      <div className="container">
				        <div className="navbar-header">
				          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
				            <span className="sr-only">Toggle navigation</span>
				            <span className="icon-bar"></span>
				            <span className="icon-bar"></span>
				            <span className="icon-bar"></span>
				          </button>
				          <a className="navbar-brand" href="#">React Task manager</a>
				        </div>
				        
				      </div>
				    </nav>
				</header>
			)
	}
});

var TaskForm = React.createClass({
	getInitialState: function(){
		return {};
	},

	render: function() {
		return (
			<div className="row">
				<form className="form-inline col-lg-12 col-md-12" >
					<div className="form-group col-lg-12 col-md-12">
						<input type="text" className="form-control" id="taskName" placeholder="Task Name" />
						<button type="submit" className="btn btn-default">Add</button>
					</div>
				</form>
			</div>
		)	
	}
});


var Content = React.createClass({
	getInitialState: function() {
		return {};
	},

	render: function(){
		return (
				<div>
					<Header />
					<div className="container">
						<div className="jumbotron main-content">
							<TaskForm />
						</div>
					</div>
				</div>		
			)
	}
})


React.render(<Content />, document.body);