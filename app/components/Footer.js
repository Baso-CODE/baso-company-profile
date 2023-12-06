import Link from "next/link";
import { footerData } from "../data";
import Copyright from "./Copyright";
import Image from "next/image";

const Footer = () => {
  // destructure footer data
  const { logo, address, email, phone, list1, list2, socialList } = footerData;
  return (
    <footer>
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row text-center xl:text-left gap-y-12">
          {/* info */}
          <div className="w-[45%] mx-auto flex flex-col items-center xl:items-start">
            {/* logo */}
            <Link href="#">
              <Image
                className="mb-[65px]"
                src={logo}
                alt="gambar footer"
                width={120}
                height={100}
              />
            </Link>
            {/* address */}
            <div className="max-w-[260px] mb-5 text-secondary font-bold">
              {address}
            </div>
            {/* email */}
            <div className="font-light italic">{email}</div>
            {/* phone */}
            <div className="font-light italic">{phone}</div>
          </div>
          {/* list */}
          <div className="flex flex-col gap-y-14 md:gap-7 xl:flex-row justify-between">
            {/* list1 */}
            <div>
              <div className="font-extrabold text-secondary mb-8">About</div>
              <ul className="flex flex-col gap-y-4">
                {list1.map((item, index) => {
                  return (
                    <li key={index}>
                      <Link className="text-secondary" href={item.href}>
                        {item.name}{" "}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
            {/* list2 */}
            <div>
              <div className="font-extrabold text-secondary mb-8">Help</div>
              <ul className="flex flex-col gap-y-4">
                {list2.map((item, index) => {
                  return (
                    <li key={index}>
                      <Link className="text-secondary" href={item.href}>
                        {item.name}{" "}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
            {/* socialList */}
            <div>
              <div className="font-extrabold text-secondary mb-8">
                Social Media
              </div>
              <ul className="flex gap-4 justify-center">
                {socialList.map((item, index) => {
                  return (
                    <li
                      className="w-12 h-12 bg-primary/10 flex justify-center items-center rounded-full cursor-pointer hover:bg-accent-secondary transition-all"
                      key={index}>
                      <Link
                        className="text-accent-secondary text-xl hover:text-white"
                        href={item.href}>
                        {item.icon}{" "}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Copyright />
    </footer>
  );
};

export default Footer;
