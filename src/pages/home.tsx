import {Grid} from "@mui/material";
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import Header from "../Components/Home/Header";
import Total from "../Components/Home/Total";
import MoneyCard from "../Components/Home/MoneyCard";

const Home = (): JSX.Element => {
    return (
        <Grid container p={2}>
            <Header/>
            <Grid container justifyContent={'center'}>
            <Total/>
            </Grid>
            <Grid container justifyContent={'space-around'}>
            <MoneyCard backgroundColor={'primary.dark'} title={'هزینه ها'} icon={<TrendingUpIcon/>} type={'income'}/>
            <MoneyCard backgroundColor={'primary.dark'} title={'خرج ها'} icon={<TrendingDownIcon/>} type={'expense'}/>
            </Grid>
        </Grid>
    )
}

export default Home