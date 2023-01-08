import React from 'react';
import { TableCell, TableRow } from '@mui/material';

import { getFullName } from './utils';

export const UserRow = (props) => {
  const {
    user,
  } = props;

  const {
    firstName,
    lastName,
    age,
  } = user;

  return (
    <TableRow>
      <TableCell>
        {getFullName(firstName, lastName)}
      </TableCell>

      <TableCell>
        {age}
      </TableCell>
    </TableRow>
  );
};
