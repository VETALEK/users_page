import React from 'react';

import { UserRow } from './UserRow';

export const UserRowsList = (props) => {
  const {
    users = [],
  } = props;

  return (
    <>
      {users.map((user) => (
        <React.Fragment key={user.id}>
          <UserRow
            user={user}
          />
        </React.Fragment>
      ))}
    </>
  );
};
