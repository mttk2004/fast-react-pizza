/**
 *  Project: fast-react-pizza
 *  File: Username.jsx
 *  Created: 9:42 SA, 21/08/2024
 *  Author: Mai Tran Tuan Kiet
 *  "Family is where life begins and love never ends."
 */
import { useSelector } from 'react-redux';

function Username() {
  const name = useSelector((store) => store.user.name);
  console.log(name);

  return <p className="text-sm">{name}</p>;
}

export default Username;
