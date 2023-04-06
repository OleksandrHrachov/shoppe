import { FC } from "react";
import { Link } from "react-router-dom";
import rightArrow from '../../assets/rightArrow.png';
import facebook from "../../assets/facebook.png";
import instagram from "../../assets/instagram.png";
import linkedin from "../../assets/linkedin.png";
import twitter from "../../assets/twitter.png";
import styles from './Footer.module.scss';

const Footer: FC = () => {
  return (
    <div className={styles.footerWrapper}>
      <div className={styles.footerTop}>
        <div className={styles.footerTextLinks}>
          <Link className={styles.footerLink} to="/contact">
            CONTACT
          </Link>
          <Link className={styles.footerLink} to="/terms">
            TERMS OF SERVICES
          </Link>
          <Link className={styles.footerLink} to="/shipping">
            SHIPPING AND RETURNS
          </Link>
        </div>

        <div className={styles.footerSubscribe}>
          <p>Give an email, get the newsletter.</p>
          <Link className={styles.footerLink} to="/subscribe">
            <img src={rightArrow} alt="right arrow" />
          </Link>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <div className={styles.footerСopyright}>
          <span className={styles.black}>© 2021 Shelly.</span> Terms of use{" "}
          <span className={styles.black}>and</span> privacy policy.
        </div>
        <div className={styles.footerSocialLinks}>
          <a
            className={styles.footerIconLink}
            href="https://www.linkedin.com/"
            target="_blank"
          >
            <img src={linkedin} alt="in icon" />
          </a>
          <a
            className={styles.footerIconLink}
            href="https://www.facebook.com/login/"
            target="_blank"
          >
            <img src={facebook} alt="fb icon" />
          </a>
          <a
            className={styles.footerIconLink}
            href="https://www.instagram.com/"
            target="_blank"
          >
            <img src={instagram} alt="inst icon" />
          </a>
          <a
            className={styles.footerIconLink}
            href="https://twitter.com"
            target="_blank"
          >
            <img src={twitter} alt="tw icon" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
