import { getMenu } from '../../services/apiRestaurant.js';
import { useLoaderData } from 'react-router-dom';
import MenuItem from './MenuItem.jsx';

function Menu() {
  const menu = useLoaderData();
  console.log(menu);
  return (
    <ul className="divide-y divide-stone-200">
      {menu.map((pizza) => (
        <MenuItem pizza={pizza} key={pizza.id} />
      ))}
    </ul>
  );
}

async function loader() {
  return await getMenu();
}

export { loader };
export default Menu;
