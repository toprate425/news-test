import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

export default styled(Box) (
    () => {
    return {
        margin: 0,
        padding: 0,
        overflow: 'hidden'
    }
});