import { Button, Dialog, DialogActions, DialogTitle } from "@material-ui/core";

const DeleteModalWindow = ({ isOpenDeleteModal, handleDeleteModal, onRemoveBook }) => {
   return (
      <Dialog open={isOpenDeleteModal} onClose={handleDeleteModal}>
         <DialogTitle id="alert-dialog-title">
            Вы уверены что хотите удалить книгу?
         </DialogTitle>
         <DialogActions>
            <Button onClick={onRemoveBook} color="primary">
               Подтвердить
            </Button>
            <Button onClick={handleDeleteModal} color="primary" autoFocus>
               Отменить
            </Button>
         </DialogActions>
      </Dialog>
   );
};

export default DeleteModalWindow;
