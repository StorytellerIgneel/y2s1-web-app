<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://fonts.googleapis.com/css2?family=Archivo+Black&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
        integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A=="
        crossorigin="anonymous" referrerpolicy="no-referrer" />
    <style>
        body {
            font-family: "Archivo Black", sans-serif;
        }

        header {
            position: relative;
            width: 100%;
            padding: 30px 100px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            z-index: 10;
            background: white;
        }


        header ul {
            display: flex;
            justify-content: center;
            align-items: center;
        }

        header ul li {
            list-style: none;
            margin-left: 20px;
        }

        header ul li a {
            text-decoration: none;
            padding: 6px 15px;
            color: black;
            border-radius: 20px;
            transition: all .55s ease;
        }

        header ul li a:hover {
            background: #E81C24;
            color: white;
        }

        header ul li a.active {
            background: #E81C24;
            color: white;
        }
    </style>
</head>

<body>
    <header>
        <a href="index.php"><img src="images/GNS_Horizontal_Black.svg" alt="GNSlogo" width="250vw"></a>
        <nav>
            <ul>
                <li> <a href="#" class="">Shop</a></li>
                <li> <a href="#About Us">About us</a></li>
                <li> <a href="FAQ.php">FAQ</a></li>
                <li> <a href="./login page/login.html" class="active">Login <i class="fa-solid fa-user"></i></a></li>
            </ul>
        </nav>
    </header>
</body>

</html>