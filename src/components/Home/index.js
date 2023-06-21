import {useState} from 'react'
import {AiOutlineSearch} from 'react-icons/ai'

import SongPlayList from '../SongPlayList'

import './index.css'

const Home = props => {
  const {TrackList} = props
  const [search, setSearch] = useState()
  const [songList, setSongList] = useState(TrackList)

  const HandleSearch = e => {
    if (e.key === 'Enter') {
      const updatedList = songList.filter(eachSong =>
        eachSong.name.toLowerCase().includes(e.target.value.toLowerCase()),
      )
      setSongList(updatedList)
      console.log(updatedList)
    } else {
      setSongList(TrackList)
    }
  }

  const DeleteList = songId => {
    const TracksList = songList.filter(eachSong => eachSong.id !== songId)
    setSongList(TracksList)
  }

  return (
    <div className="container">
      <section className="top">
        <h1>Ed Sheeran</h1>
        <br />
        <p>Singer</p>
      </section>
      <section className="bottom">
        <div className="song-title-container">
          <div className="title-container">
            <h1>Songs Playlist</h1>
            <div className="searchContainer">
              <input
                type="Search"
                value={search}
                onChange={e => setSearch(e.target.value)}
                onKeyDown={e => HandleSearch(e)}
                placeholder="Search"
              />
              <AiOutlineSearch className="search-icon" />
            </div>
          </div>
          <ul className="ordered-list-container">
            {songList.length !== 0 ? (
              songList.map(eachSong => (
                <SongPlayList
                  Track={eachSong}
                  key={eachSong.id}
                  DeleteList={DeleteList}
                />
              ))
            ) : (
              <div className="no-songs-container">
                <p>No Songs Found</p>
              </div>
            )}
          </ul>
        </div>
      </section>
    </div>
  )
}

export default Home
