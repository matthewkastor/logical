;(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
logical = require('../src/logical.js');

},{"../src/logical.js":2}],2:[function(require,module,exports){
/*jslint
    vars : true,
    unparam : true,
    nomen : true
*/
/*globals
    module
*/
/**
 * @fileOverview Logical functions for JavaScript. Images in this documentation
 *  came from wikipedia and have been released to public domain.
 * @author <a href="mailto:matthewkastor@gmail.com">Matthew Kastor</a>
 * @license <a href="http://www.gnu.org/licenses/gpl-3.0-standalone.html"> gpl-3.0 </a>
 */
/**
 * Logical functions for JavaScript. <br/>
 * <img src="../../Logical_connectives_Hasse_diagram.svg.png" style="width:100%" />
 * @namespace Logical functions for JavaScript. <br/>
 * <img src="../../Truth tables for the Boolean operations of arity up to 2.png" style="width:100%" />
 * <br/>
 * <img src="../../Logical connectives venn diagrams.png" style="width:100%" />
 * @author <a href="mailto:matthewkastor@gmail.com">Matthew Kastor</a>
 * @license <a href="http://www.gnu.org/licenses/gpl-3.0-standalone.html"> 
 * gpl-3.0 </a>
 * @see <a href="../../Logical.pdf">Logical.pdf</a> Article: Truth function
 * @see <a href="../../Logical.pdf">Logical.pdf</a> Article: Truth tables
 * @see <a href="../../Logical.pdf">Logical.pdf</a>
 *  Article: Boolean algebras canonically defined
 * @see <a href="../../Logical.pdf">Logical.pdf</a>
 *  Article: Boolean algebra
 * @see <a href="../../Logical.pdf">Logical.pdf</a>
 *  Article: Boolean algebra (structure)
 */
var logical = {};
/**
 * Logical contradiction. <br/>
 * <img src="../../0 contradiction false.png" />
 * <img src="../../0 contradiction false_ANSI.png" />
 * <img src="../../0 contradiction false summary.png" />
 * @returns Returns false.
 * @example
 *  console.log(logical.f());
 *  // logs false
 * @see <a href="../../Logical.pdf">Logical.pdf</a>
 *  Article: False (logic)
 */
logical.fals = function fals() {
    'use strict';
    return false;
};
/** alias for fals */
logical.f = logical.fals;
/** alias for fals */
logical.contradiction = logical.fals;
/** alias for fals */
logical.Opq = logical.fals;
/**
 * Logical tautology. <br/>
 * <img src="../../1 tautology true.png" />
 * <img src="../../1 tautology true_ANSI.png" />
 * <img src="../../1 tautology true summary.png" />
 * @returns Returns true.
 * @example
 *  console.log(logical.t());
 *  // logs true
 * @see <a href="../../Logical.pdf">Logical.pdf</a>
 *  Article: Tautology (logic)
 */
logical.tru = function tru() {
    'use strict';
    return true;
};
/** alias for tru */
logical.t = logical.tru;
/** alias for tru */
logical.tautology = logical.tru;
/** alias for tru */
logical.Vpq = logical.tru;
/**
 * Logical identity. <br/>
 * <img src="../../01 identity.png" />
 * <img src="../../01 identity_ANSI.png" />
 * @param {boolean} p
 * @returns {Boolean} Returns p.
 * @example
 *  console.log(logical.identity(true));
 *  // logs true
 * @see <a href="../../Logical.pdf">Logical.pdf</a>
 *  Article: Truth table, Unary operators, Logical identity
 */
logical.identity = function identity(p) {
    'use strict';
    return p;
};
/**
 * NOT. Logical negation. <code>!p</code> <br/>
 * <img src="../../10 negation.png" />
 * <img src="../../10 NOT_ANSI.png" />
 * @param {Boolean} p
 * @returns {Boolean} Returns the negation of p.
 * @example
 *  console.log(logical.not(true));
 *  // logs false
 * @see <a href="../../Logical.pdf">Logical.pdf</a>
 *  Article: Negation
 */
logical.not = function not(p) {
    'use strict';
    return !p;
};
/** alias for not */
logical.negation = logical.not;
/**
 * AND. Logical conjunction. <code>p && q</code> <br/>
 * <img src="../../0001 conjunction.png" />
 * <img src="../../0001 AND_ANSI.png" />
 * <img src="../../0001 conjunction summary.png" />
 * @param {Boolean} p
 * @param {Boolean} q
 * @returns {Boolean} Returns the conjunction of p and q.
 * @example
 *  console.log(logical.and(true, true));
 *  // logs true
 * @see <a href="../../Logical.pdf">Logical.pdf</a>
 *  Article: Logical conjunction
 */
logical.and = function and(p, q) {
    'use strict';
    return p && q;
};
/** alias for and */
logical.conjunction = logical.and;
/** alias for and */
logical.Kpq = logical.and;
/**
 * Material nonimplication. <code>p && !q</code> <br/>
 * <img src="../../0010 material nonimplication.png" />
 * <img src="../../0010 material nonimplication_ANSI.png" />
 * <img src="../../0010 material nonimplication summary.png" />
 * @param {boolean} p
 * @param {boolean} q
 * @returns {Boolean} Returns the material nonimplication of p and q.
 * @example
 *  console.log(logical.materialImplication(true, false));
 *  // logs true
 * @see <a href="../../Logical.pdf">Logical.pdf</a>
 *  Article: Material nonimplication
 */
logical.materialNonImplication = function materialNonImplication(p, q) {
    'use strict';
    return p && !q;
};
/** alias for materialNonImplication */
logical.abdjunction = logical.materialNonImplication;
/** alias for materialNonImplication */
logical.doesNotImply = logical.materialNonImplication;
/** alias for materialNonImplication */
logical.butNot = logical.materialNonImplication;
/** alias for materialNonImplication */
logical.Xp = logical.materialNonImplication;
/** alias for materialNonImplication */
logical.Lpq = logical.materialNonImplication;
/**
 * Projection of p. <br/>
 * <img src="../../0011 proposition p.png" />
 * <img src="../../0011 proposition p_ANSI.png" />
 * <img src="../../0011 proposition p summary.png" />
 * @param {boolean} p
 * @param {boolean} q
 * @returns {Boolean} Returns the value of p.
 * @example
 *  console.log(logical.p(false, true));
 *  // logs false
 */
logical.p = function _p(p, q) {
    'use strict';
    return p;
};
/** alias for p */
logical.Ipq = logical.p;
/**
 * Converse material nonimplication. <code>!p && q</code> <br/>
 * <img src="../../0100 converse material nonimplication.png" />
 * <img src="../../0100 converse material nonimplication_ANSI.png" />
 * <img src="../../0100 converse material nonimplication summary.png" />
 * @param {boolean} p
 * @param {boolean} q
 * @returns {Boolean} Returns the converse material nonimplication of p and q.
 * @example
 *  console.log(logical.converseMaterialNonImplication(false, true));
 *  // logs true
 * @see <a href="../../Logical.pdf">Logical.pdf</a>
 *  Article: Converse nonimplication
 */
logical.converseMaterialNonImplication = function converseMaterialNonImplication(p, q) {
    'use strict';
    return !p && q;
};
/** alias for converseMaterialNonImplication */
logical.isNotImpliedBy = logical.converseMaterialNonImplication;
/** alias for converseMaterialNonImplication */
logical.notBut = logical.converseMaterialNonImplication;
/** alias for converseMaterialNonImplication */
logical.converseNonImplication = logical.converseMaterialNonImplication;
/** alias for converseMaterialNonImplication */
logical.Xq = logical.converseMaterialNonImplication;
/** alias for converseMaterialNonImplication */
logical.Mpq = logical.converseMaterialNonImplication;
/**
 * Projection of q. <br/>
 * <img src="../../0101 proposition q.png" />
 * <img src="../../0101 proposition q_ANSI.png" />
 * <img src="../../0101 proposition q summary.png" />
 * @param {boolean} p
 * @param {boolean} q
 * @returns {Boolean} Returns the value of q.
 * @example
 *  console.log(logical.p(false, true));
 *  // logs true
 */
logical.q = function _q(p, q) {
    'use strict';
    return q;
};
/** alias for q */
logical.Hpq = logical.q;
/**
 * Exclusive OR. <code>(p || q) && (!(p && q))</code> <br/>
 * <img src="../../0110 exclusive disjunction.png" />
 * <img src="../../0110 XOR_ANSI.png" />
 * <img src="../../0110 exclusive disjunction summary.png" />
 * @param {boolean} p
 * @param {boolean} q
 * @returns {Boolean} Returns the exclusive disjunction of p and q.
 * @example
 *  console.log(logical.xor(true, false));
 *  // logs true
 * @see <a href="../../Logical.pdf">Logical.pdf</a>
 *  Article: Exclusive or
 */
logical.xor = function xor(p, q) {
    'use strict';
    return logical.and(logical.or(p, q), logical.nand(p, q));
};
/** alias for xor */
logical.exclusiveDisjunction = logical.xor;
/** alias for xor */
logical.Jpq = logical.xor;
/**
 * OR Logical disjunction. <code>p || q</code> <br/>
 * <img src="../../0111 disjunction.png" />
 * <img src="../../0111 OR_ANSI.png" />
 * <img src="../../0111 disjunction summary.png" />
 * @param {boolean} p
 * @param {boolean} q
 * @returns {Boolean} Returns the disjunction of p and q.
 * @example
 *  console.log(logical.or(true, false));
 *  // logs true
 * @see <a href="../../Logical.pdf">Logical.pdf</a>
 *  Article: Logical disjunction
 */
logical.or = function or(p, q) {
    'use strict';
    return p || q;
};
/** alias for or */
logical.disjunction = logical.or;
/** alias for or */
logical.Apq = logical.or;
/**
 * NOR. The compliment of OR. <code>!(p || q)</code> <br/>
 * <img src="../../1000 joint denial.png" />
 * <img src="../../1000 NOR_ANSI.png" />
 * <img src="../../1000 joint denial summary.png" />
 * @param {boolean} p
 * @param {boolean} q
 * @returns {Boolean} Returns the negated disjunction of p and q.
 * @example
 *  console.log(logical.nor(true, false));
 *  // logs false
 * @see <a href="../../Logical.pdf">Logical.pdf</a>
 *  Article: Logical NOR
 */
logical.nor = function nor(p, q) {
    'use strict';
    return logical.not(logical.or(p, q));
};
/** alias for nor */
logical.Xpq = logical.nor;
/** alias for nor */
logical.jointDenial = logical.nor;
/**
 * Exclusive NOR. The complement of exclusive OR.
 *  <code>!((p || q) && (!(p && q)))</code> <br/>
 * <img src="../../1001 material biconditional.png" />
 * <img src="../../1001 XNOR_ANSI.png" />
 * <img src="../../1001 material biconditional summary.png" />
 * @param {boolean} p
 * @param {boolean} q
 * @returns {Boolean} Returns the negated exclusive disjunction of p and q.
 * @example
 *  console.log(logical.xnor(true, false));
 *  // logs false
 * @see <a href="../../Logical.pdf">Logical.pdf</a>
 *  Article: Logical biconditional
 * @see <a href="../../Logical.pdf">Logical.pdf</a>
 *  Article: Logical equality
 * @see <a href="../../Logical.pdf">Logical.pdf</a>
 *  Article: If and only if
 * @see <a href="../../Logical.pdf">Logical.pdf</a>
 *  Article: Material equivalence
 */
logical.xnor = function xnor(p, q) {
    'use strict';
    return logical.not(logical.xor(p, q));
};
/** alias for xnor */
logical.equality = logical.xnor;
/** alias for xnor */
logical.equals = logical.xnor;
/** alias for xnor */
logical.ifAndOnlyIf = logical.xnor;
/** alias for xnor */
logical.iff = logical.xnor;
/** alias for xnor */
logical.biconditional = logical.xnor;
/** alias for xnor */
logical.materialBiconditional = logical.xnor;
/** alias for xnor */
logical.Epq = logical.xnor;
/**
 * Negates q, ignoring p. <code>!q</code> <br/>
 * <img src="../../1010 not q.png" />
 * <img src="../../1010 not q_ANSI.png" />
 * <img src="../../1010 not q summary.png" />
 * @param {boolean} p
 * @param {boolean} q
 * @returns {Boolean} Returns the negated value of q.
 * @example
 *  console.log(logical.Nq(false, true));
 *  // logs false
 * @see <a href="../../Logical.pdf">Logical.pdf</a>
 *  Article: Negation
 */
logical.not_q = function not_q(p, q) {
    'use strict';
    return !q;
};
/** alias for not_q */
logical.Nq = logical.not_q;
/** alias for not_q */
logical.Gpq = logical.not_q;
/**
 * Converse material implication. <code>p || !q</code> <br/>
 * <img src="../../1011 converse material implication.png" />
 * <img src="../../1011 converse material implication_ANSI.png" />
 * <img src="../../1011 converse material implication summary.png" />
 * @param {boolean} p
 * @param {boolean} q
 * @returns {Boolean} Returns the converse material implication of p and q.
 * @example
 *  console.log(logical.converseMaterialImplication(false, true));
 *  // logs false
 * @see <a href="../../Logical.pdf">Logical.pdf</a>
 *  Article: Converse implication
 */
logical.converseMaterialImplication = function converseMaterialImplication(p, q) {
    'use strict';
    return p || !q;
};
/** alias for converseMaterialImplication */
logical.isImpliedBy = logical.converseMaterialImplication;
/** alias for converseMaterialImplication */
logical.converseImplication = logical.converseMaterialImplication;
/** alias for converseMaterialImplication */
logical.XNq = logical.converseMaterialImplication;
/** alias for converseMaterialImplication */
logical.Bpq = logical.converseMaterialImplication;
/**
 * Negates p, ignoring q. <code>!p</code> <br/>
 * <img src="../../1100 not p.png" />
 * <img src="../../1100 not p_ANSI.png" />
 * <img src="../../1100 not p summary.png" />
 * @param {boolean} p
 * @param {boolean} q
 * @returns {Boolean} Returns the negated value of p.
 * @example
 *  console.log(logical.Np(false, true));
 *  // logs true
 * @see <a href="../../Logical.pdf">Logical.pdf</a>
 *  Article: Negation
 */
logical.not_p = function not_p(p, q) {
    'use strict';
    return !p;
};
/** alias for not_p */
logical.Np = logical.not_p;
/** alias for not_p */
logical.Fpq = logical.not_p;
/**
 * Material implication. <code>!p || q</code> <br/>
 * <img src="../../1101 material implication.png" />
 * <img src="../../1101 material implication_ANSI.png" />
 * <img src="../../1101 material implication summary.png" />
 * @param {boolean} p
 * @param {boolean} q
 * @returns {Boolean} Returns the material implication of p and q.
 * @example
 *  console.log(logical.materialImplication(true, false));
 *  // logs false
 * @see <a href="../../Logical.pdf">Logical.pdf</a>
 *  Article: Material conditional
 */
logical.materialImplication = function materialImplication(p, q) {
    'use strict';
    return !p || q;
};
/** alias for materialImplication */
logical.materialConditional = logical.materialImplication;
/** alias for materialImplication */
logical.materialConsequence = logical.materialImplication;
/** alias for materialImplication */
logical.implication = logical.materialImplication;
/** alias for materialImplication */
logical.implies = logical.materialImplication;
/** alias for materialImplication */
logical.conditional = logical.materialImplication;
/** alias for materialImplication */
logical.XNp = logical.materialImplication;
/** alias for materialImplication */
logical.Cpq = logical.materialImplication;
/**
 * NAND. Compliment of AND. <code>!(p && q)</code> <br/>
 * <img src="../../1110 alternative denial.png" />
 * <img src="../../1110 NAND_ANSI.png" />
 * <img src="../../1110 alternative denial summary.png" />
 * @param {boolean} p
 * @param {boolean} q
 * @returns {Boolean} Returns the negated conjunction of p and q.
 * @example
 *  console.log(logical.nand(true, true));
 *  // logs false
 * @see <a href="../../Logical.pdf">Logical.pdf</a>
 *  Article: Sheffer stroke
 */
logical.nand = function nand(p, q) {
    'use strict';
    return logical.not(logical.and(p, q));
};
/** alias for nand */
logical.Dpq = logical.nand;
/** alias for nand */
logical.alternativeDenial = logical.nand;
/**
 * Conditioned disjunction. <code>(!q || p) && (q || r)</code> Works just like
 *  <code>if(q) { return p } else { return r }</code>. Works just like the
 *  conditional operator <code>q ? p : r</code> <br>
 * <img src="../../01000111 conditioned disjunction summary.png" />
 * <img src="../../01000111 CONDITIONED_DISJUNCTION_ANSI.png" />
 * @param {boolean} p
 * @param {boolean} q
 * @param {boolean} r
 * @returns {Boolean} Returns the conditioned disjunction of p, q, and r.
 * @example
 *  console.log(logical.conditionedDisjunction(false, true, true));
 *  // logs false
 * @see <a href="../../Logical.pdf">Logical.pdf</a>
 *  Article: Conditioned disjunction
 */
logical.conditionedDisjunction = function conditionedDisjunction(p, q, r) {
    'use strict';
    return logical.and(logical.implies(q, p), logical.or(q, r));
};
/** alias for conditioned disjunction */
logical.thenIfElse = logical.conditionedDisjunction;
/** alias for conditioned disjunction */
logical.conditionalDisjunction = logical.conditionedDisjunction;
/**
 * Conditioned disjunction. <code>(p && q) || (!p && r)</code> Works just like
 *  <code>if(p) { return q } else { return r }</code>. Works just like the
 *  conditional operator <code>p ? q : r</code> <br>
 * <img src="../../01010011 conditioned disjunction summary.png" />
 * <img src="../../01010011 CONDITIONED_DISJUNCTION_ANSI.png" />
 * @param {boolean} p
 * @param {boolean} q
 * @param {boolean} r
 * @returns {Boolean} Returns the conditioned disjunction of p, q, and r.
 * @example
 *  console.log(logical.ifThenElse(false, true, false));
 *  // logs false
 * @see <a href="../../Logical.pdf">Logical.pdf</a>
 *  Article: Conditioned disjunction
 */
logical.conditionedDisjunction2 = function conditionedDisjunction2(p, q, r) {
    'use strict';
    return logical.or(logical.and(p, q), logical.notBut(p, r));
};
/** alias for conditioned disjunction2 */
logical.ifThenElse = logical.conditionedDisjunction2;
/** alias for conditioned disjunction2 */
logical.conditionalDisjunction2 = logical.conditionedDisjunction2;
/**
 * Contains utilities to help with using logical.
 * @namespace Contains utilities to help with using logical.
 */
logical.tools = {};
/**
 * Converts values in truth tables to boolean values.
 * @param {Array} truthTable An array of arrays containing truth table values.
 * @returns {Array} Returns the truth table with all values converted to boolean
 *  values.
 * @example
 *  var truth = [
 *      [0, 1],
 *      [1, 0]
 *  ];
 *  truth = logical.tools.truthTableToBoolean(truth);
 *  console.log(truth);
 *  // logs
 *  // [
 *  //     [false, true],
 *  //     [true, false]
 *  // ]
 */
logical.tools.truthTableToBoolean = function truthTableToBoolean(truthTable) {
    'use strict';
    return truthTable.map(function (row) {
        return row.map(function (value) {
            return !!value;
        });
    });
};
/**
 * Tests the output of the given logical function against the given truth table.
 * @param {Array} truth The truth table.
 *  The rows are arranged with the inputs on the left and the rightmost value
 *  being the expected output. For testing logical and, the input 1,1 would
 *  be expected to return 1, so the row for this input would be 1,1,1. For more
 *  examples see the tests.
 * @param {Function} logicalFunction The logical function to test.
 * @returns {Boolean} Returns true if everything checks out.
 * @throws {Error} Throws an error on the first row that
 *  doesn't meet expectations. The error will contain a property named "data"
 *  containing the failed rows "args", "expected", and "actual" values.
 * @see <a href="../../../browser/tests/logical.test.js">Tests source</a>
 * @example 
 *  var result = false;
 *  try {
 *      result = logical.tools.testTruthTable(
 *          [
 *              [0,0,1]
 *              [0,1,1]
 *          ],
 *          logical.or
 *      );
 *      if(result) { console.log('success!'); }
 *  } catch (e) {
 *      console.log(e.data);
 *  }
 *  // logs { arguments: [ false, false ], expected: true, actual: false }
 * @example 
 *  var result = false;
 *  try {
 *      result = logical.tools.testTruthTable(
 *          [
 *              [0,0,0]
 *              [0,1,1]
 *          ],
 *          logical.or
 *      );
 *      if(result) { console.log('success!'); }
 *  } catch (e) {
 *      console.log(e.data);
 *  }
 *  // logs "success!"
 */
logical.tools.testTruthTable = function testTruthTable(truth, logicalFunction) {
    'use strict';
    truth = logical.tools.truthTableToBoolean(truth);
    var r, args, t, err;
    var i = truth.length - 1;
    for (i; i >= 0; i -= 1) {
        r = truth[i].pop();
        args = truth[i];
        t = logicalFunction.apply(logical, args);
        if (t !== r) {
            err = new Error('The values in the truth table did not match the output');
            err.data = {
                args: args,
                expected: r,
                actual: t
            };
            throw err;
        }
    }
    return true;
};
module.exports = logical;
},{}]},{},[1])
//@ sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlcyI6WyJDOi9Vc2Vycy9rYXN0b3IvRG9jdW1lbnRzL0dpdEh1Yi9sb2dpY2FsL2Rldi9icm93c2VyTWFpbi5qcyIsIkM6L1VzZXJzL2thc3Rvci9Eb2N1bWVudHMvR2l0SHViL2xvZ2ljYWwvc3JjL2xvZ2ljYWwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FDREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlc0NvbnRlbnQiOlsibG9naWNhbCA9IHJlcXVpcmUoJy4uL3NyYy9sb2dpY2FsLmpzJyk7XHJcbiIsIi8qanNsaW50XHJcbiAgICB2YXJzIDogdHJ1ZSxcclxuICAgIHVucGFyYW0gOiB0cnVlLFxyXG4gICAgbm9tZW4gOiB0cnVlXHJcbiovXHJcbi8qZ2xvYmFsc1xyXG4gICAgbW9kdWxlXHJcbiovXHJcbi8qKlxyXG4gKiBAZmlsZU92ZXJ2aWV3IExvZ2ljYWwgZnVuY3Rpb25zIGZvciBKYXZhU2NyaXB0LiBJbWFnZXMgaW4gdGhpcyBkb2N1bWVudGF0aW9uXHJcbiAqICBjYW1lIGZyb20gd2lraXBlZGlhIGFuZCBoYXZlIGJlZW4gcmVsZWFzZWQgdG8gcHVibGljIGRvbWFpbi5cclxuICogQGF1dGhvciA8YSBocmVmPVwibWFpbHRvOm1hdHRoZXdrYXN0b3JAZ21haWwuY29tXCI+TWF0dGhldyBLYXN0b3I8L2E+XHJcbiAqIEBsaWNlbnNlIDxhIGhyZWY9XCJodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvZ3BsLTMuMC1zdGFuZGFsb25lLmh0bWxcIj4gZ3BsLTMuMCA8L2E+XHJcbiAqL1xyXG4vKipcclxuICogTG9naWNhbCBmdW5jdGlvbnMgZm9yIEphdmFTY3JpcHQuIDxici8+XHJcbiAqIDxpbWcgc3JjPVwiLi4vLi4vTG9naWNhbF9jb25uZWN0aXZlc19IYXNzZV9kaWFncmFtLnN2Zy5wbmdcIiBzdHlsZT1cIndpZHRoOjEwMCVcIiAvPlxyXG4gKiBAbmFtZXNwYWNlIExvZ2ljYWwgZnVuY3Rpb25zIGZvciBKYXZhU2NyaXB0LiA8YnIvPlxyXG4gKiA8aW1nIHNyYz1cIi4uLy4uL1RydXRoIHRhYmxlcyBmb3IgdGhlIEJvb2xlYW4gb3BlcmF0aW9ucyBvZiBhcml0eSB1cCB0byAyLnBuZ1wiIHN0eWxlPVwid2lkdGg6MTAwJVwiIC8+XHJcbiAqIDxici8+XHJcbiAqIDxpbWcgc3JjPVwiLi4vLi4vTG9naWNhbCBjb25uZWN0aXZlcyB2ZW5uIGRpYWdyYW1zLnBuZ1wiIHN0eWxlPVwid2lkdGg6MTAwJVwiIC8+XHJcbiAqIEBhdXRob3IgPGEgaHJlZj1cIm1haWx0bzptYXR0aGV3a2FzdG9yQGdtYWlsLmNvbVwiPk1hdHRoZXcgS2FzdG9yPC9hPlxyXG4gKiBAbGljZW5zZSA8YSBocmVmPVwiaHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzL2dwbC0zLjAtc3RhbmRhbG9uZS5odG1sXCI+IFxyXG4gKiBncGwtMy4wIDwvYT5cclxuICogQHNlZSA8YSBocmVmPVwiLi4vLi4vTG9naWNhbC5wZGZcIj5Mb2dpY2FsLnBkZjwvYT4gQXJ0aWNsZTogVHJ1dGggZnVuY3Rpb25cclxuICogQHNlZSA8YSBocmVmPVwiLi4vLi4vTG9naWNhbC5wZGZcIj5Mb2dpY2FsLnBkZjwvYT4gQXJ0aWNsZTogVHJ1dGggdGFibGVzXHJcbiAqIEBzZWUgPGEgaHJlZj1cIi4uLy4uL0xvZ2ljYWwucGRmXCI+TG9naWNhbC5wZGY8L2E+XHJcbiAqICBBcnRpY2xlOiBCb29sZWFuIGFsZ2VicmFzIGNhbm9uaWNhbGx5IGRlZmluZWRcclxuICogQHNlZSA8YSBocmVmPVwiLi4vLi4vTG9naWNhbC5wZGZcIj5Mb2dpY2FsLnBkZjwvYT5cclxuICogIEFydGljbGU6IEJvb2xlYW4gYWxnZWJyYVxyXG4gKiBAc2VlIDxhIGhyZWY9XCIuLi8uLi9Mb2dpY2FsLnBkZlwiPkxvZ2ljYWwucGRmPC9hPlxyXG4gKiAgQXJ0aWNsZTogQm9vbGVhbiBhbGdlYnJhIChzdHJ1Y3R1cmUpXHJcbiAqL1xyXG52YXIgbG9naWNhbCA9IHt9O1xyXG4vKipcclxuICogTG9naWNhbCBjb250cmFkaWN0aW9uLiA8YnIvPlxyXG4gKiA8aW1nIHNyYz1cIi4uLy4uLzAgY29udHJhZGljdGlvbiBmYWxzZS5wbmdcIiAvPlxyXG4gKiA8aW1nIHNyYz1cIi4uLy4uLzAgY29udHJhZGljdGlvbiBmYWxzZV9BTlNJLnBuZ1wiIC8+XHJcbiAqIDxpbWcgc3JjPVwiLi4vLi4vMCBjb250cmFkaWN0aW9uIGZhbHNlIHN1bW1hcnkucG5nXCIgLz5cclxuICogQHJldHVybnMgUmV0dXJucyBmYWxzZS5cclxuICogQGV4YW1wbGVcclxuICogIGNvbnNvbGUubG9nKGxvZ2ljYWwuZigpKTtcclxuICogIC8vIGxvZ3MgZmFsc2VcclxuICogQHNlZSA8YSBocmVmPVwiLi4vLi4vTG9naWNhbC5wZGZcIj5Mb2dpY2FsLnBkZjwvYT5cclxuICogIEFydGljbGU6IEZhbHNlIChsb2dpYylcclxuICovXHJcbmxvZ2ljYWwuZmFscyA9IGZ1bmN0aW9uIGZhbHMoKSB7XHJcbiAgICAndXNlIHN0cmljdCc7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbn07XHJcbi8qKiBhbGlhcyBmb3IgZmFscyAqL1xyXG5sb2dpY2FsLmYgPSBsb2dpY2FsLmZhbHM7XHJcbi8qKiBhbGlhcyBmb3IgZmFscyAqL1xyXG5sb2dpY2FsLmNvbnRyYWRpY3Rpb24gPSBsb2dpY2FsLmZhbHM7XHJcbi8qKiBhbGlhcyBmb3IgZmFscyAqL1xyXG5sb2dpY2FsLk9wcSA9IGxvZ2ljYWwuZmFscztcclxuLyoqXHJcbiAqIExvZ2ljYWwgdGF1dG9sb2d5LiA8YnIvPlxyXG4gKiA8aW1nIHNyYz1cIi4uLy4uLzEgdGF1dG9sb2d5IHRydWUucG5nXCIgLz5cclxuICogPGltZyBzcmM9XCIuLi8uLi8xIHRhdXRvbG9neSB0cnVlX0FOU0kucG5nXCIgLz5cclxuICogPGltZyBzcmM9XCIuLi8uLi8xIHRhdXRvbG9neSB0cnVlIHN1bW1hcnkucG5nXCIgLz5cclxuICogQHJldHVybnMgUmV0dXJucyB0cnVlLlxyXG4gKiBAZXhhbXBsZVxyXG4gKiAgY29uc29sZS5sb2cobG9naWNhbC50KCkpO1xyXG4gKiAgLy8gbG9ncyB0cnVlXHJcbiAqIEBzZWUgPGEgaHJlZj1cIi4uLy4uL0xvZ2ljYWwucGRmXCI+TG9naWNhbC5wZGY8L2E+XHJcbiAqICBBcnRpY2xlOiBUYXV0b2xvZ3kgKGxvZ2ljKVxyXG4gKi9cclxubG9naWNhbC50cnUgPSBmdW5jdGlvbiB0cnUoKSB7XHJcbiAgICAndXNlIHN0cmljdCc7XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxufTtcclxuLyoqIGFsaWFzIGZvciB0cnUgKi9cclxubG9naWNhbC50ID0gbG9naWNhbC50cnU7XHJcbi8qKiBhbGlhcyBmb3IgdHJ1ICovXHJcbmxvZ2ljYWwudGF1dG9sb2d5ID0gbG9naWNhbC50cnU7XHJcbi8qKiBhbGlhcyBmb3IgdHJ1ICovXHJcbmxvZ2ljYWwuVnBxID0gbG9naWNhbC50cnU7XHJcbi8qKlxyXG4gKiBMb2dpY2FsIGlkZW50aXR5LiA8YnIvPlxyXG4gKiA8aW1nIHNyYz1cIi4uLy4uLzAxIGlkZW50aXR5LnBuZ1wiIC8+XHJcbiAqIDxpbWcgc3JjPVwiLi4vLi4vMDEgaWRlbnRpdHlfQU5TSS5wbmdcIiAvPlxyXG4gKiBAcGFyYW0ge2Jvb2xlYW59IHBcclxuICogQHJldHVybnMge0Jvb2xlYW59IFJldHVybnMgcC5cclxuICogQGV4YW1wbGVcclxuICogIGNvbnNvbGUubG9nKGxvZ2ljYWwuaWRlbnRpdHkodHJ1ZSkpO1xyXG4gKiAgLy8gbG9ncyB0cnVlXHJcbiAqIEBzZWUgPGEgaHJlZj1cIi4uLy4uL0xvZ2ljYWwucGRmXCI+TG9naWNhbC5wZGY8L2E+XHJcbiAqICBBcnRpY2xlOiBUcnV0aCB0YWJsZSwgVW5hcnkgb3BlcmF0b3JzLCBMb2dpY2FsIGlkZW50aXR5XHJcbiAqL1xyXG5sb2dpY2FsLmlkZW50aXR5ID0gZnVuY3Rpb24gaWRlbnRpdHkocCkge1xyXG4gICAgJ3VzZSBzdHJpY3QnO1xyXG4gICAgcmV0dXJuIHA7XHJcbn07XHJcbi8qKlxyXG4gKiBOT1QuIExvZ2ljYWwgbmVnYXRpb24uIDxjb2RlPiFwPC9jb2RlPiA8YnIvPlxyXG4gKiA8aW1nIHNyYz1cIi4uLy4uLzEwIG5lZ2F0aW9uLnBuZ1wiIC8+XHJcbiAqIDxpbWcgc3JjPVwiLi4vLi4vMTAgTk9UX0FOU0kucG5nXCIgLz5cclxuICogQHBhcmFtIHtCb29sZWFufSBwXHJcbiAqIEByZXR1cm5zIHtCb29sZWFufSBSZXR1cm5zIHRoZSBuZWdhdGlvbiBvZiBwLlxyXG4gKiBAZXhhbXBsZVxyXG4gKiAgY29uc29sZS5sb2cobG9naWNhbC5ub3QodHJ1ZSkpO1xyXG4gKiAgLy8gbG9ncyBmYWxzZVxyXG4gKiBAc2VlIDxhIGhyZWY9XCIuLi8uLi9Mb2dpY2FsLnBkZlwiPkxvZ2ljYWwucGRmPC9hPlxyXG4gKiAgQXJ0aWNsZTogTmVnYXRpb25cclxuICovXHJcbmxvZ2ljYWwubm90ID0gZnVuY3Rpb24gbm90KHApIHtcclxuICAgICd1c2Ugc3RyaWN0JztcclxuICAgIHJldHVybiAhcDtcclxufTtcclxuLyoqIGFsaWFzIGZvciBub3QgKi9cclxubG9naWNhbC5uZWdhdGlvbiA9IGxvZ2ljYWwubm90O1xyXG4vKipcclxuICogQU5ELiBMb2dpY2FsIGNvbmp1bmN0aW9uLiA8Y29kZT5wICYmIHE8L2NvZGU+IDxici8+XHJcbiAqIDxpbWcgc3JjPVwiLi4vLi4vMDAwMSBjb25qdW5jdGlvbi5wbmdcIiAvPlxyXG4gKiA8aW1nIHNyYz1cIi4uLy4uLzAwMDEgQU5EX0FOU0kucG5nXCIgLz5cclxuICogPGltZyBzcmM9XCIuLi8uLi8wMDAxIGNvbmp1bmN0aW9uIHN1bW1hcnkucG5nXCIgLz5cclxuICogQHBhcmFtIHtCb29sZWFufSBwXHJcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gcVxyXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gUmV0dXJucyB0aGUgY29uanVuY3Rpb24gb2YgcCBhbmQgcS5cclxuICogQGV4YW1wbGVcclxuICogIGNvbnNvbGUubG9nKGxvZ2ljYWwuYW5kKHRydWUsIHRydWUpKTtcclxuICogIC8vIGxvZ3MgdHJ1ZVxyXG4gKiBAc2VlIDxhIGhyZWY9XCIuLi8uLi9Mb2dpY2FsLnBkZlwiPkxvZ2ljYWwucGRmPC9hPlxyXG4gKiAgQXJ0aWNsZTogTG9naWNhbCBjb25qdW5jdGlvblxyXG4gKi9cclxubG9naWNhbC5hbmQgPSBmdW5jdGlvbiBhbmQocCwgcSkge1xyXG4gICAgJ3VzZSBzdHJpY3QnO1xyXG4gICAgcmV0dXJuIHAgJiYgcTtcclxufTtcclxuLyoqIGFsaWFzIGZvciBhbmQgKi9cclxubG9naWNhbC5jb25qdW5jdGlvbiA9IGxvZ2ljYWwuYW5kO1xyXG4vKiogYWxpYXMgZm9yIGFuZCAqL1xyXG5sb2dpY2FsLktwcSA9IGxvZ2ljYWwuYW5kO1xyXG4vKipcclxuICogTWF0ZXJpYWwgbm9uaW1wbGljYXRpb24uIDxjb2RlPnAgJiYgIXE8L2NvZGU+IDxici8+XHJcbiAqIDxpbWcgc3JjPVwiLi4vLi4vMDAxMCBtYXRlcmlhbCBub25pbXBsaWNhdGlvbi5wbmdcIiAvPlxyXG4gKiA8aW1nIHNyYz1cIi4uLy4uLzAwMTAgbWF0ZXJpYWwgbm9uaW1wbGljYXRpb25fQU5TSS5wbmdcIiAvPlxyXG4gKiA8aW1nIHNyYz1cIi4uLy4uLzAwMTAgbWF0ZXJpYWwgbm9uaW1wbGljYXRpb24gc3VtbWFyeS5wbmdcIiAvPlxyXG4gKiBAcGFyYW0ge2Jvb2xlYW59IHBcclxuICogQHBhcmFtIHtib29sZWFufSBxXHJcbiAqIEByZXR1cm5zIHtCb29sZWFufSBSZXR1cm5zIHRoZSBtYXRlcmlhbCBub25pbXBsaWNhdGlvbiBvZiBwIGFuZCBxLlxyXG4gKiBAZXhhbXBsZVxyXG4gKiAgY29uc29sZS5sb2cobG9naWNhbC5tYXRlcmlhbEltcGxpY2F0aW9uKHRydWUsIGZhbHNlKSk7XHJcbiAqICAvLyBsb2dzIHRydWVcclxuICogQHNlZSA8YSBocmVmPVwiLi4vLi4vTG9naWNhbC5wZGZcIj5Mb2dpY2FsLnBkZjwvYT5cclxuICogIEFydGljbGU6IE1hdGVyaWFsIG5vbmltcGxpY2F0aW9uXHJcbiAqL1xyXG5sb2dpY2FsLm1hdGVyaWFsTm9uSW1wbGljYXRpb24gPSBmdW5jdGlvbiBtYXRlcmlhbE5vbkltcGxpY2F0aW9uKHAsIHEpIHtcclxuICAgICd1c2Ugc3RyaWN0JztcclxuICAgIHJldHVybiBwICYmICFxO1xyXG59O1xyXG4vKiogYWxpYXMgZm9yIG1hdGVyaWFsTm9uSW1wbGljYXRpb24gKi9cclxubG9naWNhbC5hYmRqdW5jdGlvbiA9IGxvZ2ljYWwubWF0ZXJpYWxOb25JbXBsaWNhdGlvbjtcclxuLyoqIGFsaWFzIGZvciBtYXRlcmlhbE5vbkltcGxpY2F0aW9uICovXHJcbmxvZ2ljYWwuZG9lc05vdEltcGx5ID0gbG9naWNhbC5tYXRlcmlhbE5vbkltcGxpY2F0aW9uO1xyXG4vKiogYWxpYXMgZm9yIG1hdGVyaWFsTm9uSW1wbGljYXRpb24gKi9cclxubG9naWNhbC5idXROb3QgPSBsb2dpY2FsLm1hdGVyaWFsTm9uSW1wbGljYXRpb247XHJcbi8qKiBhbGlhcyBmb3IgbWF0ZXJpYWxOb25JbXBsaWNhdGlvbiAqL1xyXG5sb2dpY2FsLlhwID0gbG9naWNhbC5tYXRlcmlhbE5vbkltcGxpY2F0aW9uO1xyXG4vKiogYWxpYXMgZm9yIG1hdGVyaWFsTm9uSW1wbGljYXRpb24gKi9cclxubG9naWNhbC5McHEgPSBsb2dpY2FsLm1hdGVyaWFsTm9uSW1wbGljYXRpb247XHJcbi8qKlxyXG4gKiBQcm9qZWN0aW9uIG9mIHAuIDxici8+XHJcbiAqIDxpbWcgc3JjPVwiLi4vLi4vMDAxMSBwcm9wb3NpdGlvbiBwLnBuZ1wiIC8+XHJcbiAqIDxpbWcgc3JjPVwiLi4vLi4vMDAxMSBwcm9wb3NpdGlvbiBwX0FOU0kucG5nXCIgLz5cclxuICogPGltZyBzcmM9XCIuLi8uLi8wMDExIHByb3Bvc2l0aW9uIHAgc3VtbWFyeS5wbmdcIiAvPlxyXG4gKiBAcGFyYW0ge2Jvb2xlYW59IHBcclxuICogQHBhcmFtIHtib29sZWFufSBxXHJcbiAqIEByZXR1cm5zIHtCb29sZWFufSBSZXR1cm5zIHRoZSB2YWx1ZSBvZiBwLlxyXG4gKiBAZXhhbXBsZVxyXG4gKiAgY29uc29sZS5sb2cobG9naWNhbC5wKGZhbHNlLCB0cnVlKSk7XHJcbiAqICAvLyBsb2dzIGZhbHNlXHJcbiAqL1xyXG5sb2dpY2FsLnAgPSBmdW5jdGlvbiBfcChwLCBxKSB7XHJcbiAgICAndXNlIHN0cmljdCc7XHJcbiAgICByZXR1cm4gcDtcclxufTtcclxuLyoqIGFsaWFzIGZvciBwICovXHJcbmxvZ2ljYWwuSXBxID0gbG9naWNhbC5wO1xyXG4vKipcclxuICogQ29udmVyc2UgbWF0ZXJpYWwgbm9uaW1wbGljYXRpb24uIDxjb2RlPiFwICYmIHE8L2NvZGU+IDxici8+XHJcbiAqIDxpbWcgc3JjPVwiLi4vLi4vMDEwMCBjb252ZXJzZSBtYXRlcmlhbCBub25pbXBsaWNhdGlvbi5wbmdcIiAvPlxyXG4gKiA8aW1nIHNyYz1cIi4uLy4uLzAxMDAgY29udmVyc2UgbWF0ZXJpYWwgbm9uaW1wbGljYXRpb25fQU5TSS5wbmdcIiAvPlxyXG4gKiA8aW1nIHNyYz1cIi4uLy4uLzAxMDAgY29udmVyc2UgbWF0ZXJpYWwgbm9uaW1wbGljYXRpb24gc3VtbWFyeS5wbmdcIiAvPlxyXG4gKiBAcGFyYW0ge2Jvb2xlYW59IHBcclxuICogQHBhcmFtIHtib29sZWFufSBxXHJcbiAqIEByZXR1cm5zIHtCb29sZWFufSBSZXR1cm5zIHRoZSBjb252ZXJzZSBtYXRlcmlhbCBub25pbXBsaWNhdGlvbiBvZiBwIGFuZCBxLlxyXG4gKiBAZXhhbXBsZVxyXG4gKiAgY29uc29sZS5sb2cobG9naWNhbC5jb252ZXJzZU1hdGVyaWFsTm9uSW1wbGljYXRpb24oZmFsc2UsIHRydWUpKTtcclxuICogIC8vIGxvZ3MgdHJ1ZVxyXG4gKiBAc2VlIDxhIGhyZWY9XCIuLi8uLi9Mb2dpY2FsLnBkZlwiPkxvZ2ljYWwucGRmPC9hPlxyXG4gKiAgQXJ0aWNsZTogQ29udmVyc2Ugbm9uaW1wbGljYXRpb25cclxuICovXHJcbmxvZ2ljYWwuY29udmVyc2VNYXRlcmlhbE5vbkltcGxpY2F0aW9uID0gZnVuY3Rpb24gY29udmVyc2VNYXRlcmlhbE5vbkltcGxpY2F0aW9uKHAsIHEpIHtcclxuICAgICd1c2Ugc3RyaWN0JztcclxuICAgIHJldHVybiAhcCAmJiBxO1xyXG59O1xyXG4vKiogYWxpYXMgZm9yIGNvbnZlcnNlTWF0ZXJpYWxOb25JbXBsaWNhdGlvbiAqL1xyXG5sb2dpY2FsLmlzTm90SW1wbGllZEJ5ID0gbG9naWNhbC5jb252ZXJzZU1hdGVyaWFsTm9uSW1wbGljYXRpb247XHJcbi8qKiBhbGlhcyBmb3IgY29udmVyc2VNYXRlcmlhbE5vbkltcGxpY2F0aW9uICovXHJcbmxvZ2ljYWwubm90QnV0ID0gbG9naWNhbC5jb252ZXJzZU1hdGVyaWFsTm9uSW1wbGljYXRpb247XHJcbi8qKiBhbGlhcyBmb3IgY29udmVyc2VNYXRlcmlhbE5vbkltcGxpY2F0aW9uICovXHJcbmxvZ2ljYWwuY29udmVyc2VOb25JbXBsaWNhdGlvbiA9IGxvZ2ljYWwuY29udmVyc2VNYXRlcmlhbE5vbkltcGxpY2F0aW9uO1xyXG4vKiogYWxpYXMgZm9yIGNvbnZlcnNlTWF0ZXJpYWxOb25JbXBsaWNhdGlvbiAqL1xyXG5sb2dpY2FsLlhxID0gbG9naWNhbC5jb252ZXJzZU1hdGVyaWFsTm9uSW1wbGljYXRpb247XHJcbi8qKiBhbGlhcyBmb3IgY29udmVyc2VNYXRlcmlhbE5vbkltcGxpY2F0aW9uICovXHJcbmxvZ2ljYWwuTXBxID0gbG9naWNhbC5jb252ZXJzZU1hdGVyaWFsTm9uSW1wbGljYXRpb247XHJcbi8qKlxyXG4gKiBQcm9qZWN0aW9uIG9mIHEuIDxici8+XHJcbiAqIDxpbWcgc3JjPVwiLi4vLi4vMDEwMSBwcm9wb3NpdGlvbiBxLnBuZ1wiIC8+XHJcbiAqIDxpbWcgc3JjPVwiLi4vLi4vMDEwMSBwcm9wb3NpdGlvbiBxX0FOU0kucG5nXCIgLz5cclxuICogPGltZyBzcmM9XCIuLi8uLi8wMTAxIHByb3Bvc2l0aW9uIHEgc3VtbWFyeS5wbmdcIiAvPlxyXG4gKiBAcGFyYW0ge2Jvb2xlYW59IHBcclxuICogQHBhcmFtIHtib29sZWFufSBxXHJcbiAqIEByZXR1cm5zIHtCb29sZWFufSBSZXR1cm5zIHRoZSB2YWx1ZSBvZiBxLlxyXG4gKiBAZXhhbXBsZVxyXG4gKiAgY29uc29sZS5sb2cobG9naWNhbC5wKGZhbHNlLCB0cnVlKSk7XHJcbiAqICAvLyBsb2dzIHRydWVcclxuICovXHJcbmxvZ2ljYWwucSA9IGZ1bmN0aW9uIF9xKHAsIHEpIHtcclxuICAgICd1c2Ugc3RyaWN0JztcclxuICAgIHJldHVybiBxO1xyXG59O1xyXG4vKiogYWxpYXMgZm9yIHEgKi9cclxubG9naWNhbC5IcHEgPSBsb2dpY2FsLnE7XHJcbi8qKlxyXG4gKiBFeGNsdXNpdmUgT1IuIDxjb2RlPihwIHx8IHEpICYmICghKHAgJiYgcSkpPC9jb2RlPiA8YnIvPlxyXG4gKiA8aW1nIHNyYz1cIi4uLy4uLzAxMTAgZXhjbHVzaXZlIGRpc2p1bmN0aW9uLnBuZ1wiIC8+XHJcbiAqIDxpbWcgc3JjPVwiLi4vLi4vMDExMCBYT1JfQU5TSS5wbmdcIiAvPlxyXG4gKiA8aW1nIHNyYz1cIi4uLy4uLzAxMTAgZXhjbHVzaXZlIGRpc2p1bmN0aW9uIHN1bW1hcnkucG5nXCIgLz5cclxuICogQHBhcmFtIHtib29sZWFufSBwXHJcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gcVxyXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gUmV0dXJucyB0aGUgZXhjbHVzaXZlIGRpc2p1bmN0aW9uIG9mIHAgYW5kIHEuXHJcbiAqIEBleGFtcGxlXHJcbiAqICBjb25zb2xlLmxvZyhsb2dpY2FsLnhvcih0cnVlLCBmYWxzZSkpO1xyXG4gKiAgLy8gbG9ncyB0cnVlXHJcbiAqIEBzZWUgPGEgaHJlZj1cIi4uLy4uL0xvZ2ljYWwucGRmXCI+TG9naWNhbC5wZGY8L2E+XHJcbiAqICBBcnRpY2xlOiBFeGNsdXNpdmUgb3JcclxuICovXHJcbmxvZ2ljYWwueG9yID0gZnVuY3Rpb24geG9yKHAsIHEpIHtcclxuICAgICd1c2Ugc3RyaWN0JztcclxuICAgIHJldHVybiBsb2dpY2FsLmFuZChsb2dpY2FsLm9yKHAsIHEpLCBsb2dpY2FsLm5hbmQocCwgcSkpO1xyXG59O1xyXG4vKiogYWxpYXMgZm9yIHhvciAqL1xyXG5sb2dpY2FsLmV4Y2x1c2l2ZURpc2p1bmN0aW9uID0gbG9naWNhbC54b3I7XHJcbi8qKiBhbGlhcyBmb3IgeG9yICovXHJcbmxvZ2ljYWwuSnBxID0gbG9naWNhbC54b3I7XHJcbi8qKlxyXG4gKiBPUiBMb2dpY2FsIGRpc2p1bmN0aW9uLiA8Y29kZT5wIHx8IHE8L2NvZGU+IDxici8+XHJcbiAqIDxpbWcgc3JjPVwiLi4vLi4vMDExMSBkaXNqdW5jdGlvbi5wbmdcIiAvPlxyXG4gKiA8aW1nIHNyYz1cIi4uLy4uLzAxMTEgT1JfQU5TSS5wbmdcIiAvPlxyXG4gKiA8aW1nIHNyYz1cIi4uLy4uLzAxMTEgZGlzanVuY3Rpb24gc3VtbWFyeS5wbmdcIiAvPlxyXG4gKiBAcGFyYW0ge2Jvb2xlYW59IHBcclxuICogQHBhcmFtIHtib29sZWFufSBxXHJcbiAqIEByZXR1cm5zIHtCb29sZWFufSBSZXR1cm5zIHRoZSBkaXNqdW5jdGlvbiBvZiBwIGFuZCBxLlxyXG4gKiBAZXhhbXBsZVxyXG4gKiAgY29uc29sZS5sb2cobG9naWNhbC5vcih0cnVlLCBmYWxzZSkpO1xyXG4gKiAgLy8gbG9ncyB0cnVlXHJcbiAqIEBzZWUgPGEgaHJlZj1cIi4uLy4uL0xvZ2ljYWwucGRmXCI+TG9naWNhbC5wZGY8L2E+XHJcbiAqICBBcnRpY2xlOiBMb2dpY2FsIGRpc2p1bmN0aW9uXHJcbiAqL1xyXG5sb2dpY2FsLm9yID0gZnVuY3Rpb24gb3IocCwgcSkge1xyXG4gICAgJ3VzZSBzdHJpY3QnO1xyXG4gICAgcmV0dXJuIHAgfHwgcTtcclxufTtcclxuLyoqIGFsaWFzIGZvciBvciAqL1xyXG5sb2dpY2FsLmRpc2p1bmN0aW9uID0gbG9naWNhbC5vcjtcclxuLyoqIGFsaWFzIGZvciBvciAqL1xyXG5sb2dpY2FsLkFwcSA9IGxvZ2ljYWwub3I7XHJcbi8qKlxyXG4gKiBOT1IuIFRoZSBjb21wbGltZW50IG9mIE9SLiA8Y29kZT4hKHAgfHwgcSk8L2NvZGU+IDxici8+XHJcbiAqIDxpbWcgc3JjPVwiLi4vLi4vMTAwMCBqb2ludCBkZW5pYWwucG5nXCIgLz5cclxuICogPGltZyBzcmM9XCIuLi8uLi8xMDAwIE5PUl9BTlNJLnBuZ1wiIC8+XHJcbiAqIDxpbWcgc3JjPVwiLi4vLi4vMTAwMCBqb2ludCBkZW5pYWwgc3VtbWFyeS5wbmdcIiAvPlxyXG4gKiBAcGFyYW0ge2Jvb2xlYW59IHBcclxuICogQHBhcmFtIHtib29sZWFufSBxXHJcbiAqIEByZXR1cm5zIHtCb29sZWFufSBSZXR1cm5zIHRoZSBuZWdhdGVkIGRpc2p1bmN0aW9uIG9mIHAgYW5kIHEuXHJcbiAqIEBleGFtcGxlXHJcbiAqICBjb25zb2xlLmxvZyhsb2dpY2FsLm5vcih0cnVlLCBmYWxzZSkpO1xyXG4gKiAgLy8gbG9ncyBmYWxzZVxyXG4gKiBAc2VlIDxhIGhyZWY9XCIuLi8uLi9Mb2dpY2FsLnBkZlwiPkxvZ2ljYWwucGRmPC9hPlxyXG4gKiAgQXJ0aWNsZTogTG9naWNhbCBOT1JcclxuICovXHJcbmxvZ2ljYWwubm9yID0gZnVuY3Rpb24gbm9yKHAsIHEpIHtcclxuICAgICd1c2Ugc3RyaWN0JztcclxuICAgIHJldHVybiBsb2dpY2FsLm5vdChsb2dpY2FsLm9yKHAsIHEpKTtcclxufTtcclxuLyoqIGFsaWFzIGZvciBub3IgKi9cclxubG9naWNhbC5YcHEgPSBsb2dpY2FsLm5vcjtcclxuLyoqIGFsaWFzIGZvciBub3IgKi9cclxubG9naWNhbC5qb2ludERlbmlhbCA9IGxvZ2ljYWwubm9yO1xyXG4vKipcclxuICogRXhjbHVzaXZlIE5PUi4gVGhlIGNvbXBsZW1lbnQgb2YgZXhjbHVzaXZlIE9SLlxyXG4gKiAgPGNvZGU+ISgocCB8fCBxKSAmJiAoIShwICYmIHEpKSk8L2NvZGU+IDxici8+XHJcbiAqIDxpbWcgc3JjPVwiLi4vLi4vMTAwMSBtYXRlcmlhbCBiaWNvbmRpdGlvbmFsLnBuZ1wiIC8+XHJcbiAqIDxpbWcgc3JjPVwiLi4vLi4vMTAwMSBYTk9SX0FOU0kucG5nXCIgLz5cclxuICogPGltZyBzcmM9XCIuLi8uLi8xMDAxIG1hdGVyaWFsIGJpY29uZGl0aW9uYWwgc3VtbWFyeS5wbmdcIiAvPlxyXG4gKiBAcGFyYW0ge2Jvb2xlYW59IHBcclxuICogQHBhcmFtIHtib29sZWFufSBxXHJcbiAqIEByZXR1cm5zIHtCb29sZWFufSBSZXR1cm5zIHRoZSBuZWdhdGVkIGV4Y2x1c2l2ZSBkaXNqdW5jdGlvbiBvZiBwIGFuZCBxLlxyXG4gKiBAZXhhbXBsZVxyXG4gKiAgY29uc29sZS5sb2cobG9naWNhbC54bm9yKHRydWUsIGZhbHNlKSk7XHJcbiAqICAvLyBsb2dzIGZhbHNlXHJcbiAqIEBzZWUgPGEgaHJlZj1cIi4uLy4uL0xvZ2ljYWwucGRmXCI+TG9naWNhbC5wZGY8L2E+XHJcbiAqICBBcnRpY2xlOiBMb2dpY2FsIGJpY29uZGl0aW9uYWxcclxuICogQHNlZSA8YSBocmVmPVwiLi4vLi4vTG9naWNhbC5wZGZcIj5Mb2dpY2FsLnBkZjwvYT5cclxuICogIEFydGljbGU6IExvZ2ljYWwgZXF1YWxpdHlcclxuICogQHNlZSA8YSBocmVmPVwiLi4vLi4vTG9naWNhbC5wZGZcIj5Mb2dpY2FsLnBkZjwvYT5cclxuICogIEFydGljbGU6IElmIGFuZCBvbmx5IGlmXHJcbiAqIEBzZWUgPGEgaHJlZj1cIi4uLy4uL0xvZ2ljYWwucGRmXCI+TG9naWNhbC5wZGY8L2E+XHJcbiAqICBBcnRpY2xlOiBNYXRlcmlhbCBlcXVpdmFsZW5jZVxyXG4gKi9cclxubG9naWNhbC54bm9yID0gZnVuY3Rpb24geG5vcihwLCBxKSB7XHJcbiAgICAndXNlIHN0cmljdCc7XHJcbiAgICByZXR1cm4gbG9naWNhbC5ub3QobG9naWNhbC54b3IocCwgcSkpO1xyXG59O1xyXG4vKiogYWxpYXMgZm9yIHhub3IgKi9cclxubG9naWNhbC5lcXVhbGl0eSA9IGxvZ2ljYWwueG5vcjtcclxuLyoqIGFsaWFzIGZvciB4bm9yICovXHJcbmxvZ2ljYWwuZXF1YWxzID0gbG9naWNhbC54bm9yO1xyXG4vKiogYWxpYXMgZm9yIHhub3IgKi9cclxubG9naWNhbC5pZkFuZE9ubHlJZiA9IGxvZ2ljYWwueG5vcjtcclxuLyoqIGFsaWFzIGZvciB4bm9yICovXHJcbmxvZ2ljYWwuaWZmID0gbG9naWNhbC54bm9yO1xyXG4vKiogYWxpYXMgZm9yIHhub3IgKi9cclxubG9naWNhbC5iaWNvbmRpdGlvbmFsID0gbG9naWNhbC54bm9yO1xyXG4vKiogYWxpYXMgZm9yIHhub3IgKi9cclxubG9naWNhbC5tYXRlcmlhbEJpY29uZGl0aW9uYWwgPSBsb2dpY2FsLnhub3I7XHJcbi8qKiBhbGlhcyBmb3IgeG5vciAqL1xyXG5sb2dpY2FsLkVwcSA9IGxvZ2ljYWwueG5vcjtcclxuLyoqXHJcbiAqIE5lZ2F0ZXMgcSwgaWdub3JpbmcgcC4gPGNvZGU+IXE8L2NvZGU+IDxici8+XHJcbiAqIDxpbWcgc3JjPVwiLi4vLi4vMTAxMCBub3QgcS5wbmdcIiAvPlxyXG4gKiA8aW1nIHNyYz1cIi4uLy4uLzEwMTAgbm90IHFfQU5TSS5wbmdcIiAvPlxyXG4gKiA8aW1nIHNyYz1cIi4uLy4uLzEwMTAgbm90IHEgc3VtbWFyeS5wbmdcIiAvPlxyXG4gKiBAcGFyYW0ge2Jvb2xlYW59IHBcclxuICogQHBhcmFtIHtib29sZWFufSBxXHJcbiAqIEByZXR1cm5zIHtCb29sZWFufSBSZXR1cm5zIHRoZSBuZWdhdGVkIHZhbHVlIG9mIHEuXHJcbiAqIEBleGFtcGxlXHJcbiAqICBjb25zb2xlLmxvZyhsb2dpY2FsLk5xKGZhbHNlLCB0cnVlKSk7XHJcbiAqICAvLyBsb2dzIGZhbHNlXHJcbiAqIEBzZWUgPGEgaHJlZj1cIi4uLy4uL0xvZ2ljYWwucGRmXCI+TG9naWNhbC5wZGY8L2E+XHJcbiAqICBBcnRpY2xlOiBOZWdhdGlvblxyXG4gKi9cclxubG9naWNhbC5ub3RfcSA9IGZ1bmN0aW9uIG5vdF9xKHAsIHEpIHtcclxuICAgICd1c2Ugc3RyaWN0JztcclxuICAgIHJldHVybiAhcTtcclxufTtcclxuLyoqIGFsaWFzIGZvciBub3RfcSAqL1xyXG5sb2dpY2FsLk5xID0gbG9naWNhbC5ub3RfcTtcclxuLyoqIGFsaWFzIGZvciBub3RfcSAqL1xyXG5sb2dpY2FsLkdwcSA9IGxvZ2ljYWwubm90X3E7XHJcbi8qKlxyXG4gKiBDb252ZXJzZSBtYXRlcmlhbCBpbXBsaWNhdGlvbi4gPGNvZGU+cCB8fCAhcTwvY29kZT4gPGJyLz5cclxuICogPGltZyBzcmM9XCIuLi8uLi8xMDExIGNvbnZlcnNlIG1hdGVyaWFsIGltcGxpY2F0aW9uLnBuZ1wiIC8+XHJcbiAqIDxpbWcgc3JjPVwiLi4vLi4vMTAxMSBjb252ZXJzZSBtYXRlcmlhbCBpbXBsaWNhdGlvbl9BTlNJLnBuZ1wiIC8+XHJcbiAqIDxpbWcgc3JjPVwiLi4vLi4vMTAxMSBjb252ZXJzZSBtYXRlcmlhbCBpbXBsaWNhdGlvbiBzdW1tYXJ5LnBuZ1wiIC8+XHJcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gcFxyXG4gKiBAcGFyYW0ge2Jvb2xlYW59IHFcclxuICogQHJldHVybnMge0Jvb2xlYW59IFJldHVybnMgdGhlIGNvbnZlcnNlIG1hdGVyaWFsIGltcGxpY2F0aW9uIG9mIHAgYW5kIHEuXHJcbiAqIEBleGFtcGxlXHJcbiAqICBjb25zb2xlLmxvZyhsb2dpY2FsLmNvbnZlcnNlTWF0ZXJpYWxJbXBsaWNhdGlvbihmYWxzZSwgdHJ1ZSkpO1xyXG4gKiAgLy8gbG9ncyBmYWxzZVxyXG4gKiBAc2VlIDxhIGhyZWY9XCIuLi8uLi9Mb2dpY2FsLnBkZlwiPkxvZ2ljYWwucGRmPC9hPlxyXG4gKiAgQXJ0aWNsZTogQ29udmVyc2UgaW1wbGljYXRpb25cclxuICovXHJcbmxvZ2ljYWwuY29udmVyc2VNYXRlcmlhbEltcGxpY2F0aW9uID0gZnVuY3Rpb24gY29udmVyc2VNYXRlcmlhbEltcGxpY2F0aW9uKHAsIHEpIHtcclxuICAgICd1c2Ugc3RyaWN0JztcclxuICAgIHJldHVybiBwIHx8ICFxO1xyXG59O1xyXG4vKiogYWxpYXMgZm9yIGNvbnZlcnNlTWF0ZXJpYWxJbXBsaWNhdGlvbiAqL1xyXG5sb2dpY2FsLmlzSW1wbGllZEJ5ID0gbG9naWNhbC5jb252ZXJzZU1hdGVyaWFsSW1wbGljYXRpb247XHJcbi8qKiBhbGlhcyBmb3IgY29udmVyc2VNYXRlcmlhbEltcGxpY2F0aW9uICovXHJcbmxvZ2ljYWwuY29udmVyc2VJbXBsaWNhdGlvbiA9IGxvZ2ljYWwuY29udmVyc2VNYXRlcmlhbEltcGxpY2F0aW9uO1xyXG4vKiogYWxpYXMgZm9yIGNvbnZlcnNlTWF0ZXJpYWxJbXBsaWNhdGlvbiAqL1xyXG5sb2dpY2FsLlhOcSA9IGxvZ2ljYWwuY29udmVyc2VNYXRlcmlhbEltcGxpY2F0aW9uO1xyXG4vKiogYWxpYXMgZm9yIGNvbnZlcnNlTWF0ZXJpYWxJbXBsaWNhdGlvbiAqL1xyXG5sb2dpY2FsLkJwcSA9IGxvZ2ljYWwuY29udmVyc2VNYXRlcmlhbEltcGxpY2F0aW9uO1xyXG4vKipcclxuICogTmVnYXRlcyBwLCBpZ25vcmluZyBxLiA8Y29kZT4hcDwvY29kZT4gPGJyLz5cclxuICogPGltZyBzcmM9XCIuLi8uLi8xMTAwIG5vdCBwLnBuZ1wiIC8+XHJcbiAqIDxpbWcgc3JjPVwiLi4vLi4vMTEwMCBub3QgcF9BTlNJLnBuZ1wiIC8+XHJcbiAqIDxpbWcgc3JjPVwiLi4vLi4vMTEwMCBub3QgcCBzdW1tYXJ5LnBuZ1wiIC8+XHJcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gcFxyXG4gKiBAcGFyYW0ge2Jvb2xlYW59IHFcclxuICogQHJldHVybnMge0Jvb2xlYW59IFJldHVybnMgdGhlIG5lZ2F0ZWQgdmFsdWUgb2YgcC5cclxuICogQGV4YW1wbGVcclxuICogIGNvbnNvbGUubG9nKGxvZ2ljYWwuTnAoZmFsc2UsIHRydWUpKTtcclxuICogIC8vIGxvZ3MgdHJ1ZVxyXG4gKiBAc2VlIDxhIGhyZWY9XCIuLi8uLi9Mb2dpY2FsLnBkZlwiPkxvZ2ljYWwucGRmPC9hPlxyXG4gKiAgQXJ0aWNsZTogTmVnYXRpb25cclxuICovXHJcbmxvZ2ljYWwubm90X3AgPSBmdW5jdGlvbiBub3RfcChwLCBxKSB7XHJcbiAgICAndXNlIHN0cmljdCc7XHJcbiAgICByZXR1cm4gIXA7XHJcbn07XHJcbi8qKiBhbGlhcyBmb3Igbm90X3AgKi9cclxubG9naWNhbC5OcCA9IGxvZ2ljYWwubm90X3A7XHJcbi8qKiBhbGlhcyBmb3Igbm90X3AgKi9cclxubG9naWNhbC5GcHEgPSBsb2dpY2FsLm5vdF9wO1xyXG4vKipcclxuICogTWF0ZXJpYWwgaW1wbGljYXRpb24uIDxjb2RlPiFwIHx8IHE8L2NvZGU+IDxici8+XHJcbiAqIDxpbWcgc3JjPVwiLi4vLi4vMTEwMSBtYXRlcmlhbCBpbXBsaWNhdGlvbi5wbmdcIiAvPlxyXG4gKiA8aW1nIHNyYz1cIi4uLy4uLzExMDEgbWF0ZXJpYWwgaW1wbGljYXRpb25fQU5TSS5wbmdcIiAvPlxyXG4gKiA8aW1nIHNyYz1cIi4uLy4uLzExMDEgbWF0ZXJpYWwgaW1wbGljYXRpb24gc3VtbWFyeS5wbmdcIiAvPlxyXG4gKiBAcGFyYW0ge2Jvb2xlYW59IHBcclxuICogQHBhcmFtIHtib29sZWFufSBxXHJcbiAqIEByZXR1cm5zIHtCb29sZWFufSBSZXR1cm5zIHRoZSBtYXRlcmlhbCBpbXBsaWNhdGlvbiBvZiBwIGFuZCBxLlxyXG4gKiBAZXhhbXBsZVxyXG4gKiAgY29uc29sZS5sb2cobG9naWNhbC5tYXRlcmlhbEltcGxpY2F0aW9uKHRydWUsIGZhbHNlKSk7XHJcbiAqICAvLyBsb2dzIGZhbHNlXHJcbiAqIEBzZWUgPGEgaHJlZj1cIi4uLy4uL0xvZ2ljYWwucGRmXCI+TG9naWNhbC5wZGY8L2E+XHJcbiAqICBBcnRpY2xlOiBNYXRlcmlhbCBjb25kaXRpb25hbFxyXG4gKi9cclxubG9naWNhbC5tYXRlcmlhbEltcGxpY2F0aW9uID0gZnVuY3Rpb24gbWF0ZXJpYWxJbXBsaWNhdGlvbihwLCBxKSB7XHJcbiAgICAndXNlIHN0cmljdCc7XHJcbiAgICByZXR1cm4gIXAgfHwgcTtcclxufTtcclxuLyoqIGFsaWFzIGZvciBtYXRlcmlhbEltcGxpY2F0aW9uICovXHJcbmxvZ2ljYWwubWF0ZXJpYWxDb25kaXRpb25hbCA9IGxvZ2ljYWwubWF0ZXJpYWxJbXBsaWNhdGlvbjtcclxuLyoqIGFsaWFzIGZvciBtYXRlcmlhbEltcGxpY2F0aW9uICovXHJcbmxvZ2ljYWwubWF0ZXJpYWxDb25zZXF1ZW5jZSA9IGxvZ2ljYWwubWF0ZXJpYWxJbXBsaWNhdGlvbjtcclxuLyoqIGFsaWFzIGZvciBtYXRlcmlhbEltcGxpY2F0aW9uICovXHJcbmxvZ2ljYWwuaW1wbGljYXRpb24gPSBsb2dpY2FsLm1hdGVyaWFsSW1wbGljYXRpb247XHJcbi8qKiBhbGlhcyBmb3IgbWF0ZXJpYWxJbXBsaWNhdGlvbiAqL1xyXG5sb2dpY2FsLmltcGxpZXMgPSBsb2dpY2FsLm1hdGVyaWFsSW1wbGljYXRpb247XHJcbi8qKiBhbGlhcyBmb3IgbWF0ZXJpYWxJbXBsaWNhdGlvbiAqL1xyXG5sb2dpY2FsLmNvbmRpdGlvbmFsID0gbG9naWNhbC5tYXRlcmlhbEltcGxpY2F0aW9uO1xyXG4vKiogYWxpYXMgZm9yIG1hdGVyaWFsSW1wbGljYXRpb24gKi9cclxubG9naWNhbC5YTnAgPSBsb2dpY2FsLm1hdGVyaWFsSW1wbGljYXRpb247XHJcbi8qKiBhbGlhcyBmb3IgbWF0ZXJpYWxJbXBsaWNhdGlvbiAqL1xyXG5sb2dpY2FsLkNwcSA9IGxvZ2ljYWwubWF0ZXJpYWxJbXBsaWNhdGlvbjtcclxuLyoqXHJcbiAqIE5BTkQuIENvbXBsaW1lbnQgb2YgQU5ELiA8Y29kZT4hKHAgJiYgcSk8L2NvZGU+IDxici8+XHJcbiAqIDxpbWcgc3JjPVwiLi4vLi4vMTExMCBhbHRlcm5hdGl2ZSBkZW5pYWwucG5nXCIgLz5cclxuICogPGltZyBzcmM9XCIuLi8uLi8xMTEwIE5BTkRfQU5TSS5wbmdcIiAvPlxyXG4gKiA8aW1nIHNyYz1cIi4uLy4uLzExMTAgYWx0ZXJuYXRpdmUgZGVuaWFsIHN1bW1hcnkucG5nXCIgLz5cclxuICogQHBhcmFtIHtib29sZWFufSBwXHJcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gcVxyXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gUmV0dXJucyB0aGUgbmVnYXRlZCBjb25qdW5jdGlvbiBvZiBwIGFuZCBxLlxyXG4gKiBAZXhhbXBsZVxyXG4gKiAgY29uc29sZS5sb2cobG9naWNhbC5uYW5kKHRydWUsIHRydWUpKTtcclxuICogIC8vIGxvZ3MgZmFsc2VcclxuICogQHNlZSA8YSBocmVmPVwiLi4vLi4vTG9naWNhbC5wZGZcIj5Mb2dpY2FsLnBkZjwvYT5cclxuICogIEFydGljbGU6IFNoZWZmZXIgc3Ryb2tlXHJcbiAqL1xyXG5sb2dpY2FsLm5hbmQgPSBmdW5jdGlvbiBuYW5kKHAsIHEpIHtcclxuICAgICd1c2Ugc3RyaWN0JztcclxuICAgIHJldHVybiBsb2dpY2FsLm5vdChsb2dpY2FsLmFuZChwLCBxKSk7XHJcbn07XHJcbi8qKiBhbGlhcyBmb3IgbmFuZCAqL1xyXG5sb2dpY2FsLkRwcSA9IGxvZ2ljYWwubmFuZDtcclxuLyoqIGFsaWFzIGZvciBuYW5kICovXHJcbmxvZ2ljYWwuYWx0ZXJuYXRpdmVEZW5pYWwgPSBsb2dpY2FsLm5hbmQ7XHJcbi8qKlxyXG4gKiBDb25kaXRpb25lZCBkaXNqdW5jdGlvbi4gPGNvZGU+KCFxIHx8IHApICYmIChxIHx8IHIpPC9jb2RlPiBXb3JrcyBqdXN0IGxpa2VcclxuICogIDxjb2RlPmlmKHEpIHsgcmV0dXJuIHAgfSBlbHNlIHsgcmV0dXJuIHIgfTwvY29kZT4uIFdvcmtzIGp1c3QgbGlrZSB0aGVcclxuICogIGNvbmRpdGlvbmFsIG9wZXJhdG9yIDxjb2RlPnEgPyBwIDogcjwvY29kZT4gPGJyPlxyXG4gKiA8aW1nIHNyYz1cIi4uLy4uLzAxMDAwMTExIGNvbmRpdGlvbmVkIGRpc2p1bmN0aW9uIHN1bW1hcnkucG5nXCIgLz5cclxuICogPGltZyBzcmM9XCIuLi8uLi8wMTAwMDExMSBDT05ESVRJT05FRF9ESVNKVU5DVElPTl9BTlNJLnBuZ1wiIC8+XHJcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gcFxyXG4gKiBAcGFyYW0ge2Jvb2xlYW59IHFcclxuICogQHBhcmFtIHtib29sZWFufSByXHJcbiAqIEByZXR1cm5zIHtCb29sZWFufSBSZXR1cm5zIHRoZSBjb25kaXRpb25lZCBkaXNqdW5jdGlvbiBvZiBwLCBxLCBhbmQgci5cclxuICogQGV4YW1wbGVcclxuICogIGNvbnNvbGUubG9nKGxvZ2ljYWwuY29uZGl0aW9uZWREaXNqdW5jdGlvbihmYWxzZSwgdHJ1ZSwgdHJ1ZSkpO1xyXG4gKiAgLy8gbG9ncyBmYWxzZVxyXG4gKiBAc2VlIDxhIGhyZWY9XCIuLi8uLi9Mb2dpY2FsLnBkZlwiPkxvZ2ljYWwucGRmPC9hPlxyXG4gKiAgQXJ0aWNsZTogQ29uZGl0aW9uZWQgZGlzanVuY3Rpb25cclxuICovXHJcbmxvZ2ljYWwuY29uZGl0aW9uZWREaXNqdW5jdGlvbiA9IGZ1bmN0aW9uIGNvbmRpdGlvbmVkRGlzanVuY3Rpb24ocCwgcSwgcikge1xyXG4gICAgJ3VzZSBzdHJpY3QnO1xyXG4gICAgcmV0dXJuIGxvZ2ljYWwuYW5kKGxvZ2ljYWwuaW1wbGllcyhxLCBwKSwgbG9naWNhbC5vcihxLCByKSk7XHJcbn07XHJcbi8qKiBhbGlhcyBmb3IgY29uZGl0aW9uZWQgZGlzanVuY3Rpb24gKi9cclxubG9naWNhbC50aGVuSWZFbHNlID0gbG9naWNhbC5jb25kaXRpb25lZERpc2p1bmN0aW9uO1xyXG4vKiogYWxpYXMgZm9yIGNvbmRpdGlvbmVkIGRpc2p1bmN0aW9uICovXHJcbmxvZ2ljYWwuY29uZGl0aW9uYWxEaXNqdW5jdGlvbiA9IGxvZ2ljYWwuY29uZGl0aW9uZWREaXNqdW5jdGlvbjtcclxuLyoqXHJcbiAqIENvbmRpdGlvbmVkIGRpc2p1bmN0aW9uLiA8Y29kZT4ocCAmJiBxKSB8fCAoIXAgJiYgcik8L2NvZGU+IFdvcmtzIGp1c3QgbGlrZVxyXG4gKiAgPGNvZGU+aWYocCkgeyByZXR1cm4gcSB9IGVsc2UgeyByZXR1cm4gciB9PC9jb2RlPi4gV29ya3MganVzdCBsaWtlIHRoZVxyXG4gKiAgY29uZGl0aW9uYWwgb3BlcmF0b3IgPGNvZGU+cCA/IHEgOiByPC9jb2RlPiA8YnI+XHJcbiAqIDxpbWcgc3JjPVwiLi4vLi4vMDEwMTAwMTEgY29uZGl0aW9uZWQgZGlzanVuY3Rpb24gc3VtbWFyeS5wbmdcIiAvPlxyXG4gKiA8aW1nIHNyYz1cIi4uLy4uLzAxMDEwMDExIENPTkRJVElPTkVEX0RJU0pVTkNUSU9OX0FOU0kucG5nXCIgLz5cclxuICogQHBhcmFtIHtib29sZWFufSBwXHJcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gcVxyXG4gKiBAcGFyYW0ge2Jvb2xlYW59IHJcclxuICogQHJldHVybnMge0Jvb2xlYW59IFJldHVybnMgdGhlIGNvbmRpdGlvbmVkIGRpc2p1bmN0aW9uIG9mIHAsIHEsIGFuZCByLlxyXG4gKiBAZXhhbXBsZVxyXG4gKiAgY29uc29sZS5sb2cobG9naWNhbC5pZlRoZW5FbHNlKGZhbHNlLCB0cnVlLCBmYWxzZSkpO1xyXG4gKiAgLy8gbG9ncyBmYWxzZVxyXG4gKiBAc2VlIDxhIGhyZWY9XCIuLi8uLi9Mb2dpY2FsLnBkZlwiPkxvZ2ljYWwucGRmPC9hPlxyXG4gKiAgQXJ0aWNsZTogQ29uZGl0aW9uZWQgZGlzanVuY3Rpb25cclxuICovXHJcbmxvZ2ljYWwuY29uZGl0aW9uZWREaXNqdW5jdGlvbjIgPSBmdW5jdGlvbiBjb25kaXRpb25lZERpc2p1bmN0aW9uMihwLCBxLCByKSB7XHJcbiAgICAndXNlIHN0cmljdCc7XHJcbiAgICByZXR1cm4gbG9naWNhbC5vcihsb2dpY2FsLmFuZChwLCBxKSwgbG9naWNhbC5ub3RCdXQocCwgcikpO1xyXG59O1xyXG4vKiogYWxpYXMgZm9yIGNvbmRpdGlvbmVkIGRpc2p1bmN0aW9uMiAqL1xyXG5sb2dpY2FsLmlmVGhlbkVsc2UgPSBsb2dpY2FsLmNvbmRpdGlvbmVkRGlzanVuY3Rpb24yO1xyXG4vKiogYWxpYXMgZm9yIGNvbmRpdGlvbmVkIGRpc2p1bmN0aW9uMiAqL1xyXG5sb2dpY2FsLmNvbmRpdGlvbmFsRGlzanVuY3Rpb24yID0gbG9naWNhbC5jb25kaXRpb25lZERpc2p1bmN0aW9uMjtcclxuLyoqXHJcbiAqIENvbnRhaW5zIHV0aWxpdGllcyB0byBoZWxwIHdpdGggdXNpbmcgbG9naWNhbC5cclxuICogQG5hbWVzcGFjZSBDb250YWlucyB1dGlsaXRpZXMgdG8gaGVscCB3aXRoIHVzaW5nIGxvZ2ljYWwuXHJcbiAqL1xyXG5sb2dpY2FsLnRvb2xzID0ge307XHJcbi8qKlxyXG4gKiBDb252ZXJ0cyB2YWx1ZXMgaW4gdHJ1dGggdGFibGVzIHRvIGJvb2xlYW4gdmFsdWVzLlxyXG4gKiBAcGFyYW0ge0FycmF5fSB0cnV0aFRhYmxlIEFuIGFycmF5IG9mIGFycmF5cyBjb250YWluaW5nIHRydXRoIHRhYmxlIHZhbHVlcy5cclxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSB0cnV0aCB0YWJsZSB3aXRoIGFsbCB2YWx1ZXMgY29udmVydGVkIHRvIGJvb2xlYW5cclxuICogIHZhbHVlcy5cclxuICogQGV4YW1wbGVcclxuICogIHZhciB0cnV0aCA9IFtcclxuICogICAgICBbMCwgMV0sXHJcbiAqICAgICAgWzEsIDBdXHJcbiAqICBdO1xyXG4gKiAgdHJ1dGggPSBsb2dpY2FsLnRvb2xzLnRydXRoVGFibGVUb0Jvb2xlYW4odHJ1dGgpO1xyXG4gKiAgY29uc29sZS5sb2codHJ1dGgpO1xyXG4gKiAgLy8gbG9nc1xyXG4gKiAgLy8gW1xyXG4gKiAgLy8gICAgIFtmYWxzZSwgdHJ1ZV0sXHJcbiAqICAvLyAgICAgW3RydWUsIGZhbHNlXVxyXG4gKiAgLy8gXVxyXG4gKi9cclxubG9naWNhbC50b29scy50cnV0aFRhYmxlVG9Cb29sZWFuID0gZnVuY3Rpb24gdHJ1dGhUYWJsZVRvQm9vbGVhbih0cnV0aFRhYmxlKSB7XHJcbiAgICAndXNlIHN0cmljdCc7XHJcbiAgICByZXR1cm4gdHJ1dGhUYWJsZS5tYXAoZnVuY3Rpb24gKHJvdykge1xyXG4gICAgICAgIHJldHVybiByb3cubWFwKGZ1bmN0aW9uICh2YWx1ZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gISF2YWx1ZTtcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59O1xyXG4vKipcclxuICogVGVzdHMgdGhlIG91dHB1dCBvZiB0aGUgZ2l2ZW4gbG9naWNhbCBmdW5jdGlvbiBhZ2FpbnN0IHRoZSBnaXZlbiB0cnV0aCB0YWJsZS5cclxuICogQHBhcmFtIHtBcnJheX0gdHJ1dGggVGhlIHRydXRoIHRhYmxlLlxyXG4gKiAgVGhlIHJvd3MgYXJlIGFycmFuZ2VkIHdpdGggdGhlIGlucHV0cyBvbiB0aGUgbGVmdCBhbmQgdGhlIHJpZ2h0bW9zdCB2YWx1ZVxyXG4gKiAgYmVpbmcgdGhlIGV4cGVjdGVkIG91dHB1dC4gRm9yIHRlc3RpbmcgbG9naWNhbCBhbmQsIHRoZSBpbnB1dCAxLDEgd291bGRcclxuICogIGJlIGV4cGVjdGVkIHRvIHJldHVybiAxLCBzbyB0aGUgcm93IGZvciB0aGlzIGlucHV0IHdvdWxkIGJlIDEsMSwxLiBGb3IgbW9yZVxyXG4gKiAgZXhhbXBsZXMgc2VlIHRoZSB0ZXN0cy5cclxuICogQHBhcmFtIHtGdW5jdGlvbn0gbG9naWNhbEZ1bmN0aW9uIFRoZSBsb2dpY2FsIGZ1bmN0aW9uIHRvIHRlc3QuXHJcbiAqIEByZXR1cm5zIHtCb29sZWFufSBSZXR1cm5zIHRydWUgaWYgZXZlcnl0aGluZyBjaGVja3Mgb3V0LlxyXG4gKiBAdGhyb3dzIHtFcnJvcn0gVGhyb3dzIGFuIGVycm9yIG9uIHRoZSBmaXJzdCByb3cgdGhhdFxyXG4gKiAgZG9lc24ndCBtZWV0IGV4cGVjdGF0aW9ucy4gVGhlIGVycm9yIHdpbGwgY29udGFpbiBhIHByb3BlcnR5IG5hbWVkIFwiZGF0YVwiXHJcbiAqICBjb250YWluaW5nIHRoZSBmYWlsZWQgcm93cyBcImFyZ3NcIiwgXCJleHBlY3RlZFwiLCBhbmQgXCJhY3R1YWxcIiB2YWx1ZXMuXHJcbiAqIEBzZWUgPGEgaHJlZj1cIi4uLy4uLy4uL2Jyb3dzZXIvdGVzdHMvbG9naWNhbC50ZXN0LmpzXCI+VGVzdHMgc291cmNlPC9hPlxyXG4gKiBAZXhhbXBsZSBcclxuICogIHZhciByZXN1bHQgPSBmYWxzZTtcclxuICogIHRyeSB7XHJcbiAqICAgICAgcmVzdWx0ID0gbG9naWNhbC50b29scy50ZXN0VHJ1dGhUYWJsZShcclxuICogICAgICAgICAgW1xyXG4gKiAgICAgICAgICAgICAgWzAsMCwxXVxyXG4gKiAgICAgICAgICAgICAgWzAsMSwxXVxyXG4gKiAgICAgICAgICBdLFxyXG4gKiAgICAgICAgICBsb2dpY2FsLm9yXHJcbiAqICAgICAgKTtcclxuICogICAgICBpZihyZXN1bHQpIHsgY29uc29sZS5sb2coJ3N1Y2Nlc3MhJyk7IH1cclxuICogIH0gY2F0Y2ggKGUpIHtcclxuICogICAgICBjb25zb2xlLmxvZyhlLmRhdGEpO1xyXG4gKiAgfVxyXG4gKiAgLy8gbG9ncyB7IGFyZ3VtZW50czogWyBmYWxzZSwgZmFsc2UgXSwgZXhwZWN0ZWQ6IHRydWUsIGFjdHVhbDogZmFsc2UgfVxyXG4gKiBAZXhhbXBsZSBcclxuICogIHZhciByZXN1bHQgPSBmYWxzZTtcclxuICogIHRyeSB7XHJcbiAqICAgICAgcmVzdWx0ID0gbG9naWNhbC50b29scy50ZXN0VHJ1dGhUYWJsZShcclxuICogICAgICAgICAgW1xyXG4gKiAgICAgICAgICAgICAgWzAsMCwwXVxyXG4gKiAgICAgICAgICAgICAgWzAsMSwxXVxyXG4gKiAgICAgICAgICBdLFxyXG4gKiAgICAgICAgICBsb2dpY2FsLm9yXHJcbiAqICAgICAgKTtcclxuICogICAgICBpZihyZXN1bHQpIHsgY29uc29sZS5sb2coJ3N1Y2Nlc3MhJyk7IH1cclxuICogIH0gY2F0Y2ggKGUpIHtcclxuICogICAgICBjb25zb2xlLmxvZyhlLmRhdGEpO1xyXG4gKiAgfVxyXG4gKiAgLy8gbG9ncyBcInN1Y2Nlc3MhXCJcclxuICovXHJcbmxvZ2ljYWwudG9vbHMudGVzdFRydXRoVGFibGUgPSBmdW5jdGlvbiB0ZXN0VHJ1dGhUYWJsZSh0cnV0aCwgbG9naWNhbEZ1bmN0aW9uKSB7XHJcbiAgICAndXNlIHN0cmljdCc7XHJcbiAgICB0cnV0aCA9IGxvZ2ljYWwudG9vbHMudHJ1dGhUYWJsZVRvQm9vbGVhbih0cnV0aCk7XHJcbiAgICB2YXIgciwgYXJncywgdCwgZXJyO1xyXG4gICAgdmFyIGkgPSB0cnV0aC5sZW5ndGggLSAxO1xyXG4gICAgZm9yIChpOyBpID49IDA7IGkgLT0gMSkge1xyXG4gICAgICAgIHIgPSB0cnV0aFtpXS5wb3AoKTtcclxuICAgICAgICBhcmdzID0gdHJ1dGhbaV07XHJcbiAgICAgICAgdCA9IGxvZ2ljYWxGdW5jdGlvbi5hcHBseShsb2dpY2FsLCBhcmdzKTtcclxuICAgICAgICBpZiAodCAhPT0gcikge1xyXG4gICAgICAgICAgICBlcnIgPSBuZXcgRXJyb3IoJ1RoZSB2YWx1ZXMgaW4gdGhlIHRydXRoIHRhYmxlIGRpZCBub3QgbWF0Y2ggdGhlIG91dHB1dCcpO1xyXG4gICAgICAgICAgICBlcnIuZGF0YSA9IHtcclxuICAgICAgICAgICAgICAgIGFyZ3M6IGFyZ3MsXHJcbiAgICAgICAgICAgICAgICBleHBlY3RlZDogcixcclxuICAgICAgICAgICAgICAgIGFjdHVhbDogdFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB0aHJvdyBlcnI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRydWU7XHJcbn07XHJcbm1vZHVsZS5leHBvcnRzID0gbG9naWNhbDsiXX0=
;