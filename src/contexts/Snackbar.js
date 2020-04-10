import React, { useContext, useState } from "react";
import { Snackbar } from "../dumb-components";

const SharedSnackbarContext = React.createContext();

// export class SharedSnackbarProvider extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       isOpen: false,
//       message: "",
//       varient: "info",
//     };
//   }

//   openSnackbar = (message, varient) => {
//     this.setState({
//       message,
//       isOpen: true,
//       varient: varient || "info",
//     });
//   };

//   closeSnackbar = () => {
//     this.setState({
//       message: "",
//       isOpen: false,
//       varient: "info",
//     });
//   };

//   render() {
//     const { children } = this.props;

//     return (
//       <SharedSnackbarContext.Provider
//         value={{
//           openSnackbar: this.openSnackbar,
//           closeSnackbar: this.closeSnackbar,
//           snackbarIsOpen: this.state.isOpen,
//           message: this.state.message,
//           varient: this.state.varient,
//         }}
//       >
//         <Snackbar />
//         {children}
//       </SharedSnackbarContext.Provider>
//     );
//   }
// }

export const SharedSnackbarProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [content, setContent] = useState({
    varient: "",
    message: "",
  });

  function openSnackbar(message, varient) {
    setContent({
      message,
      varient,
    });
    setIsOpen(true);
  }

  function closeSnackbar() {
    setIsOpen(false);
  }

  return (
    <SharedSnackbarContext.Provider
      value={{
        openSnackbar: openSnackbar,
        closeSnackbar: closeSnackbar,
        snackbarIsOpen: isOpen,
        message: content.message,
        varient: content.varient,
      }}
    >
      <Snackbar />
      {children}
    </SharedSnackbarContext.Provider>
  );
};


export const SharedSnackbarConsumer = SharedSnackbarContext.Consumer;

export function useSnackbar() {
  return useContext(SharedSnackbarContext);
}

export default SharedSnackbarContext;
