export default function ProductDetails({ params }) {
  console.log("params", params);
  return (
    <>
      <h1>Details about product {params.productId}</h1>
    </>
  );
}
