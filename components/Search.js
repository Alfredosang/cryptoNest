import { useState, useContext } from 'react';
import useSWR from 'swr';

const fetcher = (url) => fetch(url).then((res) => res.json());

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [query, setQuery] = useState('');

  const { data, error, isValidating } = useSWR(
    query ? `/api/crypto?slug=${query}` : null,
    fetcher
  );

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // prevent page reload
    setQuery(searchTerm); // trigger SWR with the search term
  };

  return (
    <div className="container mx-auto">
      <form onSubmit={handleSubmit}> {/* Correctly passing the function reference */}
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearchChange} // Correctly handle input change
          placeholder="Enter cryptocurrency slug"
        />
        <button type="submit">Search</button>
      </form>

      {/* Handle loading, errors, and data */}
      {isValidating && <p>Loading...</p>}
      {error && <p>Error occurred: {error.message}</p>}
      {data && <p>{JSON.stringify(data)}</p>}
    </div>
  );
};

export default Navbar;
