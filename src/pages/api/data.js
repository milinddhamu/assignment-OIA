export default (req, res) => {
  const data = {
    ProfileData: [
      {
        name: 'Total Revenues',
        value: 2123430,
        change: 2.5
      },
      {
        name: 'Total Transactions',
        value: 1520,
        change: 2.5
      },
      {
        name: 'Total Likes',
        value: 9721,
        change: 2.5
      },
      {
        name: 'Total Users',
        value: 9721,
        change: 2.5
      },
    ],
    BarChartData: [
      {
        name: 'Week 1',
        user: 4001,
        Guest: 2400,
      },
      {
        name: 'Week 2',
        user: 3000,
        Guest: 1398,
      },
      {
        name: 'Week 3',
        user: 2000,
        Guest: 3700,
      },
      {
        name: 'Week 4',
        user: 2780,
        Guest: 3908,
      },
    ],
    PieChartData: [
      { name: "Basic Tees", value: 55, fill: "#98D89E" },   // Custom color for Group A
      { name: "Custom Short Pants", value: 31, 
        fill: "#F6DC7D" },   // Custom color for Group B
      { name: "Super Hoodies", value: 14, fill: "#EE8484" }, 
    ],
  };

  res.status(200).json(data);
};
