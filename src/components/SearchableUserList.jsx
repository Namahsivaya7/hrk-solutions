import React, { useState, useEffect, useMemo, useCallback } from 'react';

const SearchableUserList = () => {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [debouncedSearch, setDebouncedSearch] = useState('');


  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error('Failed to fetch users:', error);
      }
    };
    fetchUsers();
  }, []);

  const debounceSearch = useCallback((value) => {
    const timeout = setTimeout(() => {
      setDebouncedSearch(value);
    }, 300);

    return () => clearTimeout(timeout);
  }, []);

  
  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    debounceSearch(value);
  };

  const filteredUsers = useMemo(() => {
    return users.filter(user =>
      user.name.toLowerCase().includes(debouncedSearch.toLowerCase())
    );
  }, [users, debouncedSearch]);

  return (
    <div style={{ maxWidth: 400, margin: '0 auto', padding: '1rem' }}>
      <h2>User List</h2>
      <input
        type="text"
        placeholder="Search by name..."
        value={searchTerm}
        onChange={handleSearchChange}
        style={{ width: '100%', padding: '8px', marginBottom: '10px' }}
      />
      <ul>
        {filteredUsers.length > 0 ? (
          filteredUsers.map(user => (
            <ul key={user.id}>{user.id}) {user.name}</ul>
          ))
        ) : (
          <li>No matching users found.</li>
        )}
      </ul>
    </div>
  );
};

export default SearchableUserList;
