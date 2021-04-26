import Skeleton from "@material-ui/lab/Skeleton";

const BookLoader = () => {
   return (
      <div className="skeleton">
         <Skeleton variant="rect" width={280} height={380} />
         <div className="skeleton__content">
            <Skeleton variant="text" height={140} />
            <div className="skeleton__bottom">
               <Skeleton variant="text" width={100} height={60} />
               <Skeleton variant="text" width={100} height={60} />
            </div>
         </div>
      </div>
   );
};

export default BookLoader;
