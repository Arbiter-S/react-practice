import { useState } from "react";
import { Fragment } from "react";

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

function UserList({ users }) {
  return (
    <Fragment>
      <h1 className="mb-6 text-3xl font-bold">Users</h1>
      <div className="flex flex-row gap-5 border-2 rounded-lg justify-between p-1.5 border-[#0057c2]">
      {users.map((user) => (
        <div key={user.name}>
          <h2 className="text-xl font-semibold">{user.name}</h2>
          <p>Age: {user.age}</p>
          <p className="mb-4">City: {user.city}</p>
        </div>
      ))}
      </div>
    </Fragment>
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

  const users = [
    { name: "Ibrahim", age: 20, city: "Tehran" },
    { name: "Ismael", age: 30, city: "Ghom" },
    { name: "Jibraeil", age: 40, city: "Rom" },
  ];

  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <ProductCard products={products} />
      <InputForm />
      <UserList users={users}/>
    </main>
  );
}

export default App;
