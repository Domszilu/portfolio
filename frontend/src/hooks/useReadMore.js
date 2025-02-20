import { useState } from "react";

const useReadMore = () => {
    const [expandedIndex, setExpandedIndex] = useState(null);
    const toggleReadMore = (index) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };
    return <></>;
};

export default useReadMore;
