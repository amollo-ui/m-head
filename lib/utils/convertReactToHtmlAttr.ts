import {
    IHtmlToReactAttributes,
    TWriteable,
    TConvertedHtmlAttributes,
    TReactAttributes,
} from "../types";

/**
 * alternative to attributes html tag in jsx
 */
const HtmlAltReactProps: IHtmlToReactAttributes = {
    "http-equiv": "httpEquiv",
    "accesskey": "accessKey",
    "charset": "charSet",
    "class": "className",
    "contenteditable": "contentEditable",
    "contextmenu": "contextMenu",
    "itemprop": "itemProp",
    "tabindex": "tabIndex",
};

type TArrayKeysReactAttrs = Array<keyof TReactAttributes>;
type TArrayKeysHtmlAttrs = Array<keyof TConvertedHtmlAttributes>;

/**
 * converts header tag attributes from react syntax to dom parameters.
 * @example
 *  # input
 *      { className: "react app" }
 *  # output
 *      { class: "react app" }
 */
export const convertReactToHtmlAttr = (
    attrs: TReactAttributes
): TConvertedHtmlAttributes => {
    const attributes: TWriteable<TConvertedHtmlAttributes> = {};

    const keysAttrs: TArrayKeysReactAttrs = Object.keys(
        attrs
    ) as TArrayKeysReactAttrs;

    const getKeyByValue = (value: keyof TReactAttributes) => {
        const objectKeys: TArrayKeysHtmlAttrs = Object.keys(
            HtmlAltReactProps
        ) as TArrayKeysHtmlAttrs;

        return objectKeys.find(key => HtmlAltReactProps[key] === value);
    };

    keysAttrs.forEach(item => {
        const keyByValue = getKeyByValue(item);
        if (keyByValue) {
            attributes[keyByValue] = attrs[item];
        }
    });

    return attributes;
};
