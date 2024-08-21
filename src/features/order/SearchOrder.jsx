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
    <div>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Search order..."
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="placeholder:stone-900 h-6 w-32 rounded bg-yellow-100 px-3 py-3"
        />
      </form>
    </div>
  );
}

export default SearchOrder;
