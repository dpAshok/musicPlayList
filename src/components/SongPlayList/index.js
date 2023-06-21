import {RiDeleteBin6Line} from 'react-icons/ri'

import './index.css'

const SongPlayList = props => {
  const {Track, DeleteList} = props
  const {imageUrl, name, genre, duration, id} = Track

  const HandleDelete = () => {
    DeleteList(id)
  }

  return (
    <li className="list-container">
      <div className="image-title-part">
        <img src={imageUrl} alt="track" />
        <div>
          <p>{name}</p>
          <p className="genre">{genre}</p>
        </div>
      </div>
      <div className="duration-container">
        <p>{duration}</p>
        <button type="button" data-testid="delete">
          <RiDeleteBin6Line size={25} onClick={HandleDelete} className="icon" />
        </button>
      </div>
    </li>
  )
}

export default SongPlayList
