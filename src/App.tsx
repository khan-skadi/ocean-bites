import React from "react"
import classes from "App.module.css"
import classnames from "classnames"

// Assets
import hero from "assets/wallpapers/hero.png"
import ourStory from "assets/wallpapers/our-story.png"
import iceCream from "assets/wallpapers/ice-cream.png"
import contact from "assets/wallpapers/contact.png"
import quote from "assets/quote.svg"

const App = (): JSX.Element => (
  <div className={classes.appWrapper}>
    <nav>
      <div className={classes.navWrapper}>
        <p className={classes.navTitle}>Ocean Bites</p>
      </div>
    </nav>

    <div className={classes.heroWrapper}>
      <img src={hero} alt="" />
      <div className={classes.heroCtaWrapper}>
        <div className={classes.heroCta}>
          <p>where great food and great drinks meet</p>
        </div>
      </div>
    </div>

    <section className={classes.intersectionBlack}>
      <div className={classes.intersectionWrapper}>
        <div className={classes.intersectionTextWrapper}>
          <div>
            <p className={classes.intersectionTitle}>Our Story</p>
          </div>
          <div>
            <p className={classes.intersectionText}>
              We have been serving irresistible comfort food since 1985. Our mission is to keep you smiling with every
              bite.
            </p>
            <p className={classes.intersectionText}>Treat yourself to a feel-good meal today!</p>
          </div>
        </div>
      </div>
      <div className={classes.intersectionImageWrapper}>
        <div className={classes.ourStoryWrapper}>
          <img src={ourStory} alt="" />
        </div>
      </div>
    </section>

    <div className={classes.fillerBlack} />

    <section className={classes.intersectionOnTheMenu}>
      <div className={classes.intersectionWhite}>
        <div className={classes.menuTitleWrapper}>
          <p className={classes.menuTitle}>On the menu</p>
        </div>
      </div>

      <div className={classes.onTheMenuWrapper}>
        <div className={classes.menuHeroWrapper}>
          <div className={classes.menuHeroItem}>
            <div className={classes.menuHeroItemInner}>
              <p>Cold & Hot Subs</p>
            </div>
          </div>
          <div className={classes.menuHeroItem}>
            <div className={classes.menuHeroItemInner}>
              <p>Wraps</p>
            </div>
          </div>
          <div className={classes.menuHeroItem}>
            <div className={classes.menuHeroItemInner}>
              <p>Pizza</p>
            </div>
          </div>
        </div>

        <div className={classes.fillerWhite} />

        <div className={classes.menuHeroWrapper}>
          <div className={classes.secondaryMenuHeroItem}>
            <div className={classes.menuHeroItemInner}>
              <p>Burgers</p>
            </div>
          </div>
          <div className={classes.secondaryMenuHeroItem}>
            <div className={classes.menuHeroItemInner}>
              <p>Salad</p>
            </div>
          </div>
          <div className={classes.secondaryMenuHeroItem}>
            <div className={classes.menuHeroItemInner}>
              <p>Chicken Tenders</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className={classes.intersectionIceCream}>
      <div className={classes.fillerWhite}>
        <div className={classes.iceCreamTitleWrapper}>
          <p className={classes.iceCreamTitle}>We cook the food we love, we hope you love it too!</p>
        </div>
      </div>

      <div className={classes.iceCreamWrapper}>
        <div className={classes.iceCreamImageWrapper}>
          <img src={iceCream} alt="" />
        </div>
        <div className={classes.iceCreamDescriptionWrapper}>
          <div className={classes.iceCreamDescTitle}>
            <p>Ice Cream</p>
          </div>
          <div className={classes.iceCreamDescription}>
            <p>
              Ocean Bites is your place on the Ocean City Boardwalk for delicious Gelato, perfect to cool you down on a
              hot Summer’s day.
            </p>
            <p>It’s Italian for Ice Cream, and Native for Delicious!</p>
          </div>
          <div className={classes.iceCreamQuote}>
            <blockquote>
              Life is like an ice-cream cone,
              <br /> you have to lick it one day at a time.
            </blockquote>
            <small>Ocean Bites</small>
          </div>
        </div>
      </div>
    </section>

    <div className={classes.fillerBlackReviews}>
      <div className={classes.reviewsTitleWrapper}>
        <h1 className={classes.reviewsTitle}>Reviews</h1>
      </div>
    </div>

    <section className={classes.intersectionBlack}>
      <div className={classnames(classes.intersectionWrapper, classes.intersectionReviews)}>
        <div className={classes.reviewsWrapper}>
          <div className={classes.reviewItem}>
            <div className={classes.reviewItemImage}>
              <img src={quote} alt="" />
            </div>
            <div className={classes.reviewItemTitle}>
              <p>Great Place!</p>
            </div>
            <div className={classes.reviewItemText}>
              <p>
                We love Ocean Bites! They have such a big menu to please everyone! Last year we went for breakfast about
                4 days that week and lunch about 3 days. This year, we went late at night and loved it just as much!
                Great food, great selection, great workers. Would recommend it to anyone vacationing to Ocean City!
              </p>
            </div>
          </div>
          <div className={classes.reviewItem}>
            <div className={classes.reviewItemImage}>
              <img src={quote} alt="" />
            </div>
            <div className={classes.reviewItemTitle}>
              <p>Convenient and a great menu!</p>
            </div>
            <div className={classes.reviewItemText}>
              <p>
                Located one block off the beach and right next door to Jolly Roger's, this small eatery has an extensive
                offering of subs, pizzas, burgers and dozens of dessert options. Pizza is excellent and there is plenty
                of indoor seating.
              </p>
            </div>
          </div>
          <div className={classes.reviewItem}>
            <div className={classes.reviewItemImage}>
              <img src={quote} alt="" />
            </div>
            <div className={classes.reviewItemTitle}>
              <p>Great find!</p>
            </div>
            <div className={classes.reviewItemText}>
              <p>
                We were looking for a quick light lunch. I had a grilled cheese sandwich that was very good. My friend
                had a salad that was fresh and had a variety of things in it. We had ice cream that was very good as
                well. The service was quick and given with a pleasant smile.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div className={classes.fillerBlack} />
    <div className={classes.fillerBlack} />

    <section className={classes.intersectionBlack}>
      <div className={classes.contactImageWrapper}>
        <img src={contact} alt="" />
      </div>

      <div className={classnames(classes.fillerBlack, classes.fillerContactWrapper)}>
        <div className={classes.contactWrapper}>
          <div className={classes.contactTitle}>
            <p>Reach out to us!</p>
          </div>
          <div className={classes.contactDescWrapper}>
            <div className={classes.contactDetails}>
              <p>
                <strong>Phone Number</strong>
              </p>
              <p>(410) 289-3007</p>
            </div>
            <div className={classes.contactDetails}>
              <p>
                <strong>Email Address</strong>
              </p>
              <p>hello@oceanbites.com</p>
            </div>
            <div className={classes.contactDetails}>
              <p>
                <strong>Location</strong>
              </p>
              <p>3007 Philadelphia Ave, Ocean City,</p>
              <p>MD 21842-3565</p>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.fillerBlack} />
    </section>
  </div>
)

export default App
