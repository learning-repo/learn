import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

const Card = (props) => {
    return (
        <div style={{ margin: '1em' }}>
            <img width='75' src={props.avatar_url} />
            <div className="infoCard">
                <div style={{ fontWeight: 'bold', fontSize: '1.25em' }}>{props.name}</div>
                <div>{props.company}</div>
            </div>
        </div>
    );
};

/* let data = [
    { name: "Niran", company: "UST", avatar_url: "https://avatars2.githubusercontent.com/u/10782166?v=4" },
    { name: "Raman", company: "Infy", avatar_url: "https://avatars2.githubusercontent.com/u/10782165?v=4" },
]; */

const CardList = (props) => {
    return (
        <div>
            {props.cards.map(card => <Card key={card.id} {...card} />)}
        </div>
    );
}

class Form extends React.Component {
    state = { userName: '' };
    handleSubmit = (event) => {
        event.preventDefault();
        //alert('handlesubit:' + this.UserNameInput.value);
        //alert('handlesubit:' + this.state.userName);
        axios.get(`https://api.github.com/users/${this.state.userName}`)
            .then(resp => {
                this.props.onSubmitCustomProp(resp.data);
                this.setState({userName:''});
            })
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text"
                    // ref={(input) => this.UserNameInput = input}
                    value={this.state.userName}
                    onChange={(event) => this.setState({ userName: event.target.value })}
                    placeholder="Github username" required />
                <button type="submit">Add Card</button>
            </form>
        )
    }
}

class App extends React.Component {
    state = {
        cards: []
    };
    addNewCardFn = (singleCardInfo) => {
        this.setState(
            prevState => ({
                cards: prevState.cards.concat(singleCardInfo)
            }));
    }
    render() {
        return (
            <div>
                <Form onSubmitCustomProp={this.addNewCardFn} />
                <CardList cards={this.state.cards} />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
