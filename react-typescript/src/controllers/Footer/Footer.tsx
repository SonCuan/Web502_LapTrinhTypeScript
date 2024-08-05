import React from "react";
import classNames from "classnames/bind";
import styles from "./Footer.module.scss";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
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
                Chúng tôi luôn sẵn sàng lắng nghe ý kiến của bạn và hỗ trợ bạn mọi lúc. Nếu có bất kỳ câu hỏi nào, hãy liên hệ với chúng tôi qua thông tin dưới đây:
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
                      <FontAwesomeIcon icon={faYoutube} />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <FontAwesomeIcon icon={faInstagram} />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className={cx("footer-right")}>
              <div className={cx("footer-section")}>
                <h3>Thông tin công ty</h3>
                <ul>
                  <li>
                    <a href="#">Giới thiệu về chúng tôi </a>
                  </li>
                  <li>
                    <a href="#">Sứ mệnh về giá trị</a>
                  </li>
                  <li>
                    <a href="#">Tin tức và thông báo</a>
                  </li>
                  <li>
                    <a href="#">Chúng tôi </a>
                  </li>
                </ul>
              </div>
              <div className={cx("footer-section")}>
                <h3>Chính sách</h3>
                <ul>
                  <li>
                    <a href="#">Chính sách bảo mật</a>
                  </li>
                  <li>
                    <a href="#">Điều khoản sử dụng</a>
                  </li>
                  <li>
                    <a href="#">Chính sách đổi trả</a>
                  </li>
                  <li>
                    <a href="#">Chính sách cookie</a>
                  </li>
                
                </ul>
              </div>
              <div className={cx("footer-section")}>
                <h3>Thông tin pháp lý </h3>
                <ul>
                  <li>
                    <a href="#">Quyền quả lý trí tuệ</a>
                  </li>
                  <li>
                    <a href="#">Thông tin về bản quyền</a>
                  </li>
                  <li>
                    <a href="#">Đăng ký nhận bản tin</a>
                  </li>
                  <li>
                    <a href="#">Các bản tin trước đây</a>
                  </li>
                  
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className={cx("footer-bottom")}>
          <div className={cx("footer-bottom-content")}>
            <p>© 2024 Công ty Nguyễn Sơn Quân. Tất cả quyền được bảo lưu.
                    Điều khoản sử dụng | Chính sách bảo mật | Chính sách cookie
            </p>
            <img
              src="https://s3-alpha-sig.figma.com/img/1c11/a013/e7bea72067acbf938d0fb2be7757e29f?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signat...0A~VAw__"
              alt=""
            />
            <p>
              <a href="#">
                Cuộn lên trên
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