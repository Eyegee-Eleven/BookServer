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
      .then(data => this.setState({ books: [data] }))
      .catch(err => console.log(err))
  }

  render() {
    return (
      <>
        <BookList books={this.state.books} />
      </>
    )
  }
}

