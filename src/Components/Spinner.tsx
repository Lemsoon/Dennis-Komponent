import './Spinner.scss';

type Spinner = {
   color?: string;
   size?: number;
};

export const Spinner: React.FC<Spinner> = ({ color, size }) => {
   const spinnerStyle = {
      width: size,
      height: size,
      borderTopColor: color,
   };
   return (
      <>
         <div className="spinner" style={spinnerStyle}></div>
      </>
   );
};
