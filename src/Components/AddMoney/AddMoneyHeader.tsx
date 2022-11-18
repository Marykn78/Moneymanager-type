import {Button, Grid, Typography} from "@mui/material";
import { withStyles } from "@mui/material/styles";
// import { color } from "@mui/system";
import {Link} from "react-router-dom";
import { text } from "stream/consumers";

const AddMoneyHeader = (): JSX.Element => {
    // const WhiteTextTypography = withStyles({
    //     root: {
    //       color: "#ffff"
    //     }
    //   })(Typography);
    return (
        <Grid container item xs={12} alignItems={'center'} bgcolor={'primary.light'} p={1} borderRadius={3}>
            <Grid item xs={6}>
                <Typography fontSize={12} color={'common.white'}>
                    اضافه کردن دخل و خرج ها
                </Typography>
            </Grid>
            <Grid display={'flex'} justifyContent={'flex-end'} item xs={6}>
                <Link to={'/'}>
                    <Button variant={'contained'} sx={{backgroundColor:'#1c54b2'}}>
                        <Typography fontSize={12}>
                            بازگشت به صفحه اصلی
                        </Typography>
                    </Button>
                </Link>
            </Grid>
        </Grid>
    )
}

export default AddMoneyHeader