import Image from "next/image";
import notFound from "../assets/images/notFound.gif";
import Navbar from "@/components/Shared/Navbar/Navbar";

const NotFoundPage = () => {
  return (
    <div>
      <Navbar />
      <Image src={notFound} fill alt='' />
    </div>
  );
};

export default NotFoundPage;
