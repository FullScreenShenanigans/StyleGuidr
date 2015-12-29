declare module StyleGuidr {
    /**
     * General-use container mapping string keys to numbers.
     */
    export interface IBogusObject {
        [i: string]: number;
    }

    /**
     * Settings to initialize a new instance of the IStyleGuidr interface.
     */
    export interface IStyleGuidrSettings {
        /**
         * A listing of numbers with absolutely no purpose.
         */
        bogusArray: number[];

        /**
         * Mapping of String keys to numbers with absolutely no purpose.
         */
        bogusObject?: IBogusObject;
    }

    /**
     * A sample interface for showing the coding style for FullScreenShenanigans 
     * repositories.
     */
    export interface IStyleGuidr {
        /**
         * @returns The listing of numbers with absolutely no purpose.
         */
        getBogusArray(): number[];

        /**
         * @returns The mapping of keys to numbers with absolutely no purpose.
         */
        getBogusObject(): IBogusObject;

        /**
         * Sets a new listing of numbers with absolutely no purpose.
         * 
         * @param bogusArray   The new numbers to list internally.
         */
        setBogusArray(bogusArray: number[]): void;

        /**
         * Sets a new mapping of keys to numbers with absolutely no purpose.
         * 
         * @param bogusObject   The new mapping to store internally.
         */
        setBogusObject(bogusObject: IBogusObject): void;

        /**
         * @returns The sum of all numbers in the internal bogusArray.
         */
        getBogusArrayTotal(): number;

        /**
         * Retrieves all the values listed in the mapping with absolutely no purpose.
         * 
         * @returns All values from the mapping, in order of key enumeration.
         */
        getBogusObjectValuesAsArray(): number[];
    }
}
