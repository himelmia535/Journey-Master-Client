import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "animate.css";

const About = () => {
  useEffect(() => {
    AOS.init(); // Initialize AOS
  }, []);
  return (
    <div>
      <section className="bg-gray-100 py-12 px-4">
        <div className="container mx-auto">
          <h2
            data-aos="fade-up"
            className="text-3xl font-bold text-center mb-6"
          >
            About Journey Master
          </h2>
          <p
            data-aos="fade-left"
            className="text-lg text-gray-700 leading-relaxed mx-auto max-w-2xl"
          >
            Southeast Asia Travel is your ultimate guide to exploring the
            wonders of Southeast Asia. Whether you're a seasoned traveler or
            embarking on your first adventure, we're here to help you discover
            the beauty and diversity of this enchanting region.
          </p>

          <div className="">
            <div data-aos="fade-left" className="mt-8 text-center">
              <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
              <p className="text-lg text-gray-700 leading-relaxed mx-auto max-w-2xl">
                Established in [year], Southeast Asia Travel is dedicated to
                providing travelers with unforgettable experiences and
                unparalleled service. We strive to make your journey through
                Southeast Asia seamless and memorable, offering expert guidance
                and personalized recommendations every step of the way.
              </p>
            </div>
            <div
              data-aos="zoom-in"
              data-aos-delay="400"
              className="mt-8 text-center"
            >
              <h3 className="text-xl font-semibold mb-2">Our Expertise</h3>
              <p className="text-lg text-gray-700 leading-relaxed mx-auto max-w-2xl">
                With years of experience and a passion for travel, our team of
                experts has curated the finest selection of destinations and
                experiences across Southeast Asia. From the lush jungles of
                Indonesia to the historic temples of Cambodia, we're here to
                help you uncover the hidden gems of this vibrant region.
              </p>
            </div>
          </div>

          <div className="">
            <div data-aos="fade-left" className="mt-8 text-center">
              <h3 className="text-xl font-semibold mb-2">
                Our Commitment to Sustainability
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed mx-auto max-w-2xl">
                At Southeast Asia Travel, we believe in responsible tourism and
                are committed to preserving the natural beauty and cultural
                heritage of Southeast Asia. We work closely with local
                communities and organizations to promote sustainable travel
                practices and minimize our environmental impact. Together, we
                can ensure that future generations can continue to enjoy the
                wonders of Southeast Asia for years to come.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
