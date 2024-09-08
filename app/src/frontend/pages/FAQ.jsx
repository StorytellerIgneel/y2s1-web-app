import "../css/faq.css";

function FAQ() {
  return (
    <div className="faq-body">
      <h1>Frequently Asked Questions</h1>
      <section className="FAQ">
        <section className="accordion">
          <div className="tab">
            <input type="checkbox" name="accordion-1" id="cb1" checked />
            <label htmlFor="cb1" className="tab__label">
              What is GameNonStop?
            </label>
            <div className="tab__content">
              <p>
                GameNonStop is your ultimate online destination for gaming
                enthusiasts. Whether you&#39;re looking for the latest games or
                reviews, we&#39;ve got you covered. Our platform provides a
                range of content and features to enhance your gaming experience.
              </p>
            </div>
          </div>
          <div className="tab">
            <input type="checkbox" name="accordion-1" id="cb2" />
            <label htmlFor="cb2" className="tab__label">
              How do I create an account?
            </label>
            <div className="tab__content">
              <p>
                Creating an account on GameNonStop is simple! Just click on the
                &#34;Login&#34; button at the top right of the homepage, fill in
                your details, and you&#39;re ready to start your gaming journey
                with us. You can also sign up using your google accounts.
              </p>
            </div>
          </div>
          <div className="tab">
            <input type="checkbox" name="accordion-1" id="cb3" />
            <label htmlFor="cb3" className="tab__label">
              How can I stay updated with the latest gaming news?
            </label>
            <div className="tab__content">
              <p>
                To stay updated, you can follow us on social media for real-time
                updates, or check out our blog for the latest news and trends in
                gaming.
              </p>
            </div>
          </div>
          <div className="tab">
            <input type="checkbox" name="accordion-1" id="cb4" />
            <label htmlFor="cb4" className="tab__label">
              What should I do if I encounter a problem on the site?
            </label>
            <div className="tab__content">
              <p>
                If you experience any issues while using GameNonStop, please
                contact our support team by clicking on the &#34;Contact&#34;
                link at the bottom of the page. We&#39;re here to help and will
                respond to your inquiry as soon as possible.
              </p>
            </div>
          </div>
          <div className="tab">
            <input type="checkbox" name="accordion-1" id="cb5" />
            <label htmlFor="cb5" className="tab__label">
              What types of software do you offer?
            </label>
            <div className="tab__content">
              <p>
                We specialize in offering a wide range of video games, from the
                latest blockbuster titles to indie gems. Whether you&#39;re into
                action, adventure, strategy, or RPGs, we have something for
                every type of gamer.
              </p>
            </div>
          </div>
          <div className="tab">
            <input type="checkbox" name="accordion-1" id="cb6" />
            <label htmlFor="cb6" className="tab__label">
              How can I purchase a game?
            </label>
            <div className="tab__content">
              <p>
                Purchasing a game is simple. Browse our collection, select the
                game you want, and click on the purchase button. You&#39;ll be
                guided through a secure checkout process, and your game will be
                available for download immediately after your purchase is
                complete.
              </p>
            </div>
          </div>
          <div className="tab">
            <input type="checkbox" name="accordion-1" id="cb7" />
            <label htmlFor="cb7" className="tab__label">
              Can I download the games immediately after purchase?
            </label>
            <div className="tab__content">
              <p>
                Yes! Once your purchase is confirmed, you can download your game
                immediately from your account. Simply log in, go to your
                purchase history, and start your download.
              </p>
            </div>
          </div>
          <div className="tab">
            <input type="checkbox" name="accordion-1" id="cb8" />
            <label htmlFor="cb8" className="tab__label">
              Do you offer any discounts or promotions?
            </label>
            <div className="tab__content">
              <p>
                Absolutely! We regularly offer discounts, seasonal promotions,
                and special deals on a wide range of games. Keep an eye on our
                homepage and subscribe to our newsletter to stay updated on the
                latest offers.
              </p>
            </div>
          </div>
          <div className="tab">
            <input type="checkbox" name="accordion-1" id="cb9" />
            <label htmlFor="cb9" className="tab__label">
              Are the games you sell DRM-free?
            </label>
            <div className="tab__content">
              <p>
                Most of the games we offer are DRM-free, allowing you to
                download and play without any additional software or
                restrictions. However, some titles may require a third-party
                launcher or platform. Please check the product details before
                purchasing.
              </p>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
}

export default FAQ;
