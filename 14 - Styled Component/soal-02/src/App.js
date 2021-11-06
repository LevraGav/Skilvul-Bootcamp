import Card from "./components/Card";
import { FlexContainer } from "./components/styles/FlexContainer";

export default function App() {
  const products = [
    {
      imageUrl:
        "https://images.unsplash.com/photo-1521369909029-2afed882baee?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80",
      price: "Rp 200000",
      productName: "Hat",
    },
    {
      imageUrl:
        "https://images.unsplash.com/photo-1611312449412-6cefac5dc3e4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=692&q=80",
      price: "Rp 300000",
      productName: "Shirt",
    },
    {
      imageUrl:
        "https://images.unsplash.com/photo-1546215364-12f3fff5d578?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80",
      price: "Rp 300000",
      productName: "Jeans",
    },
  ];
  return (
    <div>
      <FlexContainer>
        {products.map((data) => {
          return <Card data={data} />;
        })}
      </FlexContainer>
    </div>
  );
}
