import React from "react";

import { ScrollToTop } from "./dumb-components";
import { PrivateRoute } from "./components";
import { ThemeProvider } from "@material-ui/styles";
import { SharedSnackbarProvider } from "./contexts/Snackbar";
import { Route, Switch, BrowserRouter } from "react-router-dom";

import theme from "./theme";

import routes from "./routes";

function App(appProps) {
  return (
    <SharedSnackbarProvider>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Switch>
            {routes.map(({ path, isProtected, exact, component: Component, ...rest }) =>
              isProtected ? (
                <PrivateRoute
                  key={path}
                  exact={exact}
                  containerProps={appProps}
                  component={Component}
                  {...rest}
                />
              ) : (
                <Route
                  key={path}
                  path={path}
                  exact={exact}
                  render={(props) => (
                    <ScrollToTop>
                      <Component {...props} {...rest} {...appProps} />
                    </ScrollToTop>
                  )}
                />
              )
            )}
            <Route
              render={(props) => (
                <ScrollToTop>
                  <h1>404</h1>
                  {/* <Error404 {...props} /> */}
                </ScrollToTop>
              )}
            />
          </Switch>
        </BrowserRouter>
      </ThemeProvider>
    </SharedSnackbarProvider>
  );
}

export default App;
