import type { Content } from "../content";
import "./ProfilePlot.css";

/** Scale geometry, in viewBox units. */
const TRACK_START = 116;
const TRACK_END = 344;
const POINTS = 7;
const STEP = (TRACK_END - TRACK_START) / (POINTS - 1);
const ROW_TOP = 26;
const ROW_GAP = 48;

const x = (value: number) => TRACK_START + (value - 1) * STEP;
const y = (index: number) => ROW_TOP + index * ROW_GAP;

/**
 * The signature element: a bipolar working-style profile drawn the way a
 * psychological assessment sheet plots one — anchored poles, a marked point
 * per dimension, and a line connecting the marks into a profile.
 */
export function ProfilePlot({ content }: { content: Content }) {
  const { title, note, rows, caption } = content.profile;
  const height = y(rows.length - 1) + 54;
  const polyline = rows.map((row, i) => `${x(row.value)},${y(i)}`).join(" ");
  const summary = rows
    .map((row) => `${row.left} ${row.value}/${POINTS} ${row.right}`)
    .join("; ");

  return (
    <figure className="plot">
      <figcaption className="plot__head">
        <h2 className="plot__title">{title}</h2>
        <p className="plot__note">{note}</p>
      </figcaption>

      <svg
        className="plot__svg"
        viewBox={`0 0 460 ${height}`}
        role="img"
        aria-label={`${title}. ${summary}`}
      >
        {rows.map((row, i) => (
          <g className="plot__row" key={row.left}>
            <text className="plot__pole plot__pole--left" x={TRACK_START - 14} y={y(i) + 4}>
              {row.left}
            </text>

            <line
              className="plot__track"
              x1={TRACK_START}
              y1={y(i)}
              x2={TRACK_END}
              y2={y(i)}
            />

            {Array.from({ length: POINTS }, (_, t) => (
              <line
                className="plot__tick"
                key={t}
                x1={TRACK_START + t * STEP}
                y1={y(i) - 4}
                x2={TRACK_START + t * STEP}
                y2={y(i) + 4}
              />
            ))}

            <text className="plot__pole plot__pole--right" x={TRACK_END + 14} y={y(i) + 4}>
              {row.right}
            </text>
          </g>
        ))}

        <polyline className="plot__line" points={polyline} />

        {rows.map((row, i) => (
          <circle
            className="plot__mark"
            key={`mark-${row.left}`}
            cx={x(row.value)}
            cy={y(i)}
            r={5.5}
            style={{ animationDelay: `${0.55 + i * 0.09}s` }}
          />
        ))}

        <g className="plot__scale">
          {Array.from({ length: POINTS }, (_, t) => (
            <text key={t} x={TRACK_START + t * STEP} y={y(rows.length - 1) + 30}>
              {t + 1}
            </text>
          ))}
        </g>
      </svg>

      <p className="plot__caption">{caption}</p>
    </figure>
  );
}
