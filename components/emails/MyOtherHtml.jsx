import parse from 'html-react-parser';
const MyOtherHtml = ({tipsSummary}) => {
console.log(tipsSummary,'in comp Summary');
    return(
        <div>
         {parse(tipsSummary)}
         <div>BOOB</div>
        </div>
    );
};

export default MyOtherHtml;