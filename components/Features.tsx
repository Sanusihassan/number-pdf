import { useSelector } from "react-redux";
import { ToolState } from "../src/store";
import { MdDisplaySettings } from "react-icons/md";
import { IoLanguageOutline } from "react-icons/io5";
import UserFreindly from "./icons/UserFreindly";

export const Features = ({ features }: {
    features: { title: string; description: string }[];
}) => {
    const stateShowTool = useSelector(
        (state: { tool: ToolState }) => state.tool.showTool
    );
    const icons = [MdDisplaySettings, IoLanguageOutline, UserFreindly]
    return (
        <div className={`features${stateShowTool ? "" : " d-none"}`}>
            {features.map(({ title, description }, i) => {
                const Icon = icons[i];
                return (
                    <div className="feature">
                        <Icon className="feature-icon" />
                        <div className="title">{title}</div>
                        <p className="description">{description}</p>
                    </div>
                )
            })}
        </div>
    )
}