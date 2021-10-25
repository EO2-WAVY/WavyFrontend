import { RefObject, useEffect, useState } from "react";
import styled from "styled-components";
import { fmMmSsToSs } from "utils/formatting/formattingDuration";

interface WrongSectionsProps {
    wrong_sections: string[];
    barRef: RefObject<HTMLDivElement>;
    rvDuration: number;
}

const WrongSections = ({
    wrong_sections,
    barRef,
    rvDuration,
}: WrongSectionsProps) => {
    const [wrongSections, setWrongSections] = useState<WrongSection[]>([]);

    useEffect(() => {
        if (!barRef.current) return;
        const { clientWidth } = barRef.current;

        const timeToClientX = (time: number): number => {
            return (time * clientWidth) / rvDuration;
        };

        wrong_sections.forEach((wrongSection) => {
            const [start, end] = wrongSection.split("-");
            const nStart = fmMmSsToSs(start);
            const nEnd = fmMmSsToSs(end);
            const startPos = timeToClientX(nStart);
            const endPos = timeToClientX(nEnd);

            const newWrongSection: WrongSection = {
                startPos,
                width: endPos - startPos,
            };
            setWrongSections((prev) => [...prev, newWrongSection]);
        });
    }, [barRef, rvDuration, wrong_sections]);

    return (
        <>
            {wrongSections.map((wrongSection, index) => (
                <WrongElem
                    key={index}
                    startPos={wrongSection.startPos}
                    width={wrongSection.width}
                />
            ))}
        </>
    );
};

export default WrongSections;

interface WrongSection {
    startPos: number;
    width: number;
}

const WrongElem = styled.div<WrongSection>`
    position: absolute;
    top: 0;
    left: ${({ startPos }) => startPos}px;
    width: ${({ width }) => width}px;
    height: 100%;
    background-color: ${({ theme }) => theme.color.red};
    opacity: 0.4;
`;