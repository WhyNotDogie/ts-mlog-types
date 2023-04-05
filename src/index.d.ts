declare namespace mlog {
    /**
     * # Do not use unless you know what you are doing!
     * Input raw MLOG to be put into the generated MLOG.
     * @deprecated
     * Do not use!!! Instead, use the api.
     * @param mlogInput The MLOG input string.
     */
    function raw(mlogInput:string):void;
    /**
     * # Do not use ~~unless you know what you are doing~~ AT ALL!
     * Input raw MLOG to be put into the generated MLOG at the specified line.
     * ## HIGH CHANCE OF BREAKING COMPILER GENERATED CODE!
     * @deprecated
     * Do not EVER use!!!
     * @param mlogInput The MLOG input string.
     */
    function raw(mlogInput:string):void;
}