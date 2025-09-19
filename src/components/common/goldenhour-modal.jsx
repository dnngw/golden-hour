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

const GoldenhourModal = ({ open, setOpen, data }) => {

  if(!data || !data.results || !data.results.sunset || !data.results.sunrise){
    return(
      <div>
        <p>loading</p>
      </div>
    );
  }


  const evening = convertToLocalAMPM(data.results.sunset);
  const morning = convertToLocalAMPM(data.results.sunrise);

  const morningGoldenhour = generateMorningGoldenHour(morning);
  const eveningGoldenhour = generateEveningGoldenHour(evening);

  console.log(data);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent>
        <p>anjay</p>
        <p>{morning}</p>
        <p>{evening}</p>
        <p>{morningGoldenhour.range}</p>
        <p>{eveningGoldenhour.range}</p>
      </DialogContent>
    </Dialog>
  );
};

export default GoldenhourModal;
