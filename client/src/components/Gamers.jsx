import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { Link } from 'react-router-dom';
import '../css/GamerStyles.css';

const Task = ({ users }) => {
  const { search } = useContext(AppContext);

  const filteredGamers = users?.filter((users) => {
    return users.user_name.toLowerCase().includes(search.toLowerCase());
  });
  return (
    <>
      {filteredGamers.map((users) => (
        <div key={users?._id}>
          <Link to={`/gamersprofile/${users?._id}`} className="gamerbutton">
            <img
              src={
                users?.avatar
                  ? users?.avatar
                  : 'https://files.willkennedy.dev/wyncode/wyncode.png'
              }
              alt="user"
              className="gamerPic"
            />
            <div>
              {users?.user_name}
              <div>
                {users?.first_name} {users?.last_name}
              </div>
            </div>
          </Link>
        </div>
      ))}
    </>
  );
};

export default Task;
