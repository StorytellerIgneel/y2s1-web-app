import React, { useState, useEffect } from 'react'
import axios from 'axios';
import Swal from 'sweetalert2';

function SearchGame(){
    const [searchGame, setSearchGame] = useState("")

    useEffect(() => {

        if (searchGame.trim() !== ""){
            const url = "http://localhost/y2s1-web-app/app/src/backend/php/searchGame.php";
            const formData = new FormData();
            formData.append("searchGame", searchGame);  // Append the search value to the FormData object

            axios.post(url, formData)
            .then((response) =>  {
                console.log(response.data);
                // if (response.data.success) { 
                //     alert("successfully")
                //     //console.log(response.data);
                //     //navigate('/store');  // Navigate to '/store' if successful
                // }
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