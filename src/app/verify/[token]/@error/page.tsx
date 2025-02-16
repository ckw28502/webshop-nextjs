import { Box, Button, Typography } from "@mui/material";
import { useTranslations } from "next-intl";

const VerifyErrorPage = () => {
    const t = useTranslations("VerifyPage.Error");
    return (
        <Box>
            <Box
                display="flex"
                justifyContent="center"
            >
                <Typography variant="h3" color="error">
                    {t("message")}
                </Typography>
            </Box>
            <Box
                display="flex"
                justifyContent="center"
                mt={3}
            >
                <Button>{t("link")}</Button>
            </Box>
        </Box>
    );
};

export default VerifyErrorPage;