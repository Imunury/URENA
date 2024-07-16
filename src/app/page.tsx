const Home: React.FC = () => {

  return (
    <section className='h-full w-full flex justify-center items-center'>
      <div className="border-solid border-2 border-emerald-400 rounded-lg w-2/3 h-2/3 flex flex-col justify-center items-center">
        <h1 className="text-emerald-400 text-3xl font-bold">
          URENA
        </h1>
        <input className="bg-gray-300 rounded-md mt-5 h-8" />
        <input className="bg-gray-300 rounded-md mt-3 h-8" />
        <button type="submit" className="bg-emerald-400 mt-5 px-5 py-1 rounded-md">Login</button>
      </div>
    </section>
  );
};

export default Home;
