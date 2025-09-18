import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const BenefitCard = ({ icon: Icon, title, description, className }) => {
  return (
    <Card
      className={`w-full text-center bg-black/30 backdrop-blur-sm border-white/20 hover:bg-black/40 transition-all duration-300 hover:scale-105`}
    >
      <CardHeader className="text-center text-white">
        <div className={ `m-auto rounded-md p-2 text-white mb-1  ${className}`}>
          {Icon && <Icon className="m-auto w-6 h-6" />}
        </div>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent className="text-center">
        <CardDescription>
          <p className="text-white">{description}</p>
        </CardDescription>
      </CardContent>
    </Card>
  );
};

export default BenefitCard;
