import { useState } from "react";

const useReadMore = () => {
    const [expandedIndex, setExpandedIndex] = useState(null);
    const toggleReadMore = (index) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };
    return <></>;
};

export default useReadMore;

// Incomplete  code, not used anywhere!
// Initial idea was to add more info to Experiences, show max 4 rows, add a Show More button
// No longer sure about the idea
