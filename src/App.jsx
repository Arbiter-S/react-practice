import { useState } from "react";

function InputForm() {
    const [value, setValue] = useState("");

  function handleClick() {
    console.log(value);
  }

  return (
    <div className="m-auto max-w-2xs rounded-xl border border-[#0057c2] p-6">
      <h1 className="mb-6 text-3xl font-bold text-[#311414]">Enter Anything</h1>

      <input
        className="mb-4 w-full rounded-lg border border-gray-300 p-3 outline-none"
        value={value}
        onChange={(event) => setValue(event.target.value)}
        type="text"
        placeholder="Type something..."
      />

      <button
        className="w-full rounded-lg bg-[#0057c2] p-3 font-semibold text-white hover:text-black hover:bg-blue-300 transition duration-700"
        onClick={handleClick}
      >
        Submit
      </button>
    </div>
  );
}

function ProductCard(props) {
  return (
    <>
      <h1 className="mb-8 text-center text-4xl font-bold text-[#311414]">
        Products
      </h1>

      <div className="grid gap-6 grid-cols-3">
        {props.products.map((product) => {
          return (
            <div
              className="rounded-xl border border-[#0057c2]  p-6 mb-10"
              key={product.name}
            >
              <div className="mb-4 text-xl font-bold">{product.name}</div>

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
      <InputForm />
    </main>
  );
}

export default App;
