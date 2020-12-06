import { makeStyles } from "@material-ui/core/styles";

const useAppStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    primaryAppBar: {
        backgroundColor: "blue",
        justifyContent: "space-around",
    },
    white: {
        color: "black",
        backgroundColor: "white",
        height: "30px",
        width: "30px",
        fontSize: "20px",
        marginLeft: "20px",
    },
    menuButtonSeconary: {
        marginLeft: "10px",
    },
    toolbar: {
        textAlign: "center",
    },
}));

export default useAppStyles;
