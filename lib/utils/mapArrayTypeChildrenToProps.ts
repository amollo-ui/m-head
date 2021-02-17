import { THtmlTagNames } from "../types";
import { TResolveFlattenArray } from "./flattenArrayTypeChildren";

export const mapArrayTypeChildrenToProps = (
    arrayTypeChildren: TResolveFlattenArray,
    flattenedProps: any
) => {
    let clonedFlattenProps = { ...flattenedProps };

    // FIXME: rename arrayTypeChildren
    const keysArrayTypeChildren = Object.keys(
        arrayTypeChildren
    ) as THtmlTagNames[];

    keysArrayTypeChildren.forEach(item => {
        clonedFlattenProps = {
            ...clonedFlattenProps,
            [item]: arrayTypeChildren[item],
        };
    });

    return clonedFlattenProps;
};
