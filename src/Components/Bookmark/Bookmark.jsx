

const Bookmark = ({bookmark,id}) => {
    console.log(bookmark);
    return (
        <div className=" ml-7 ">
            <h2>{id+1}       {bookmark.course_name}</h2>
        </div>
    );
};

export default Bookmark;