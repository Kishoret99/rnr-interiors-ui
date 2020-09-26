import React from "react";
import { Link } from "gatsby";
import cx from "classnames";

const Footer = ({ className, ...props }) => {
  className = cx(
    "w-full px-8 py-4 text-white bg-gray-800 flex flex-col md:flex-row justify-between items-start md:items-center",
    className
  );
  return (
    <>
      <div className={className} {...props}>
        <div className="flex-initial text-xl font-semibold">RNR Interiors</div>
        <div>
          <ul className="flex flex-col md:flex-row text-sm -mx-3 font-medium">
            <li className="mx-3"><Link to="/">Home</Link></li>
            <li className="mx-3"><Link to="/contact">Contact</Link></li>
            <li className="mx-3">©2020 RNR Interiors Private Limited</li>
          </ul>
        </div>
      </div>

      <div className="w-full px-8 py-2 text-white text-xs font-light bg-black flex flex-col sm:flex-row justify-between items-start md:items-center">
        <div>
          <strong className="font-bold">Phone: </strong>
          +91 9030630888
          <strong className="ml-3 font-bold">Email: </strong>
          rnrinteriorspvt.ltd@gmail.com
        </div>
        <div>
          <a href="https://stories.freepik.com/home">Illustration by Freepik Stories</a>
        </div>
        <div>
          <Link to="/" className="hover:underline">
            rnrinteriorspvt.ltd@gmail.com
          </Link>
        </div>
      </div>
    </>
  );
};

export default Footer;

