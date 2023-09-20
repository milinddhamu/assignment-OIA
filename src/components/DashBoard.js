import { useState , useEffect } from "react";
import PieChartCard from './PieChartCard';
import BarChartCard from './BarChartCard';
import HeaderCards from './HeaderCards';
import ProfileCard from './ProfileCard';
import TopBarDashboard from './TopBarDashboard';
import Loading from './Loading';

const DashBoard = ({navbarButton}) => {
  const [apiData, setApiData] = useState(null);
  useEffect(() => {
    fetch('/api/data')
      .then((response) => response.json())
      .then((data) => setApiData(data));
  }, []);
  
  return (
    <div className="flex flex-col w-full max-w-9/12 lg:w-9/12 py-8 px-4 lg:pl-0 gap-6 min-h-screen">
      
        {/* Topbar Dashboard */}
        <TopBarDashboard navbarButton={navbarButton} />

        {apiData ? (
          <>
          <HeaderCards data={apiData?.ProfileData}/>
      
          <BarChartCard data={apiData?.BarChartData} /> 
      <div className="flex flex-col md:flex-row gap-6">
     
          <PieChartCard data={apiData?.PieChartData} />
     
        <ProfileCard />
        
      </div> 
      </> ) : <Loading /> }


  </div>
  );
}

export default DashBoard;