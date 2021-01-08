import React from "react"
import { 
  BrowserRouter as Router, 
  Route, 
  Switch, 
  Link 
} from "react-router-dom";

 class BookList extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        titles:[]
      }
      this.props.books.map(item =>{
        this.setState({titles:[...this.state.titles,item.title]})
      })
      console.log('test')
    }
    

    
    

    render() {
      
        return(
            <>
              <div>meow</div>
                <ul>{this.state.titles.map(title => {<li>{title}</li>})}</ul>
            </>
        )
    }

}

export default BookList;
