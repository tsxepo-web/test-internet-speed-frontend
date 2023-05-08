import { groups } from "./components/barCartComponents/addGroups.js";
import { texts } from "./components/barCartComponents/addTexts.js";
import { xAxis, yAxis } from "./components/barCartComponents/axis.js";
import { getBackground } from "./components/barCartComponents/background.js";
import { createBarChartSvg } from "./components/barCartComponents/barSvg.js";
import { barColors } from "./components/barCartComponents/colorBars.js";
import { rectangle } from "./components/barCartComponents/createRect.js";
import { xGrids, yGrids } from "./components/barCartComponents/grids.js";


export async function drawBarChart(isps) {
    const margin = { top: 20, right: 20, bottom: 30, left: 50 };
    const width = 600;
    const height = 600;
  
    const svg = createBarChartSvg(width, margin, height);
    
    const background =  getBackground(svg, width, margin, height);
    const colorScale = barColors(isps);
  
    const y = yAxis(isps, height, margin);
    const x = xAxis(isps, margin, width);

    const yGrid = yGrids(svg, margin, width, y);
    const xGrid =  xGrids(svg, height, margin, x);
    
    groups(svg, height, margin, x, y);
    rectangle(svg, colorScale, x, y, isps);
    texts(svg, height, width);
  }