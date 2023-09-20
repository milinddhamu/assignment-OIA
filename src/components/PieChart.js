import { PieChart as PieChartRecharts, Pie,Cell } from "recharts";

const PieChart = ({ data }) => {
  return (
    <>
    <div className="pb-3 -ml-3 md:scale-90 lg:scale-100">
            <PieChartRecharts width={200} height={200}>
              <Pie
                data={data}
                cx={100}
                cy={100}
                innerRadius={"70%"}
                outerRadius={"90%"}
                dataKey="value"
                paddingAngle={-20}
                cornerRadius={30}
            >
                  {data?.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.fill} />
                ))}
            </Pie>
          </PieChartRecharts>
      </div>
    </>
  );
}

export default PieChart;