import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Navigation } from "lucide-react";
import { Button } from "./ui/button";

const AutoDetectionLocation = () => {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <div className="bg-blue-500 rounded-md p-2">
            <Navigation size={16} color="white" />
          </div>{" "}
          Auto Detection
        </CardTitle>
        <CardDescription>
          Use your device's GPS to automatically detect your current location
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Button className="bg-blue-500 flex w-full">
          <Navigation size={16}/>
          Detect My Location
        </Button>
      </CardContent>
    </Card>
  );
};

export default AutoDetectionLocation;
