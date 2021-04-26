import { makeStyles, TextField } from "@material-ui/core";
import { useField } from "formik";

const useStyles = makeStyles((theme) => ({
   textField: {
      width: "100%",
      marginTop: "16px",
   },
}));

const InputField = ({ name, ...otherProps }) => {
   const [field, meta] = useField(name);
   const error = Boolean(meta.error);

   const styles = useStyles();

   const configTextField = {
      className: styles.textField,
      ...field,
      ...otherProps,
      error,
      helperText: meta.error,
      variant: "outlined",
   };

   return (
      <>
         <TextField {...configTextField} />
      </>
   );
};

export default InputField;
