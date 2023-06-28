import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Outlet, Link } from "react-router-dom";

const FeeList: React.FC = () => {
  const [data, setData] =  useState<any[]>([]);
  const [filteredData, setFilteredData] =  useState<any[]>([]);
  const [sortConfig, setSortConfig] = useState({ key: '', direction: '' });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://b925d043-66e7-442f-87ec-4863e6832977.mock.pstmn.io/fee-list');
        setData(response.data);
        console.log(response.data)
        setFilteredData(response.data);
      } catch (error) {
        console.error('Error fetching fee list:', error);
      }
    };

    fetchData();
  }, []);

  const handleSort = (key: string) => {
    let direction = 'asc';

    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }

    setSortConfig({ key, direction });
    sortData(key, direction);
  };

  const sortData = (key: string, direction: string) => {
    const sortedData = [...filteredData].sort((a, b) => {
      if (a[key] < b[key]) {
        return direction === 'asc' ? -1 : 1;
      }
      if (a[key] > b[key]) {
        return direction === 'asc' ? 1 : -1;
      }
      return 0;
    });

    setFilteredData(sortedData);
  };

  const handleFilter = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value.toLowerCase();
    const filteredResult = data.filter(
      (item) =>
        item.feeStructureName.toLowerCase().includes(inputValue) ||
        item.course.toLowerCase().includes(inputValue)     );

    setFilteredData(filteredResult);
  };

  return (
    <div>
      <h1>Fee List</h1>
      <input type="text" placeholder="Search..." onChange={handleFilter} />

      <table style={{ borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th style={{ border: '1px solid black', padding: '8px' }} onClick={() => handleSort('name')}>
              Fee Structure Name
              {sortConfig.key === 'name' && (sortConfig.direction === 'asc' ? ' 🔼' : ' 🔽')}
            </th>
            <th style={{ border: '1px solid black', padding: '8px' }} onClick={() => handleSort('frequency')}>
              Frequency
              {sortConfig.key === 'frequency' && (sortConfig.direction === 'asc' ? ' 🔼' : ' 🔽')}
            </th>
            <th style={{ border: '1px solid black', padding: '8px' }} onClick={() => handleSort('installment')}>
              Installment
              {sortConfig.key === 'installment' && (sortConfig.direction === 'asc' ? ' 🔼' : ' 🔽')}
            </th>
            <th style={{ border: '1px solid black', padding: '8px' }} onClick={() => handleSort('amount')}>
              Amount
              {sortConfig.key === 'amount' && (sortConfig.direction === 'asc' ? ' 🔼' : ' 🔽')}
            </th>
            <th style={{ border: '1px solid black', padding: '8px' }} onClick={() => handleSort('registerFee')}>
              Register Fee
              {sortConfig.key === 'registerFee' && (sortConfig.direction === 'asc' ? ' 🔼' : ' 🔽')}
            </th>
            <th style={{ border: '1px solid black', padding: '8px' }} onClick={() => handleSort('course')}>
              Course
              {sortConfig.key === 'course' && (sortConfig.direction === 'asc' ? ' 🔼' : ' 🔽')}
            </th>
            <th style={{ border: '1px solid black', padding: '8px' }} onClick={() => handleSort('studentCount')}>
              Student Count
              {sortConfig.key === 'studentCount' && (sortConfig.direction === 'asc' ? ' 🔼' : ' 🔽')}
            </th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((row, index) => (
            <tr key={index}>
              <td style={{ border: '1px solid black', padding: '8px' }}>{row.feeStructureName}</td>
              <td style={{ border: '1px solid black', padding: '8px' }}>{row.frequency}</td>
              <td style={{ border: '1px solid black', padding: '8px' }}>{row.installment}</td>
              <td style={{ border: '1px solid black', padding: '8px' }}>{row.amount}</td>
              <td style={{ border: '1px solid black', padding: '8px' }}>{row.registerFee}</td>
              <td style={{ border: '1px solid black', padding: '8px' }}>{row.course}</td>
              <td style={{ border: '1px solid black', padding: '8px' }}>{row.studentCount}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <li>
            <Link to="/add">Add New</Link>
          </li>
    </div>
  );
};

export default FeeList;
