import BenefitCard from "./common/benefit-card";
import { MapPin, Navigation, Camera } from "lucide-react";

const BenefitSection = () => {
  const items = [
    {
      title: "Auto Detection",
      description:
        "Automatically detect your current location using GPS and browser geolocation services.",
      icon: MapPin,
      colors: {
        bg: "bg-purple-500/30",
        border: "border-purple-500/40",
      },
    },
    {
      title: "Manual Entry",
      description:
        "Enter any city or location manually to get precise time for that area.",
      icon: Navigation,
      colors: {
        bg: "bg-blue-500/30",
        border: "border-blue-500/40",
      },
    },
    {
      title: "Perfect Capture",
      description: "Get perfect photography moment on your current location.",
      icon: Camera,
      colors: {
        bg: "bg-yellow-500/30",
        border: "border-yellow-500/40",
      },
    },
  ];

  return (
    <div className="flex gap-2 flex-col md:flex-row">
      {items.map((item) => (
        <BenefitCard
          icon={item.icon}
          title={item.title}
          description={item.description}
          className={`${item.colors.bg} ${item.colors.border}`}
        />
      ))}
    </div>
  );
};

export default BenefitSection;
