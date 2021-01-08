import React from "react"


class BookList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      titles: []
    }

  }

  componentDidMount() {
    console.log('Did mount'+ JSON.stringify(this.props.books))
    let bookt=this.props.books.map(item => {
      console.log(`in the map of did mount ${JSON.stringify(item)}`)
      return item;
    })
    this.setState({titles:bookt})
  }

  render() {
    return (
      <>
        <ul>
        {console.log('state' + JSON.stringify(this.state))}
        {
        this.state.titles.map(title => {
          return (
            <li>{title.Book_Title}</li>)
        })
        }
        </ul>
                
      </>
    )
  }

}

export default BookList;
