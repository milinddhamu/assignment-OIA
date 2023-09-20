import { BarChart as BarChartRechart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, CartesianAxis } from 'recharts';
const BarChart = ({data}) => {

  const renderShape = (props) => {
    const { fill, x, y, width, height } = props;
      return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />
  };
  const getPath = (x, y, width, height) => {
    const maxCornerRadius = Math.min(width / 2, height / 2);
    const cornerRadius = 5;
    const adjustedCornerRadius = Math.min(cornerRadius, maxCornerRadius);
    const controlPointDistance = adjustedCornerRadius * (1 - 0.55228);
    
    return `M${x + adjustedCornerRadius},${y}
            H${x + width - adjustedCornerRadius}
            C${x + width - controlPointDistance},${y}
             ${x + width},${y + controlPointDistance}
             ${x + width},${y + adjustedCornerRadius}
            V${y + height - adjustedCornerRadius}
            C${x + width},${y + height - controlPointDistance}
             ${x + width - controlPointDistance},${y + height}
             ${x + width - adjustedCornerRadius},${y + height}
            H${x + adjustedCornerRadius}
            C${x + controlPointDistance},${y + height}
             ${x},${y + height - controlPointDistance}
             ${x},${y + height - adjustedCornerRadius}
            V${y + adjustedCornerRadius}
            C${x},${y + controlPointDistance}
             ${x + controlPointDistance},${y}
             ${x + adjustedCornerRadius},${y}
            Z`;
  };
  
  return (
    <>
    <ResponsiveContainer width="100%" height="100%">
        <BarChartRechart
          width={500}
          height={300}
          data={data}
          barCategoryGap={"30%"}
          barGap={"2%"}
          maxBarSize={40}
        >
          <CartesianGrid vertical={false} />
          <XAxis dataKey="name"
          axisLine={false}
          tickLine={false}
          />
          <YAxis 
            axisLine={false}
            tickLine={false}
          />
          <CartesianAxis  />
          <Tooltip 
            contentStyle={{
            borderRadius: "10px",
          }} />
          <Bar dataKey="Guest" fill="#98D89E" shape={renderShape} />
          <Bar dataKey="user" fill="#EE8484" shape={renderShape}  />
        </BarChartRechart>
      </ResponsiveContainer>
    </>
  );
}

export default BarChart;