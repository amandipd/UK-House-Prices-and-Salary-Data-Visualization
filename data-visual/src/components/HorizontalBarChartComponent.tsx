import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LabelList,
} from "recharts";

interface HorizontalBarChartProps {
  data: { age: string; value: number }[];  // Expecting value here
  dataKey: string;
  barColor?: string;
}

const HorizontalBarChart: React.FC<HorizontalBarChartProps> = ({
  data,
  dataKey,
  barColor = "#1E40AF",
}) => {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart
        layout="vertical"
        data={data}
        margin={{ top: 20, right: 50, left: 50, bottom: 20 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          type="number"
          tickFormatter={(value) => `$${value.toLocaleString()}`}
          domain={[0, "dataMax + 5000"]}
        />
        <YAxis type="category" dataKey="age" />
        <Tooltip
          formatter={(value: number) => `$${value.toLocaleString()}`}
          labelFormatter={() => ""}
          itemStyle={{ textTransform: "capitalize" }}
          content={({ payload }) =>
            payload && payload.length > 0 && payload[0] ? (
              <div className="custom-tooltip p-2 bg-white border rounded shadow">
                <p className="text-sm font-bold">{`Age Group: ${payload[0].payload.age}`}</p>
                <p className="text-sm">{`Salary: $${payload[0]?.value?.toLocaleString()}`}</p> {/* Optional chaining */}
              </div>
            ) : null
          }
        />
        <Bar dataKey={dataKey} fill={barColor} barSize={20}>
          <LabelList
            dataKey="age"
            position="insideLeft"
            fill="white"
            fontWeight="bold"
          />
          <LabelList
            dataKey={dataKey}
            position="right"
            formatter={(value: number) => `$${value.toLocaleString()}`}
            fill="#333"
            fontWeight="bold"
          />
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
};

export default HorizontalBarChart;
