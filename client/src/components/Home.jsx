const React = require('react')
const { Link } = require('react-router')

const Home = () => (
  <div className="home">
    <h1 className='title'>Palm Oil App</h1>
  <Link className='products-link' to='/products'>View Products</Link>
  </div>  
)

module.exports = Home