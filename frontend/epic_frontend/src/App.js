import './App.css';
import React from "react"
import BookList from "./components/BookList"
import { 
  BrowserRouter as Router, 
  Route, 
  Switch, 
  Link 
} from "react-router-dom";



export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      books: []
    }
  }

  componentDidMount() {
    fetch('http://localhost:3001/books', { method: 'GET' })
      .then(response => response.json())
      .then(data => this.setState({ books: data },() =>{
        console.log(`This is on line 27 ${JSON.stringify(this.state)}`)
      }))
      .catch(err => console.log(err))
  }

  render() {
    return (
      <>
      {console.log(`This is on line 33 ${JSON.stringify(this.state)}`)}
        <BookList books={this.state.books} />
      </>
    )
  }
}

