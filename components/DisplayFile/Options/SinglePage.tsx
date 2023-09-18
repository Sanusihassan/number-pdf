import { ReactNode, useState } from "react";
import { Row, Col, InputGroup, Form } from "react-bootstrap"
import Select, { CSSObjectWithLabel, GroupBase, OptionProps, StylesConfig } from 'react-select';
import InputColor from 'react-input-color';
import { Range } from 'react-range';
import { ITrackProps, IThumbProps } from "react-range/lib/types";
import { edit_page } from "@/content";

export const THEME_COLOR = "#b71540";
export const customStyles: StylesConfig<{ value: string; label: string }, false> = {
    option: (base: CSSObjectWithLabel, state: OptionProps<{ value: string; label: string }, false, GroupBase<{ value: string; label: string }>>) => ({
        ...base,
        backgroundColor: state.isSelected ? THEME_COLOR : "white",
        cursor: "pointer",
    }),
};

export const SinglePage = ({ single_page_options }: {
    single_page_options: edit_page["number_pdf_options"]["single_page_options"]
}) => {
    const [position, setPosition] = useState(1);
    const [margin, setMargin] = useState(single_page_options.margin_options[1]);
    const [startNumber, setStartNumber] = useState(1);
    const [fromPage, setFromPage] = useState(1);
    const [toPage, setToPage] = useState(1);
    const [textFormat, setTextFormat] = useState(single_page_options.page_text_options[0]);
    const [customText, setCustomText] = useState('page n of x');
    const [color, setColor] = useState({});
    const [fontSize, setFontSize] = useState([16]);
    const [isBold, setIsBold] = useState(true);
    const [isItalic, setIsItalic] = useState(true);
    const [isUnderlined, setIsUnderlined] = useState(true);

    const fontOptions = [
        { label: 'Arial', value: 'arial' },
        { label: 'Calibri', value: 'calibri' },
        { label: 'Comic Sans MS', value: 'comic-sans-ms' },
        { label: 'Courier New', value: 'courier-new' },
        { label: 'Georgia', value: 'georgia' },
        { label: 'Helvetica', value: 'helvetica' },
        { label: 'Impact', value: 'impact' },
        { label: 'Lucida Console', value: 'lucida-console' },
        { label: 'Tahoma', value: 'tahoma' },
        { label: 'Times New Roman', value: 'times-new-roman' },
        { label: 'Trebuchet MS', value: 'trebuchet-ms' },
        { label: 'Verdana', value: 'verdana' }
    ];
    const [font, setFont] = useState({ label: 'Arial', value: 'arial' });
    return (
        <div className="single-page d-flex flex-column justify-content-between">
            <Row className="position-margin-row">
                <div className="position-col">
                    <h6 className="option-title number-pdf">{single_page_options.position}</h6>
                    {/* each time i click on any of the inner boxes i want to add a display class to them */}
                    <div className="boxes-container">
                        {[...Array(9)].map((_, i) => (
                            <div
                                className={`box box-${i + 1}`}
                                onClick={() => setPosition(i + 1)}
                            >
                                <div className={`inner-box${position == i + 1 ? " display" : ""}`}></div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="margin-col">
                    <h6 className="option-title number-pdf">{single_page_options.margin}</h6>
                    <Select
                        className="margin-dropdown"
                        value={margin}
                        onChange={(newValue) => {
                            if (newValue !== null) {
                                setMargin(newValue);
                                console.log(margin);
                            } else {
                                setMargin(single_page_options.margin_options[1]);
                            }
                        }}
                        // @ts-ignore
                        options={single_page_options.margin_options}
                        styles={customStyles}
                        placeholder="Select Margin"
                    />
                </div>
            </Row>
            <Row className="start-number-row">
                <div className="start-number-col">
                    <InputGroup className="start-number-input-group">
                        <h6 className="option-title number-pdf">{single_page_options.pages}</h6>
                        <InputGroup.Text>{single_page_options.start_from}</InputGroup.Text>
                        <Form.Control
                            className="start-number-input"
                            type="number"
                            value={startNumber}
                            onChange={(e) => setStartNumber(Number(e.target.value))}
                        />
                    </InputGroup>
                </div>
            </Row>
            <Row className="number-pages-row">
                <h6 className="option-title number-pdf">{single_page_options.page_to_number}</h6>
                <div className="row number-pages-col">
                    <InputGroup className="from-page-input-group">
                        <InputGroup.Text>{single_page_options.from}</InputGroup.Text>
                        <Form.Control
                            className="from-page-input"
                            type="number"
                            value={fromPage}
                            onChange={(e) => setFromPage(Number(e.target.value))}
                        />
                    </InputGroup>
                    <InputGroup className="to-page-input-group">
                        <InputGroup.Text>{single_page_options.to}</InputGroup.Text>
                        <Form.Control
                            className="to-page-input"
                            type="number"
                            value={toPage}
                            onChange={(e) => setToPage(Number(e.target.value))}
                        />
                    </InputGroup>
                </div>

            </Row>
            <Row className="text-format-row">
                <Col className="text-format-col">
                    <h6 className="option-title number-pdf">{single_page_options.text}</h6>
                    <Select
                        className="text-format-dropdown"
                        value={textFormat}
                        onChange={(newValue) => {
                            if (newValue !== null) {
                                setTextFormat(newValue);
                            } else {
                                setTextFormat(single_page_options.page_text_options[0]);
                            }
                        }}
                        // @ts-ignore
                        options={single_page_options.page_text_options}
                        styles={customStyles}
                        placeholder="Select Text Format"
                    />
                    {textFormat.value === 'Custom' &&
                        <div className="custom-text-input-group">
                            <label className="form-control">{single_page_options.custom_text}:</label>
                            <input
                                className="form-control"
                                type="text"
                                value={customText}
                                onChange={(e) => setCustomText(e.target.value)}
                            />
                            <div>
                                <small className="text-secondary text-sample">{single_page_options.text_sample}</small>
                            </div>
                        </div>
                    }
                </Col>
            </Row>
            {/* for this row instead of input elements i want to use selectors for each item i.e font selector font size custom range input, bold a button with text "B", italic same with "I" same for underline but for the color i want a color selector */}
            {/* are there any react solutions for these? */}
            <h6 className="option-title number-pdf">{single_page_options.text_format}</h6>
            <Row className="font-setting-values justify-content-between">
                <span>{single_page_options.font}</span>
                <span>{single_page_options.font_size}: {fontSize}</span>
            </Row>
            <Row className="sytle-settings-row justify-content-between">
                <div className="font-setting-col font-col">
                    <Select
                        className="font-dropdown"
                        value={font}
                        onChange={(newValue) => {
                            if (newValue !== null) {
                                setFont(newValue);
                            } else {
                                setFont({ label: 'Arial', value: 'arial' });
                            }
                        }}
                        options={fontOptions}
                        styles={customStyles}
                        placeholder="Select Margin"
                    />
                </div>
                <div className="range-setting-col">
                    
                    <Range
                        step={1}
                        min={8}
                        max={72}
                        values={fontSize}
                        onChange={(values: number[]) => setFontSize(values)}
                        renderTrack={({ props, children }: { props: ITrackProps, children: ReactNode }) => (
                            <div
                                {...props}
                                style={{
                                    ...props.style,
                                    // direction: "rtl",
                                    height: '6px',
                                    width: '100%',
                                    backgroundColor: '#ccc',
                                    display: "flex",
                                    flexDirection: "row-reverse"
                                }}
                            >
                                {children}
                            </div>
                        )}
                        renderThumb={({ props }: { props: IThumbProps }) => (
                            <div
                                {...props}
                                style={{
                                    ...props.style,
                                    height: '16px',
                                    width: '16px',
                                    borderRadius: '50%',
                                    backgroundColor: '#b71540'
                                }}
                            />
                        )}
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
                        onClick={() => setIsBold(!isBold)}
                    >
                        B
                    </button>
                </Col>
                <Col className="font-setting-col">
                    <button
                        className={`btn${isItalic ? " font-italic" : ""} p-0 m-0`}
                        style={{
                            fontFamily: "serif"
                        }}
                        onClick={() => setIsItalic(!isItalic)}
                    >
                        I
                    </button>
                </Col>
                <Col className="font-setting-col">
                    <button
                        className={`_btn${isUnderlined ? " text-underline" : ""} p-0 m-0`}
                        onClick={() => setIsUnderlined(!isUnderlined)}
                    >
                        U
                    </button>
                </Col>
                <Col className="color-setting-col">
                    <InputColor
                        initialValue="#000"
                        onChange={setColor}
                        placement="right"
                    />
                </Col>
            </Row>
        </div>
    )
}