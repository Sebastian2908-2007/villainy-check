
import parse from 'html-react-parser';
const MyHtml = ({resultsMeaning}) => {
console.log(resultsMeaning,'in comp');
    return(
        <div>
         {parse(resultsMeaning)}
         <div>BOOB</div>
        </div>
    );
};

export default MyHtml;