import { ReactElement, ReactNode } from "react";
import {
    HtmlTagNames,
    IEnrichedChildren,
    TConvertedHtmlAttributes,
    THtmlTagNames,
} from "../types";

type TResolveMapInsideChild =
    | []
    | { "innerHTML": ReactNode }
    | { "cssText": ReactNode };

export const mapInsideChildrenToProps = (
    child: ReactElement<IEnrichedChildren>
): TResolveMapInsideChild => {
    const { "children": insideChild } = child.props;
    if (!insideChild) return [];

    switch (child.type) {
        case HtmlTagNames.SCRIPT:
        case HtmlTagNames.NOSCRIPT:
            return {
                "innerHTML": insideChild,
            };
        case HtmlTagNames.STYLE:
            return {
                "cssText": insideChild,
            };
    }

    throw new Error(
        `<${child.type} /> elements are self-closing and can not contain children. \
        Refer to our API for more information.`
    );
};

export type TResolveFlattenArray = {
    [key in THtmlTagNames]?: Array<
        TConvertedHtmlAttributes & TResolveMapInsideChild
    >;
};

export const flattenArrayTypeChildren = (
    child: ReactElement<IEnrichedChildren>,
    convertedToHtmlProps: TConvertedHtmlAttributes | Record<string, never>
): TResolveFlattenArray => ({
    [String(child.type)]: [
        {
            ...convertedToHtmlProps,
            ...mapInsideChildrenToProps(child),
        },
    ],
});
