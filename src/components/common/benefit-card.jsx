import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const BenefitCard = ({ icon: Icon, title, description, className }) => {
  return (
    <Card className={`w-full ${className}`}>
      <CardHeader className="text-center">
        <div className="bg-blue-300 m-auto rounded-md p-1.5 text-white">{Icon && <Icon className="m-auto w-6 h-6" />}</div>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent className="text-center">{description}</CardContent>
    </Card>
  );
};

export default BenefitCard;
