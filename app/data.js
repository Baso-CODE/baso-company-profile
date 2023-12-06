// import icons
import { FaYoutube, FaInstagram, FaGithub, FaPenSquare } from "react-icons/fa";
import { BsChatDotsFill } from "react-icons/bs";
import { FiLayout, FiSettings, FiPenTool, FiTag } from "react-icons/fi";

// import images
import AboutImg from "../public/about.webp";
import Feature1Img from "../public/features/feature1.png";
import Feature2Img from "../public/features/feature2.png";
import Feature3Img from "../public/features/feature3.png";
import Feature4Img from "../public/features/feature4.png";

// avatars image
import Avatar1Img from "../public/testimonials/avatar1.jpg";
import Avatar2Img from "../public/testimonials/avatar2.jpg";
import Avatar3Img from "../public/testimonials/avatar3.jpg";
import LogoV2 from "../public/logo4.webp";
import HeroImage from "../public/hero-img.webp";
import Logo from "../public/logo4.webp";
import Feature1BgImg from "../public/features/feature1_bg.png";
import Feature2BgImg from "../public/features/feature2_bg.png";
import Feature3BgImg from "../public/features/feature3_bg.png";
import Feature4BgImg from "../public/features/feature4_bg.png";

import FreelancerBrandIcon from "../public/brands/freelancer.webp";
import UpworkBrandIcon from "../public/brands/upwork.webp";
import BehanceBrandIcon from "../public/brands/behance.webp";
import DribbbleBrandIcon from "../public/brands/dribbble.webp";
import FiverBrandIcon from "../public/brands/fiverr.webp";

// import image VisiMisi\
import Visi1 from "../public/teams/teams1.jpg";
import Misi1 from "../public/teams/teams2.jpg";

export const navigationData = [
  {
    name: "Home",
    href: "/ ",
  },

  {
    name: "About",
    href: "/about",
  },
  {
    name: "Services",
    href: "/services_1",
  },
  {
    name: "Teams",
    href: "/teams",
  },
];

export const logo = {
  image: Logo,
};

export const brands = [
  {
    img: FreelancerBrandIcon,
    href: "",
  },
  {
    img: UpworkBrandIcon,
    href: "",
  },
  {
    img: FiverBrandIcon,
    href: "",
  },
  {
    img: BehanceBrandIcon,
    href: "",
  },
  {
    img: DribbbleBrandIcon,
    href: "",
  },
];

export const heroData = {
  title: `Nurturing rising brands to scale a new height. One small brand`,
  subtitle:
    "Embracing Smallness: Cultivating Rising Brands Right From Day One Limited resources, entrenched competition, and skeptical audiences can make the journey daunting. But fear not, because we arehere to help you.",
  btnText: "Learn more",
  image: HeroImage,
};

export const aboutData = {
  image: AboutImg,
  title:
    "Our mission is to help bold visionaries like you to cultivate and nurture a rising brand from its very inception.  ",
  subtitle:
    "Like a gardener tending to a precious seed. We'll nurture and grow it, fulfilling every need. Let's sow the seeds of distinction together and watch your brand flourish like never before. The goal is always to craft a brand that's truly a rarity. One that stands out from the crowded masses, and resonates with the audience's heart.",
};

export const featuresData = {
  title: "Services Brand Strategy & Brand Growth ",
  subtitle:
    " Brand Strategy:  Designing your entire brand communication strategy for a future success.  From market research to creating personality and make it alive across touchpoints. ",
  subtitle2:
    "Brand Growth:  A digital marketing service by Sage Creative. We manage your brand to maximize leads and build engagement with potential customers.    ",
  list: [
    {
      image: Feature1Img,
      bgImage: Feature1BgImg,
      title: "Brand Consulting",
      description:
        "We fuel up to create a powerful and memorable brand. We'll provide you with creative and strategic solutions to help you stand out from the competition.",
      linkText: "Learn more",
      delay: "400",
    },
    {
      image: Feature2Img,
      bgImage: Feature2BgImg,
      title: "Social Media Handling",
      description:
        "We believe in the power of storytelling, and we want to help you tell your brand's story through social media. We'll create a customized social media strategy that's tailored to your unique needs. ",
      linkText: "Learn more",
      delay: "700",
    },
    {
      image: Feature3Img,
      bgImage: Feature3BgImg,
      title: "Meta ADS (FB & IG)",
      description:
        "Boost your online ad campaign's effectiveness. Our advertiser will optimize your ad content, targeting, and placement to drive higher conversion rates and better ROI.    ",
      linkText: "Learn more",
      delay: "1000",
    },
    {
      image: Feature4Img,
      bgImage: Feature4BgImg,
      title: "Search Engine Marketing",
      description:
        "From PPC to display ads, we'll attract qualified traffic to your website, increase brand awareness, and help your brand drive better conversion.      ",
      linkText: "Learn more",
      delay: "1300",
    },
  ],
};

