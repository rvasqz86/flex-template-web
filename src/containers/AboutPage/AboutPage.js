import React from 'react';
import config from '../../config';
import { twitterPageURL } from '../../util/urlHelpers';
import { StaticPage, TopbarContainer } from '../../containers';
import {
  LayoutSingleColumn,
  LayoutWrapperTopbar,
  LayoutWrapperMain,
  LayoutWrapperFooter,
  Footer,
  ExternalLink,
} from '../../components';

import css from './AboutPage.css';
import image from './about-us-1056.jpg';

const AboutPage = () => {
  const { siteTwitterHandle, siteFacebookPage } = config;
  const siteTwitterPage = twitterPageURL(siteTwitterHandle);

  // prettier-ignore
  return (
    <StaticPage
      title="About Us"
      schema={{
        '@context': 'http://schema.org',
        '@type': 'AboutPage',
        description: 'About Cheff',
        name: 'About page',
      }}
    >
      <LayoutSingleColumn>
        <LayoutWrapperTopbar>
          <TopbarContainer />
        </LayoutWrapperTopbar>

        <LayoutWrapperMain className={css.staticPageWrapper}>
          <h1 className={css.pageTitle}>Experience the pop up chef</h1>
          <img className={css.coverImage} src={image} alt="My first ice cream." />

          <div className={css.contentWrapper}>
            <div className={css.contentSide}>
              <p></p>
            </div>

            <div className={css.contentMain}>
              <h2>
                Restauranteering is hard 90 to 95 percent fail in the first year.
                Most restaurants have slow days, the profitable time period often is often really dense.
                The restaurants have the empty tables. 
              </h2>

              <p>
                Pop ups are becoming more popular as many chefs are building there own brand and 
                cutting thier ties to the restaurant industy. Often they often set up in apartments
                or have to rent venues in a ah-hoc manner. Restaurants do not have a way to connect. 
                Cheff makes this possible for everyone. All our restaurant are owned by individuals 
                willing to let you build your brand?
              </p>

              <h3 className={css.subtitle}>Are you a restaurants owner?</h3>

              <p>
              Cheff offers you an excellent way to earn some extra cash! If you're not using 
              the restaurant at capacity every evening, why not rent it to other people while 
              it's free. And even if you do not want to give up an evening (we understand), 
              why not invite other chefs and bring new clientele.
              </p>
            </div>
          </div>
        </LayoutWrapperMain>

        <LayoutWrapperFooter>
          <Footer />
        </LayoutWrapperFooter>
      </LayoutSingleColumn>
    </StaticPage>
  );
};

export default AboutPage;
