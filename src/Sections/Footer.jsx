import { copyrightSign } from "assets/icons";
import { footerLogo } from "../assets/images";
import { footerLinks, socialMedia } from "../constants/index";

const Footer = () => {
  return (
    <section className="max-container">
      <div className="flex justify-between items-start gap-28 flex-wrap max-lg:flex-col ">
        <div className="flex flex-col items-start">
          <a href="/">
          <img src={footerLogo} 
          width={150}
          height={46}
          alt="" />
          </a>
          <p className=" mt-6 text-base leading-7 font-montserrat text-white-400 sm:max-w-sm">
            Get shoes ready for the new term at your nearest Nike store.
            Find yor perfect size in the store. Get Rewards 
          </p>
          <div className="flex items-center gap-5 mt-8">
            {socialMedia.map((icon) => (
              <div className="flex justify-center items-center w-12 h-12 bg-white rounded-full">
                <img src={icon.src} alt={icon.alt} width={24} height={24}/>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap">
            {footerLinks.map((section) => (
              <div key={section}>
                <h4 className="text-white font-montserrat text-2xl leading-normal font-medium mb-6">
                    {section.title}
                </h4>
                <ul>
                  {section.links.map((link) =>(
                    <li className="mt-3 text-white-400  font-montserrat text-base leading-normal hover:text-slate-gray cursor-pointer" key={link}>
                      <a href={link.name} className="text-base hover:text-coral-red">
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
        </div>
      </div>
      <div className="flex justify-between mt-24 text-white-400 max-sm:flex-col max-sm:items-center">
            <div className="flex flex-1 font-montserrat cursor-pointer gap-2 justify-start items-center">
              <img src={copyrightSign} alt="copy right sign" width={20} height={20} className="rounded-full m-0" />
              <p>Copyright. All rights reserved. </p>
            </div>
            <div className="flex flex-1 font-montserrat cursor-pointer gap-2 justify-end items-center">
              <a href="/">Terms & Conditions</a>
              <a href="/">Privacy Policy</a>
            </div>
      </div>
    </section>
  )
}

export default Footer