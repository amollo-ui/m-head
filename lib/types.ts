import { AriaAttributes, DOMAttributes, ReactNode } from "react";

export type THtmlTagNames =
    | "html"
    | "base"
    | "body"
    | "head"
    | "link"
    | "meta"
    | "style"
    | "title"
    | "script"
    | "noscript";

export type TValueOf<T> = T[keyof T];
export type TKeyOfUn<T> = { [P in keyof T]?: T[P] };
export type TWriteable<T> = { -readonly [P in keyof T]: T[P] };
export type DeepWriteable<T> = {
    -readonly [P in keyof T]: DeepWriteable<T[P]>;
};
export type TConvertedHtmlAttributes = {
    readonly [key in keyof IHtmlToReactAttributes]?: string;
};
export type TReactAttributes = {
    readonly [key in TValueOf<IHtmlToReactAttributes>]?: string;
};

export interface IHtmlToReactAttributes {
    readonly "class": "className";
    readonly "accesskey": "accessKey";
    readonly "charset": "charSet";
    readonly "contenteditable": "contentEditable";
    readonly "contextmenu": "contextMenu";
    readonly "http-equiv": "httpEquiv";
    readonly "itemprop": "itemProp";
    readonly "tabindex": "tabIndex";
}

export interface IEnrichedChildren extends TReactAttributes {
    "children"?: ReactNode;
}

export interface IHtmlAttributes<T> extends AriaAttributes, DOMAttributes<T> {}

export interface HeadData {
    "base"?: string | React.Component<any>;
    "bodyAttributes"?: TConvertedHtmlAttributes;
    "htmlAttributes"?: TConvertedHtmlAttributes;
    "link"?: string | React.Component<any>;
    "meta"?: string | React.Component<any>;
    "noscript"?: string | React.Component<any>;
    "script"?: string | React.Component<any>;
    "style"?: string | React.Component<any>;
    "title"?: string | React.Component<any>;
    "titleAttributes"?: TConvertedHtmlAttributes;
}

export enum HtmlTagNames {
    BASE = "base",
    BODY = "body",
    HEAD = "head",
    HTML = "html",
    LINK = "link",
    META = "meta",
    STYLE = "style",
    TITLE = "title",
    SCRIPT = "script",
    NOSCRIPT = "noscript",
}
