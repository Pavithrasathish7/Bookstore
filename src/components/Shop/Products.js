import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_PRODUCTS = [
  {
    id: "p1",
    price: 15,
    title: "The God of Small Things",
    description: "by Arundhati Roy",
  },
  {
    id: "p2",
    price: 30,
    title: "The Namesake",
    description: "by Jhumpa Lahiri",
  },
  {
    id: "p3",
    price: 50,
    title: "The Shadow Lines",
    description: "by Amitav Ghosh",
  },
  {
    id: "p4",
    price: 70,
    title: "A Suitable Boy",
    description: "by Vikram Seth",
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
