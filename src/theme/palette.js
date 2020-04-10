import { colors } from '@material-ui/core';

const white = '#FFFFFF';
const black = '#3e3e3e';
 
export default {
    black,
    white,
    primary: {
        contrastText: white,
        dark: '#6e4b90',
        main: '#7f52aa',
        light: '#8b63b2'
    },
    secondary: {
        contrastText: white,
        dark: '#ffae61',
        main: '#f9665a',
        light: '#eed275'
    },
    success: {
        contrastText: white,
        dark: colors.green[900],
        main: '#219e6c',
        light: colors.green[400]
    },
    info: {
        contrastText: white,
        dark: colors.blue[900],
        main: '#7f52aa',
        light: colors.blue[400]
    },
    warning: {
        contrastText: white,
        dark: colors.orange[900],
        main: '#b09056',
        light: colors.orange[400]
    },
    danger: {
        contrastText: white,
        dark: colors.orange[900],
        main: '#f2665b',
        light: colors.orange[400]
    },
    error: {
        contrastText: white,
        dark: colors.red[900],
        main: '#f9665a',
        light: '#ff0000'
    },
    text: {
        primary: '#3e3e3e',
        secondary: '#717171',
        link: colors.blue[600]
    },
    background: {
        default: '#F4F6F8',
        paper: white
    },
    icon: '#717171',
    divider: '#f0f0f0'
};
