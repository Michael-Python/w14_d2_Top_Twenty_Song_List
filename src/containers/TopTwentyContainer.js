import React from 'react';
import TopTwentyDetail from '../components/TopTwentyDetail';
import TopTwentySelector from '../components/TopTwentySelector';

const TopTwentyContainer = () => {

    useEffect(() => {getSongs()}, [])

    const getSongs = () => {
        console.log("Getting songs...");
        fetch(`https://itunes.apple.com/gb/rss/topsongs/limit=20/json`)
        .then(res => res.json())
        .then(data => SetSongs(data))
        .then(() => setLoaded(true))
    }

    const [songs, setSongs] = useState({})
    const [loaded, setLoaded] = useState(false);

    return(
        <div className='top-twenty-container'>
            <Header title='Top 20 in the UK' />
            <TopTwentySelector songs={songs}  loaded={loaded}/>
        </div>


    )
    

}
export default TopTwentyContainer;