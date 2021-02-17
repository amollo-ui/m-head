import { ReactElement, ReactNode } from "react";
import {
    HtmlTagNames,
    IEnrichedChildren,
    TConvertedHtmlAttributes,
} from "../types";

export type TResolveMapsObject =
    | { [key in TChildTags]?: any }
    | { [HtmlTagNames.TITLE]: ReactNode; "titleAttributes": any }
    | { "bodyAttributes": any }
    | { "htmlAttributes": any };

// title, base, body, head, html, title
type TChildTags =
    | HtmlTagNames.TITLE
    | HtmlTagNames.BASE
    | HtmlTagNames.BODY
    | HtmlTagNames.HEAD
    | HtmlTagNames.HTML
    | HtmlTagNames.TITLE;

export const mapObjectTypeChildren = (
    child: ReactElement<IEnrichedChildren>,
    convertedToHtmlProps: TConvertedHtmlAttributes
): TResolveMapsObject => {
    const { "children": insideChildren } = child.props;
    const tagType = child.type as TChildTags;

    switch (tagType) {
        case HtmlTagNames.TITLE:
            return {
                [HtmlTagNames.TITLE]: insideChildren,
                "titleAttributes": { ...convertedToHtmlProps },
            };
        case HtmlTagNames.BODY:
            return {
                "bodyAttributes": { ...convertedToHtmlProps },
            };
        case HtmlTagNames.HTML:
            return {
                "htmlAttributes": { ...convertedToHtmlProps },
            };
        default:
            return {
                [String(child.type)]: { ...convertedToHtmlProps },
            };
    }
};
