import { useState } from "react";
import "./App.css";
import AreaChartComponent from "./components/AreaChartComponent";
import HorizontalBarChart from "./components/HorizontalBarChartComponent";
import DoubleBarChart from "./components/DoubleBarChartComponent";

const maleSalaries = [
  { age: "18-21", salary: 18392 },
  { age: "22-29", salary: 26856 },
  { age: "30-39", salary: 34210 },
  { age: "40-49", salary: 38463 },
  { age: "50-59", salary: 36000 },
  { age: "60+", salary: 30944 },
];

const femaleSalaries = [
  { age: "18-21", salary: 17005 },
  { age: "22-29", salary: 25115 },
  { age: "30-39", salary: 30540 },
  { age: "40-49", salary: 31679 },
  { age: "50-59", salary: 28811 },
  { age: "60+", salary: 24850 },
];

const combinedSalaries = maleSalaries.map((item, index) => ({
  age: item.age,
  menSalary: item.salary,
  womenSalary: femaleSalaries[index].salary,
}));

function App() {
  return (
    <div className="content-evenly">
      <a
        href="https://github.com/yourusername"
        target="_blank"
        rel="noopener noreferrer"
        className="github-link"
      >
        <img
          src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" // github logo image
          alt="GitHub"
          className="github-icon"
        />
      </a>

      <div>
        <h1 className="text-3xl font-bold mt-5 text-center text-violet-900 underline">
          UK Average House Prices and Median Salary (2000-2020)
        </h1>
      </div>

      <div className="mt-8 mx-8">
        <AreaChartComponent />
      </div>

      <h2 className="text-3xl font-bold mt-5 text-center text-violet-900">
        UK Median Salary By Age and Sex
      </h2>

      <div className="center grid grid-cols-2 gap-12 content">
        <div>
          <h2 className="text-2xl font-bold">
            <p className="text-center">Male</p>
          </h2>
          <HorizontalBarChart
            data={maleSalaries}
            dataKey="salary"
            barColor="#1E40AF"
          />
        </div>
        <div>
          <h2 className="text-2xl font-bold">
            <p className="text-center">Female</p>
          </h2>
          <HorizontalBarChart
            data={femaleSalaries}
            dataKey="salary"
            barColor="#962c87"
          />
        </div>
      </div>
      <div className="mt-8 mx-8">
        <DoubleBarChart data={combinedSalaries} />
      </div>
    </div>
  );
}

export default App;
