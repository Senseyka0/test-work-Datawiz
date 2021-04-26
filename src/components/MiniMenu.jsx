import { useState } from "react";
import { IconButton, Menu, MenuItem } from "@material-ui/core";

import MoreVertIcon from "@material-ui/icons/MoreVert";
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";

const MiniMenu = ({ handleEditModal, handleDeleteModal }) => {
   const [anchorEl, setAnchorEl] = useState(false);
   const open = Boolean(anchorEl);

   const handleMenu = (e) => {
      setAnchorEl(e.currentTarget);
   };

   const onCloseMenu = () => {
      setAnchorEl(false);
   };

   const onEditClick = () => {
      handleEditModal();
      onCloseMenu();
   };
   const onDeleteClick = () => {
      handleDeleteModal();
      onCloseMenu();
   };

   return (
      <>
         <IconButton
            className="card__img-more"
            aria-label="more"
            aria-controls="long-menu"
            aria-haspopup="true"
            onClick={handleMenu}
         >
            <MoreVertIcon />
         </IconButton>
         <Menu
            anchorEl={anchorEl}
            keepMounted
            open={open}
            onClose={onCloseMenu}
            PaperProps={{
               style: {
                  height: 88,
                  width: 160,
                  marginLeft: 45,
                  marginTop: 10,
               },
            }}
         >
            <MenuItem className="card__img-item" onClick={onEditClick}>
               <EditOutlinedIcon /> <span>Edit</span>
            </MenuItem>
            <MenuItem className="card__img-item" onClick={onDeleteClick}>
               <DeleteOutlineIcon /> <span>Delete</span>
            </MenuItem>
         </Menu>
      </>
   );
};

export default MiniMenu;
