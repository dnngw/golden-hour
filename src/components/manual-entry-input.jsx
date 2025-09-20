import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { MapPin, Search } from "lucide-react";
import { Input } from "./ui/input";
import { useForm } from "react-hook-form";
import { Button } from "./ui/button";
import { getGeoLocation } from "@/api/services/geolocation-service";
import { useState } from "react";
import getGoldenHour from "@/api/services/goldenhour-service";
import {
  geoLocationRequestSchema,
  geoLocationResponseSchema,
} from "@/api/schemas/geolocation";

import {
  goldenHourRequestSchema,
  goldenHourResponseSchema,
} from "@/api/schemas/goldenhour";
import GoldenhourModal from "./common/goldenhour-modal";

const ManualEntryInput = () => {
  const [data, setData] = useState({});
  const [open, setOpen] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const getGeoLocationData = async (data) => {
    try {
      const validatedData = geoLocationRequestSchema.parse(data);

      const response = await getGeoLocation(validatedData);

      if (response?.results && response.results.length > 0) {
        const validatedResponse = geoLocationResponseSchema.parse(response);
        const { latitude: lat, longitude: lng } = validatedResponse.results[0];

        await getGoldenHourData({ lat, lng });
        reset();
        setOpen(true);
      } else {
        return null;
      }
    } catch (err) {
      console.error(err);
    }
  };

  const getGoldenHourData = async (data) => {
    try {
      const validatedData = goldenHourRequestSchema.parse({
        ...data,
        formatted: 0,
      });

      const response = await getGoldenHour(validatedData);
      const validatedResponse = goldenHourResponseSchema.parse(response);

      setData(validatedResponse);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <Card className="w-full">
        <CardHeader>
          <CardTitle className="flex gap-2 items-center">
            <div className="bg-gray-300 p-2 rounded-md">
              <MapPin size={16} />
            </div>
            Manual Entry
          </CardTitle>
          <CardDescription>
            Enter a city name or address to get location-based data
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-3">
          <form onSubmit={handleSubmit(getGeoLocationData)}>
            <div>
              <Input
                id="name"
                type="text"
                placeholder="Enter City Name"
                {...register("name", {
                  required: "Input is required",
                })}
              />
              {errors.location && (
                <p className="text-red-500">{errors.location.message}</p>
              )}
            </div>
            <Button className="flex w-full" variant="outline" type="submit">
              <Search size={16} />
              Search Location
            </Button>
          </form>
        </CardContent>
      </Card>
      <GoldenhourModal open={open} setOpen={setOpen} data={data} />
    </>
  );
};

export default ManualEntryInput;
