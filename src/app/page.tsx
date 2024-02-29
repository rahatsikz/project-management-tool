"use client";

import Banner from "@/components/Homepage/Banner/Banner";
import BlogSection from "@/components/Homepage/Blogs/BlogSection";
import CallToAction from "@/components/Homepage/CTA/CallToAction";
import Features from "@/components/Homepage/Features/Features";
import PricingTable from "@/components/Homepage/Pricing/PricingTable";
import Testimonials from "@/components/Homepage/Testimonials/Testimonial";
import Loader from "@/components/Loadar";
import Navbar from "@/components/Shared/Navbar/Navbar";
import Footer from "@/components/Shared/footer/Footer";
import { useEffect, useState } from "react";

export default function Home() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <main className='overflow-x-hidden'>
      {loading ? (
        <div className=''>
          <Loader />
        </div>
      ) : (
        <>
          <Navbar />
          <Banner />
          <Features />
          <CallToAction />
          <Testimonials />
          <PricingTable />
          <BlogSection />
          <Footer />
        </>
      )}
    </main>
  );
}
