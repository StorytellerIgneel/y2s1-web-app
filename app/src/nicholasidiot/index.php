<!DOCTYPE html>
<html>

<head>
    <title>GameNonStop | GNS</title>
    <link rel="stylesheet" href="style.css">
    <link href="https://fonts.googleapis.com/css2?family=Archivo+Black&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
        integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A=="
        crossorigin="anonymous" referrerpolicy="no-referrer" />
</head>

<body>
    <?php include("header.php"); ?>

    <section class="section1 home">
        <div class="home-text">
            <h1>Welcome to <span style="color: black;">Game</span><span style="color: #E81C24;">NonStop</span></h1>
            <p>"At <span style="color: red;">GNS</span>, we bring the gaming world to your fingertips. Explore our vast
                collection of the latest releases, timeless classics, and exclusive deals on your favorite games. Join
                our community of passionate gamers and elevate your gaming experience with <span
                    style="color: red;">GNS</span>!"</p>
            <button class="discover-button">Discover</button>
            <button class="play-button" onClick="document.getElementById('play').scrollIntoView();">
                <i class="fa-solid fa-play"></i> Play
            </button>
        </div>

        <div class="home-img">
            <img src="./images/guy-playing-pc.png">
        </div>
    </section>

    <section class="section2" id="play">
        <h1 class="autoShow">Playable Games</h1>
        <div class="cards-container">
            <div class="cards autoShow">
                <div class="face front">
                    <img src="./images/pac_man_official_pacman_video_game.jpg">
                    <h3>Pac-Man</h3>
                </div>
                <div class="face back">
                    <h3>Pac-Man</h3>
                    <p>"Pac-Man is a classic arcade game where you guide Pac-Man through mazes, eating pellets and
                        avoiding ghosts. Eat power pellets to turn the tables and chase the ghosts. Simple, addictive,
                        and timeless fun for all ages."</p>
                    <button class="card-button" onclick="window.location.href='https://pacman.live/play.html';">
                        <i class="fa-solid fa-circle-play"></i>Play
                    </button>
                </div>
            </div>
            <div class="cards autoShow">
                <div class="face front">
                    <img src="./images/flappy-birds.jpg">
                    <h3>Flappy Bird</h3>
                </div>
                <div class="face back">
                    <h3>Flappy Bird</h3>
                    <p>"Flappy Bird is a simple yet addictive game where you tap to navigate a bird through a series of
                        pipes. Timing and precision are key as you try to achieve the highest score. Easy to learn, hard
                        to master, and endlessly fun."</p>
                    <button class="card-button" onclick="window.location.href='https://flappybird.io/';">
                        <i class="fa-solid fa-circle-play"></i>Play
                    </button>
                </div>
            </div>
            <div class="cards autoShow">
                <div class="face front">
                    <img src="./images/wordle.jpg">
                    <h3>Wordle</h3>
                </div>
                <div class="face back">
                    <h3>Wordle</h3>
                    <p>"Wordle is a daily word puzzle game where you guess a five-letter word in six tries. Each guess
                        gives color-coded feedback to help you get closer to the correct word. Fun, challenging, and
                        perfect for word enthusiasts."</p>
                    <button class="card-button" onclick="window.location.href='https://wordly.org/';">
                        <i class="fa-solid fa-circle-play"></i>Play
                    </button>
                </div>
            </div>
        </div>
    </section>
    <section class="section3" id="About Us">
        <div class="game-video">
            <video autoplay loop src="videos/gamevid.mp4">
        </div>
        <div class="distribution-content">
            <h2 class="distribution-title autoShow">We are the Best Game Distributors for all Gamers.</h2>
            <ul class="distribution-list">
                <li class="distribution-item">
                    <i class="fa-solid fa-gamepad autoShow"></i>
                    <div class="autoShow">
                        <div class="distribution-item-title">Game Collection Overview</div>
                        <div class="distribution-item-description">Browse our extensive collection of video games,
                            ranging from the latest releases to timeless classics. Whether you’re into action-packed
                            adventures or relaxing simulations, we have something for every gamer.</div>
                    </div>
                </li>
                <li class="distribution-item">
                    <i class="fa-solid fa-gamepad autoShow"></i>
                    <div class="autoShow">
                        <div class="distribution-item-title">Exclusive Console Deals</div>
                        <div class="distribution-item-description">Discover unbeatable prices on the latest gaming
                            consoles. From the newest PlayStation and Xbox models to classic Nintendo systems, get your
                            hands on the best deals available.</div>
                    </div>
                </li>
                <li class="distribution-item">
                    <i class="fa-solid fa-gamepad autoShow"></i>
                    <div class="autoShow">
                        <div class="distribution-item-title">Latest Game Releases</div>
                        <div class="distribution-item-description">Stay ahead of the curve with our selection of the
                            latest game releases. Whether you're into intense RPGs, fast-paced shooters, or intricate
                            strategy games, find the newest titles ready for download.</div>
                    </div>
                </li>
                <li class="distribution-item">
                    <i class="fa-solid fa-gamepad autoShow"></i>
                    <div class="autoShow">
                        <div class="distribution-item-title">Wholesale Game Distribution</div>
                        <div class="distribution-item-description">Looking to stock up on games? Our wholesale section
                            offers incredible discounts on bulk purchases, perfect for retailers and avid collectors
                            alike.</div>
                    </div>
                </li>
            </ul>
            <button class="play-button autoShow">Discover</button>
        </div>
    </section>

    <section class="section4">
        <?php include("ratingCarousel.php") ?>
    </section>

    <?php include("footer.php"); ?>
</body>

</html>