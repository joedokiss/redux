import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_PRODUCTS = [
  {
    id: 1,
    title: 'First product',
    description: 'This is the first product',
    price: 10.02
  },
  {
    id: 2,
    title: 'Second product',
    description: 'This is the second product',
    price: 5.25
  },
  {
    id: 3,
    title: 'Third product',
    description: 'This is the third product',
    price: 8.99
  }
]

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map(product => (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description} />
        ))}
      </ul>
    </section>
  );
};

export default Products;
