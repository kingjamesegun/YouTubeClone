import React from 'react';
import YoutubeLogo from './download.png'


class SearchBar extends React.Component {
    state = { term: ""  }

    onInputChange=(event)=>{
        this.setState({term : event.target.value})
    }

    onFormSubmit=(event)=>{
        event.preventDefault();
        this.props.onFormSubmit(this.state.term);
    }
    render() { 
        return (
            <div className="search-bar mb-3 mt-2">
                <img style={{width: 75, height: 20}} src={YoutubeLogo} alt="YouTube Logo"/>
                <form style={{display: "inline-block", marginLeft : "200px"}} onSubmit={this.onFormSubmit} className="form">
                    <div className="field">
                        <input onChange={this.onInputChange} type="text" value={this.state.term}/>
                    </div>
                </form>
            </div>
          );
    }
}
 
export default SearchBar;
