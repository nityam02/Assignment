import React, { useEffect } from 'react';
import { LoginForm } from '../../components';
import { useSnackbar } from '../../contexts/Snackbar';

export default function Home() {

    const Snackbar = useSnackbar();

    useEffect(() => {
        Snackbar.openSnackbar("Something went right!", "success");
    }, []);

    return (
        <>
            <LoginForm />
        </>
    )
}
