import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
    palette: {
        primary: {
            main: "#1100ff",
        },
        background: {
            default: "#fff",
        },
    },
    typography: {
        overflow: "hidden",
        noWrap: true,
    },
    // muiGridSpacingXs2: {
    //     wrap: "nowrap",
    //     overflow: "hidden",
    //     width: "calc(100% + '0')",
    // },
});

export default theme;
