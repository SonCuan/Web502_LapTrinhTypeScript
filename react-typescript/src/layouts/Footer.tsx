import React from "react";
import classNames from "classnames/bind"; 
import styles from "../layouts/css/Footer.module.scss";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';

type Props = {};
const cx = classNames.bind(styles);
const Footer = (props: Props) => {
  return (
    <div className={cx("container")}>
      <div className={cx("footer")}>
        <div className={cx("footer-top")}>
          <div className={cx("footer-top-content")}>
            <div className={cx("footer-left")}>
              <div className={cx("footer-left-content")}>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua
                </p>
                <ul>
                  <li>
                    <a href="#">
                      <FontAwesomeIcon icon={faFacebook} />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <FontAwesomeIcon icon={faTwitter} />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <FontAwesomeIcon icon={faInstagram} />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <FontAwesomeIcon icon={faYoutube} />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className={cx("footer-right")}>
              <div className={cx("footer-section")}>
                <h3>Um</h3>
                <ul>
                  <li>
                    <a href="#">Kontaktiere uns</a>
                  </li>
                  <li>
                    <a href="#">Über uns</a>
                  </li>
                  <li>
                    <a href="#">Karriere</a>
                  </li>
                  <li>
                    <a href="#">Unternehmensinformationen </a>
                  </li>
                </ul>
              </div>
              <div className={cx("footer-section")}>
                <h3>Hilfe</h3>
                <ul>
                  <li>
                    <a href="#">Unsere Produzenten</a>
                  </li>
                  <li>
                    <a href="#">Zahlung</a>
                  </li>
                  <li>
                    <a href="#">Versand</a>
                  </li>
                  <li>
                    <a href="#">Stornierung & Rückgabe</a>
                  </li>
                  <li>
                    <a href="#">Verstoß melden</a>
                  </li>
                </ul>
              </div>
              <div className={cx("footer-section")}>
                <h3>politik</h3>
                <ul>
                  <li>
                    <a href="#">Rücknahmegarantie</a>
                  </li>
                  <li>
                    <a href="#">Nutzungsbedingungen</a>
                  </li>
                  <li>
                    <a href="#">Sicherheit</a>
                  </li>
                  <li>
                    <a href="#">Privatsphäre</a>
                  </li>
                  <li>
                    <a href="#">Seitenverzeichnis</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className={cx("footer-bottom")}>
          <div className={cx("footer-bottom-content")}>
            <p>2024 hood.de , Inc.</p>
            <img
              src="https://s3-alpha-sig.figma.com/img/1c11/a013/e7bea72067acbf938d0fb2be7757e29f?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signat...0A~VAw__"
              alt=""
            />
            <p>
              <a href="#">
                Scroll to top
                <FontAwesomeIcon icon={faArrowUp} />
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;