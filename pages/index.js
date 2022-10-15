import React from "react";
import About from "../components/About";
import ContactUs from "../components/ContactUs";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Info from "../components/Info";
import Service from "../components/Service";
import Slider from "../components/Slider";
import WhyUs from "../components/WhyUs";
import { data } from "../data";

export default function Home({ data }) {
  return (
    <React.Fragment>
      <div className="hero_area">
        <Header header={data.header} />
        <Slider slider={data.slider} />
      </div>
      <About about={data.about} />
      <Service service={data.service} />
      <WhyUs whyUs={data.whyUs} />
      <ContactUs />
      <Info info={data.info} about={data.about} header={data.header} />
      <Footer />
    </React.Fragment>
  );
}

export async function getStaticProps() {
  return {
    props: {
      data,
    },
  };
}
