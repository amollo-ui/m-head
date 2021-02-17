import React, {
    FC,
    ReactNode,
    Children,
    isValidElement,
    ReactElement,
} from "react";
import Portal from "../portal";
import {
    IHtmlAttributes,
    IEnrichedChildren,
    HtmlTagNames,
    TConvertedHtmlAttributes,
} from "../../types";
import { convertReactToHtmlAttr } from "../../utils/convertReactToHtmlAttr";
import { warnOnInvalidChildren } from "../../utils/isValid";
import {
    flattenArrayTypeChildren,
    TResolveFlattenArray,
} from "../../utils/flattenArrayTypeChildren";
import {
    mapObjectTypeChildren,
    TResolveMapsObject,
} from "../../utils/mapObjectTypeChildren";
import { mapArrayTypeChildrenToProps } from "../../utils/mapArrayTypeChildrenToProps";

interface IHeadProps {
    "title"?: string;
    "htmlAttributes"?: IHtmlAttributes<any>;
    "defer"?: boolean;
    "children"?: ReactNode;
}

const Head: FC<IHeadProps> = ({ children }) => {
    let arrayTypeChildren: TResolveFlattenArray | null = null;
    // FIXME: unknown type
    let flattenedProps: Record<string, unknown> = {};

    Children.forEach(children, child => {
        if (!child || !isValidElement<IEnrichedChildren>(child)) return child;
        let typeChildrens: TResolveMapsObject | null = null;
        let convertedToHtmlProps:
            | TConvertedHtmlAttributes
            | Record<string, never> = {};

        const elementChild = { ...child } as ReactElement<IEnrichedChildren>;
        const { props, type } = elementChild;

        if (props.children) {
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            const { "children": insideChildren, ...restChildProps } = props;
            convertedToHtmlProps = convertReactToHtmlAttr(restChildProps);
            warnOnInvalidChildren(elementChild);
        }

        switch (type) {
            case HtmlTagNames.LINK:
            case HtmlTagNames.META:
            case HtmlTagNames.NOSCRIPT:
            case HtmlTagNames.SCRIPT:
            case HtmlTagNames.STYLE:
                arrayTypeChildren = flattenArrayTypeChildren(
                    elementChild,
                    convertedToHtmlProps
                );
                break;
            default:
                // title, base, body, head, html, title
                typeChildrens = {
                    ...mapObjectTypeChildren(
                        elementChild,
                        convertedToHtmlProps
                    ),
                };
        }
        if (typeChildrens) {
            flattenedProps = {
                ...flattenedProps,
                ...typeChildrens,
            };
        }
    });

    if (arrayTypeChildren) {
        flattenedProps = mapArrayTypeChildrenToProps(
            arrayTypeChildren,
            flattenedProps
        );
    }

    return <Portal>{children}</Portal>;
};

export default Head;
