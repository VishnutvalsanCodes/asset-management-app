import React, { useEffect, useState } from 'react';
import api from '../api/api';

const initialForm = {
  name: '',
  description: '',
  status: 'active',
};

const CategoryForm = ({ fetchData, editing, setEditing }) => {
  const [formData, setFormData] = useState(initialForm);

  useEffect(() => {
    if (editing) {
      setFormData(editing);
    }
  }, [editing]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editing) {
      await api.put(`/asset-categories/${editing.id}`, formData);
    } else {
      await api.post('/asset-categories', formData);
    }
    setFormData(initialForm);
    setEditing(null);
    fetchData();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>{editing ? 'Edit' : 'Add'} Category</h3>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <br />
      <textarea
        name="description"
        placeholder="Description"
        value={formData.description}
        onChange={handleChange}
      />
      <br />
      <select name="status" value={formData.status} onChange={handleChange}>
        <option value="active">Active</option>
        <option value="inactive">Inactive</option>
      </select>
      <br />
      <button type="submit">{editing ? 'Update' : 'Add'} Category</button>
    </form>
  );
};

export default CategoryForm;
