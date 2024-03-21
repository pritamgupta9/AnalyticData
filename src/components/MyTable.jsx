import React from "react";

function MyTable({ data, toggle }) {
  const tableCellStyle = { border: "1px solid black", padding: "10px" };

  return (
    <>
      <h1>{toggle ? "Gamma Result" : "Flavanoids Result"}</h1>
      <table style={{ borderCollapse: "collapse", border: "1px solid black" }}>
        <thead>
          <tr>
            <th style={tableCellStyle}>Alcohol</th>
            <th style={tableCellStyle}>
              {toggle ? "Mean Gamma" : "Mean Flavanoids"}
            </th>
            <th style={tableCellStyle}>
              {toggle ? "Median Gamma" : "Median Flavanoids"}
            </th>
            <th style={tableCellStyle}>
              {toggle ? "Mode Gamma" : "Mode Flavanoids"}
            </th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(data).map(([Alcohol, stats]) => (
            <tr key={Alcohol} style={tableCellStyle}>
              <td style={tableCellStyle}>class {Alcohol}</td>
              <td style={tableCellStyle}>{stats.mean.toFixed(3)}</td>
              <td style={tableCellStyle}>{stats.median.toFixed(3)}</td>
              <td style={{tableCellStyle}}>
                {stats.mode.length > 1
                  ? `${stats.mode.join(", ")}\nno mode found multiple data`
                  : stats.mode[0].toFixed(3)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default MyTable;
