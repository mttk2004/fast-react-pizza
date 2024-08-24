/**
 *  Project: fast-react-pizza
 *  File: SearchOrder.jsx
 *  Created: 10:00 SA, 20/08/2024
 *  Author: Mai Tran Tuan Kiet
 *  "Family is where life begins and love never ends."
 */

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SearchOrder() {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    navigate(`/order/${query}`);
    setQuery('');
  }

  return (
    <div className="inline-flex h-10 -translate-y-0.5 items-center justify-center sm:-translate-y-1">
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Search order..."
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="h-full w-36 rounded-full bg-yellow-100 px-2 py-1.5 text-center placeholder:text-stone-500 focus:outline-none focus:ring focus:ring-yellow-600 focus:ring-opacity-20 focus:ring-offset-1 sm:w-64 md:w-72 lg:w-96"
        />
      </form>
    </div>
  );
}

export default SearchOrder;
