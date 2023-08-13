export const Contact = () => {
  return (
    <>
      <h1 className="font-bold text-3xl p-4 m-4">Contact Page</h1>
      <div>
        <form>
          <input
            type="text"
            placeholder="Name"
            className="border-black border p-2 m-2"
          />
          <input type="text" placeholder="Email" className="border-black border p-2 m-2" />
          <button className="rounded p-2 m-2 bg-green-400">Submit</button>
        </form>
      </div>
    </>
  );
};
