import React from 'react';
import TopTwentyDetail from './components/TopTwentyDetail'

const TopTwentySelector = ({songs}) => {
    const TopTwentyDetail = songs.map((song) => {
        return(
            <TopTwentyDetails song = {song} key={feed.entry.im:name}/>
        );
    });

    return (
        <>
            <ul>
                {TopTwentyDetails}
            </ul>
        </>
    )
}

export default TopTwentyContainer