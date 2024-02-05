import { ReactNode, useEffect, useState } from "react";
import { Row, Col, InputGroup, Form } from "react-bootstrap";
import Select, {
  CSSObjectWithLabel,
  GroupBase,
  OptionProps,
  StylesConfig,
} from "react-select";
import InputColor from "react-input-color";
import { Range } from "react-range";
import { ITrackProps, IThumbProps } from "react-range/lib/types";
import { edit_page } from "@/content";
import { ToolState, setOptions } from "@/src/store";
import { useDispatch, useSelector } from "react-redux";
import { languages as languages_json } from "@/src/content/content";
// import {languages}

export const THEME_COLOR = "#b71540";
export const customStyles: StylesConfig<
  { value: string; label: string },
  false
> = {
  option: (
    base: CSSObjectWithLabel,
    state: OptionProps<
      { value: string; label: string },
      false,
      GroupBase<{ value: string; label: string }>
    >
  ) => ({
    ...base,
    backgroundColor: state.isSelected ? THEME_COLOR : "white",
    cursor: "pointer",
  }),
};

export const SinglePage = ({
  single_page_options,
  lang,
}: {
  single_page_options: edit_page["number_pdf_options"]["single_page_options"];
  lang: string;
}) => {
  // state variables:
  const pageCount = useSelector(
    (state: { tool: ToolState }) => state.tool.pageCount
  );
  const StateOptions = useSelector(
    (state: { tool: ToolState }) => state.tool.options
  );
  const [position, setPosition] = useState(1);
  const [margin, setMargin] = useState(single_page_options.margin_options[1]);
  const [startNumber, setStartNumber] = useState(1);
  const [fromPage, setFromPage] = useState(1);
  const [__, setToPage] = useState(1);
  const [textFormat, setTextFormat] = useState(
    single_page_options.page_text_options[0]
  );
  const [customText, setCustomText] = useState("page n of x");
  const [fontSize, setFontSize] = useState([16]);
  const [isBold, setIsBold] = useState(false);
  const [isItalic, setIsItalic] = useState(false);
  const [isUnderlined, setIsUnderlined] = useState(false);
  const [_, setDocumentLanguage] = useState("");
  const marginOptions = ["small", "recommended", "big"] as const;
  const textOptions = [
    {
      value: "insert only page number (recommended)",
      label: "insert only page number (recommended)",
    },
    { value: "page {n}", label: "page n" },
    { value: "page {n} of {x}", label: "page n of x" },
    { value: "Custom", label: "Custom" },
  ] as const;
  const fontOptions = [
    { label: "Arial", value: "arial" },
    { label: "Calibri", value: "calibri" },
    { label: "Comic Sans MS", value: "comic-sans-ms" },
    { label: "Courier New", value: "courier-new" },
    { label: "Georgia", value: "georgia" },
    { label: "Helvetica", value: "helvetica" },
    { label: "Impact", value: "impact" },
    { label: "Lucida Console", value: "lucida-console" },
    { label: "Tahoma", value: "tahoma" },
    { label: "Times New Roman", value: "times-new-roman" },
    { label: "Trebuchet MS", value: "trebuchet-ms" },
    { label: "Verdana", value: "verdana" },
  ];

  const [font, setFont] = useState({ label: "Arial", value: "arial" });
  const dispatch = useDispatch();
  const posToStr = (pos: number): string => {
    let bulletPosition = "";
    switch (pos) {
      case 1:
      case 7:
        bulletPosition += "left";
        break;
      case 2:
      case 8:
        bulletPosition += "center";
        break;
      case 3:
      case 9:
        bulletPosition += "right";
        break;
    }
    return bulletPosition;
  };
  const handleSetPositoin = (p: number) => {
    let bulletPosition = "";

    const _p = p + 1;
    if ([1, 2, 3, 7, 8, 9].includes(_p)) {
      setPosition(p == 0 ? 1 : p + 1);
      if ([1, 2, 3].includes(_p)) {
        bulletPosition += "top ";
        bulletPosition += posToStr(_p);
      } else if ([7, 8, 9].includes(_p)) {
        bulletPosition += "bottom ";
        bulletPosition += posToStr(_p);
      }
      dispatch(setOptions({ bulletPosition }));
    }
  };
  type LanguageOption = {
    label: string;
    value: string;
  };

  const [languages, setLanguages] = useState<LanguageOption[]>([]);

  useEffect(() => {
    const languageOptions = Object.entries(languages_json).map(
      ([value, language]: [string, unknown]) => ({
        value,
        label: (language as { nativeName: string }).nativeName,
      })
    );
    setLanguages(languageOptions);
  }, [StateOptions]);
  return (
    <div className="single-page d-flex flex-column justify-content-between">
      <Row className="position-margin-row">
        <div className="position-col">
          <h6 className="option-title number-pdf">
            {single_page_options.position}
          </h6>
          <div className="boxes-container">
            {[...Array(9)].map((_, i) => (
              <div
                className={`box box-${i + 1}`}
                onClick={() => {
                  handleSetPositoin(i);
                }}
                key={i}
              >
                {[4, 5, 6].includes(i + 1) ? (
                  <button
                    className="btn inner-box w-100 h-100"
                    disabled
                  ></button>
                ) : (
                  <div
                    className={`inner-box${
                      position == (i == 0 ? 1 : i + 1) ? " display" : ""
                    }`}
                  ></div>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="margin-col">
          <h6 className="option-title number-pdf">
            {single_page_options.margin}
          </h6>
          <Select
            className="margin-dropdown"
            defaultValue={margin}
            onChange={(newValue, m) => {
              const index = single_page_options.margin_options.findIndex(
                (opt) => opt.value === newValue?.value
              );
              if (newValue !== null) {
                setMargin(newValue);
                dispatch(setOptions({ margin: marginOptions[index] }));
              } else {
                setMargin(single_page_options.margin_options[1]);
                dispatch(setOptions({ margin: "recommended" }));
              }
            }}
            options={single_page_options.margin_options}
            styles={customStyles}
            placeholder={single_page_options.select_margin_placeholder}
          />
        </div>
      </Row>
      <Row className="start-number-row w-100">
        <div className="start-number-col col-12">
          <InputGroup className="start-number-input-group">
            <h6 className="option-title number-pdf">
              {single_page_options.pages}
            </h6>
            <InputGroup.Text>{single_page_options.start_from}</InputGroup.Text>
            <Form.Control
              className="start-number-input col p-2"
              type="number"
              min={1}
              max={pageCount}
              value={startNumber}
              onChange={(e) => {
                const val = Number(e.target.value);
                if (val >= 1) {
                  setStartNumber(val);
                  setFromPage(val);
                }
                dispatch(setOptions({ startPage: startNumber }));
              }}
            />
          </InputGroup>
        </div>
      </Row>
      <Row className="number-pages-row">
        <h6 className="option-title number-pdf">
          {single_page_options.page_to_number}
        </h6>
        <div className="row number-pages-col">
          <InputGroup className="from-page-input-group">
            <InputGroup.Text>{single_page_options.from}</InputGroup.Text>
            <Form.Control
              className="from-page-input"
              type="number"
              min={1}
              defaultValue={1}
              max={pageCount}
              onChange={(e) => {
                setFromPage(Number(e.target.value));
                dispatch(
                  setOptions({
                    rangeToNumber: {
                      ...StateOptions.rangeToNumber,
                      start: Number(e.target.value),
                    },
                  })
                );
              }}
            />
          </InputGroup>
          <InputGroup className="to-page-input-group">
            <InputGroup.Text>{single_page_options.to}</InputGroup.Text>
            <Form.Control
              className="to-page-input"
              type="number"
              min={1}
              defaultValue={pageCount}
              max={pageCount}
              onChange={(e) => {
                setToPage(Number(e.target.value));
                dispatch(
                  setOptions({
                    rangeToNumber: {
                      ...StateOptions.rangeToNumber,
                      end: Number(e.target.value),
                    },
                  })
                );
              }}
            />
          </InputGroup>
        </div>
      </Row>
      <Row className="text-format-row">
        <Col className="text-format-col">
          <h6 className="option-title number-pdf">
            {single_page_options.text}
          </h6>
          <Select
            className="text-format-dropdown"
            value={textFormat}
            onChange={(newValue) => {
              const index = single_page_options.page_text_options.findIndex(
                (opt) => opt.value === newValue?.value
              );
              if (newValue !== null) {
                setTextFormat(newValue);
                dispatch(setOptions({ text: textOptions[index].value }));
              } else {
                setTextFormat(single_page_options.page_text_options[0]);
              }
            }}
            // @ts-ignore
            options={single_page_options.page_text_options}
            styles={customStyles}
            placeholder="Select Text Format"
          />
          {textFormat.value === "Custom" && (
            <div className="custom-text-input-group">
              <label className="form-control">
                {single_page_options.custom_text}:
              </label>
              <input
                className="form-control"
                type="text"
                value={customText}
                onChange={(e) => {
                  setCustomText(e.target.value);
                  dispatch(setOptions({ text: e.target.value }));
                }}
              />
              <div>
                <small className="text-secondary text-sample">
                  {single_page_options.text_sample}
                </small>
              </div>
            </div>
          )}
        </Col>
      </Row>
      <h6 className="option-title number-pdf">
        {single_page_options.text_format}
      </h6>
      <Row className="font-setting-values justify-content-between">
        <span>{single_page_options.font}</span>
        <span>
          {single_page_options.font_size}: {fontSize}
        </span>
      </Row>
      <Row className="sytle-settings-row justify-content-between">
        <div className="font-setting-col font-col">
          <Select
            className="font-dropdown"
            value={font}
            onChange={(newValue) => {
              if (newValue !== null) {
                setFont(newValue);
                dispatch(setOptions({ font: newValue.value }));
              } else {
                setFont({ label: "Arial", value: "arial" });
              }
            }}
            options={fontOptions}
            styles={customStyles}
            placeholder={single_page_options.select_font_placeholder}
          />
        </div>
        <div className="range-setting-col">
          <Range
            step={1}
            min={8}
            max={72}
            values={fontSize}
            onChange={(values: number[]) => {
              setFontSize(values);
              dispatch(setOptions({ fontSize: values[0] }));
            }}
            renderTrack={({
              props,
              children,
            }: {
              props: ITrackProps;
              children: ReactNode;
            }) => (
              <div
                {...props}
                style={{
                  ...props.style,
                  // direction: "rtl",
                  height: "6px",
                  width: "100%",
                  backgroundColor: "#ccc",
                }}
                className="range-track"
              >
                {children}
              </div>
            )}
            renderThumb={({ props }: { props: IThumbProps }) => (
              <div
                {...props}
                style={{
                  ...props.style,
                  height: "16px",
                  width: "16px",
                  borderRadius: "50%",
                  backgroundColor: "#b71540",
                }}
              />
            )}
          />
        </div>
      </Row>
      <Row className="justify-content-center ignore">
        <span>{single_page_options.document_language}</span>
      </Row>
      <Row className="justify-content-center ignore">
        <div className="lang-setting-col col-7 font-col">
          <Select
            className="font-dropdown"
            defaultValue={languages.find(
              (language) => language.value === ("" === lang ? "en" : lang)
            )}
            onChange={(newValue) => {
              if (newValue !== null) {
                setDocumentLanguage(newValue.value);
                dispatch(setOptions({ documentLanguage: newValue.value }));
              } else {
                setDocumentLanguage(lang == "" ? "en" : lang);
              }
            }}
            options={languages}
            styles={customStyles}
            placeholder={single_page_options.select_language_placeholder}
          />
        </div>
      </Row>
      <Row>
        <span className="col">{single_page_options.bold}</span>
        <span className="col">{single_page_options.italic}</span>
        <span className="col">{single_page_options.underline}</span>
        <span className="col">{single_page_options.color}</span>
      </Row>
      <Row className="sytle-settings-row">
        <Col className="font-weight-setting-col">
          <button
            className={`btn${isBold ? " font-weight-bold" : ""} p-0 m-0`}
            onClick={() => {
              setIsBold(!isBold);
              dispatch(setOptions({ isBold: !isBold }));
            }}
          >
            B
          </button>
        </Col>
        <Col className="font-setting-col">
          <button
            className={`btn${isItalic ? " font-italic" : ""} p-0 m-0`}
            style={{
              fontFamily: "serif",
            }}
            onClick={() => {
              setIsItalic(!isItalic);
              dispatch(setOptions({ isItalic: !isItalic }));
            }}
          >
            I
          </button>
        </Col>
        <Col className="font-setting-col">
          <button
            className={`_btn${isUnderlined ? " text-underline" : ""} p-0 m-0`}
            onClick={() => {
              setIsUnderlined(!isUnderlined);
              dispatch(setOptions({ isUnderlined: !isUnderlined }));
            }}
          >
            U
          </button>
        </Col>
        <Col className="color-setting-col">
          <InputColor
            initialValue="#000000FF"
            onChange={(color) => {
              dispatch(setOptions({ color: color.hex }));
            }}
            placement="left"
          />
        </Col>
      </Row>
    </div>
  );
};
