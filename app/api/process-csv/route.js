import { NextResponse } from "next/server";
import { parse } from "csv-parse";
import { promisify } from "util";

const parseAsync = promisify(parse);

function isNumeric(value) {
  return !isNaN(parseFloat(value)) && isFinite(value);
}

function isInteger(value) {
  return Number.isInteger(parseFloat(value));
}

export async function POST(request) {
  try {
    const formData = await request.formData();
    const file = formData.get('file');
    
    if (!file) {
      return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
    }

    const fileContent = await file.text();
    const records = await parseAsync(fileContent, {
      columns: true,
      skip_empty_lines: true
    });

    if (!records.length) {
      return NextResponse.json({ error: "CSV file is empty" }, { status: 400 });
    }

    // Process numerical columns
    const numericalColumns = {};
    Object.keys(records[0]).forEach(col => {
      if (isNumeric(records[0][col])) {
        numericalColumns[col] = [];
      }
    });

    // Collect numeric values
    records.forEach(row => {
      Object.entries(row).forEach(([col, value]) => {
        if (numericalColumns.hasOwnProperty(col) && isNumeric(value)) {
          numericalColumns[col].push(parseFloat(value));
        }
      });
    });

    // Compute statistics for each column
    const features = Object.entries(numericalColumns).map(([col, values]) => {
      if (!values.length) return null;

      if (values.every(v => isInteger(v))) {
        return {
          name: col,
          datatype: "integer",
          range_or_mean: `${Math.min(...values)}-${Math.max(...values)}`,
          std_dev: ""
        };
      } else {
        const mean = values.reduce((a, b) => a + b) / values.length;
        const variance = values.reduce((a, b) => a + Math.pow(b - mean, 2), 0) / (values.length - 1);
        const stdDev = Math.sqrt(variance);

        return {
          name: col,
          datatype: "float",
          range_or_mean: mean.toFixed(2),
          std_dev: stdDev.toFixed(2)
        };
      }
    }).filter(Boolean);

    return NextResponse.json({ features });
  } catch (error) {
    console.error("Error processing CSV:", error);
    return NextResponse.json({ error: "Error processing CSV file" }, { status: 500 });
  }
}
