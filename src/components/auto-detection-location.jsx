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
import getGoldenHour from "@/api/services/goldenhour-service";
import { useState } from "react";
import {
  goldenHourRequestSchema,
  goldenHourResponseSchema,
} from "@/api/schemas/goldenhour";
import GoldenhourModal from "./common/goldenhour-modal";


const AutoDetectionLocation = () => {
  const [result, setResult] = useState({});
  const [open, setOpen] = useState(false);

  const getLocation = async () => {
    try {
      if ("geolocation" in navigator) {
        const position = await new Promise((resolve, reject) => {
          navigator.geolocation.getCurrentPosition(
            (position) => resolve(position),
            (error) => reject(error)
          );
        });

        const locationData = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };

        const validatedData = goldenHourRequestSchema.parse(locationData);
        const response = await getGoldenHour({
          ...validatedData,
          formatted: 0,
        });

        const validatedResponse = goldenHourResponseSchema.parse(response);
        setResult(validatedResponse);
        setOpen(true);
      }
    } catch (err) {
      console.error("invalid geolocation :", err.message);
    }
  };

  return (
    <>
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
          <Button
            onClick={() => getLocation()}
            className="bg-blue-500 flex w-full"
          >
            <Navigation size={16} />
            Detect My Location
          </Button>
        </CardContent>
      </Card>
      <GoldenhourModal
        open={open}
        setOpen={setOpen}
        data={result}
      />
    </>
  );
};

export default AutoDetectionLocation;
