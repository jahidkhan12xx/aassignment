import Bookmark from "../Bookmark/Bookmark";


const Bookmarks = ({cardData,credit,remainCredit}) => {
    return (
        <div className=" w-1/3">
            <div className="card w-96 bg-base-100 shadow-xl">
  <div className="card-body">
    <h2 className="card-title border-b-2 p-4 text-[#2F80ED] font-bold text-lg">Course Hour Remaining : {remainCredit} hr</h2>
    <h2 className="card-title  p-4 font-extrabold text-xl">Course Name : </h2>
    
    {
                cardData.map((bookmark,idx) => <Bookmark key={idx} bookmark={bookmark} id={idx}></Bookmark>)
    }
    <h2 className="card-title border-t-2 p-4 font-extrabold text-xl">Total credit hour : {credit} </h2>
    
    
  </div>
</div>

            

            
        </div>
    );
};

export default Bookmarks;