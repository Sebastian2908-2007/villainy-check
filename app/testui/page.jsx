import ScoreRange from "@/components/emails/ScoreRange";
export const recommendOptions = [
    "ideal right start left",
    "ideal right mid left",
    "ideal right far left",
    "start right ideal left",
    "start right start left",
    "start right mid left",
    "start right far left",
    "mid right ideal left",
    "mid right start left",
    "mid right mid left",
    "mid right far left",
    "far right ideal left",
    "far right start left",
    "far right mid left",
    "far right far left",
    "Ideal"
];
//A=Right
//B=Left
export default function TestUi() {
    const resultType= recommendOptions[0];
    return(
        <>
        <ScoreRange resultType={resultType}/>
        </>
    );
};