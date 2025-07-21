import React, { useEffect, useState } from 'react';
import api from '../api/api';
import CategoryForm from '../components/Categoryform';

const AssetCategories = () => {
  const [categories, setCategories] = useState([]);
  const [editing, setEditing] = useState(null);

  const fetchData = async () => {
    const res = await api.get('/asset-categories');
    setCategories(res.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleDelete = async (id) => {
    await api.delete(`/asset-categories/${id}`);
    fetchData();
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Asset Categories</h2>
      <CategoryForm
        fetchData={fetchData}
        editing={editing}
        setEditing={setEditing}
      />
      <table border="1" cellPadding="10" style={{ marginTop: '1rem' }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Description</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((cat) => (
            <tr key={cat.id}>
              <td>{cat.id}</td>
              <td>{cat.name}</td>
              <td>{cat.description}</td>
              <td>{cat.status}</td>
              <td>
                <button onClick={() => setEditing(cat)}>Edit</button>
                <button onClick={() => handleDelete(cat.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AssetCategories;
