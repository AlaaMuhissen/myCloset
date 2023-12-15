import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { useAuth } from '../Login/AuthContext';
import TakePhoto from '../addClothes/TakePhoto';
export default function Dashboard() {
    const { user, loading } = useAuth();
    const[isClicked , setIsClicked] = useState(false);
    if (loading) {
      return <p>Loading...</p>;
    }

    const takePhoto = () =>{
        return <TakePhoto />
    }
  
    return (
      <div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            {user ? (
              <li><Link to="/dashboard">Dashboard</Link></li>
            ) : null}
          </ul>
        </nav>
  
        {/* Your components that use user information */}
        {user ? (
          <div>
            <p>Welcome, {user.email}!</p>
            <button onClick={()=>setIsClicked(true)}>Take Aphoto</button>
            {
                isClicked?<TakePhoto/> : <div>No</div>
            }
            {/* Other components that use user information */}
          </div>
        ) : (
          <p>Please sign in</p>
        )}
      </div>
    );
  };