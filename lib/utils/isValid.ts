import { ReactElement } from "react";
import { HtmlTagNames, IEnrichedChildren } from "../types";

const warn = (msg: string) => {
    console && typeof console.warn === "function" && console.warn(msg);
};

export const iterabledEnum = <
    O extends Record<string, unknown>,
    K extends keyof O = keyof O
>(
    obj: O,
    field: "keys" | "values"
): K[] => Object[field](obj).filter(k => Number.isNaN(+k)) as K[];

// TODO:
// const isValidTagOrAttributeName = () => null;

export const warnOnInvalidChildren = (
    child: ReactElement<IEnrichedChildren>
): void => {
    if (process.env.NODE_ENV === "production") return;
    const { "children": insideChildren } = child.props;

    const htmlTagNames = iterabledEnum<typeof HtmlTagNames>(
        HtmlTagNames,
        "values"
    );

    if (!htmlTagNames.some(name => child.type === name)) {
        if (typeof child.type === "function") {
            return warn(
                "You may be attempting to nest <m-head> components within each other, \
                which is not allowed. Refer to our API for more information."
            );
        }

        return warn(
            `Only elements types ${htmlTagNames.join(
                ", "
            )} are allowed. m-head does not support rendering <${
                child.type
            }> elements. Refer to our API for more information.`
        );
    }

    if (
        insideChildren &&
        typeof insideChildren !== "string" &&
        (!Array.isArray(insideChildren) ||
            insideChildren.some(insideChild => typeof insideChild !== "string"))
    ) {
        throw new Error(
            `m-head expects a string as a child of <${child.type}>. \
            Did you forget to wrap your children in braces? ( <${child.type}>{\`\`}</${child.type}> ) \
            Refer to our API for more information.`
        );
    }
};
