import { arcLine, endCircle, pathForeground } from "../../charts/donutchart.js";

export function arcPath(mbps) {
    arcLine.endAngle((mbps / 180) * Math.PI - Math.PI/2);
    pathForeground.datum(mbps).attr('d', arcLine)
    endCircle.attr('transform', `translate(${arcLine.centroid(mbps *2)})`);
}