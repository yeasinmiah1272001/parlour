import Banner from "@/components/Banner";

import ClientReview from "@/components/ClientReview";
import Contacts from "@/components/Contacts";
// import PremiumBanner from "@/components/PremiumBanner";
import Services from "@/components/Services";
import ServicesProducts from "@/components/ServicesProducts";
import SkinCare from "@/components/SkinCare";
import SpecialServices from "@/components/SpecialServices";
import React from "react";

const HomePage = () => {
  return (
    <div>
      <Banner />
      <Services />
      <ServicesProducts />
      <SkinCare />
      <SpecialServices />
      {/* <PremiumBanner /> */}
      <ClientReview />
      <Contacts />
    </div>
  );
};

export default HomePage;
