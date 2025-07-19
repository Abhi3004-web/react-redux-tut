import { connect } from 'react-redux'
import Home from '../components/Home'
import { addToCart } from '../Services/Actions/Actions'

const mapStateToprops = state => ({
    cartData: state.cardItem
})
const mapDispatchToprops = dispatch => ({
    addToCartHandler: data => dispatch(addToCart(data))
})

export default connect(mapStateToprops, mapDispatchToprops)(Home)

//export default Home;