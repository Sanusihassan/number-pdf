/**
 * create a NumberPDFOptions tsx component, and i use bootstrap for styling.
 * the component consist of two components toggled by two radio buttons and h6("page mode")
 * one for single page another for facing pages
 * tree: h6 + SinglePage | FacingPages
 * SinglePage:
 * consist of 5 rows each with 2 columns, each column consist of a title h6 & component
 * row 1: 
 *  column 1:title: "position", component: a grid of 9 small boxes to represent where to put the number.
 *  column 2:title: "margin" a dropdown menu, values: (Samall, Recommended, Big)
 * row 2:
 *  only one column: (input group input[number]) representing first number start from 1 or?
 * row 3:
 * 2 columns, title: which pages do want to number?, 2 * (input group input[number]) for from page and for to
 * row 4:
 * title: text
 * 1 column: dropdown, values: (insert only page number (recommended), page n, page n of x, Custom)
 *  if(custom):
 *  label: Custom text:
 *  input text default_val: page n of x
 *  small(secondary text): text sample: give an example
 * row 5:
 * 6 columns for font, font-size, bold, italic, underline & color
 * FacingPages: pass for now
 */

import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { SinglePage } from "./SinglePage";
import { Checkbox, Radio } from "pretty-checkbox-react";
import "pretty-checkbox/src/pretty-checkbox.scss";
const NumberPDFOptions = () => {
    const [pageMode, setPageMode] = useState("single");

    return (
        <div className="main-number-pdf container">
            <h6 className="option-title number-pdf">Page Mode</h6>
            <Form className="main-form" onSubmit={e => e.preventDefault()}>
                <fieldset className="row justify-content-between mode m-0 p-3">
                    <Radio
                        animation="smooth"
                        defaultChecked
                        checked={pageMode === "single"}
                        onChange={() => setPageMode("single")}
                        shape="curve" variant="thick"
                    >
                        Single Page
                    </Radio>
                    <Radio
                        animation="smooth"
                        checked={pageMode === "facing"}
                        onChange={() => setPageMode("facing")}
                        shape="curve" variant="thick"
                    >
                        Facing Pages
                    </Radio>
                </fieldset>
                {pageMode === "single" &&
                    <SinglePage />
                }
                {pageMode === "facing" &&
                    <div className="facing">
                        {/* Components for facing pages go here */}
                        {/* <> */}
                        <Checkbox
                            animation="smooth"
                            color="primary"
                            //   defaultChecked={checked}
                            //   onChange={onChange}
                            className="ml-1 my-3 mb-0"
                        >
                            First Page is the cover page
                        </Checkbox>
                        <SinglePage />
                    </div>
                }
            </Form>
        </div>
    );
};

export default NumberPDFOptions;
