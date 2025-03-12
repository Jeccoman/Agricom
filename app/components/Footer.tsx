import { Link } from "@remix-run/react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="relative lg:h-[472px] overflow-clip bg-[#E4EBD5]">
      <img 
        src="/footer-pattern.svg" 
        alt="footer pattern" 
        className="absolute top-0 left-0 object-cover h-full lg:w-full"
      />
      
      <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-l from-primary to-primary via-secondary"></div>
      
      <div className="py-12 space-y-10">
         <div className="px-4 lg:px-24 flex justify-between flex-wrap gap-8">
           <div className="flex flex-col gap-4 text-sm lg:text-lg z-10">
            <h1 className="font-bold text-black">Navigate</h1>
            <Link className="text-gray-500" data-discover="true" to="/about-us">About Us</Link>
            <Link className="text-gray-500" data-discover="true" to="/services">Our Services</Link>
            <Link className="text-gray-500" data-discover="true" to="/blogs">Blogs</Link>
            <Link className="text-gray-500" data-discover="true" to="/locate-us">Locate Us</Link>
          </div>
          <div className="flex flex-col gap-4 text-sm lg:text-lg z-10">
            <h1 className="font-bold text-black">Support &amp; Services</h1>
            <Link className="text-gray-500" data-discover="true" to="/financing">Equipment Financing</Link>
            <Link className="text-gray-500" data-discover="true" to="/customer-service">Customer Service</Link>
            <Link className="text-gray-500" data-discover="true" to="/contacts">Contact Us</Link>
          </div>
          <div className="flex flex-col gap-5 text-sm lg:text-lg z-10 max-w-md">
            <h1 className="text-black font-bold">Subscribe to our newsletter</h1>
            <p className="text-base text-gray-500">
              This feature is still under works! Stay tuned for our upcoming newsletter.
            </p>
          </div>
        </div>
        <div className="p-4 sm:py-3 sm:px-6 bg-primary sm:rounded-xl text-white flex flex-col lg:flex-row items-center gap-4 m-12 bg-green-600">
  <div className="z-50 text-center lg:text-start order-1">
    <p>Kamata opposite Mkuki Mall, P. O. Box: 79291, Dar Es Salaam, Tanzania</p>
    <div className="text-sm z-10">
      <a href="tel:+255745350778">+255 745 350 778</a>, <a href="mailto:info@agricom.co.tz">info@agricom.co.tz</a>
    </div>
  </div>
  <div className="flex items-center justify-center gap-4 z-10 order-2 lg:ml-auto">
    <a
      rel="noreferrer noopener"
      href="https://www.instagram.com/agricomafrica?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
      target="_blank"
      title="Visit Agricom's Instagram page"
    >
      <svg width="30" fill="none" height="30" viewBox="0 0 30 30" strokeWidth="1" xmlns="http://www.w3.org/2000/svg">
        <rect x="0.5" y="0.5" width="29" height="29" rx="14.5" stroke="currentColor"></rect>
        <path
          d="M17.9606 11.2993C17.9606 10.8905 18.292 10.5591 18.7008 10.5591C19.1095 10.5591 19.4409 10.8905 19.4409 11.2993C19.4409 11.708 19.1095 12.0394 18.7008 12.0394C18.292 12.0394 17.9606 11.708 17.9606 11.2993Z"
          fill="currentColor"
        ></path>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M15 11.4843C13.0583 11.4843 11.4843 13.0583 11.4843 15C11.4843 16.9417 13.0583 18.5157 15 18.5157C16.9417 18.5157 18.5157 16.9417 18.5157 15C18.5157 13.0583 16.9417 11.4843 15 11.4843ZM12.5945 15C12.5945 13.6715 13.6715 12.5945 15 12.5945C16.3285 12.5945 17.4055 13.6715 17.4055 15C17.4055 16.3285 16.3285 17.4055 15 17.4055C13.6715 17.4055 12.5945 16.3285 12.5945 15Z"
          fill="currentColor"
        ></path>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M18.8919 8.21507C16.3261 7.92831 13.6739 7.92831 11.1081 8.21507C9.61892 8.38151 8.41667 9.55466 8.24159 11.0516C7.93477 13.6749 7.93477 16.3251 8.24159 18.9484C8.41667 20.4453 9.61892 21.6185 11.1081 21.7849C13.6739 22.0717 16.3261 22.0717 18.8919 21.7849C20.3811 21.6185 21.5834 20.4453 21.7585 18.9484C22.0653 16.3251 22.0653 13.6749 21.7585 11.0516C21.5834 9.55466 20.3811 8.38152 18.8919 8.21507ZM11.2315 9.31843C13.7153 9.04082 16.2848 9.04082 18.7686 9.31843C19.7531 9.42846 20.5417 10.2053 20.6557 11.1806C20.9525 13.7182 20.9525 16.2818 20.6557 18.8194C20.5417 19.7947 19.7531 20.5715 18.7686 20.6816C16.2848 20.9592 13.7153 20.9592 11.2315 20.6816C10.247 20.5715 9.45836 19.7947 9.3443 18.8194C9.0475 16.2818 9.0475 13.7182 9.3443 11.1806C9.45836 10.2053 10.247 9.42846 11.2315 9.31843Z"
          fill="currentColor"
        ></path>
      </svg>
    </a>
    <a rel="noreferrer noopener" href="https://www.facebook.com/agricomafrica" target="_blank" title="Visit Agricom's Facebook page">
      <svg width="30" fill="none" height="30" viewBox="0 0 30 30" strokeWidth="1" xmlns="http://www.w3.org/2000/svg">
        <rect x="0.5" y="0.5" width="29" height="29" rx="14.5" stroke="currentColor"></rect>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M13.9502 9.10398C14.657 8.39711 15.6157 8 16.6154 8H18.5539C18.8513 8 19.0923 8.24108 19.0923 8.53846V11.1231C19.0923 11.4205 18.8513 11.6615 18.5539 11.6615H16.6154C16.5868 11.6615 16.5595 11.6729 16.5393 11.6931C16.5191 11.7133 16.5077 11.7407 16.5077 11.7692V13.1692H18.5539C18.7197 13.1692 18.8762 13.2456 18.9783 13.3763C19.0803 13.507 19.1165 13.6774 19.0763 13.8383L18.4301 16.4229C18.3702 16.6626 18.1548 16.8308 17.9077 16.8308H16.5077V21.4615C16.5077 21.7589 16.2666 22 15.9693 22H13.3846C13.0873 22 12.8462 21.7589 12.8462 21.4615V16.8308H11.4462C11.1488 16.8308 10.9077 16.5897 10.9077 16.2923V13.7077C10.9077 13.4103 11.1488 13.1692 11.4462 13.1692H12.8462V11.7692C12.8462 10.7696 13.2433 9.81085 13.9502 9.10398ZM16.6154 9.07692C15.9014 9.07692 15.2166 9.36058 14.7117 9.86548C14.2068 10.3704 13.9231 11.0552 13.9231 11.7692V13.7077C13.9231 14.0051 13.682 14.2462 13.3846 14.2462H11.9846V15.7538H13.3846C13.682 15.7538 13.9231 15.9949 13.9231 16.2923V20.9231H15.4308V16.2923C15.4308 15.9949 15.6719 15.7538 15.9693 15.7538H17.4873L17.8642 14.2462H15.9693C15.6719 14.2462 15.4308 14.0051 15.4308 13.7077V11.7692C15.4308 11.4551 15.5556 11.1537 15.7778 10.9316C15.9999 10.7094 16.3012 10.5846 16.6154 10.5846H18.0154V9.07692H16.6154Z"
          fill="currentColor"
        ></path>
      </svg>
    </a>
    <a rel="noreferrer noopener" href="https://www.linkedin.com/company/agricom-africa-ltd./" target="_blank" title="Visit Agricom's LinkedIn page">
      <svg width="30" fill="none" height="30" viewBox="0 0 30 30" strokeWidth="1" xmlns="http://www.w3.org/2000/svg">
        <rect x="0.5" y="0.5" width="29" height="29" rx="14.5" stroke="currentColor"></rect>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M9.87805 8C8.84083 8 8 8.84083 8 9.87805C8 10.9153 8.84083 11.7561 9.87805 11.7561C10.9153 11.7561 11.7561 10.9153 11.7561 9.87805C11.7561 8.84083 10.9153 8 9.87805 8ZM9.02439 9.87805C9.02439 9.40659 9.40659 9.02439 9.87805 9.02439C10.3495 9.02439 10.7317 9.40659 10.7317 9.87805C10.7317 10.3495 10.3495 10.7317 9.87805 10.7317C9.40659 10.7317 9.02439 10.3495 9.02439 9.87805Z"
          fill="currentColor"
        ></path>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8 12.6098C8 12.3269 8.22932 12.0976 8.5122 12.0976H11.2439C11.5268 12.0976 11.7561 12.3269 11.7561 12.6098V21.4878C11.7561 21.7707 11.5268 22 11.2439 22H8.5122C8.22932 22 8 21.7707 8 21.4878V12.6098ZM9.02439 13.122V20.9756H10.7317V13.122H9.02439Z"
          fill="currentColor"
        ></path>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12.7805 12.6098C12.7805 12.3269 13.0098 12.0976 13.2927 12.0976H16.0244C16.3073 12.0976 16.5366 12.3269 16.5366 12.6098V12.9062L16.8338 12.7788C17.3449 12.5597 17.8914 12.4224 18.4442 12.3721C20.3393 12.1999 22 13.689 22 15.6011V21.4878C22 21.7707 21.7707 22 21.4878 22H18.7561C18.4732 22 18.2439 21.7707 18.2439 21.4878V16.7073C18.2439 16.4809 18.154 16.2638 17.9939 16.1037C17.8338 15.9436 17.6166 15.8537 17.3902 15.8537C17.1638 15.8537 16.9467 15.9436 16.7866 16.1037C16.6265 16.2638 16.5366 16.4809 16.5366 16.7073V21.4878C16.5366 21.7707 16.3073 22 16.0244 22H13.2927C13.0098 22 12.7805 21.7707 12.7805 21.4878V12.6098ZM13.8049 13.122V20.9756H15.5122V16.7073C15.5122 16.2092 15.7101 15.7315 16.0623 15.3793C16.4145 15.0271 16.8922 14.8293 17.3902 14.8293C17.8883 14.8293 18.366 15.0271 18.7182 15.3793C19.0704 15.7315 19.2683 16.2092 19.2683 16.7073V20.9756H20.9756V15.6011C20.9756 14.3006 19.8413 13.2737 18.5369 13.3923C18.0903 13.4329 17.6487 13.544 17.2374 13.7203L16.2262 14.1537C16.0679 14.2215 15.8862 14.2053 15.7424 14.1105C15.5987 14.0157 15.5122 13.8551 15.5122 13.6829V13.122H13.8049Z"
          fill="currentColor"
        ></path>
      </svg>
    </a>
    <a rel="noreferrer noopener" href="https://x.com/AgricomAfrica" target="_blank" title="Visit Agricom's X (Twitter) page">
      <svg width="30" fill="none" height="30" viewBox="0 0 30 30" strokeWidth="1" xmlns="http://www.w3.org/2000/svg">
        <rect x="0.5" y="0.5" width="29" height="29" rx="14.5" stroke="currentColor"></rect>
        <path
          d="M19.4729 8H21.8584L16.6473 13.9306L22.7777 22H17.9773L14.2183 17.1054L9.91639 22H7.52861L13.1029 15.6572L7.22217 8H12.1439L15.5428 12.4738L19.4729 8ZM18.6361 20.5782H19.9583L11.4253 9.34711H10.0066L18.6361 20.5782Z"
          fill="currentColor"
        ></path>
      </svg>
    </a>
    <a rel="noreferrer noopener" href="https://youtube.com/@agricomafrica6882?si=p1AhC_MyEl5xtkUA" target="_blank" title="Visit Agricom's YouTube channel">
      <svg width="30" fill="none" height="30" viewBox="0 0 30 30" strokeWidth="1" xmlns="http://www.w3.org/2000/svg">
        <rect x="0.5" y="0.5" width="29" height="29" rx="14.5" stroke="currentColor"></rect>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M13.8319 12.3636C13.6643 12.263 13.4555 12.2604 13.2853 12.3567C13.1152 12.4531 13.01 12.6335 13.01 12.829V17.1708C13.01 17.3663 13.1152 17.5467 13.2853 17.6431C13.4555 17.7394 13.6643 17.7368 13.8319 17.6362L17.4501 15.4653C17.6136 15.3672 17.7136 15.1905 17.7136 14.9999C17.7136 14.8093 17.6136 14.6326 17.4501 14.5345L13.8319 12.3636ZM16.116 14.9999L14.0954 16.2122V13.7876L16.116 14.9999Z"
          fill="currentColor"
        ></path>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M18.6403 9.6749C16.2171 9.48532 13.7829 9.48532 11.3597 9.6749L9.73823 9.80175C8.75224 9.87889 7.94562 10.6179 7.78263 11.5934C7.40579 13.8487 7.40579 16.151 7.78263 18.4064C7.94562 19.3819 8.75224 20.1209 9.73823 20.198L11.3597 20.3249C13.7829 20.5145 16.2171 20.5145 18.6403 20.3249L20.2618 20.198C21.2478 20.1209 22.0544 19.3819 22.2174 18.4064C22.5942 16.151 22.5942 13.8487 22.2174 11.5934C22.0544 10.6179 21.2478 9.87889 20.2618 9.80175L18.6403 9.6749ZM11.4443 10.757C13.8112 10.5719 16.1888 10.5719 18.5557 10.757L20.1771 10.8839C20.666 10.9221 21.066 11.2886 21.1468 11.7722C21.5038 13.9092 21.5038 16.0906 21.1468 18.2275C21.066 18.7112 20.666 19.0776 20.1771 19.1159L18.5557 19.2427C16.1888 19.4279 13.8112 19.4279 11.4443 19.2427L9.8229 19.1159C9.334 19.0776 8.93405 18.7112 8.85323 18.2275C8.49618 16.0906 8.49618 13.9092 8.85323 11.7722C8.93405 11.2886 9.334 10.9221 9.8229 10.8839L11.4443 10.757Z"
          fill="currentColor"
        ></path>
      </svg>
    </a>
  </div>
</div>

        <div className="flex justify-center sm:justify-between items-center gap-4 flex-wrap text-sm sm:px-4 lg:px-24 text-gray-500 z-10">
          <img src="/Agricom_Logo_Rectangular.svg" alt="Agricom Logo" className="h-12" />
          
          <div className="flex items-center justify-center flex-wrap gap-4 text-seashell z-10">
            <p>
              Designed and Developed By{" "}
              <a 
                rel="noreferrer noopener" 
                className="font-bold text-black pl-0.5" 
                href="https://ipfsoftwares.com" 
                target="_blank"
              >
                iPF Softwares
              </a>
            </p>
            
            <p>© {currentYear} Agricom</p>
            
            <Link className="underline" data-discover="true" to="/policies/security">
              Security
            </Link>
             <Link className="underline" data-discover="true" to="/policies/terms-and-conditions">
              Terms
            </Link>
            <Link className="underline" data-discover="true" to="/policies/privacy">
              Privacy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}