/**
 * TSTMLOG special functions/properties
 */
declare namespace mlog {
    /**
     * # Do not use unless you know what you are doing!
     * Input raw MLOG to be put into the generated MLOG.
     * Use the api instead of this.
     * ```
     * npm i -D ts-mlog-api
     * ```
     * @param mlogInput The MLOG input string.
     */
    function raw(mlogInput:string): void;
    /**
     * # Do not use ~~unless you know what you are doing~~ AT ALL!
     * Input raw MLOG to be put into the generated MLOG at the specified line.
     * ## HIGH CHANCE OF BREAKING COMPILER GENERATED CODE!
     * @deprecated
     * Do not EVER use!!!
     * @param mlogInput The MLOG input string.
     */
    function raw(mlogInput:string): void;
    /**
     * If the compiler is generating world processor code or not.
     */
    const isWorld: boolean;
    /**
     * All of the available versions.
     */
    type versions = {
        "6":"v6"
        "7":"v7"
        "8":"v8"
    }
    /**
     * The current version that is being compiled.
     */
    const version: keyof versions;
}