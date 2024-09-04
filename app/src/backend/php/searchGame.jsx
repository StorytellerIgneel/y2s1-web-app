import React, { useState, useEffect } from 'react'
import axios from 'axios';
import Swal from 'sweetalert2';

function SearchGame(){

    const [searchGame, setSearchGame] = useState("")
    useEffect(() => {

        if (searchGame){
            const url = "http://localhost/y2s1-web-app/app/src/backend/php/searchGame.php";

            axios.post(url, searchGame)
            .then((response) =>  {
                if (response.data.success) { 
                    console.log(response.data);
                    //navigate('/store');  // Navigate to '/store' if successful
                }
            }).catch(error => {console.log(error.message)})
        }
      }, [searchGame]);

  return (
    <div>
        <input type="text" placeholder="Search for a game..." onChange={(e) => setSearchGame(e.target.value)}/>
    </div>
  )
}

export default SearchGame