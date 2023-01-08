import React, { useState } from 'react';
import { ListItemIcon, ListItemText, Menu, MenuItem } from '@mui/material';
import { Build, Delete } from '@mui/icons-material';

export const ContextMenu = (props) => {
  const {
    onEdit: passedOnEdit = () => {},
    onDelete: passedOnDelete = () => {},
    render,
  } = props;

  const [anchorElement, setAnchorElement] = useState(null);
  const [anchorPosition, setAnchorPosition] = useState({
    top: 0,
    left: 0,
  });

  const isOpen = !!anchorElement;

  const handleOpen = (e) => {
    e.preventDefault();

    setAnchorPosition({
      top: e.clientY,
      left: e.clientX,
    });

    setAnchorElement(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorElement(null);
  };

  const handleEdit = (...args) => {
    handleClose();
    passedOnEdit(...args);
  };

  const handleDelete = (...args) => {
    handleClose();
    passedOnDelete(...args);
  };

  return (
    <>
      {render(handleOpen)}

      <Menu
        open={isOpen}
        anchorEl={anchorElement}
        anchorReference="anchorPosition"
        anchorPosition={anchorPosition}
        onClose={handleClose}
      >
        <MenuItem
          onClick={handleEdit}
        >
          <ListItemIcon>
            <Build fontSize="small" />
          </ListItemIcon>

          <ListItemText>Edit</ListItemText>
        </MenuItem>

        <MenuItem
          onClick={handleDelete}
        >
          <ListItemIcon>
            <Delete fontSize="small" />
          </ListItemIcon>

          <ListItemText>Delete</ListItemText>
        </MenuItem>
      </Menu>
    </>
  );
};
