// Options.tsx (number-pdf) - FIXED
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Select from "react-select";
import type { StylesConfig } from "react-select";
import { HexColorPicker } from "react-colorful";
import {
  Grid3x3,
  Type,
  Bold,
  Italic,
  Underline as UnderlineIcon,
  Hash,
} from "lucide-react";
import { setField, type ToolState } from "../../src/store";
import type { edit_page } from "../../src/content";

const THEME_COLOR = "#b71540";

// ============ TYPES ============
interface NumberPdfSettings {
  pageMode: "single" | "facing";
  firstPageIsCover: boolean;
  position: number;
  margin: "small" | "recommended" | "big";
  startNumber: number;
  fromPage: number;
  toPage: number;
  textOption: "only-number" | "page-n" | "page-n-of-x" | "custom";
  customText: string;
  font: string;
  fontSize: number;
  bold: boolean;
  italic: boolean;
  underline: boolean;
  color: string;
  documentLanguage: string;
}

interface OptionsProps {
  content: edit_page["options"];
}

interface PositionGridProps {
  selectedPosition: number;
  onPositionChange: (position: number) => void;
  themeColor: string;
}

interface ColorPickerProps {
  color: string;
  onChange: (color: string) => void;
  label: string;
}

interface CustomCheckboxProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label: string;
  themeColor: string;
}

interface CustomRadioProps {
  checked: boolean;
  onChange: () => void;
  label: string;
  themeColor: string;
}

// ============ SELECT STYLES ============
const customSelectStyles: StylesConfig<any, false> = {
  control: (base) => ({
    ...base,
    borderColor: "#e5e7eb",
    boxShadow: "none",
    "&:hover": {
      borderColor: THEME_COLOR,
    },
    cursor: "pointer",
    minHeight: "42px",
  }),
  option: (base, state) => ({
    ...base,
    backgroundColor: state.isSelected
      ? THEME_COLOR
      : state.isFocused
        ? "#fce7f3"
        : "white",
    color: state.isSelected ? "white" : "black",
    cursor: "pointer",
  }),
};

// ============ FONT OPTIONS ============
const fontOptions = [
  { value: "Arial", label: "Arial" },
  { value: "Helvetica", label: "Helvetica" },
  { value: "Times New Roman", label: "Times New Roman" },
  { value: "Courier New", label: "Courier New" },
  { value: "Georgia", label: "Georgia" },
  { value: "Verdana", label: "Verdana" },
  { value: "Comic Sans MS", label: "Comic Sans MS" },
  { value: "Impact", label: "Impact" },
];

// ============ FONT SIZE OPTIONS ============
const fontSizeOptions = [
  { value: 8, label: "8" },
  { value: 10, label: "10" },
  { value: 12, label: "12" },
  { value: 14, label: "14" },
  { value: 16, label: "16" },
  { value: 18, label: "18" },
  { value: 20, label: "20" },
  { value: 24, label: "24" },
  { value: 28, label: "28" },
  { value: 32, label: "32" },
];

// ============ LANGUAGE OPTIONS ============
const languageOptions = [
  { value: "en", label: "English" },
  { value: "ar", label: "العربية" },
  { value: "es", label: "Español" },
  { value: "fr", label: "Français" },
  { value: "hi", label: "हिन्दी" },
  { value: "zh", label: "中文" },
];

// ============ POSITION GRID COMPONENT ============
const PositionGrid = ({
  selectedPosition,
  onPositionChange,
  themeColor,
}: PositionGridProps) => {
  return (
    <div className="grid grid-cols-3 gap-0 border-2 border-dashed border-gray-300 rounded-lg overflow-hidden">
      {Array.from({ length: 9 }).map((_, index) => (
        <button
          key={index}
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onPositionChange(index);
          }}
          className={`aspect-square flex items-center justify-center transition-all hover:bg-gray-50 ${
            selectedPosition === index ? "bg-opacity-20" : ""
          } ${
            // ✅ Add borders only where needed (no double borders)
            index % 3 !== 2 ? "border-r border-dashed border-gray-300" : ""
          } ${index < 6 ? "border-b border-dashed border-gray-300" : ""}`}
          style={{
            backgroundColor:
              selectedPosition === index ? `${themeColor}30` : undefined,
          }}
        >
          <div
            className={`w-2 h-2 rounded-full transition-all ${
              selectedPosition === index ? "opacity-100" : "opacity-0"
            }`}
            style={{
              backgroundColor:
                selectedPosition === index ? themeColor : undefined,
            }}
          />
        </button>
      ))}
    </div>
  );
};

