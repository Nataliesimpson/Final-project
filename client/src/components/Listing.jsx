const React = require('react')
const Router = require('react-router')
const { Link, browserHistory } = Router
const Product = require('./Product')

const Listing = React.createClass({

  getInitialState(){
    return { searchQuery: '', products: [] }
  },

  componentDidMount(){
    var url = 'http://localhost:5000/api/products'
    var request = new XMLHttpRequest()
    request.open('GET', url)
    console.log(request)
    request.setRequestHeader('Content-Type', "application/json")
    request.withCredentials = true

    request.onload = () => {
       if(request.status === 200){
        console.log("request: ", request.responseText)
        var data = JSON.parse(request.responseText)
        this.setState( { products: data } )
       } else{
        console.log("Uh oh you're not logged in!")
        browserHistory.goBack()
       }
    }
    request.send(null)
  },

  doSearch(event){
    this.setState({searchQuery: event.target.value})
  },

  render(){
    return(
      <div className="listing">
        <nav>
          <Link className='title' to='/'>Product Search</Link>
          <input className='search-box' type='text' placeholder='Search...' value={this.state.searchQuery} onChange={this.doSearch} />
        </nav>
        <div className='product-container'>
          {
            this.state.products.filter((product) => `${product.name} ${product.description}`.toUpperCase().indexOf(this.state.searchQuery.toUpperCase()) >= 0).map((product) => (
              <Product {...product} key={product.itemID}/>
            ))
          }
        </div>
      </div>
    )
  }

})

module.exports = Listing