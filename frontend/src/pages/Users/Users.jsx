import React, { useState, useEffect } from 'react';
import { Skeleton } from '@mui/material';

import { UsersTable } from './ui';
import { getAllUsers } from '../../api';

export const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {

    getAllUsers()
      .then((apiUsers) => {
        setUsers(apiUsers);
      });
  }, []);

  const handleEditUser = (_user) => {
    // TODO: handle editing user
  };

  const handleDeleteUser = (_user) => {
    // TODO: handle deleting user
  };

  return (
    <>
      <h1>
        Users:
      </h1>

      {users.length
        ? (
          <UsersTable
            users={users}
            onEdit={handleEditUser}
            onDelete={handleDeleteUser}
          />
        ) : (
          <Skeleton
            height={200}
            variant="rectangular"
            animation="wave"
          />
      )}
    </>
  );
};