// ============ COLOR PICKER COMPONENT ============
const ColorPicker = ({ color, onChange, label }: ColorPickerProps) => {
  const [showPicker, setShowPicker] = useState(false);

  return (
    <div className="relative">
      <label className="block text-sm font-medium text-gray-700 mb-2">
        {label}
      </label>
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          setShowPicker(!showPicker);
        }}
        className="w-full h-12 rounded-lg border-2 border-gray-300 flex items-center gap-3 px-3 hover:border-gray-400 transition-colors"
      >
        <div
          className="w-8 h-8 rounded border border-gray-300"
          style={{ backgroundColor: color }}
        />
        <span className="text-sm font-mono text-gray-700 uppercase">
          {color}
        </span>
      </button>
      {showPicker && (
        <div className="absolute z-50 mt-2 bg-white rounded-lg shadow-xl border border-gray-200 p-3">
          <HexColorPicker color={color} onChange={onChange} />
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setShowPicker(false);
            }}
            className="mt-3 w-full px-4 py-2 text-sm font-medium text-white rounded-lg transition-colors"
            style={{ backgroundColor: THEME_COLOR }}
          >
            {label}
          </button>
        </div>
      )}
    </div>
  );
};

// ============ CUSTOM CHECKBOX COMPONENT ============
const CustomCheckbox = ({
  checked,
  onChange,
  label,
  themeColor,
}: CustomCheckboxProps) => {
  return (
    <label
      className="d-flex items-center gap-3 cursor-pointer group"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="relative">
        <input
          type="checkbox"
          checked={checked}
          onChange={(e) => {
            e.stopPropagation();
            onChange(e.target.checked);
          }}
          className="sr-only peer"
        />
        <div
          className={`w-6 h-6 border-2 rounded-md flex items-center justify-center transition-all peer-focus:ring-2 peer-focus:ring-offset-2 ${
            checked
              ? "border-transparent shadow-sm"
              : "border-gray-300 bg-white group-hover:border-gray-400"
          }`}
          style={{
            backgroundColor: checked ? themeColor : undefined,
            outlineColor: checked ? `${themeColor}40` : undefined,
          }}
        >
          {checked && (
            <svg
              className="w-4 h-4 text-white"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="3"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M5 13l4 4L19 7" />
            </svg>
          )}
        </div>
      </div>
      <span className="text-sm font-medium text-gray-700 select-none">
        {label}
      </span>
    </label>
  );
};

// ============ CUSTOM RADIO COMPONENT ============
const CustomRadio = ({
  checked,
  onChange,
  label,
  themeColor,
}: CustomRadioProps) => {
  return (
    <label
      className="flex items-center gap-3 cursor-pointer group"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="relative">
        <input
          type="radio"
          checked={checked}
          onChange={(e) => {
            e.stopPropagation();
            onChange();
          }}
          className="sr-only peer"
        />
        <div
          className={`w-6 h-6 border-2 rounded-full flex items-center justify-center transition-all peer-focus:ring-2 peer-focus:ring-offset-2 ${
            checked
              ? "border-transparent shadow-sm"
              : "border-gray-300 bg-white group-hover:border-gray-400"
          }`}
          style={{
            borderColor: checked ? themeColor : undefined,
            outlineColor: checked ? `${themeColor}40` : undefined,
          }}
        >
          {checked && (
            <div
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: themeColor }}
            />
          )}
        </div>
      </div>
      <span className="text-sm font-medium text-gray-700 select-none">
        {label}
      </span>
    </label>
  );
};

