import { ReactNode, useState } from "react";
import { Row, Col, InputGroup, Form } from "react-bootstrap"
import Select, { CSSObjectWithLabel, GroupBase, OptionProps, StylesConfig } from 'react-select';
import InputColor from 'react-input-color';
import { Range } from 'react-range';
import { ITrackProps, IThumbProps } from "react-range/lib/types";

export const THEME_COLOR = "#b71540";
export const customStyles: StylesConfig<{ value: string; label: string }, false> = {
    option: (base: CSSObjectWithLabel, state: OptionProps<{ value: string; label: string }, false, GroupBase<{ value: string; label: string }>>) => ({
        ...base,
        backgroundColor: state.isSelected ? THEME_COLOR : "white",
        cursor: "pointer",
    }),
};

export const SinglePage = () => {
    const [position, setPosition] = useState(1);
    const [margin, setMargin] = useState({ value: 'Recommended', label: 'Recommended' });
    const [startNumber, setStartNumber] = useState(1);
    const [fromPage, setFromPage] = useState(1);
    const [toPage, setToPage] = useState(1);
    const [textFormat, setTextFormat] = useState({ value: 'insert only page number (recommended)', label: 'insert only page number (recommended)' });
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


    // margin options
    const options = [
        { value: 'Small', label: 'Small' },
        { value: 'Recommended', label: 'Recommended' },
        { value: 'Big', label: 'Big' },
    ];
    // page text options
    const PageTextoptions = [
        { value: 'insert only page number (recommended)', label: 'insert only page number (recommended)' },
        { value: 'page n', label: 'page n' },
        { value: 'page n of x', label: 'page n of x' },
        { value: 'Custom', label: 'Custom' },
    ];

    return (
        <div className="single-page d-flex flex-column justify-content-between">
            <Row className="position-margin-row">
                <div className="position-col">
                    <h6 className="option-title number-pdf">Position</h6>
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
                    <h6 className="option-title number-pdf">Margin</h6>
                    {/* 
                        i have this Select from react-select and i want to change the background color of the selected itme to this color: THEME_COLOR
                    */}
                    <Select
                        className="margin-dropdown"
                        value={margin}
                        onChange={(newValue, actionMeta) => {
                            if (newValue !== null) {
                                setMargin(newValue);
                                console.log(margin);
                            } else {
                                setMargin({ value: 'Small', label: 'Small' }); // or handle null case as needed
                            }
                        }}
                        // @ts-ignore
                        options={options}
                        styles={customStyles}
                        placeholder="Select Margin"
                    />
                </div>
            </Row>
            <Row className="start-number-row">
                <div className="start-number-col">
                    <InputGroup className="start-number-input-group">
                        <h6 className="option-title number-pdf">pages</h6>
                        <InputGroup.Text>Start From</InputGroup.Text>
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
                <h6 className="option-title number-pdf">Which pages do you want to number?</h6>
                <div className="row number-pages-col">
                    <InputGroup className="from-page-input-group">
                        <InputGroup.Text>From</InputGroup.Text>
                        <Form.Control
                            className="from-page-input"
                            type="number"
                            value={fromPage}
                            onChange={(e) => setFromPage(Number(e.target.value))}
                        />
                    </InputGroup>
                    <InputGroup className="to-page-input-group">
                        <InputGroup.Text>To</InputGroup.Text>
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
                    <h6 className="option-title number-pdf">Text</h6>
                    {/* i have this react-select component but i want to change the bg of each item in it */}
                    <Select
                        className="text-format-dropdown"
                        value={textFormat}

                        onChange={(newValue) => {
                            if (newValue !== null) {
                                setTextFormat(newValue);
                            } else {
                                setTextFormat({ value: 'insert only page number (recommended)', label: 'insert only page number (recommended)' });
                            }
                        }}
                        // @ts-ignore
                        options={PageTextoptions}
                        styles={customStyles}
                        placeholder="Select Text Format"
                    />
                    {textFormat.value === 'Custom' &&
                        <div className="custom-text-input-group">
                            <label className="form-control">Custom text:</label>
                            <input
                                className="form-control"
                                type="text"
                                value={customText}
                                onChange={(e) => setCustomText(e.target.value)}
                            />
                            <div>
                                <small className="text-secondary text-sample">{`text sample: page {n} of {x} total pages`}</small>
                            </div>
                        </div>
                    }
                </Col>
            </Row>
            {/* for this row instead of input elements i want to use selectors for each item i.e font selector font size custom range input, bold a button with text "B", italic same with "I" same for underline but for the color i want a color selector */}
            {/* are there any react solutions for these? */}
            <h6 className="option-title number-pdf">text format</h6>
            <Row className="font-setting-values justify-content-between">
                <span>Font</span>
                <span>Font Size: {fontSize}</span>
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
                                    height: '6px',
                                    width: '100%',
                                    backgroundColor: '#ccc'
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
                <span className="col">bold</span>
                <span className="col">italic</span>
                <span className="col">underline</span>
                <span className="col">color</span>
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