declare module StyleGuidr {
    export interface IBogusObject {
        [i: string]: number;
    }

    export interface IStyleGuidrSettings {
        bogusArray: number[];
        bogusObject?: IBogusObject;
    }

    export interface IStyleGuidr {
        getBogusArray(): number[];
        getBogusObject(): IBogusObject;
        setBogusArray(bogusArray: number[]): void;
        setBogusObject(bogusObject: IBogusObject): void;
        getBogusArrayTotal(): number;
        getBogusObjectValuesAsArray(): number[];
    }
}