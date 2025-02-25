import { ILanguage } from "../../types";
import { source1Language } from "./source1";
import { source2Language } from "./source2";
import { source3Language } from "./source3";
import { source4Language } from "./source4";

const sourceLanguage: ILanguage = {
    name: "Source",
    variants: [
        source1Language,
        source2Language,
        source3Language,
        source4Language
    ]
};

export { sourceLanguage };
