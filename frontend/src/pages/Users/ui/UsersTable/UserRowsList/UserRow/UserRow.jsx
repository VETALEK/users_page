import React from 'react';
import { TableCell, TableRow } from '@mui/material';

import { getFullName } from './utils';
import { ContextMenu } from '../../../../../../shared/ui';

export const UserRow = (props) => {
  const {
    user,
    onEdit,
    onDelete,
  } = props;

  const {
    firstName,
    lastName,
    age,
  } = user;

  return (
    <ContextMenu
      onEdit={onEdit}
      onDelete={onDelete}
      render={(handleContextClick) => (
        <TableRow
          onContextMenu={handleContextClick}
        >
          <TableCell>
            {getFullName(firstName, lastName)}
          </TableCell>
    
          <TableCell>
            {age}
          </TableCell>
        </TableRow>
      )}
    />
  );
};
