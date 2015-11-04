// @ifdef INCLUDE_DEFINITIONS
/// <reference path="StyleGuidr.d.ts" />
// @endif

// @include ../Source/StyleGuidr.d.ts

module StyleGuidr {
    "use strict";

    /**
     * A sample class for showing the coding style for FullScreenShenanigans repositories.
     */
    export class StyleGuidr implements IStyleGuidr {
        /**
         * A listing of numbers with absolutely no purpose.
         */
        private bogusArray: number[];

        /**
         * Mapping of string keys to numbers with absolutely no purpose.
         */
        private bogusObject: IBogusObject;

        /**
         * Initializes a new instance of the StyleGuidr class.
         * 
         * @param settings   Settings to use for initialization.
         */
        constructor(settings: IStyleGuidrSettings) {
            if (typeof settings.bogusArray === "undefined") {
                throw new Error("No bogusArray given to StyleGuidr.");
            }

            this.bogusArray = settings.bogusArray;
            this.bogusObject = settings.bogusObject || this.createBogusObjectFromArray(this.bogusArray);
        }


        /* Simple gets
        */

        /**
         * @returns The listing of numbers with absolutely no purpose.
         */
        getBogusArray(): number[] {
            return this.bogusArray;
        }

        /**
         * @returns The mapping of keys to numbers with absolutely no purpose.
         */
        getBogusObject(): IBogusObject {
            return this.bogusObject;
        }


        /* Simple sets
        */

        /**
         * Sets a new listing of numbers with absolutely no purpose.
         * 
         * @param bogusArray   The new numbers to list internally.
         */
        setBogusArray(bogusArray: number[]): void {
            this.bogusArray = bogusArray;
        }

        /**
         * Sets a new mapping of keys to numbers with absolutely no purpose.
         * 
         * @param bogusObject   The new mapping to store internally.
         */
        setBogusObject(bogusObject: IBogusObject): void {
            this.bogusObject = bogusObject;
        }


        /* Functionality
        */

        /**
         * @returns The sum of all numbers in the internal bogusArray.
         */
        getBogusArrayTotal(): number {
            var total: number = 0,
                i: number;

            for (i = 0; i < this.bogusArray.length; i += 1) {
                total += this.bogusArray[i];
            }

            return total;
        }

        /**
         * Retrieves all the values listed in the mapping with absolutely no purpose.
         * 
         * @returns All values from the mapping, in order of key enumeration.
         */
        getBogusObjectValuesAsArray(): number[] {
            var values: number[] = [],
                i: string;

            for (i in this.bogusObject) {
                if (this.bogusObject.hasOwnProperty(i)) {
                    values.push(this.bogusObject[i]);
                }
            }

            return values;
        }


        /* Utilities
        */

        /**
         * Creates a bogus Object from a bunch of numbers by adding all the numbers
         * as members of different letters, starting with "a".
         * 
         * @param bogusArray   The numbers to set as values.
         * @returns An Object whose keys are letters starting with "a" and whose 
         *          values are the given numbers, in order.
         */
        private createBogusObjectFromArray(bogusArray: number[]): IBogusObject {
            var output: IBogusObject = {},
                currentCharacterCode: number = "a".charCodeAt(0),
                i: number;

            for (i = 0; i < bogusArray.length; i += 1) {
                output[String.fromCharCode(currentCharacterCode)] = bogusArray[i];
                currentCharacterCode += 1;
            }

            return output;
        }
    }
}
