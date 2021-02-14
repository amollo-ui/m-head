import React, { FC } from "react";
import { IHtmlAttributes } from "../../types";

interface IProps {
    "title": string;
    "htmlAttributes": IHtmlAttributes;
    "defer": boolean;
}

const Helmet: FC<IProps> = ({
    htmlAttributes = {
        "lang": "en",
        "amp": undefined,
    },
    title,
    defer,
}) => <></>;

export default Helmet;
