
/* vsdoc for logical.tools */

(function (window) {
    window.logical = window.logical || {};

    window.logical.tools = {
        /// <summary>Contains utilities to help with using logical.</summary>
        /// <returns type="logical.tools"/>
                
        truthTableToBoolean: function(truthTable) {
            /// <summary>Converts values in truth tables to boolean values.</summary>
            /// <param name="truthTable" type="Array">An array of arrays containing truth table values.</param>
            /// <returns type="Array">Returns the truth table with all values converted to boolean
            ///  values.</returns>
        }, 
        
        testTruthTable: function(truth, logicalFunction) {
            /// <summary>Tests the output of the given logical function against the given truth table.</summary>
            /// <param name="truth" type="Array">The truth table.
            ///  The rows are arranged with the inputs on the left and the rightmost value
            ///  being the expected output. For testing logical and, the input 1,1 would
            ///  be expected to return 1, so the row for this input would be 1,1,1. For more
            ///  examples see the tests.</param>
            /// <param name="logicalFunction" type="Function">The logical function to test.</param>
            /// <returns type="Boolean">Returns true if everything checks out.</returns>
        }
        
    };

    var $x = window.logical.tools;
    $x.__namespace = "true";
    $x.__typeName = "logical.tools";
})(this);
