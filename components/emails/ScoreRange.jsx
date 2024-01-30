

export default function ScoreRange({resultType,firstName, lastName}) {
    console.log(resultType.split(' '));
    const results = resultType.split(' ');
    let typeBIdeal = false;
    let typeBMild = false;
    let typeBHigh = false;
    let typeBSevere = false;
    let typeAIdeal = false;
    let typeAMild = false;
    let typeAHigh = false;
    let typeASevere = false;
    // ideal = ideal
    //start = mild
    // mid = high
    // far = severly high
    // right = B =imposes
    // left = A = neglects
    // [0] = b
    // [2] = a

// b switch statement
switch (results[0]) {
    case 'ideal':
        typeBIdeal = true;
        break;
    case 'start':
        typeBMild = true;
        break;
    case 'mid':
        typeBHigh = true;
        break;
    case 'far':
        typeBSevere = true;
        break;
        case 'Ideal':
            typeBIdeal = true;
            typeAIdeal = true;
            break;
};

if (results[2]) {
switch (results[2]) {
    case 'ideal':
        typeAIdeal = true;
        break;
    case 'start':
        typeAMild = true;
        break;
    case 'mid':
        typeAHigh = true;
        break;
    case 'far':
        typeASevere = true;
        break;
         default:
            typeBIdeal = true;
            typeAIdeal = true;
            break;
 };
};

    return(
     <div className="w-[100%]">
        <h1 className="text-xl font-bold font-serif text-center">{firstName}&nbsp;{lastName}'s Score</h1>
        <h2 className="font-semibold text-base mb-2 font-serif mt-2 p-2">One-who-imposes villainy:</h2>
        <ul className="list-disc font-serif">
            <li classname='text-center'>
                <div className="w-full">
                    <span className={!typeAIdeal ? '':'text-red-600 underline font-bold'}>Ideal</span>
                    <span 
                    className={
                        !typeAMild ?"ml-2 border-l border-black pl-2"
                        :
                        "ml-2 border-l border-black pl-2 text-red-600 underline font-bold"
                        }>
                            Mild
                        </span>
                    <span 
                    className={
                        !typeAHigh ?"ml-2 border-l border-black pl-2"
                        :
                        "ml-2 border-l border-black pl-2 text-red-600 underline font-bold"
                        }>
                            High
                        </span>
                    <span 
                    className={
                        !typeASevere ?"ml-2 border-l border-black pl-2"
                        :
                        "ml-2 border-l border-black pl-2 text-red-600 underline font-bold"
                        }>
                            Severely High
                        </span>
                </div>
            </li>
        </ul>
        <h2 className="font-semibold mb-2 text-base font-serif mt-2 p-2">One-who-neglects villainy: </h2>
        <ul className="list-disc w-full font-serif">
            <li classname='text-center w-full'>
                <div className="w-full">
                    <span className={!typeBIdeal ? '':"text-red-600 underline font-bold"}>Ideal</span>
                    <span className={!typeBMild ? "ml-2 border-l border-black pl-2":"ml-2 border-l border-black pl-2 font-bold underline text-red-600"}>Mild</span>
                    <span className={!typeBHigh ? "ml-2 border-l border-black pl-2":"ml-2 border-l border-black pl-2 font-bold underline text-red-600"}>High</span>
                    <span className={!typeBSevere ? "ml-2 border-l border-black pl-2":"ml-2 border-l border-black pl-2 font-bold underline text-red-600"}>Severely High</span>
                </div>
            </li>
        </ul>
     </div>
    );
}; 