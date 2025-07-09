import React from "react";
import company1 from "../assets/icons/company1.png";
import company2 from "../assets/icons/company2.png";
import company3 from "../assets/icons/company3.png";
import company4 from "../assets/icons/company4.png";
import company5 from "../assets/icons/company5.png";
import company6 from "../assets/icons/company6.png";
import company7 from "../assets/icons/company7.png";

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Membership Organisations",
      descrption: "Our membership management software provides full automation of membership renewals and payment",
      image: "/src/assets/icons/membership.png",
    },
    {
      id: 2,
      title: "National Associations",
      descrption: "Our membership management software provides full automation of membership renewals and payments",
      image: "/src/assets/icons/associations.png",
    },
    {
      id: 3,
      title: "Clubs And Groups",
      descrption: "Our membership management software provides full automation of membership renewals and payment",
      image: "/src/assets/icons/clubs.png",
    },
  ];

  return (
    <div className="md:px-14 px-4 py-16 max-w-screen-2xl mx-auto" id="service">
      <div className="text-center my-8">
        <h2 className="text-4xl text-neutralDGrey font-semibold mb-2">Our Clients</h2>
        <p className="text-neutralGrey">We have been working with some Fortune 500+ clients</p>

        {/* company logos */}
        <div className="my-12 flex flex-wrap justify-center items-center gap-8">
          {[company1, company2, company3, company4, company5, company6, company7].map((logo, index) => (
            <div key={index} className="w-20 h-20 flex items-center justify-center">
              <img src={logo} alt={`Company ${index + 1}`} className="object-contain max-w-full max-h-full" />
            </div>
          ))}
        </div>
      </div>

      {/* service header */}
      <div className="mt-20 md:w-1/2 mx-auto text-center">
        <h2 className="text-4xl text-neutralDGrey font-semibold mb-3">
          Manage your entire community in a single system
        </h2>
        <p className="text-neutralGrey">Who is Nextcent suitable for?</p>
      </div>

      {/* service cards */}
      <div className="mt-10 grid md:grid-cols-3 gap-6">
        {services.map((service) => (
          <div key={service.id} className="text-center p-4 shadow-md rounded-lg hover:-translate-y-5 hover:border-b-4 hover:border-indigo-700 transition-all duration-300">
            <div className="flex justify-center mb-4">
              <img src={service.image} alt={service.title} className="w-16 h-16 object-contain" />
            </div>
            <h4 className="text-xl font-semibold mb-2">{service.title}</h4>
            <p className="text-neutralGrey">{service.descrption}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