// ============ MAIN COMPONENT ============
const Options = ({ content }: OptionsProps) => {
  const dispatch = useDispatch();

  const numberPdfSettings = useSelector(
    (state: { tool: ToolState }) => state.tool.numberPdfSettings,
  ) as NumberPdfSettings;

  const pageCount = useSelector(
    (state: { tool: ToolState }) => state.tool.pageCount,
  );

  const updateSettings = (updates: Partial<NumberPdfSettings>) => {
    dispatch(
      setField({ numberPdfSettings: { ...numberPdfSettings, ...updates } }),
    );
  };

  return (
    <div className="options-container p-6 space-y-6">
      {/* Page Mode */}
      <div>
        <h3 className="text-lg font-semibold text-gray-800 mb-4">
          {content.page_mode}
        </h3>
        {/* ✅ Flex between layout */}
        <div className="flex justify-between">
          <CustomRadio
            checked={numberPdfSettings.pageMode === "single"}
            onChange={() => updateSettings({ pageMode: "single" })}
            label={content.single_page}
            themeColor={THEME_COLOR}
          />
          <CustomRadio
            checked={numberPdfSettings.pageMode === "facing"}
            onChange={() => updateSettings({ pageMode: "facing" })}
            label={content.facing_pages}
            themeColor={THEME_COLOR}
          />
        </div>
      </div>

      {/* First Page is Cover (only for Facing Pages) */}
      {numberPdfSettings.pageMode === "facing" && (
        <CustomCheckbox
          checked={numberPdfSettings.firstPageIsCover}
          onChange={(checked) => updateSettings({ firstPageIsCover: checked })}
          label={content.first_page_is_cover}
          themeColor={THEME_COLOR}
        />
      )}

      {/* Position and Margin */}
      <div className="grid grid-cols-2 gap-4">
        {/* Position */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">
            <Grid3x3 size={16} className="inline mr-2" />
            {content.single_page_options.position}
          </label>
          <PositionGrid
            selectedPosition={numberPdfSettings.position}
            onPositionChange={(position) => updateSettings({ position })}
            themeColor={THEME_COLOR}
          />
        </div>

        {/* Margin */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">
            {content.single_page_options.margin}
          </label>
          <Select
            value={content.single_page_options.margin_options.find(
              (m) => m.value.toLowerCase() === numberPdfSettings.margin,
            )}
            onChange={(option) =>
              option &&
              updateSettings({
                margin: option.value.toLowerCase() as
                  | "small"
                  | "recommended"
                  | "big",
              })
            }
            options={content.single_page_options.margin_options}
            styles={customSelectStyles}
            isSearchable={false}
            placeholder={content.single_page_options.select_margin_placeholder}
          />
        </div>
      </div>

      {/* Start Number */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          <Hash size={16} className="inline mr-2" />
          {content.single_page_options.start_from}
        </label>
        <input
          type="number"
          min="1"
          value={numberPdfSettings.startNumber}
          onChange={(e) =>
            updateSettings({ startNumber: parseInt(e.target.value) || 1 })
          }
          onClick={(e) => e.stopPropagation()}
          className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-[#b71540] focus:outline-none"
        />
      </div>

      {/* Pages Range */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-3">
          {content.single_page_options.page_to_number}
        </label>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-xs text-gray-600 mb-1">
              {content.single_page_options.from}
            </label>
            <input
              type="number"
              min="1"
              value={numberPdfSettings.fromPage}
              onChange={(e) =>
                updateSettings({ fromPage: parseInt(e.target.value) || 1 })
              }
              onClick={(e) => e.stopPropagation()}
              className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-[#b71540] focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-xs text-gray-600 mb-1">
              {content.single_page_options.to}
            </label>
            <input
              type="number"
              min="1"
              max={pageCount}
              value={numberPdfSettings.toPage}
              onChange={(e) =>
                updateSettings({
                  toPage: parseInt(e.target.value) || pageCount,
                })
              }
              onClick={(e) => e.stopPropagation()}
              className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-[#b71540] focus:outline-none"
            />
          </div>
        </div>
      </div>

      {/* Text Options */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-3">
          <Type size={16} className="inline mr-2" />
          {content.single_page_options.text}
        </label>
        <Select
          value={content.single_page_options.page_text_options.find((opt) => {
            const valueMap: Record<string, string> = {
              "insert only page number (recommended)": "only-number",
              "page n": "page-n",
              "page n of x": "page-n-of-x",
              Custom: "custom",
            };
            return valueMap[opt.value] === numberPdfSettings.textOption;
          })}
          onChange={(option) => {
            if (option) {
              const valueMap: Record<string, string> = {
                "insert only page number (recommended)": "only-number",
                "page n": "page-n",
                "page n of x": "page-n-of-x",
                Custom: "custom",
              };
              updateSettings({
                textOption: valueMap[option.value] as any,
              });
            }
          }}
          options={content.single_page_options.page_text_options}
          styles={customSelectStyles}
          isSearchable={false}
        />
      </div>

      {/* Custom Text Input */}
      {numberPdfSettings.textOption === "custom" && (
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {content.single_page_options.custom_text}
          </label>
          <input
            type="text"
            value={numberPdfSettings.customText}
            onChange={(e) => updateSettings({ customText: e.target.value })}
            onClick={(e) => e.stopPropagation()}
            placeholder="page {n} of {x}"
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#b71540] focus:outline-none transition-colors"
          />
          <p className="mt-2 text-xs text-gray-500">
            {content.single_page_options.text_sample}
          </p>
        </div>
      )}

      {/* Text Format */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-gray-800">
          {content.single_page_options.text_format}
        </h3>

        {/* Font and Font Size */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {content.single_page_options.font}
            </label>
            <Select
              value={fontOptions.find(
                (f) => f.value === numberPdfSettings.font,
              )}
              onChange={(option) =>
                option && updateSettings({ font: option.value })
              }
              options={fontOptions}
              styles={customSelectStyles}
              isSearchable={false}
              placeholder={content.single_page_options.select_font_placeholder}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {content.single_page_options.font_size}
            </label>
            <Select
              value={fontSizeOptions.find(
                (f) => f.value === numberPdfSettings.fontSize,
              )}
              onChange={(option) =>
                option && updateSettings({ fontSize: option.value })
              }
              options={fontSizeOptions}
              styles={customSelectStyles}
              isSearchable={false}
            />
          </div>
        </div>

        {/* Bold, Italic, Underline */}
        <div className="flex gap-3">
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              updateSettings({ bold: !numberPdfSettings.bold });
            }}
            className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-lg border-2 transition-all ${
              numberPdfSettings.bold
                ? "border-[#b71540] bg-[#b7154010]"
                : "border-gray-300 hover:border-gray-400"
            }`}
          >
            <Bold size={18} />
            <span className="text-sm font-medium">
              {content.single_page_options.bold}
            </span>
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              updateSettings({ italic: !numberPdfSettings.italic });
            }}
            className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-lg border-2 transition-all ${
              numberPdfSettings.italic
                ? "border-[#b71540] bg-[#b7154010]"
                : "border-gray-300 hover:border-gray-400"
            }`}
          >
            <Italic size={18} />
            <span className="text-sm font-medium">
              {content.single_page_options.italic}
            </span>
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              updateSettings({ underline: !numberPdfSettings.underline });
            }}
            className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-lg border-2 transition-all ${
              numberPdfSettings.underline
                ? "border-[#b71540] bg-[#b7154010]"
                : "border-gray-300 hover:border-gray-400"
            }`}
          >
            <UnderlineIcon size={18} />
            <span className="text-sm font-medium">
              {content.single_page_options.underline}
            </span>
          </button>
        </div>

        {/* Color */}
        <ColorPicker
          color={numberPdfSettings.color}
          onChange={(color) => updateSettings({ color })}
          label={content.single_page_options.color}
        />

        {/* Document Language */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {content.single_page_options.document_language}
          </label>
          <Select
            value={languageOptions.find(
              (l) => l.value === numberPdfSettings.documentLanguage,
            )}
            onChange={(option) =>
              option && updateSettings({ documentLanguage: option.value })
            }
            options={languageOptions}
            styles={customSelectStyles}
            isSearchable={false}
            placeholder={
              content.single_page_options.select_language_placeholder
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Options;
