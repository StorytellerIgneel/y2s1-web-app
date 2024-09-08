import "../../css/rating-carousel-style.css";
import Helmet from "react-helmet";
import { useEffect } from "react";

function MainRatingSection() {
    useEffect(() => {
        // Ensure jQuery and OwlCarousel have loaded before initializing
        if (window.$ && window.$(".testimonials-container").owlCarousel) {
          window.$(".testimonials-container").owlCarousel({
            loop: true,
            autoplay: true,
            autoplayTimeout: 6000,
            margin: 10,
            nav: true,
            navText: [
              "<i class='fa-solid fa-arrow-left'></i>",
              "<i class='fa-solid fa-arrow-right'></i>",
            ],
            responsive: {
              0: {
                items: 1,
                nav: false,
              },
              600: {
                items: 1,
                nav: true,
              },
              768: {
                items: 2,
              },
            },
          });
        }
      }, []);

  return (
    <div>
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css2?family=Archivo+Black&display=swap"
          rel="stylesheet"
        />

        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
        />

        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css"
        />

        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.theme.default.min.css"
        />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charset="utf-8" />

        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.3/jquery.min.js"></script>

        <script src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js"></script>
      </Helmet>
      <div className="rating-carousel-body">
        <div className="testimonials-section">
          <header className="section-header autoShow">
            <h1>What Clients Say</h1>
          </header>

          <div className="owl-carousel owl-theme testimonials-container autoShow">
            <div className="item testimonial-card">
              <main className="test-card-body">
                <div className="quote">
                  <i className="fa fa-quote-left"></i>
                  <h2>Best Discounts</h2>
                </div>
                <p>
                  &#34;I&#39;ve been using this platform for all my gaming
                  purchases, and I can confidently say it&#39;s the best out
                  there. The selection is vast, covering everything from the
                  latest AAA titles to hidden indie gems. What I love most is
                  how user-friendly the interface is—finding and buying games is
                  a breeze. The customer service is top-notch, always quick to
                  respond and resolve any issues. Plus, the regular deals and
                  discounts make it so much more affordable to keep up with the
                  latest games. Whether you&#39;re a casual gamer or a pro like
                  me, this site has something for everyone.&#34;
                </p>
                <div className="ratings">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                </div>
              </main>
              <div className="profile">
                <div className="profile-image">
                  <img src="../../../images/rating-images/Profile_SarahMitchell.jpg" />
                </div>
                <div className="profile-desc">
                  <span>Sarah Mitchell</span>
                  <span>Professional eSports player</span>
                </div>
              </div>
            </div>

            <div className="item testimonial-card">
              <main className="test-card-body">
                <div className="quote">
                  <i className="fa fa-quote-left"></i>
                  <h2>Smooth Experience</h2>
                </div>
                <p>
                  &#34;As a game developer, I&#39;ve tried many platforms to
                  distribute my games, but this one stands out by a mile. The
                  ease of use, the visibility it provides, and the seamless
                  integration with other tools make it the perfect choice for
                  any developer looking to reach a wide audience. The platform
                  is designed with both developers and gamers in mind, creating
                  a smooth experience from start to finish. I&#39;ve received
                  incredible feedback from players who discovered my games here,
                  and sales have significantly increased since I started using
                  this site. I can&#39;t recommend it enough!&#34;
                </p>
                <div className="ratings">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                </div>
              </main>
              <div className="profile">
                <div className="profile-image">
                  <img src="../../../images/rating-images/Profile_KevinZhang.jpg" />
                </div>
                <div className="profile-desc">
                  <span>Kevin Zhang</span>
                  <span>Indie game developer</span>
                </div>
              </div>
            </div>

            <div className="item testimonial-card">
              <main className="test-card-body">
                <div className="quote">
                  <i className="fa fa-quote-left"></i>
                  <h2>Top Tier Platform!</h2>
                </div>
                <p>
                  &#34;In my years as a video game journalist, I’ve seen
                  countless platforms come and go, but this one is here to stay.
                  The variety of games available is impressive, and the site
                  makes it easy to find exactly what you&#39;re looking for,
                  whether it&#39;s the latest blockbuster or an obscure indie
                  title. What really sets it apart is the community—it feels
                  vibrant and active, with plenty of user reviews and
                  discussions that help guide your choices. I also appreciate
                  the security measures in place, ensuring that my purchases are
                  always safe and secure. It&#39;s a top-tier platform that
                  every gamer should be using.&#34;
                </p>
                <div className="ratings">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                </div>
              </main>
              <div className="profile">
                <div className="profile-image">
                  <img src="../../../images/rating-images/Profile_EmilyJohnson.jpg" />
                </div>
                <div className="profile-desc">
                  <span>Emily Johnson</span>
                  <span>Video game journalist</span>
                </div>
              </div>
            </div>

            <div className="item testimonial-card">
              <main className="test-card-body">
                <div className="quote">
                  <i className="fa fa-quote-left"></i>
                  <h2>Friendly Design</h2>
                </div>
                <p>
                  &#34;I spend hours every day gaming and streaming, so I need a
                  platform &#39;s reliable, fast, and has a great selection.
                  This site ticks all the boxes. The download speeds are
                  fantastic, and the games run smoothly without any hiccups.
                  I&#39;ve also found the prices to be very competitive,
                  especially with the frequent sales that offer deep discounts
                  on popular titles. The &#39;s layout is intuitive, making it
                  easy to manage my library and find new games to try out.
                  It&#39;s a &#39;s paradise, and I&#39;m thrilled to be a part
                  of this community&#34;
                </p>
                <div className="ratings">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                </div>
              </main>
              <div className="profile">
                <div className="profile-image">
                  <img src="../../../images/rating-images/Profile_LucasHernandez.jpg" />
                </div>
                <div className="profile-desc">
                  <span>Lucas Hernandez</span>
                  <span>Twitch streamer</span>
                </div>
              </div>
            </div>

            <div className="item testimonial-card">
              <main className="test-card-body">
                <div className="quote">
                  <i className="fa fa-quote-left"></i>
                  <h2>Smooth Transaction</h2>
                </div>
                <p>
                  &#34;This platform is a dream come true for someone like me
                  who loves gaming but also values efficiency and reliability.
                  The site&#39;s design is sleek and modern, with everything
                  organized perfectly so that I can find what I need in seconds.
                  The transaction process is smooth, and &#39;ve never had any
                  issues with payment or game delivery. I also appreciate the
                  regular updates and improvements—they&#39;re always adding new
                  features that make the experience even better. Whether I&#39;m
                  in the mood for a quick casual game or an intense RPG session,
                  this site has it all.&#34;
                </p>
                <div className="ratings">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                </div>
              </main>
              <div className="profile">
                <div className="profile-image">
                  <img src="../../../images/rating-images/Profile_PriyaKapoor.jpg" />
                </div>
                <div className="profile-desc">
                  <span>Priya Kapoor</span>
                  <span>Software engineer</span>
                </div>
              </div>
            </div>

            <div className="item testimonial-card">
              <main className="test-card-body">
                <div className="quote">
                  <i className="fa fa-quote-left"></i>
                  <h2>Recommended!</h2>
                </div>
                <p>
                  &#34;As a student, I&#39;m always looking for the best deals,
                  and this platform has not disappointed. The sales are
                  incredible, allowing me to build up my game library without
                  breaking the bank. Beyond that, the quality of the service is
                  outstanding. The site loads quickly, and the download speeds
                  are top-notch, which is crucial when you&#39;re eager to dive
                  into a new game. I also love how the platform is geared
                  towards gamers of all levels, with plenty of resources and
                  guides available. It&#39;s become my go-to site for all things
                  gaming, and I recommend it to all my friends.&#34;
                </p>
                <div className="ratings">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                </div>
              </main>
              <div className="profile">
                <div className="profile-image">
                  <img src="../../../images/rating-images/Profile_JakeLing.jpg" />
                </div>
                <div className="profile-desc">
                  <span>Jake Ling</span>
                  <span>College student</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainRatingSection;
