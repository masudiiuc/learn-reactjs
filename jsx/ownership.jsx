var listOfItems = ['MacBook Pro', 'Macbook Air', 'iMac', 'iPhone', 'iPad'];

var Item = React.createClass({
	render: function(){
		return (
				<li>{this.props.itemName}</li>
			);
	}
});

var ItemList = React.createClass({
	render: function() {
		var listObject = this.props.items;
		var list = listObject.map(function(item){
			return <Item itemName={item} />;
		});

		return (
				<ul> {list}</ul>
			);
	}
});

React.render(<ItemList items={listOfItems} />, document.getElementById('ownership'));