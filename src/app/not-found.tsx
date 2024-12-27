import { JSX } from 'react';
import { Container, Typography, Button } from '@mui/material';
import { useRouter } from 'next/router';

export default function NotFoundPage(): JSX.Element {
    const router = useRouter();

    const handleGoBack = () => {
        router.back();
    };

    return (
        <Container style={{ textAlign: 'center', marginTop: '50px' }}>
            <Typography variant="h1" component="h1" gutterBottom>
                404
            </Typography>
            <Typography variant="h5" component="h2" gutterBottom>
                Page Not Found
            </Typography>
            <Typography variant="body1" gutterBottom>
                The page you are looking for does not exist.
            </Typography>
            <Button variant="contained" color="primary" onClick={handleGoBack}>
                Go Back
            </Button>
        </Container>
    );
};