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

const AutoDetectionLocation = () => {
  const [geoData, setGeoData] = useState();
  const [result, setResult] = useState();

  const getLocation = async () => {
    try {
      if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            setGeoData({
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
            });
          },
          (error) => {
            console.error("error location :", error.message);
          }
        );
      }

      const validatedData = goldenHourRequestSchema.parse(geoData);
      const response = await getGoldenHour(validatedData);

      const validatedResponse = goldenHourResponseSchema.parse(response);
      setResult(validatedResponse);
    } catch (err) {
      console.error("failed to get location:", err.message);
    }
  };

  console.log(result);

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
        <Button
          onClick={() => getLocation()}
          className="bg-blue-500 flex w-full"
        >
          <Navigation size={16} />
          Detect My Location
        </Button>
      </CardContent>
    </Card>
  );
};

export default AutoDetectionLocation;
