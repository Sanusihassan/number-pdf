import type { edit_page } from "@/content";
import NumberPDFOptions from "./Options/NumberPDFOptions";

export interface OptionsProps {
  edit_page: edit_page;
}


const Options = ({ edit_page }: OptionsProps) => {
  return (
    <>
      <NumberPDFOptions />
    </>
  )
};

export default Options;
