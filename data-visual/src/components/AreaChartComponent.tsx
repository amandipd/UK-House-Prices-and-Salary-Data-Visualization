import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";


interface TooltipData {
  avgHousePrice: number;
  medSalary: number;
  year: string;
}


interface CustomTooltipProps {
  payload?: { payload: TooltipData }[]; // Payload comes as an array of objects
  label?: string; // Label will be a string (year)
}

const data = [
  { year: "2000", avgHousePrice: 145756, medSalary: 32443.92 },
  { year: "2001", avgHousePrice: 163517, medSalary: 33357.5 },
  { year: "2002", avgHousePrice: 199821, medSalary: 33898.44 },
  { year: "2003", avgHousePrice: 224849, medSalary: 34155.19 },
  { year: "2004", avgHousePrice: 247493, medSalary: 34630.76 },
  { year: "2005", avgHousePrice: 249549, medSalary: 34950.06 },
  { year: "2006", avgHousePrice: 262390, medSalary: 34576.58 },
  { year: "2007", avgHousePrice: 269297, medSalary: 34114.51 },
  { year: "2008", avgHousePrice: 223507, medSalary: 34337.23 },
  { year: "2009", avgHousePrice: 229553, medSalary: 35399.83 },
  { year: "2010", avgHousePrice: 220496, medSalary: 33938.03 },
  { year: "2011", avgHousePrice: 212111, medSalary: 32524.53 },
  { year: "2012", avgHousePrice: 203407, medSalary: 31967.65 },
  { year: "2013", avgHousePrice: 212183, medSalary: 31656.55 },
  { year: "2014", avgHousePrice: 225514, medSalary: 31159.83 },
  { year: "2015", avgHousePrice: 232759, medSalary: 31307.83 },
  { year: "2016", avgHousePrice: 237955, medSalary: 31420.16 },
  { year: "2017", avgHousePrice: 234936, medSalary: 30939.54 },
  { year: "2018", avgHousePrice: 230887, medSalary: 30772.44 },
  { year: "2019", avgHousePrice: 227812, medSalary: 30833.95 },
  { year: "2020", avgHousePrice: 239753, medSalary: 31487 },
];

const CustomTooltip = ({ payload, label }: CustomTooltipProps) => {
  if (!payload || payload.length === 0) return null;
  const { avgHousePrice, medSalary } = payload[0].payload;

  return (
    <div className="custom-tooltip bg-white p-3 border rounded shadow-md">
      <p>
        <strong>Year: </strong>
        {label}
      </p>
      <p>
        <strong>Average House Price: </strong>${avgHousePrice.toLocaleString()}
      </p>
      <p>
        <strong>Median Salary: </strong>${medSalary.toLocaleString()}
      </p>
    </div>
  );
};

const formatYAxis = (value: number) => {
  return `$${value.toLocaleString()}`;
};

const AreaChartComponent = () => {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <AreaChart data={data}>
        <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />

        <XAxis
          dataKey="year"
          interval="preserveStartEnd"
          tick={{ fontSize: 12, fill: "#333" }}
          axisLine={{ stroke: "#333", strokeWidth: 1 }}
        />

        <YAxis
          tickFormatter={formatYAxis}
          domain={["auto", "auto"]}
          tick={{ fontSize: 12, fill: "#333" }}
          axisLine={{ stroke: "#333", strokeWidth: 1 }}
        />

        <Tooltip content={<CustomTooltip />} />

        <Area
          type="monotone"
          dataKey="avgHousePrice"
          stroke="#6667ac"
          fill="#6667ac"
          fillOpacity={0.3}
          strokeWidth={2}
          dot={{ stroke: "#1E40AF", strokeWidth: 2, fill: "#fff" }}
        />

        <Area
          type="monotone"
          dataKey="medSalary"
          stroke="#10B981"
          fill="#10B981"
          fillOpacity={0.3}
          strokeWidth={2}
          dot={{ stroke: "#10B981", strokeWidth: 2, fill: "#fff" }}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default AreaChartComponent;
