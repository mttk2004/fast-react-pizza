import CreateUser from '../features/user/CreateUser.jsx';
import { useSelector } from 'react-redux';
import Button from './Button.jsx';

function Home() {
  const name = useSelector((store) => store.user.name);

  return (
    <div className="space-y-10 px-6 py-4 text-center sm:px-9 sm:py-6 md:space-y-16 lg:space-y-24">
      <h1 className="text-xl font-semibold text-stone-900 md:text-2xl lg:text-3xl">
        The best pizza.
        <br />
        <span className="le line font-bold uppercase tracking-wide text-yellow-600 [text-shadow:1px_1px_1px_#a16207]">
          Straight out of the oven, straight to you.
        </span>
      </h1>

      {!name ? (
        <CreateUser />
      ) : (
        <div>
          <Button to="/menu" type="primary">
            Go to menu &rarr;
          </Button>
        </div>
      )}
    </div>
  );
}

export default Home;
