import React, {Component} from 'react';



class BookInfo extends Component {

    render() {
   let singleBook = this.props.books.map((book) => {
        let { title, authors, imageLinks, infoLink } = book.volumeInfo;
        return (
        <div key= {book.id} className="BookInfo">
            <img src={imageLinks.thumbnail}/>
            <a href={infoLink}>
            <h2>{title}</h2>
            </a>
            {/* <p> by { authors }</p> */}

        </div>


        )
   })


   return (
    <div id="App-books">
      <ul>
       { singleBook }
      </ul>
    </div>

  )
}

}




export default BookInfo;