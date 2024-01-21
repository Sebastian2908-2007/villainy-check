

export default function ScoreRange({resultType}) {
    console.log(resultType.split(' '));
    let typeBIdeal = false;
    let typeBMild = false;
    let typeBHigh = false;
    let typeBSevere = false;
    let typeAIdeal = false;
    let typeAMild = false;
    let typeAHigh = false;
    let typeASevere = false;
    return(
     <div className="w-[50%]">
        <h1 className="text-lg font-bold font-serif">The Tester's Score</h1>
        <h2 className="font-semibold mb-2 mt-2">One-who-imposes villainy:</h2>
        <ul className="list-disc">
            <li>
                <div className="w-full">
                    <span className={!typeBIdeal ? '':''}>Ideal</span>
                    <span 
                    className={
                        !typeBMild ?"ml-2 border-l border-black pl-2":"ml-2 border-l border-black pl-2 color-red"
                        }>
                            Mild
                        </span>
                    <span 
                    className={
                        !typeBHigh ?"ml-2 border-l border-black pl-2":"ml-2 border-l border-black pl-2 color-red"
                        }>
                            High
                        </span>
                    <span 
                    className={
                        !typeBSevere ?"ml-2 border-l border-black pl-2":"ml-2 border-l border-black pl-2 color-red"
                        }>
                            Severely High
                        </span>
                </div>
            </li>
        </ul>
        <h2 className="font-semibold mb-2 mt-2">One-who-neglects villainy: </h2>
        <ul className="list-disc">
            <li>
                <div className="w-full">
                    <span className={!typeAIdeal ? '':""}>Ideal</span>
                    <span className={!typeAIdeal ? "ml-2 border-l border-black pl-2":""}>Mild</span>
                    <span className={!typeAIdeal ? "ml-2 border-l border-black pl-2":""}>High</span>
                    <span className={!typeAIdeal ? "ml-2 border-l border-black pl-2":""}>Severely High</span>
                </div>
            </li>
        </ul>
     </div>
    );
}; 