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
        />
      </TableBody>
    </Table>
  );
};
