import { makeStyles } from "@material-ui/core/styles";

const useStylesSiteList = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        overflow: "hidden",
    },
    paper: {
        padding: theme.spacing(2),
        marginTop: "30px",
        alignItems: "flex-start",
        wrap: "nowrap",
    },
    image: {
        width: 50,
        height: 128,
    },
    img: {
        margin: "auto",
        display: "block",
        maxWidth: "100%",
        maxHeight: "100%",
    },
    link: {
        textDecoration: "none",
    },
    appBarSecondary: {
        display: "flex",
        backgroundColor: "blue",
        color: "white",
        justifyContent: "center",
        paddingRight: "70px",
        borderTop: "1px solid black",
        borderRadius: 0,
    },
    secondaryAppBarText: {
        justifyContent: "center",
    },
    siteAvatar: {
        height: "60px",
        width: "60px",
        background: "cover",
    },
    red: {
        backgroundColor: "red",
    },
    cardContainer: {
        flexWrap: "no-wrap",
    },
    forward: {
        marginTop: "40px",
    },
    appBarTertiary: {
        backgroundColor: "white",
        display: "flex",
        justifyContent: "space-between",
        borderRadius: 0,
        height: "2px",
        padding: 0,
        paddingLeft: "20px",
    },
    addressText: {
        overflow: "hidden",
        noWrap: true,
    },
    mainContainer: {
        width: "calc(95% + 11px)",
    },
}));

export default useStylesSiteList;
