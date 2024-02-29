import Link from "next/link";
import { AiFillInstagram, AiFillYoutube } from "react-icons/ai";
import { MdFacebook } from "react-icons/md";

import Container from "@/components/Container";
import Image from "next/image";
import logo from "../../../assets/images/taskhacks-logo-transparent.png";
import FooterList from "./FooterList";

const Footer = () => {
  return (
    <footer className='bg-slate-800 text-slate-200 text-sm mt-16'>
      <Container>
        <div className='flex flex-col md:flex-row justify-around pt-16 pb-8'>
          <FooterList>
            <div className=' text-slate-200'>
              <div className='mb-4'>
                <Image src={logo} alt='logo' width={150} height={150} />
                {/* <h1 className="text-4xl text-primary font-semibold">
                  Task-Hacks
                </h1> */}
              </div>
              <div className='mb-2 font-semibold'>
                <div className='mb-2'>
                  Curated by &nbsp;
                  <span className='text-primary'>DevHacks</span>
                </div>
                <p className='leading-6'>
                  Providing reliable service since 2020
                </p>
              </div>
              <div className='mb-5 mx-auto grid gap-1'>
                <p>&copy; {new Date().getFullYear()} DevHacks.</p>
                <p> All right reserved</p>
              </div>
              <div>
                <div className='flex flex-row gap-2'>
                  <Link href='/'>
                    <MdFacebook size={32} />
                  </Link>
                  <Link href='/'>
                    <AiFillInstagram size={32} />
                  </Link>
                  <Link href='/'>
                    <AiFillYoutube size={32} />
                  </Link>
                </div>
              </div>
            </div>
          </FooterList>
          <FooterList>
            <h3 className='text-base font-bold mb-2'>CUSTOMER SERVICES</h3>
            <Link href='/' className='hover:text-primary'>
              Technical Support
            </Link>
            <Link href='/' className='hover:text-primary'>
              My Account
            </Link>
            <Link href='/' className='hover:text-primary'>
              Contact Us
            </Link>
            <Link href='/' className='hover:text-primary'>
              Pricing
            </Link>
          </FooterList>
          <FooterList>
            <h3 className='text-base font-bold mb-2'>RESOURCES </h3>
            <Link href='/' className='hover:text-primary'>
              Blogs
            </Link>
            <Link href='/' className='hover:text-primary'>
              FAQs
            </Link>
            <Link href='/' className='hover:text-primary'>
              Terms & Conditions
            </Link>
            <Link href='/' className='hover:text-primary'>
              Company Policy
            </Link>
          </FooterList>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
