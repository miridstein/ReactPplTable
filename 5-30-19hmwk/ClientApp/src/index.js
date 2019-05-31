import React from 'react';
import { render } from 'react-dom';
import PersonAdder from './PersonAdder';
import PeopleList from './PeopleList';

class App extends React.Component {
    state = {
        currentFirst: '',
        currentLast: '',
        currentAge: '',
        allPeople: []
    }

    onFirstTextChange = x => {
        this.setState({ currentFirst: x.target.value });
    }
    onLastTextChange = x => {
        this.setState({ currentLast: x.target.value });
    }
    onAgeTextChange = x => {
        this.setState({ currentAge: x.target.value });
    }
    onClearTable = () => {
        this.setState({ allPeople: [] });
    }
    onSubmitClick = () => {
        const copy = [...this.state.allPeople];
        let person = [this.state.currentFirst, this.state.currentLast, this.state.currentAge]
        copy.push(person);
        this.setState({ currentFirst: '', currentLast: '', currentAge: '', allPeople: copy });
    }

    render() {
        return (
            <div className="container" style={{ marginTop: 40 }}>
                <PersonAdder
                    currentFirst={this.state.currentFirst}
                    currentLast={this.state.currentLast}
                    currentAge={this.state.currentAge}
                    firstTextChange={this.onFirstTextChange}
                    lastTextChange={this.onLastTextChange}
                    ageTextChange={this.onAgeTextChange}
                    submitClick={this.onSubmitClick}
                    clearTable={this.onClearTable} />
                <PeopleList people={this.state.allPeople} />
            </div>
        );
    }
}
render(<App />, document.getElementById('root'));