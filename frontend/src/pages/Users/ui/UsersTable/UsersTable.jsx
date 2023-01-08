import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@mui/material';

import { UserRowsList } from './UserRowsList';

export const UsersTable = (props) => {
  const {
    onEdit = (_user, ..._eventArgs) => {},
    onDelete = (_user, ..._eventArgs) => {},
    users = [],
  } = props;

  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Username</TableCell>

          <TableCell>Age</TableCell>
        </TableRow>
      </TableHead>

      <TableBody>
        <UserRowsList
          users={users}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      </TableBody>
    </Table>
  );
};
