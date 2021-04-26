import { useState } from "react";

import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import ScheduleIcon from "@material-ui/icons/Schedule";

import { EditModalWindow, DeleteModalWindow, MiniMenu } from "./index";

const Card = ({ imageUrl, id, title, price, date, onEditBook, onDeleteBook }) => {
   const [isOpenEditModal, setIsOpenEditModal] = useState(false);
   const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);

   const handleEditModal = () => {
      setIsOpenEditModal(!isOpenEditModal);
   };

   const handleDeleteModal = () => {
      setIsOpenDeleteModal(!isOpenDeleteModal);
   };

   const onRemoveBook = () => {
      setIsOpenDeleteModal(!isOpenDeleteModal);
      onDeleteBook(id);
   };

   return (
      <div className="card">
         <div className="card__img">
            <img className="card__img" src={imageUrl} alt="Book" />
            <MiniMenu
               handleEditModal={handleEditModal}
               handleDeleteModal={handleDeleteModal}
            />
         </div>
         <h2 className="card__title">{title}</h2>
         <div className="card__content">
            <div className="card__bottom">
               <div className="card__bottom-price">
                  <AttachMoneyIcon />
                  <span>{price} grn.</span>
               </div>
               <div className="card__bottom-date">
                  <ScheduleIcon />
                  <span>{date}</span>
               </div>
            </div>
         </div>
         <EditModalWindow
            isOpenModal={isOpenEditModal}
            handleEditModal={handleEditModal}
            onEditBook={onEditBook}
            imageUrl={imageUrl}
            id={id}
            title={title}
            price={price}
            date={date}
         />
         <DeleteModalWindow
            isOpenDeleteModal={isOpenDeleteModal}
            handleDeleteModal={handleDeleteModal}
            onRemoveBook={onRemoveBook}
         />
      </div>
   );
};

export default Card;
