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
 * Material implication. <code>!p || q</code> <br/>
 * <img src="../../1011 material implication.png" />
 * <img src="../../1011 material implication_ANSI.png" />
 * <img src="../../1011 material implication summary.png" />
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
 * Converse material implication. <code>p || !q</code> <br/>
 * <img src="../../1101 converse material implication.png" />
 * <img src="../../1101 converse material implication_ANSI.png" />
 * <img src="../../1101 converse material implication summary.png" />
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
logical.given = logical.converseMaterialImplication;
/** alias for converseMaterialImplication */
logical.converseImplication = logical.converseMaterialImplication;
/** alias for converseMaterialImplication */
logical.XNq = logical.converseMaterialImplication;
/** alias for converseMaterialImplication */
logical.Bpq = logical.converseMaterialImplication;
/**
 * Material nonimplication. <code>p && !q</code> <br/>
 * <img src="../../0100 material nonimplication.png" />
 * <img src="../../0100 material nonimplication_ANSI.png" />
 * <img src="../../0100 material nonimplication summary.png" />
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
 * Converse material nonimplication. <code>!p && q</code> <br/>
 * <img src="../../0010 converse material nonimplication.png" />
 * <img src="../../0010 converse material nonimplication_ANSI.png" />
 * <img src="../../0010 converse material nonimplication summary.png" />
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
 * Negates p, ignoring q. <code>!p</code> <br/>
 * <img src="../../1010 not p.png" />
 * <img src="../../1010 not p_ANSI.png" />
 * <img src="../../1010 not p summary.png" />
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
 * Negates q, ignoring p. <code>!q</code> <br/>
 * <img src="../../1100 not q.png" />
 * <img src="../../1100 not q_ANSI.png" />
 * <img src="../../1100 not q summary.png" />
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
 * Projection of p. <br/>
 * <img src="../../0101 proposition p.png" />
 * <img src="../../0101 proposition p_ANSI.png" />
 * <img src="../../0101 proposition p summary.png" />
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
 * Projection of q. <br/>
 * <img src="../../0011 proposition q.png" />
 * <img src="../../0011 proposition q_ANSI.png" />
 * <img src="../../0011 proposition q summary.png" />
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