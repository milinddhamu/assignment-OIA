import { ThreeDots } from  'react-loader-spinner'

const Loading = () => {
  return (
    <>
    <div className="flex justify-center items-center h-full w-full">
    <div className="h-8 w-8 md:h-12 md:w-12">
      <ThreeDots 
        height="100%" 
        width="100%" 
        radius="9"
        color="#3C83F9" 
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
        />
      </div>
    </div>
    </>
  );
}

export default Loading;