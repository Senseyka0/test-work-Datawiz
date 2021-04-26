import { useState } from "react";
import { AppBar, Button, makeStyles, Toolbar, Typography } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";

import { AddBookModalWindow } from ".";

const useStyles = makeStyles({
   root: {
      backgroundColor: "#4f5b66",
   },
   logoName: {
      flex: 1,
   },
});

const Header = ({ onAddBook }) => {
   const [isOpenAddBookModal, setIsOpenAddBookModal] = useState(false);

   const handleAddBookModal = () => {
      setIsOpenAddBookModal(!isOpenAddBookModal);
   };

   const classes = useStyles();

   return (
      <AppBar position="fixed">
         <Toolbar className={classes.root}>
            <Typography className={classes.logoName} variant="h5">
               Books Store
            </Typography>
            <Button
               variant="text"
               color="inherit"
               className={classes.button}
               startIcon={<AddIcon />}
               onClick={handleAddBookModal}
            >
               Add new Book
            </Button>
         </Toolbar>
         <AddBookModalWindow
            isOpenModal={isOpenAddBookModal}
            handleAddBookModal={handleAddBookModal}
            onAddBook={onAddBook}
         />
      </AppBar>
   );
};

export default Header;
