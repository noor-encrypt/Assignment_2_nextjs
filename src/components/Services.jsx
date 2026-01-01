'use client'

import { useRouter } from "next/navigation";

const servicesData = [
  { title: "Chefs", description: "Enjoy in-home meals...", imageUrl: "/assets/images/chef services.jpg" },
  { title: "Photography", description: "Personalized photo sessions...", imageUrl: "/assets/images/photography.jpg" },
  { title: "House Cleaning", description: "Professional deep cleaning...", imageUrl: "/assets/images/sweeping.jpg" },
  { title: "Pet Sitting", description: "Trusted sitters...", imageUrl: "/assets/images/pet.jpg" },
  { title: "Grocery Delivery", description: "Fresh groceries delivered...", imageUrl: "/assets/images/grocery.jpg" },
  { title: "Electrician Services", description: "Expert electrical repairs...", imageUrl: "/assets/images/electrician services.jpg" },
];

const Services = () => {
  const router = useRouter();

  return (
    <div className="px-[2rem] max-w-[1200px] mx-auto font-[Helvetica Neue,sans-serif]">
      {/* Hero Section */}
      <section className="text-center mb-[3rem] mt-[3rem]">
        <h1 className="text-[2.5rem] mb-[1rem]">Airbnb Services</h1>
        <p className="text-[1.125rem] text-[#555]">
          Book professional services for your stay or home—chefs, spa, trainers, beauty, and more.
        </p>
      </section>

      {/* Services Grid */}
      <section className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-[2rem]">
        {servicesData.map((service, index) => (
          <div
            key={index}
            onClick={() => router.push(`/services/${index}`)}

            className="border border-[#ddd] rounded-[8px] overflow-hidden bg-white transition-shadow hover:shadow-[0_4px_12px_rgba(0,0,0,0.1)] cursor-pointer"
          >
            <img
              className="w-full h-[200px] object-cover block"
              src={service.imageUrl}
              alt={service.title}
            />
            <div className="p-[1.25rem]">
              <h3 className="mb-[0.75rem] text-[1.25rem]">{service.title}</h3>
              <p className="text-[1rem] text-[#666]">{service.description}</p>
            </div>
          </div>
        ))}
      </section>

      {/* CTA Section */}
      <section className="text-center mt-[4rem] mb-[4rem]">
        <h2 className="text-[2rem] mb-[1rem]">Ready to book a service?</h2>
        <button className="bg-[#ff385c] hover:bg-[#e33153] text-white border-none px-[1.5rem] py-[0.75rem] text-[1rem] rounded-[4px] cursor-pointer">
          Explore Services
        </button>
      </section>
    </div>
  );
};

export default Services;

