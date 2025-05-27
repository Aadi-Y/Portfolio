import { useEffect, useState } from "react";

function Sample() {
    const [linkedInCount, setLinkedInCount] = useState(0);
    const [dsaCount, setDsaCount] = useState(0);

    const linkedInFinal = 789;
    const dsaFinal = 51;

    useEffect(() => {
        const counting = setInterval(() => {
            setLinkedInCount(prev => {
                if (prev < linkedInFinal) return prev + 1;
                return prev;
            });

            setDsaCount(prev => {
                if (prev < dsaFinal) return prev + 1;
                return prev;
            });
        }, 2);

        return () => clearInterval(counting); // cleanup
    }, []);

    return (
        <section className="text-white flex gap-5 w-[90%]">
            <div className="flex rounded-xl p-3 gap-1 bg-[#2A2828] flex-1">
                <div className="border-2 border-amber-500 ">

                </div>
                <h1>Linked In : <span className="text-amber-500">{linkedInCount}</span></h1>
            </div>
            <div className="flex rounded-xl p-3 bg-[#2A2828] gap-1 flex-1">
                <div className="border-2 border-amber-500">

                </div>
                <h1>DSA Problems : <span className="text-amber-500">{dsaCount}</span></h1>
            </div>
        </section>
    );
}

export default Sample;
