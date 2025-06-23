import LineChart from "./charts/LineChart";
import PieChart from "./charts/PieChart";
import DoughnutChart from "./charts/DoughnutChart";
import BarChart from "./charts/BarChart";
import BarLineChart from "./charts/BarLineChart";
import DualAxisChart from "./charts/DualAxisChart";
import ColoredBarChart from "./charts/ColoredBarChart";
import ComplicatedChart from "./charts/ComplicatedChart";

function App() {
  return (
    <div style={{ maxWidth: 800, margin: "auto", padding: 20 }}>
      <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
        <h1>Highcharts Examples</h1>
        <section>
          <h2>1. Colored Bar Chart</h2>
          <ColoredBarChart />
        </section>

        <section>
          <h2>2. Dual Axis Chart</h2>
          <DualAxisChart />
        </section>

        <section>
          <h2>3. Pie Chart</h2>
          <PieChart />
        </section>

        <section>
          <h2>4. Doughnut Chart</h2>
          <DoughnutChart />
        </section>

        <section>
          <h2>5. Bar Chart</h2>
          <BarChart />
        </section>

        <section>
          <h2>6. Bar + Line Chart</h2>
          <BarLineChart />
        </section>

        <section>
          <h2>6. Line Chart</h2>
          <LineChart />
        </section>

        <section>
          <h2>7. Complicated Chart</h2>
          <ComplicatedChart />
        </section>
      </div>
    </div>
  );
}

export default App;
