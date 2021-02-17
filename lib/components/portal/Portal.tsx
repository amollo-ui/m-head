import { FC, ReactNode, useState, useEffect } from "react";
import { createPortal } from "react-dom";

interface IProps {
    "children": ReactNode;
}

type TState = null | HTMLHeadElement;

const Portal: FC<IProps> = ({ children }) => {
    const [node, setNode] = useState<TState>(null);

    useEffect(() => {
        const domHead = document.head;
        setNode(domHead);
    }, []);

    return node ? createPortal(children, node) : null;
};

export default Portal;
