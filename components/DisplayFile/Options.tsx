import type { edit_page } from "@/content";
import NumberPDFOptions from "./Options/NumberPDFOptions";

export interface OptionsProps {
  edit_page: edit_page;
  lang: string;
}


const Options = ({ edit_page, lang }: OptionsProps) => {
  return (
    <>
      <NumberPDFOptions number_pdf_options={edit_page["number_pdf_options"]} lang={lang} />
    </>
  )
};

export default Options;
