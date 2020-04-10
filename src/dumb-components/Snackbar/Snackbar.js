import React from "react";
import { IconButton, Snackbar, SnackbarContent } from "@material-ui/core";
import { Close } from "@material-ui/icons";
import { SharedSnackbarConsumer } from "../../contexts/Snackbar";
import { makeStyles } from "@material-ui/core/styles";
import { amber, green } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  success: {
    backgroundColor: green[600],
  },
  error: {
    backgroundColor: theme.palette.error.dark,
  },
  info: {
    backgroundColor: theme.palette.primary.main,
  },
  warning: {
    backgroundColor: amber[700],
  },
  message: {
    display: "flex",
    alignItems: "center",
  },
}));

const SharedSnackbar = () => {
  const classes = useStyles();
  return (
    <SharedSnackbarConsumer>
      {({ snackbarIsOpen, message, closeSnackbar, varient }) => {
        return (
          <Snackbar
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            // style={{}}
            open={snackbarIsOpen}
            autoHideDuration={3000}
            onClose={closeSnackbar}
          >
            <SnackbarContent
              className={varient ? classes[varient] : classes["info"]}
              aria-describedby="client-snackbar"
              message={
                <span id="client-snackbar" className={classes.message}>
                  {message}
                </span>
              }
              action={[
                <IconButton key="close" color="inherit" onClick={closeSnackbar}>
                  <Close />
                </IconButton>,
              ]}
            />
          </Snackbar>
        );
      }}
    </SharedSnackbarConsumer>
  );
};

export default SharedSnackbar;
