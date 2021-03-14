import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
	state = {
		Counters: [
			{
				id: 1,
				val: 1,
			},
			{
				id: 2,
				val: 0,
			},
			{
				id: 3,
				val: 0,
			},
			{
				id: 4,
				val: 0,
			},
		],
	};

	handleReset = () => {
		const counters = this.state.Counters.map((c) => {
			c.val = 0;
			return c;
		});
		this.setState({ Counters: counters });
	};

	handledelete = (counterId) => {
		const counters = this.state.Counters.filter((c) => c.id !== counterId);
		this.setState({ Counters: counters });
	};

	handleIncrement = (counterId) => {
		const counters = [...this.state.Counters];
		let i = 0;
		for (let index = 0; index < counters.length; index++) {
			if (counters[index].id === counterId) i = index;
		}
		counters[i].val++;
		console.log(counters, i);
		this.setState({ counters });
	};

	render() {
		return (
			<div>
				<button
					onClick={this.handleReset}
					className='btn btn-primary btn-sm m-2'
				>
					Reset
				</button>
				<p>{process.env.REACT_APP_NOT_SECRET_CODE}</p>
				{this.state.Counters.map((counter) => (
					<Counter
						key={counter.id}
						id={counter.id}
						value={counter.val}
						onIncrement={this.handleIncrement}
						onDelete={this.handledelete}
					/>
				))}
			</div>
		);
	}
}

export default Counters;
