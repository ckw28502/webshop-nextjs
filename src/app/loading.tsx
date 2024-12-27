import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { JSX } from 'react';

export default function LoadingPage(): JSX.Element {
    return (
        <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            minHeight="100vh"
        >
            <CircularProgress />
        </Box>
    );
};