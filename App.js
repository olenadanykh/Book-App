import React, {Component} from 'react';
import BookInfo from './BookInfo';



class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            inputValue: '',
            books: [],
  

        };
        
          this.handleChange = this.handleChange.bind(this);
          this.handleSubmit = this.handleSubmit.bind(this);
        
    }
      handleChange (e) {
        this.setState({inputValue: e.target.value});
    }

    handleSubmit (e) {
        e.preventDefault();
        const url = `https://www.googleapis.com/books/v1/volumes?q=:${this.state.inputValue}`
        fetch(url)
          .then(response => 
            response.json())
          .then((data) => {
            console.log('bookInfo:', data.items) 
          this.setState({
            books:data.items,
           

          })

  
  })
}

  
    render() {
        console.log('state:', this.state)
  
        return (
            <div className = 'App'>
             
                <h1> Book Finder</h1><br/>
                <form onSubmit={this.handleSubmit}>
                <input type="text" placeholder= "Type author, book name, subject ..." inputvalue= {this.state.inputValue} onChange={this.handleChange}/>
                <button type="button" onClick={this.handleSubmit}>Search</button>
                 </form> 
                 < BookInfo
                books={ this.state.books }/>
                </div>
        );
    }
}


export default App;