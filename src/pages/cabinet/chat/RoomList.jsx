import { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';

import { getMyRooms } from 'store/asyncActions/getMessageAsync';




const RoomList = (props) => {

  const { uid, currentRoomId } = props;

  const [rooms, setRooms] = useState();



  useEffect(() => {
    getMyRooms(uid, setRooms)
  }, []);



  return (
    <div>

      {rooms && rooms.map(room => (
        <div key={room.id} className={`chat-rooms ${currentRoomId === room.id ? 'active' : ''} `}>
          <Link to={`/cabinet/chat/${room.link}`} >
            {room.name}
          </Link>
        </div>
      ))}
    </div>
  )
}



export default RoomList;