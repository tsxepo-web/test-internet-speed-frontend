import { x, y } from "./components/lineChartComponents/axis.js";
import { background } from "./components/lineChartComponents/background.js";
import { calls } from "./components/lineChartComponents/calls.js";
import { labels } from "./components/lineChartComponents/labels.js";
import { lines, showLine } from "./components/lineChartComponents/line.js";
import { scaleX, scaleY } from "./components/lineChartComponents/scaling.js";
import { createSvg } from "./components/lineChartComponents/svg.js";
import { Xgrid } from "./components/lineChartComponents/xGrid.js";
import { Ygrid} from "./components/lineChartComponents/yGrid.js";


export function drawLineChart(historyData) {
    const width = 600;
    const height = 600;
    const margin = { top: 20, right: 20, bottom: 50, left: 50 };

    const xScale = scaleX(historyData, margin, width);
    const yScale = scaleY(historyData, height, margin);

    const xAxis = x(height, margin, xScale);    
    const yAxis = y(margin, yScale);

    const line = lines(xScale, yScale);
    const svg = createSvg(width, height);

    background(svg);
    labels(svg, margin, height, width);

    const xGrid = Xgrid(yScale, margin, height);
    const yGrid = Ygrid(yScale, margin, width);

    calls(svg, xAxis, yAxis, xGrid, yGrid);
    showLine(svg, historyData, line);

    return svg.node();
}