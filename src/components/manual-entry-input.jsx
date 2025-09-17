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

const ManualEntryInput = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();


  

  return (
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
        <form>
          <div>
            <Input
              id="location"
              type="text"
              placeholder="Enter City Name"
              {...register("location", {
                required: "Input is required",
              })}
            />
            {errors.location && (
              <p className="text-red-500">{errors.location.message}</p>
            )}
          </div>
        </form>
        <Button className="flex w-full" variant="outline" type="submit">
          <Search size={16} />
           Search Location
        </Button>
      </CardContent>
    </Card>
  );
};

export default ManualEntryInput;
