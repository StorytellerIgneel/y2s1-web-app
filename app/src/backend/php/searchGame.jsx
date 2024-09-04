import React, { useState } from 'react'

function searchGame(){

    const [searchGame, setSearchGame] = useState("")
    useEffect(() => {

        if (searchGame){
            const url = "http://localhost/y2s1-web-app/app/src/backend/php/login.php";

            axios.post(url, searchGame)
            .then((response) =>  {
                console.log(response.data);
                if (response.data.success) { 
                    console.log(response);
                    navigate('/store');  // Navigate to '/store' if successful
                } else {
                    Swal.fire({
                    icon: 'error',
                    title: 'Login Error',
                    text: response.data.error
                    }); // Handle the failure case if needed
                }
            }).catch(error => {console.log(error.message)})
        }
      }, [searchGame]);

  return (
    <div>
        <input type="text" placeholder="Search for a game..." onChange={(e) => setEmail(e.target.value)}/>
    </div>
  )
}

export default searchGame