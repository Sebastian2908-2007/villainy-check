
import parse from 'html-react-parser';
const MyHtml = ({resultsMeaning}) => {
console.log(resultsMeaning,'in comp');
    return(
        <div>
         {parse(resultsMeaning)}
        </div>
    );
};

export default MyHtml;