import React from "react";
import Image from "next/image";
import Anik from "@/public/img/anik2.png";

export default function LeftSidebar() {
  return (
    <div className="anik-personal-info-area">
      <div className="anik-personal-info-wrap bg-white p-8 rounded-3xl lg:sticky top-0">
        <div className="anik-personal-info-img">
          <Image src={Anik} alt="avatar" />
        </div>

        <h4 className="anik-personal-info-name">
          <a>Shafayet Al-Anik</a>
        </h4>
        <span className="anik-personal-info-bio mb-15">
          Full stack developer
        </span>

        <ul className="anik-personal-info-social-link mb-30">
          <li>
            <a
              href="https://www.facebook.com/safayeat.anik/"
              target="_blank"
              className="facebook"
            >
              <i className="fa-brands fa-facebook-f"></i>
            </a>
          </li>
          <li>
            <a
              href="https://www.upwork.com/freelancers/~018da29b217afd933d"
              target="_blank"
              className="upwork"
            >
              <svg
                width="18"
                height="13"
                viewBox="0 0 18 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.9182 1.251C11.9888 1.26028 10.5224 2.53631 9.97338 4.56974C9.05229 3.15224 8.3337 1.53084 7.92166 0.162003L5.89105 0.171565L5.91917 5.55411C5.92037 5.80752 5.87165 6.05868 5.77578 6.29325C5.67992 6.52783 5.53879 6.74122 5.36045 6.92126C5.18212 7.10129 4.97007 7.24444 4.73641 7.34252C4.50275 7.4406 4.25207 7.4917 3.99866 7.4929C3.48689 7.49533 2.99511 7.29435 2.63151 6.93419C2.45148 6.75585 2.30834 6.5438 2.21025 6.31014C2.11217 6.07649 2.06107 5.8258 2.05987 5.57239L2.03174 0.189846L0 0.19969L0.0281249 5.58252C0.0359999 7.8162 1.82081 9.5861 4.00499 9.57485C6.18917 9.5636 7.95795 7.77879 7.9481 5.54455L7.94388 4.63049C8.35338 5.44049 8.86526 6.30111 9.42775 7.06048L8.18604 13.0072L10.2673 12.9977L11.1617 8.6771C11.9762 9.18138 12.8913 9.48148 13.9573 9.47641C16.1915 9.46657 18.0112 7.63058 17.9999 5.29424C17.9898 3.05943 16.1527 1.24059 13.9185 1.25072L13.9182 1.251ZM13.9471 7.39517C13.1349 7.39883 12.321 7.04755 11.6583 6.49152L11.8575 5.67589V5.62471C12.006 4.76015 12.4554 3.28584 13.9786 3.27909C14.5169 3.27811 15.0337 3.49017 15.4161 3.86895C15.7985 4.24774 16.0155 4.76246 16.0197 5.30071C15.9738 6.46873 15.0136 7.38758 13.9469 7.39236L13.9471 7.39517Z"
                  fill="currentColor"
                />
              </svg>
            </a>
          </li>
          <li>
            <a
              href="https://leetcode.com/shafayetalanik/"
              target="_blank"
              className="leetcode"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_20_3)">
                  <path
                    d="M16.5 10.7663C16.5 10.2098 16.077 9.75675 15.555 9.75675H8.00701C7.48501 9.75675 7.06201 10.2098 7.06201 10.7663C7.06201 11.3228 7.48426 11.7758 8.00701 11.7758H15.555C16.077 11.7765 16.5 11.3235 16.5 10.7663Z"
                    fill="#B3B1B0"
                  />
                  <path
                    d="M2.6115 13.6403L5.84625 16.911C6.576 17.6453 7.58475 18 8.6985 18C9.81225 18 10.821 17.616 11.5522 16.8795L13.4932 14.9017C13.8757 14.5162 13.8622 13.878 13.464 13.4768C13.0657 13.0755 12.4328 13.062 12.051 13.4475L10.044 15.4028C9.6975 15.753 9.2175 15.8992 8.68725 15.8992C8.157 15.8992 7.67775 15.753 7.32975 15.4028L4.10625 12.1305C3.759 11.7802 3.58425 11.268 3.58425 10.7332C3.58425 10.1985 3.759 9.7155 4.10625 9.36525L7.32 6.08025C7.66725 5.73 8.157 5.5965 8.6865 5.5965C9.216 5.5965 9.696 5.74275 10.0432 6.093L12.0502 8.0475C12.4327 8.43375 13.0657 8.42025 13.464 8.019C13.8622 7.617 13.8757 6.97875 13.4932 6.59325L11.5522 4.61625C11.0588 4.12318 10.4375 3.7777 9.75825 3.61875L9.73275 3.6135L11.568 1.73625C11.952 1.35075 11.9385 0.711749 11.5403 0.310499C11.142 -0.0907513 10.5082 -0.103501 10.125 0.281999L2.6115 7.857C1.88175 8.5935 1.5 9.60975 1.5 10.7332C1.5 11.8567 1.88175 12.9053 2.6115 13.6403Z"
                    fill="#E7A41F"
                  />
                  <path
                    d="M6.08619 17.1105C5.95548 17.0375 5.83578 16.9464 5.73069 16.8397C4.73544 15.84 3.73569 14.8447 2.74269 13.842C1.25094 12.336 1.01619 10.1392 2.15319 8.352C2.33487 8.07881 2.54587 7.82631 2.78244 7.599L9.99969 0.366747C10.4684 -0.102753 11.1232 -0.122253 11.5589 0.316497C11.9789 0.738747 11.9542 1.40775 11.5004 1.866C10.9237 2.448 10.3462 3.0285 9.76869 3.60975C9.73794 3.70125 9.66369 3.75975 9.59994 3.825C8.95269 4.482 8.28744 5.12175 7.64919 5.7885C7.56594 5.8755 7.45269 5.928 7.37019 6.01725C6.30294 7.0845 5.22294 8.13975 4.17069 9.22125C3.31944 10.0965 3.34794 11.4247 4.22169 12.3165C5.20269 13.3185 6.20094 14.304 7.19244 15.297C7.24269 15.3472 7.29444 15.396 7.34544 15.4455C7.69644 15.6727 7.70094 16.383 7.48269 16.6987C7.24194 17.0475 6.92769 17.2612 6.48294 17.2447C6.33369 17.2402 6.21069 17.1802 6.08619 17.1105Z"
                    fill="#070706"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_20_3">
                    <rect width="18" height="18" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </a>
          </li>
          <li>
            <a
              href="https://github.com/shafayeatt1995"
              target="_blank"
              className="github"
            >
              <i className="fa-brands fa-github"></i>
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/shafayet-al-anik-353130142/"
              target="_blank"
              className="linkedin"
            >
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
          </li>
        </ul>

        <div className="anik-personal-info-contact mb-30">
          <div className="anik-personal-info-contact-item phone">
            <div className="icon">
              <i className="fa-solid fa-mobile-screen-button"></i>
            </div>
            <div className="text">
              <span>Phone</span>
              <a className=" text-black" href="tel: 01728203635">
                +8801728-293635
              </a>
            </div>
          </div>

          <div className="anik-personal-info-contact-item email">
            <div className="icon">
              <i className="fa-regular fa-envelope"></i>
            </div>
            <div className="text">
              <span>Email</span>
              <a
                href="mailto:shafayet@scaneating.com"
                className="lowercase text-black break-words"
              >
                shafayetalanik@gmail.com
              </a>
            </div>
          </div>

          <div className="anik-personal-info-contact-item location">
            <div className="icon">
              <i className="fa-solid fa-location-dot"></i>
            </div>
            <div className="text">
              <span>Location</span>
              <p>Dhaka, Bangladesh</p>
            </div>
          </div>
        </div>

        <div className="anik-personal-info-btn">
          <a
            className="btn-1"
            href="https://drive.google.com/file/d/1SP_tY2kJYUwuMHtF3jucWPeYtD0zADv7/view?usp=sharing"
            target="_blank"
          >
            <span className="icon">
              <i className="fas fa-download"></i>
            </span>
            download CV
          </a>
        </div>
      </div>
    </div>
  );
}
