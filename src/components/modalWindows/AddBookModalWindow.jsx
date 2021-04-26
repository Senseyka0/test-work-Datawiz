import { useState } from "react";
import { Button, makeStyles, Modal } from "@material-ui/core";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import { parse, isDate } from "date-fns";

import AddIcon from "@material-ui/icons/Add";

import { InputField } from "../index";

function getModalStyle() {
   const top = 50;
   const left = 50;

   return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
   };
}

const useStyles = makeStyles((theme) => ({
   paper: {
      position: "absolute",
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: "1px solid #a7adba",
      borderRadius: "10px",
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
      outline: "none",
   },
   saveButton: {
      backgroundColor: "#4a91f2",
      color: "#fff",
      marginTop: 24,
      marginRight: 20,
      "&:hover": {
         backgroundColor: "#3385c6",
      },
   },
   cancelButton: {
      backgroundColor: "#d62d20",
      color: "#fff",
      marginTop: 24,
      "&:hover": {
         backgroundColor: "#cc2a36",
      },
   },
}));

function parseDateString(value, originalValue) {
   const parsedDate = isDate(originalValue)
      ? originalValue
      : parse(originalValue, "yyyy-MM-dd", new Date());

   return parsedDate;
}

const AddBookModalWindow = ({ isOpenModal, handleAddBookModal, onAddBook }) => {
   const [modalStyle] = useState(getModalStyle);
   const today = new Date();

   const initialValues = {
      imageUrl:
         "https://images-production.bookshop.org/spree/images/attachments/13260653/original/9780374602451.jpg?1616123229",
      title: "Title of the book",
      price: 100,
      date: "2021-02-13",
   };

   const validationSchema = Yup.object({
      imageUrl: Yup.string().required("This field is required!"),
      title: Yup.string().required("This field is required!"),
      price: Yup.number()
         .typeError("This field must be a number")
         .required("This field is required!"),
      date: Yup.date()
         .transform(parseDateString)
         .typeError("You entered the wrong date format!")
         .max(today, "You entered a date that does not correspond to reality!")
         .required("This field is required!"),
   });

   const onSubmit = (values) => {
      onAddBook(values);
      handleAddBookModal();
   };
   const onReset = () => {
      handleAddBookModal();
   };

   const styles = useStyles();

   return (
      <Modal open={isOpenModal} onClose={handleAddBookModal}>
         <div style={modalStyle} className={styles.paper}>
            <Formik
               initialValues={initialValues}
               validationSchema={validationSchema}
               onSubmit={onSubmit}
            >
               {(formik) => (
                  <Form autoComplete="off">
                     <InputField
                        name="imageUrl"
                        label="URL"
                        value={formik.values.imageUrl}
                        onChange={formik.handleChange}
                        required
                     />
                     <InputField
                        name="title"
                        label="Title of the book"
                        value={formik.values.title}
                        onChange={formik.handleChange}
                        required
                     />
                     <InputField
                        name="price"
                        label="Price of the book"
                        value={formik.values.price}
                        onChange={formik.handleChange}
                        required
                     />
                     <InputField
                        name="date"
                        label="Date (yyyy-MM-dd)"
                        value={formik.values.date}
                        onChange={formik.handleChange}
                        required
                     />

                     <Button
                        className={styles.saveButton}
                        disabled={!formik.isValid}
                        type="submit"
                        variant="contained"
                        startIcon={<AddIcon />}
                     >
                        Add Book
                     </Button>
                     <Button
                        className={styles.cancelButton}
                        variant="contained"
                        onClick={onReset}
                     >
                        Cancel
                     </Button>
                  </Form>
               )}
            </Formik>
         </div>
      </Modal>
   );
};

export default AddBookModalWindow;
