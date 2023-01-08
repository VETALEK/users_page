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

  return (
    <>
      <h1>
        Users:
      </h1>

      {users.length
        ? (
          <UsersTable
            users={users}
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
