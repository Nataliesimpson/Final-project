const React = require('react')

const Product = (props) => (
  <div className='product'>
    <img src={`images/${props.image}`} className='product-image' />
    <div className='product-details'>
      <h3 className='product-title'>{props.name}</h3>
      <h4 className='product-series'>Oil used ({props.oil})</h4>
      <p className='product-description'>{props.description}</p>
    </div>
  </div>
)

const {string, number} = React.PropTypes

Product.propTypes = {
  name: string.isRequired, 
  oil: string.isRequired, 
  rating: string.isRequired, 
  description: string.isRequired
}



module.exports = Product