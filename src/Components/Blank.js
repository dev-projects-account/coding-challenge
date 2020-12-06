import useStylesSiteDetails from "../Styles/SiteDetailsStyles";
import Card from "@material-ui/core/Card";

function Blank() {
    const classes = useStylesSiteDetails();
    return (
        <Card className={classes.blank}>
            <span></span>
        </Card>
    );
}

export default Blank;
