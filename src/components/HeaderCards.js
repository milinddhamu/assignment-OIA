import SmallCard from './SmallCard';

const HeaderCards = ({data}) => {
  return (
    <>
    <div className="grid grid-cols-2 xl:grid-cols-4 grid-flow-row gap-4 w-full">
      {data.map((item , index) => (
        <SmallCard key={item.name} name={item.name} value={item.value} change={item.change}/>
      ))}
    </div>
    </>
  )
}

export default HeaderCards;