export const testimonialsData = [
  {
    image: Avatar1Img,
    name: "Baso M.Afriza",
    web: "wordfaang.com",
    message:
      "Suspendisse ultrices at diam lectus nullam. Nisl, sagittis viverra enim erat tortor ultricies massa turpis. Arcu pulvinar aenean nam laoreet nulla.",
    delay: "300",
  },
  {
    image: Avatar2Img,
    name: "Jane Doe",
    web: "Ridia DM",
    message:
      "Suspendisse ultrices at diam lectus nullam. Nisl, sagittis viverra enim erat tortor ultricies massa turpis. Arcu pulvinar aenean nam laoreet nulla.",
    delay: "600",
  },
  {
    image: Avatar3Img,
    name: "Jim Ferry",
    web: "Keluarga JCWD04",
    message:
      "Suspendisse ultrices at diam lectus nullam. Nisl, sagittis viverra enim erat tortor ultricies massa turpis. Arcu pulvinar aenean nam laoreet nulla.",
    delay: "900",
  },
];

export const ctaData = {
  title: "Try for free!",
  subtitle: "Get limited 1 week free try our features!",
  btnText1: "Learn more",
  btnText2: "Request Demo",
};

export const footerData = {
  logo: LogoV2,
  address: "Pekanbaru, Riau. Indonesia",
  email: "sageCreatif@gmail.com",
  phone: "085241902604 (Main)",
  list1: [
    {
      name: "Profile",
      href: "#",
    },
    {
      name: "Features",
      href: "#",
    },
    {
      name: "Careers",
      href: "#",
    },
    {
      name: "DW News",
      href: "#",
    },
  ],
  list2: [
    {
      name: "Support",
      href: "#",
    },
    {
      name: "Sign Up",
      href: "#",
    },
    {
      name: "Guide",
      href: "#",
    },
    {
      name: "Reports",
      href: "#",
    },
    {
      name: "Q & A",
      href: "#",
    },
  ],
  socialList: [
    {
      icon: <FaYoutube />,
      href: "#",
    },
    {
      icon: <FaInstagram />,
      href: "#",
    },
    {
      icon: <FaGithub />,
      href: "#",
    },
  ],
};

// services
export const services = [
  {
    icon: <FaPenSquare />,
    name: "Brand Strategy.",
    description:
      "  A journey toward a long term goal can be very challenging. Just like humans, when in confusion, a brand easily loses direction and just fails. A solid brand strategy is needed. It will help your brand walking confidently toward the right  direction. ",
  },
  {
    icon: <FiSettings />,
    name: "Brand Growth",
    description:
      " Seeing your brand reaching its full potential and succeed in the digital realm brings us great pleasur,  You must be feel the same, right?  Brand growth is a digital marketing service, by Sage Creative ",
  },
];
export const VisiMisi = [
  {
    image: Visi1,
    name: "OUR VISION",
    slogan: "Create brands that matters",
    description:
      "Our commitment extends far beyond simply creating brands; we aim to guide and manage them with heart.Through our expertise and passion, we will carefully curate a portfolio and make a positive impact    to the society.  ",
  },
  {
    image: Misi1,
    name: "OUR PURPOSE",
    slogan: " Who writes the history?",
    description:
      " We believe that history is written by the victors. We are here to ensure your brand is among them. We aim to contribute to a legacy that withstands the test of time, transcending the limitations and bringing serene shades to the shared human experiences.",
  },
];

export const copyrightData = {
  text: "© SageCreatif™, 2023. All rights reserved.",
  icon: <BsChatDotsFill />,
};
