import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { convertToLocalAMPM } from "@/lib/timeUtils";
import { generateMorningGoldenHour } from "@/lib/morning-goldenhour";
import { generateEveningGoldenHour } from "@/lib/evening-goldenhour";
import { MapPin, Sun, Moon } from "lucide-react";

const GoldenhourModal = ({ open, setOpen, data }) => {
  if (!data || !data.results || !data.results.sunset || !data.results.sunrise) {
    return null;
  }

  const evening = convertToLocalAMPM(data.results.sunset);
  const morning = convertToLocalAMPM(data.results.sunrise);

  const morningGoldenhour = generateMorningGoldenHour(morning);
  const eveningGoldenhour = generateEveningGoldenHour(evening);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <MapPin size={25} className="text-blue-500" />
            <p>Current Location</p>
          </DialogTitle>
        </DialogHeader>
        <DialogDescription className="flex flex-col gap-5 mt-5">
          <div className="flex justify-around">
            <div className="text-center">
              <div className="flex gap-2 items-center mb-4">
                <Sun className="text-yellow-500" />
                <p className="font-bold text-lg">Sunrise</p>
              </div>
              <p className="font-bold text-xl">{morning}</p>
            </div>
            <div className="text-center">
              <div className="flex gap-2 items-center mb-4">
                <Moon className="text-blue-400" />
                <p className="font-bold text-lg">Sunset</p>
              </div>
              <p className="font-bold text-xl">{evening}</p>
            </div>
          </div>
          <div className="flex justify-around flex-col md:flex-row md: items-center md: gap-2">
            <div>
              <h2 className="font-bold text-md">Morning Golden Hour</h2>
              <p className="font-bold text-lg">{morningGoldenhour.range}</p>
            </div>
            <div>
              <h2 className="font-bold text-md">Evening Golden Hour</h2>
              <p className="font-bold text-lg">{eveningGoldenhour.range}</p>
            </div>
          </div>
        </DialogDescription>
      </DialogContent>
    </Dialog>
  );
};

export default GoldenhourModal;
