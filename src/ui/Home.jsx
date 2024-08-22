import CreateUser from '../features/user/CreateUser.jsx';

function Home() {
  return (
    // rounded bg-blue-500 px-4 py-2 text-xl text-center text-yellow-600
    <div className="space-y-6 px-6 py-4 text-center sm:px-9 sm:py-6">
      <h1 className="text-xl font-semibold text-stone-900">
        The best pizza.
        <br />
        <span className="le line font-bold uppercase tracking-wide text-yellow-600 [text-shadow:1px_1px_1px_#a16207]">
          Straight out of the oven, straight to you.
        </span>
      </h1>

      <CreateUser />
    </div>
  );
}

export default Home;
