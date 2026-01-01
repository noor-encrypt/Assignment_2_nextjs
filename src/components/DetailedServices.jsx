'use client'

import { useRouter, useParams } from "next/navigation";
import { Button } from "@mui/material";

// Service data - in a real app, this would come from an API or database
const servicesData = [
  { title: "Chefs", description: "Enjoy in-home meals...", imageUrl: "/assets/images/chef services.jpg" },
  { title: "Photography", description: "Personalized photo sessions...", imageUrl: "/assets/images/photography.jpg" },
  { title: "House Cleaning", description: "Professional deep cleaning...", imageUrl: "/assets/images/sweeping.jpg" },
  { title: "Pet Sitting", description: "Trusted sitters...", imageUrl: "/assets/images/pet.jpg" },
  { title: "Grocery Delivery", description: "Fresh groceries delivered...", imageUrl: "/assets/images/grocery.jpg" },
  { title: "Electrician Services", description: "Expert electrical repairs...", imageUrl: "/assets/images/electrician services.jpg" },
];

const ServiceDetail = ({ serviceId }) => {
  const router = useRouter();
  const params = useParams();
  const id = serviceId || params?.id;
  const service = servicesData[parseInt(id)];

  if (!service) return <p>Service not found.</p>;

  return (
    <div className="px-[2rem] max-w-[900px] mx-auto py-[3rem]">
      <button
        onClick={() => router.back()}
        className="mb-[2rem] text-[#ff385c] font-semibold"
      >
        ← Back to Services
      </button>

      <h1 className="text-[2.5rem] mb-[1rem]">{service.title}</h1>
      <p className="text-[1.125rem] text-[#555] mb-[2rem]">{service.description}</p>
      <img
        src={service.imageUrl}
        alt={service.title}
        className="w-full h-[400px] object-cover rounded-[8px] mb-[2rem]"
      />

      <section className="mb-[2rem]">
        <h2 className="text-[2rem] mb-[1rem]">Service Details</h2>
        <p className="text-[#555] text-[1rem]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Professional and trusted {service.title.toLowerCase()} services for your convenience.
        </p>
      </section>

      <Button
        variant="contained"
        sx={{ backgroundColor: "#ff385c", ":hover": { backgroundColor: "#e33153" }, textTransform: "none", borderRadius: "4px" }}
      >
        Book This Service
      </Button>
    </div>
  );
};

export default ServiceDetail;

