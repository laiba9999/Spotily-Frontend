import React from 'react';
import {useState, useEffect} from 'react';
import Playlist from '../components/playlist/Playlist';
import RewindButton from '../components/playlist/RewindButton';
import FastForwardButton from '../components/playlist/FastForwardButton';
import SearchBar from '../components/playlist/SearchBar';


function PlaylistContainer(userID = 5) {

    const [playlists, setPlaylists] = useState([]);
    const [playlistIds, setPlaylistIds] = useState([])
    const [filteredPlaylistIds, setFilteredPlaylistIds] = useState([]);

    // useEffect(() => {
    //     fetch("http://localhost:8080/playlist", {
    //         method: "GET",
    //         headers: {
    //             "Content-Type": "application/json"
    //         },
    //     })
    //     .then(response => response.json())
    //     .then(data => setPlaylists(data.filter((p) => p.id === userID)))
    //     .then(fetch(`http://localhost:8080/playlist/${playlists[0].id}`, {
    //         method: "GET",
    //         headers: {
    //             "Content-Type": "application/json"
    //         },
    //     })
    //     .then(response => response.json()))
    //     .then(data => setCurrentPlaylistSongs(data))
        
    //     .then(console.log(playlists))
    //     .then(console.log(currentPlaylistSongs));
    // })

    useEffect(() => { 
        fetch("http://localhost:8080/playlist", {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
                },
            })
        .then(response => response.json())
        .then(data => {
            setPlaylists(data);
            let idArray = [];
            let idObject = {};
            data.forEach(song => (idObject[song.playlist] = 1))
            idArray = Object.keys(idObject)
            .map(key => (parseInt(key)));
            console.log(idArray)
            setPlaylistIds(idArray)
            setFilteredPlaylistIds(idArray);
        })

    }, []);

    // //display playlist at playlists[0]
    // const selectCurrentPlaylist = (playlists, playlistIds, playlistSelector) => {
        

    // }


    function fastForwardPlaylist() {

        const skippedPlaylist = filteredPlaylistIds.shift();
        filteredPlaylistIds.push(skippedPlaylist);

        setFilteredPlaylistIds(...filteredPlaylistIds);

    }

    function rewindPlaylist() {
        const lastPlaylist = filteredPlaylistIds.pop();
        filteredPlaylistIds.unshift(lastPlaylist);

        setFilteredPlaylistIds(...filteredPlaylistIds);
    }

    function searchForSong(event) {

        let searchTerm = event.target.value.toLowerCase();

        let playlistWithSong = {};

        playlists.forEach(song => {
            if (song.song_name.toLowerCase().includes(searchTerm) || song.artist.toLowerCase().includes(searchTerm)) {
                playlistWithSong[song.playlist] = 1;
            }
        })

        let currentFilteredPlaylistIds = [];
        
        playlistIds.forEach((playlist) => {
            if (playlistWithSong[playlist]) {
                currentFilteredPlaylistIds.push(playlist);
            }
        })

        setFilteredPlaylistIds(currentFilteredPlaylistIds);
        console.log(`Hi ${playlistIds}`);
        console.log(filteredPlaylistIds);

    }




    return (

        <div>
            <>
                {playlists.length > 0 ?
                    <div>
                        <SearchBar searchForSong = {searchForSong} />
                        <RewindButton fastForwardPlaylist={fastForwardPlaylist}/>
                        <FastForwardButton rewindPlaylist = {rewindPlaylist}/>
                        <Playlist playlists = {playlists} playlistIds = {filteredPlaylistIds}/>
                    </div>
                :
                <p>Loading...</p>}
            </>
        </div>
    );
}

export default PlaylistContainer

