import React from 'react';

import { UserRow } from './UserRow';

export const UserRowsList = (props) => {
  const {
    onEdit = (_user, ..._eventArgs) => {},
    onDelete = (_user, ..._eventArgs) => {},
    users = [],
  } = props;

  return (
    <>
      {users.map((user) => (
        <React.Fragment key={user.id}>
          <UserRow
            user={user}
            onEdit={(...args) => {
              onEdit(user, ...args);
            }}
            onDelete={(...args) => {
              onDelete(user, ...args);
            }}
          />
        </React.Fragment>
      ))}
    </>
  );
};
