import { useRouteError } from 'react-router-dom';
import LinkButton from './LinkButton.jsx';

function NotFound() {
  const { data, message } = useRouteError();

  return (
    <div className="p-4 sm:space-y-6 md:space-y-8 md:px-7.5pc md:py-6 lg:space-y-12 lg:px-10pc">
      <LinkButton to="/">&larr; Go home</LinkButton>

      <h1 className="mb-4 mt-10 text-balance text-center text-xl font-medium">
        Something went wrong 😢
      </h1>
      <p className="text-balance text-center">{data || message}</p>
    </div>
  );
}

export default NotFound;
