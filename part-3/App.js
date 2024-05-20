import React from 'react';
import Person from './Person';

class App extends React.Component {
	render() {
		return (
			<div>
				<Person name="Mr. Smith" age={33} hobbies={['Reading', 'Cooking', 'Biking']} />
				<Person name="Mrs. Smith" age={17} hobbies={['Painting', 'Writing', 'Dancing']} />
        		<Person name="Michael Johnson" age={30} hobbies={['Gaming', 'Photography', 'Fishing']} />
			</div>
		)
	}
}

export default App;