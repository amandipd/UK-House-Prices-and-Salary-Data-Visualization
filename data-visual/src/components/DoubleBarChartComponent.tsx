import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  ReferenceLine,
} from "recharts";

interface SalaryData {
  age: string;
  menSalary: number;
  womenSalary: number;
}

interface DoubleBarChartProps {
  data: SalaryData[];
}

const formatDollar = (value: number) => {
  return `$${value.toLocaleString()}`;
};

const DoubleBarChart: React.FC<DoubleBarChartProps> = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart
        data={data}
        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="age" tick={{ fontSize: 14, fontWeight: "bold" }} />
        <YAxis tickFormatter={formatDollar} tick={{ fontSize: 14 }} />
        <Tooltip
          formatter={(value: number) => formatDollar(value)}
          labelFormatter={(label: string) => `Age Group: ${label}`}
          contentStyle={{
            backgroundColor: "#fff",
            borderRadius: "8px",
            padding: "10px",
          }}
        />
        <Legend wrapperStyle={{ fontSize: "14px", fontWeight: "bold" }} />

        <ReferenceLine y={0} stroke="#000" strokeWidth={2} />

        <Bar
          dataKey="menSalary"
          fill="#1E40AF"
          name="Male"
          barSize={40}
          opacity={0.7}
          radius={[8, 8, 0, 0]}
        />

        <Bar
          dataKey="womenSalary"
          fill="#962c87"
          name="Female"
          barSize={40}
          opacity={0.7}
          radius={[8, 8, 0, 0]}
        />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default DoubleBarChart;
