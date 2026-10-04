function ProductCard(props) {
  return (
    <>
      <h1 className="mb-8 text-center text-4xl font-bold text-[#311414]">
        Products
      </h1>

      <div className="grid gap-6 grid-cols-3">
        {props.products.map((product) => {
          return (
            <div className="rounded-xl border border-[#0057c2]  p-6" key={product.name}>
              <div className="mb-4 text-xl font-bold">
                {product.name}
              </div>

              <div className="mb-3 text-2xl font-semibold text-blue-900">
                ${product.price}
              </div>

              <div className="text-gray-600">{product.description}</div>
            </div>
          );
        })}
      </div>
    </>
  );
}

function App() {
  const products = [
    {
      name: "Laptop",
      price: 2000,
      description: "ThinkPad supremacy",
    },
    {
      name: "Phone",
      price: 1500,
      description: "Something with an I as it's first letter",
    },
    {
      name: "Headphones",
      price: 230,
      description: "Horrible sound quality!! Don't buy",
    },
  ];

  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <ProductCard products={products} />
    </main>
  );
}

export default App;
