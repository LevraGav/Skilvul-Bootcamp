import PropTypes from "prop-types";

const CardProduct = ({ name, image, price, addToCart }) => {
  return (
    <div className="card w-100">
      <img src={image} className="card-img-top" alt="skilvul" />
      <div className="card-body">
        <h5 className="card-title">
          {new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
          }).format(price)}
        </h5>
        <h6 className="card-subtitle mb-2 text-muted text-capitalize">
          {name}
        </h6>
        <button type="button" className="btn btn-primary w-100" onClick={addToCart}>
          add to cart
        </button>
      </div>
    </div>
  );
};

CardProduct.propTypes = {
  name: PropTypes.string,
  price: PropTypes.number,
  image: PropTypes.string,
  addToCart: PropTypes.func,
};

CardProduct.defaultProps = {
  addToCart: function () {
    return null;
  },
};

export default CardProduct;
