import React, { Component } from 'react';
class Counter extends Component {
	// state = {
	// 	count: this.props.value,
	// };

	render() {
		// console.log(this.props);
		return (
			<div>
				<span className={this.getBadgeClasses()}>{this.formatCount()}</span>
				<button
					onClick={() => this.props.onIncrement(this.props.id)}
					className='btn btn-secondary btn-sm'
				>
					Increment
				</button>
				<button
					onClick={() => this.props.onDelete(this.props.id)}
					className='btn btn-danger btn-sm m-2'
				>
					Delete
				</button>
				{/* <ul>
					{this.state.tags.map((tag) => (
						<li key={tag}>{tag}</li>
					))}
				</ul> */}
			</div>
		);
	}

	// handleIncrement = (increVal) => {
	// 	this.setState({ count: this.state.count + increVal });
	// };

	getBadgeClasses() {
		let classes = 'badge m-2 badge-';
		classes += this.props.value === 0 ? 'warning' : 'primary';
		return classes;
	}

	formatCount() {
		// const { count } = this.state;
		return this.props.value !== 0 ? this.props.value : 'Zero';
	}
}

export default Counter;
