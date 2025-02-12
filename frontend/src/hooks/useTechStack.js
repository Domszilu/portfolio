import { useState } from "react";
import techStackItems from "../data/techStack";

// logic for rendering Tech Stack items (found in data/techStack.js)

const useTechStack = () => {
    const [showAll, setShowAll] = useState(false);
    const visibleStackItems = showAll
        ? techStackItems
        : techStackItems.slice(0, 4);

    return { showAll, setShowAll, visibleStackItems, techStackItems };
};

export default useTechStack;
