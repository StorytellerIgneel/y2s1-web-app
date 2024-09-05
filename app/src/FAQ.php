<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        :root {
            --primary: #E81C24;
            --secondary: #ff5252;
            --background: white;
            --highlight: #ffda79;
            /* Theme color */
            --theme: var(--primary);
        }

        *,
        *::before,
        *::after {
            box-sizing: border-box;

        }

        body {
            display: flex;
            flex-wrap: wrap;
            margin: 0;
            color: var(--primary);
            background: url(./images/login-background.jpg);
            background-repeat: no-repeat;
            background-position: center;
            background-attachment: fixed;
            background-size: cover;

        }

        .FAQ {
            position: relative;
            display: flex;
            flex-wrap: wrap;
            flex-direction: column;
            width: 100%;
            height: auto;
            padding: 10vh;
            padding-bottom: 15vh;
            place-content: center;
        }

        .FAQ h1 {
            font-size: 6vh;
            color: white;
            margin-bottom: 4vh;
            margin-top: 10vh;
        }

        /* Core styles/functionality */
        .tab input {
            position: absolute;
            opacity: 0;
            z-index: -1;
        }

        .tab__content {
            max-height: 0;
            backdrop-filter: blur(20px);
            overflow: hidden;
            transition: all 0.35s;
            color: #1c1c1c;
        }

        .tab input:checked~.tab__content {
            max-height: 10rem;
        }

        /* Visual styles */
        .accordion {
            color: var(--theme);
            border: 2px solid;
            border-radius: 0.5rem;
            overflow: hidden;
            display: absolute;
            place-content: center;
            height: auto;
            width: 30vw;
            place-items: start;
            gap: 1rem;
            margin-left: 8vw;
            position: relative;
        }

        .tab__label,
        .tab__close {
            display: flex;
            color: white;
            background: var(--theme);
            cursor: pointer;
        }

        .tab__label {
            justify-content: space-between;
            padding: 1rem;
        }

        .tab__label::after {
            content: "\276F";
            width: 1em;
            height: 1em;
            text-align: center;
            transform: rotate(90deg);
            transition: all 0.35s;
        }

        .tab input:checked+.tab__label::after {
            transform: rotate(270deg);
        }

        .tab__content p {
            margin: 0;
            padding: 1rem;
        }

        .tab__close {
            justify-content: flex-end;
            padding: 0.5rem 1rem;
            font-size: 0.75rem;
        }

        .accordion--radio {
            --theme: var(--secondary);
        }

        /* Arrow animation */
        .tab input:not(:checked)+.tab__label:hover::after {
            animation: bounce .5s infinite;
        }

        @keyframes bounce {
            25% {
                transform: rotate(90deg) translate(.25rem);
            }

            75% {
                transform: rotate(90deg) translate(-.25rem);
            }
        }
    </style>
</head>

<body>
    <?php include("header.php"); ?>
    <section class="FAQ">
        <h1>Frequently Asked Questions</h1>
        <section class="accordion">
            <div class="tab">
                <input type="checkbox" name="accordion-1" id="cb1" checked>
                <label for="cb1" class="tab__label">What is GameNonStop?</label>
                <div class="tab__content">
                    <p>GameNonStop is your ultimate online destination for gaming enthusiasts. Whether you're looking
                        for
                        the latest games or reviews, we’ve got you covered. Our platform provides a range of content and
                        features to enhance your gaming experience.</p>
                </div>
            </div>
            <div class="tab">
                <input type="checkbox" name="accordion-1" id="cb2">
                <label for="cb2" class="tab__label">How do I create an account?</label>
                <div class="tab__content">
                    <p>Creating an account on GameNonStop is simple! Just click on the "Login" button at the top right
                        of
                        the homepage, fill in your details, and you're ready to start your gaming journey with us. You
                        can
                        also sign up using your google accounts.
                    </p>
                </div>
            </div>
            <div class="tab">
                <input type="checkbox" name="accordion-1" id="cb3">
                <label for="cb3" class="tab__label">How can I stay updated with the latest gaming news?</label>
                <div class="tab__content">
                    <p>To stay updated, you can follow us on social media for real-time updates, or check out our blog
                        for
                        the latest news and trends in gaming.
                    </p>
                </div>
            </div>
            <div class="tab">
                <input type="checkbox" name="accordion-1" id="cb4">
                <label for="cb4" class="tab__label">What should I do if I encounter a problem on the site?</label>
                <div class="tab__content">
                    <p>If you experience any issues while using GameNonStop, please contact our support team by clicking
                        on
                        the "Contact" link at the bottom of the page. We’re here to help and will respond to your
                        inquiry as
                        soon as possible.
                    </p>
                </div>
            </div>
            <div class="tab">
                <input type="checkbox" name="accordion-1" id="cb5">
                <label for="cb5" class="tab__label">What types of software do you offer?</label>
                <div class="tab__content">
                    <p>We specialize in offering a wide range of video games, from the latest blockbuster titles to
                        indie gems. Whether you’re into action, adventure, strategy, or RPGs, we have something for
                        every type of gamer.
                    </p>
                </div>
            </div>
            <div class="tab">
                <input type="checkbox" name="accordion-1" id="cb6">
                <label for="cb6" class="tab__label">How can I purchase a game?</label>
                <div class="tab__content">
                    <p>Purchasing a game is simple. Browse our collection, select the game you want, and click on the
                        purchase button. You’ll be guided through a secure checkout process, and your game will be
                        available for download immediately after your purchase is complete.
                    </p>
                </div>
            </div>
            <div class="tab">
                <input type="checkbox" name="accordion-1" id="cb7">
                <label for="cb7" class="tab__label">Can I download the games immediately after purchase?</label>
                <div class="tab__content">
                    <p>Yes! Once your purchase is confirmed, you can download your game immediately from your account.
                        Simply log in, go to your purchase history, and start your download.
                    </p>
                </div>
            </div>
            <div class="tab">
                <input type="checkbox" name="accordion-1" id="cb8">
                <label for="cb8" class="tab__label">Do you offer any discounts or promotions?</label>
                <div class="tab__content">
                    <p>Absolutely! We regularly offer discounts, seasonal promotions, and special deals on a wide range
                        of games. Keep an eye on our homepage and subscribe to our newsletter to stay updated on the
                        latest offers.
                    </p>
                </div>
            </div>
            <div class="tab">
                <input type="checkbox" name="accordion-1" id="cb9">
                <label for="cb9" class="tab__label">Are the games you sell DRM-free?</label>
                <div class="tab__content">
                    <p>Most of the games we offer are DRM-free, allowing you to download and play without any additional
                        software or restrictions. However, some titles may require a third-party launcher or platform.
                        Please check the product details before purchasing.
                    </p>
                </div>
            </div>
        </section>
    </section>
    <?php include("footer.php"); ?>
</body>


</html>