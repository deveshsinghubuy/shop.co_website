import * as React from 'react'
import SecFirstPrd from "../components/SecFirstPrd";
import SecSecPrd from "../components/SecSecPrd";
import SecThirdPrd from "../components/SecThirdPrd";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import products from "../../category/ProductsData/products.json";

const ProuctDetailPage = ({ params }) => {
  const { id } = React.use(params)

  console.log("params id =", id);

  const product = products.find(
    (product) => product.id === parseInt(id, 10)
  );

  console.log("product =", product);

  return (
    <div>
      <Nav />
      <SecFirstPrd product={product} />
      <SecSecPrd />
      <SecThirdPrd />
      <Footer />
    </div>
  );
}
export default ProuctDetailPage
