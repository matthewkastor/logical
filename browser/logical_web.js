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
 * <img src="../../Logical connectives venn diagrams.png" style="width:100%" />
 * @author <a href="mailto:matthewkastor@gmail.com">Matthew Kastor</a>
 * @license <a href="http://www.gnu.org/licenses/gpl-3.0-standalone.html"> 
 * gpl-3.0 </a>
 * @see <a href="../../Logical.pdf">Logical.pdf</a> Article: Truth function
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
 * <img src="../../00 contradiction false.png" />
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
 * <img src="../../11 tautology true.png" />
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
 * <img src="../../NOT_ANSI.png" />
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
 *  conditional operator <code>q ? p : r</code>
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
    return logical.and(logical.materialImplication(q, p), logical.materialImplication(!q, r));
};
/** alias for conditioned disjunction */
logical.thenIfElse = logical.conditionedDisjunction;
/** alias for conditioned disjunction */
logical.conditionalDisjunction = logical.conditionedDisjunction;
/**
 * Conditioned disjunction. <code>(p && q) || (!p && r)</code> Works just like
 *  <code>if(p) { return q } else { return r }</code>. Works just like the
 *  conditional operator <code>p ? q : r</code>
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
 * @param {Function} logicalFunction The logical function to test.
 * @returns {Boolean} Returns true if everything checks out.
 * @throws {Error} Throws an error on the first row that
 *  doesn't meet expectations. The error will contain a property named "data"
 *  containing the failed rows "args", "expected", and "actual" values.
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
//@ sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlcyI6WyJDOi9Vc2Vycy9rYXN0b3IvRGVza3RvcC9sb2dpY2FsL2Rldi9icm93c2VyTWFpbi5qcyIsIkM6L1VzZXJzL2thc3Rvci9EZXNrdG9wL2xvZ2ljYWwvc3JjL2xvZ2ljYWwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FDREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXNDb250ZW50IjpbImxvZ2ljYWwgPSByZXF1aXJlKCcuLi9zcmMvbG9naWNhbC5qcycpO1xyXG4iLCIvKmpzbGludFxyXG4gICAgdmFycyA6IHRydWUsXHJcbiAgICB1bnBhcmFtIDogdHJ1ZSxcclxuICAgIG5vbWVuIDogdHJ1ZVxyXG4qL1xyXG4vKmdsb2JhbHNcclxuICAgIG1vZHVsZVxyXG4qL1xyXG4vKipcclxuICogQGZpbGVPdmVydmlldyBMb2dpY2FsIGZ1bmN0aW9ucyBmb3IgSmF2YVNjcmlwdC4gSW1hZ2VzIGluIHRoaXMgZG9jdW1lbnRhdGlvblxyXG4gKiAgY2FtZSBmcm9tIHdpa2lwZWRpYSBhbmQgaGF2ZSBiZWVuIHJlbGVhc2VkIHRvIHB1YmxpYyBkb21haW4uXHJcbiAqIEBhdXRob3IgPGEgaHJlZj1cIm1haWx0bzptYXR0aGV3a2FzdG9yQGdtYWlsLmNvbVwiPk1hdHRoZXcgS2FzdG9yPC9hPlxyXG4gKiBAbGljZW5zZSA8YSBocmVmPVwiaHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzL2dwbC0zLjAtc3RhbmRhbG9uZS5odG1sXCI+IGdwbC0zLjAgPC9hPlxyXG4gKi9cclxuLyoqXHJcbiAqIExvZ2ljYWwgZnVuY3Rpb25zIGZvciBKYXZhU2NyaXB0LiA8YnIvPlxyXG4gKiA8aW1nIHNyYz1cIi4uLy4uL0xvZ2ljYWxfY29ubmVjdGl2ZXNfSGFzc2VfZGlhZ3JhbS5zdmcucG5nXCIgc3R5bGU9XCJ3aWR0aDoxMDAlXCIgLz5cclxuICogQG5hbWVzcGFjZSBMb2dpY2FsIGZ1bmN0aW9ucyBmb3IgSmF2YVNjcmlwdC4gPGJyLz5cclxuICogPGltZyBzcmM9XCIuLi8uLi9Mb2dpY2FsIGNvbm5lY3RpdmVzIHZlbm4gZGlhZ3JhbXMucG5nXCIgc3R5bGU9XCJ3aWR0aDoxMDAlXCIgLz5cclxuICogQGF1dGhvciA8YSBocmVmPVwibWFpbHRvOm1hdHRoZXdrYXN0b3JAZ21haWwuY29tXCI+TWF0dGhldyBLYXN0b3I8L2E+XHJcbiAqIEBsaWNlbnNlIDxhIGhyZWY9XCJodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvZ3BsLTMuMC1zdGFuZGFsb25lLmh0bWxcIj4gXHJcbiAqIGdwbC0zLjAgPC9hPlxyXG4gKiBAc2VlIDxhIGhyZWY9XCIuLi8uLi9Mb2dpY2FsLnBkZlwiPkxvZ2ljYWwucGRmPC9hPiBBcnRpY2xlOiBUcnV0aCBmdW5jdGlvblxyXG4gKiBAc2VlIDxhIGhyZWY9XCIuLi8uLi9Mb2dpY2FsLnBkZlwiPkxvZ2ljYWwucGRmPC9hPlxyXG4gKiAgQXJ0aWNsZTogQm9vbGVhbiBhbGdlYnJhcyBjYW5vbmljYWxseSBkZWZpbmVkXHJcbiAqIEBzZWUgPGEgaHJlZj1cIi4uLy4uL0xvZ2ljYWwucGRmXCI+TG9naWNhbC5wZGY8L2E+XHJcbiAqICBBcnRpY2xlOiBCb29sZWFuIGFsZ2VicmFcclxuICogQHNlZSA8YSBocmVmPVwiLi4vLi4vTG9naWNhbC5wZGZcIj5Mb2dpY2FsLnBkZjwvYT5cclxuICogIEFydGljbGU6IEJvb2xlYW4gYWxnZWJyYSAoc3RydWN0dXJlKVxyXG4gKi9cclxudmFyIGxvZ2ljYWwgPSB7fTtcclxuLyoqXHJcbiAqIExvZ2ljYWwgY29udHJhZGljdGlvbi4gPGJyLz5cclxuICogPGltZyBzcmM9XCIuLi8uLi8wMCBjb250cmFkaWN0aW9uIGZhbHNlLnBuZ1wiIC8+XHJcbiAqIEByZXR1cm5zIFJldHVybnMgZmFsc2UuXHJcbiAqIEBleGFtcGxlXHJcbiAqICBjb25zb2xlLmxvZyhsb2dpY2FsLmYoKSk7XHJcbiAqICAvLyBsb2dzIGZhbHNlXHJcbiAqIEBzZWUgPGEgaHJlZj1cIi4uLy4uL0xvZ2ljYWwucGRmXCI+TG9naWNhbC5wZGY8L2E+XHJcbiAqICBBcnRpY2xlOiBGYWxzZSAobG9naWMpXHJcbiAqL1xyXG5sb2dpY2FsLmZhbHMgPSBmdW5jdGlvbiBmYWxzKCkge1xyXG4gICAgJ3VzZSBzdHJpY3QnO1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG59O1xyXG4vKiogYWxpYXMgZm9yIGZhbHMgKi9cclxubG9naWNhbC5mID0gbG9naWNhbC5mYWxzO1xyXG4vKiogYWxpYXMgZm9yIGZhbHMgKi9cclxubG9naWNhbC5jb250cmFkaWN0aW9uID0gbG9naWNhbC5mYWxzO1xyXG4vKiogYWxpYXMgZm9yIGZhbHMgKi9cclxubG9naWNhbC5PcHEgPSBsb2dpY2FsLmZhbHM7XHJcbi8qKlxyXG4gKiBMb2dpY2FsIHRhdXRvbG9neS4gPGJyLz5cclxuICogPGltZyBzcmM9XCIuLi8uLi8xMSB0YXV0b2xvZ3kgdHJ1ZS5wbmdcIiAvPlxyXG4gKiBAcmV0dXJucyBSZXR1cm5zIHRydWUuXHJcbiAqIEBleGFtcGxlXHJcbiAqICBjb25zb2xlLmxvZyhsb2dpY2FsLnQoKSk7XHJcbiAqICAvLyBsb2dzIHRydWVcclxuICogQHNlZSA8YSBocmVmPVwiLi4vLi4vTG9naWNhbC5wZGZcIj5Mb2dpY2FsLnBkZjwvYT5cclxuICogIEFydGljbGU6IFRhdXRvbG9neSAobG9naWMpXHJcbiAqL1xyXG5sb2dpY2FsLnRydSA9IGZ1bmN0aW9uIHRydSgpIHtcclxuICAgICd1c2Ugc3RyaWN0JztcclxuICAgIHJldHVybiB0cnVlO1xyXG59O1xyXG4vKiogYWxpYXMgZm9yIHRydSAqL1xyXG5sb2dpY2FsLnQgPSBsb2dpY2FsLnRydTtcclxuLyoqIGFsaWFzIGZvciB0cnUgKi9cclxubG9naWNhbC50YXV0b2xvZ3kgPSBsb2dpY2FsLnRydTtcclxuLyoqIGFsaWFzIGZvciB0cnUgKi9cclxubG9naWNhbC5WcHEgPSBsb2dpY2FsLnRydTtcclxuLyoqXHJcbiAqIExvZ2ljYWwgaWRlbnRpdHkuIDxici8+XHJcbiAqIDxpbWcgc3JjPVwiLi4vLi4vMDEgaWRlbnRpdHkucG5nXCIgLz5cclxuICogQHBhcmFtIHtib29sZWFufSBwXHJcbiAqIEByZXR1cm5zIHtCb29sZWFufSBSZXR1cm5zIHAuXHJcbiAqIEBleGFtcGxlXHJcbiAqICBjb25zb2xlLmxvZyhsb2dpY2FsLmlkZW50aXR5KHRydWUpKTtcclxuICogIC8vIGxvZ3MgdHJ1ZVxyXG4gKiBAc2VlIDxhIGhyZWY9XCIuLi8uLi9Mb2dpY2FsLnBkZlwiPkxvZ2ljYWwucGRmPC9hPlxyXG4gKiAgQXJ0aWNsZTogVHJ1dGggdGFibGUsIFVuYXJ5IG9wZXJhdG9ycywgTG9naWNhbCBpZGVudGl0eVxyXG4gKi9cclxubG9naWNhbC5pZGVudGl0eSA9IGZ1bmN0aW9uIGlkZW50aXR5KHApIHtcclxuICAgICd1c2Ugc3RyaWN0JztcclxuICAgIHJldHVybiBwO1xyXG59O1xyXG4vKipcclxuICogTk9ULiBMb2dpY2FsIG5lZ2F0aW9uLiA8Y29kZT4hcDwvY29kZT4gPGJyLz5cclxuICogPGltZyBzcmM9XCIuLi8uLi8xMCBuZWdhdGlvbi5wbmdcIiAvPlxyXG4gKiA8aW1nIHNyYz1cIi4uLy4uL05PVF9BTlNJLnBuZ1wiIC8+XHJcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gcFxyXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gUmV0dXJucyB0aGUgbmVnYXRpb24gb2YgcC5cclxuICogQGV4YW1wbGVcclxuICogIGNvbnNvbGUubG9nKGxvZ2ljYWwubm90KHRydWUpKTtcclxuICogIC8vIGxvZ3MgZmFsc2VcclxuICogQHNlZSA8YSBocmVmPVwiLi4vLi4vTG9naWNhbC5wZGZcIj5Mb2dpY2FsLnBkZjwvYT5cclxuICogIEFydGljbGU6IE5lZ2F0aW9uXHJcbiAqL1xyXG5sb2dpY2FsLm5vdCA9IGZ1bmN0aW9uIG5vdChwKSB7XHJcbiAgICAndXNlIHN0cmljdCc7XHJcbiAgICByZXR1cm4gIXA7XHJcbn07XHJcbi8qKiBhbGlhcyBmb3Igbm90ICovXHJcbmxvZ2ljYWwubmVnYXRpb24gPSBsb2dpY2FsLm5vdDtcclxuLyoqXHJcbiAqIEFORC4gTG9naWNhbCBjb25qdW5jdGlvbi4gPGNvZGU+cCAmJiBxPC9jb2RlPiA8YnIvPlxyXG4gKiA8aW1nIHNyYz1cIi4uLy4uLzAwMDEgY29uanVuY3Rpb24ucG5nXCIgLz5cclxuICogPGltZyBzcmM9XCIuLi8uLi8wMDAxIEFORF9BTlNJLnBuZ1wiIC8+XHJcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gcFxyXG4gKiBAcGFyYW0ge0Jvb2xlYW59IHFcclxuICogQHJldHVybnMge0Jvb2xlYW59IFJldHVybnMgdGhlIGNvbmp1bmN0aW9uIG9mIHAgYW5kIHEuXHJcbiAqIEBleGFtcGxlXHJcbiAqICBjb25zb2xlLmxvZyhsb2dpY2FsLmFuZCh0cnVlLCB0cnVlKSk7XHJcbiAqICAvLyBsb2dzIHRydWVcclxuICogQHNlZSA8YSBocmVmPVwiLi4vLi4vTG9naWNhbC5wZGZcIj5Mb2dpY2FsLnBkZjwvYT5cclxuICogIEFydGljbGU6IExvZ2ljYWwgY29uanVuY3Rpb25cclxuICovXHJcbmxvZ2ljYWwuYW5kID0gZnVuY3Rpb24gYW5kKHAsIHEpIHtcclxuICAgICd1c2Ugc3RyaWN0JztcclxuICAgIHJldHVybiBwICYmIHE7XHJcbn07XHJcbi8qKiBhbGlhcyBmb3IgYW5kICovXHJcbmxvZ2ljYWwuY29uanVuY3Rpb24gPSBsb2dpY2FsLmFuZDtcclxuLyoqIGFsaWFzIGZvciBhbmQgKi9cclxubG9naWNhbC5LcHEgPSBsb2dpY2FsLmFuZDtcclxuLyoqXHJcbiAqIE5BTkQuIENvbXBsaW1lbnQgb2YgQU5ELiA8Y29kZT4hKHAgJiYgcSk8L2NvZGU+IDxici8+XHJcbiAqIDxpbWcgc3JjPVwiLi4vLi4vMTExMCBhbHRlcm5hdGl2ZSBkZW5pYWwucG5nXCIgLz5cclxuICogPGltZyBzcmM9XCIuLi8uLi8xMTEwIE5BTkRfQU5TSS5wbmdcIiAvPlxyXG4gKiBAcGFyYW0ge2Jvb2xlYW59IHBcclxuICogQHBhcmFtIHtib29sZWFufSBxXHJcbiAqIEByZXR1cm5zIHtCb29sZWFufSBSZXR1cm5zIHRoZSBuZWdhdGVkIGNvbmp1bmN0aW9uIG9mIHAgYW5kIHEuXHJcbiAqIEBleGFtcGxlXHJcbiAqICBjb25zb2xlLmxvZyhsb2dpY2FsLm5hbmQodHJ1ZSwgdHJ1ZSkpO1xyXG4gKiAgLy8gbG9ncyBmYWxzZVxyXG4gKiBAc2VlIDxhIGhyZWY9XCIuLi8uLi9Mb2dpY2FsLnBkZlwiPkxvZ2ljYWwucGRmPC9hPlxyXG4gKiAgQXJ0aWNsZTogU2hlZmZlciBzdHJva2VcclxuICovXHJcbmxvZ2ljYWwubmFuZCA9IGZ1bmN0aW9uIG5hbmQocCwgcSkge1xyXG4gICAgJ3VzZSBzdHJpY3QnO1xyXG4gICAgcmV0dXJuIGxvZ2ljYWwubm90KGxvZ2ljYWwuYW5kKHAsIHEpKTtcclxufTtcclxuLyoqIGFsaWFzIGZvciBuYW5kICovXHJcbmxvZ2ljYWwuRHBxID0gbG9naWNhbC5uYW5kO1xyXG4vKiogYWxpYXMgZm9yIG5hbmQgKi9cclxubG9naWNhbC5hbHRlcm5hdGl2ZURlbmlhbCA9IGxvZ2ljYWwubmFuZDtcclxuLyoqXHJcbiAqIE9SIExvZ2ljYWwgZGlzanVuY3Rpb24uIDxjb2RlPnAgfHwgcTwvY29kZT4gPGJyLz5cclxuICogPGltZyBzcmM9XCIuLi8uLi8wMTExIGRpc2p1bmN0aW9uLnBuZ1wiIC8+XHJcbiAqIDxpbWcgc3JjPVwiLi4vLi4vMDExMSBPUl9BTlNJLnBuZ1wiIC8+XHJcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gcFxyXG4gKiBAcGFyYW0ge2Jvb2xlYW59IHFcclxuICogQHJldHVybnMge0Jvb2xlYW59IFJldHVybnMgdGhlIGRpc2p1bmN0aW9uIG9mIHAgYW5kIHEuXHJcbiAqIEBleGFtcGxlXHJcbiAqICBjb25zb2xlLmxvZyhsb2dpY2FsLm9yKHRydWUsIGZhbHNlKSk7XHJcbiAqICAvLyBsb2dzIHRydWVcclxuICogQHNlZSA8YSBocmVmPVwiLi4vLi4vTG9naWNhbC5wZGZcIj5Mb2dpY2FsLnBkZjwvYT5cclxuICogIEFydGljbGU6IExvZ2ljYWwgZGlzanVuY3Rpb25cclxuICovXHJcbmxvZ2ljYWwub3IgPSBmdW5jdGlvbiBvcihwLCBxKSB7XHJcbiAgICAndXNlIHN0cmljdCc7XHJcbiAgICByZXR1cm4gcCB8fCBxO1xyXG59O1xyXG4vKiogYWxpYXMgZm9yIG9yICovXHJcbmxvZ2ljYWwuZGlzanVuY3Rpb24gPSBsb2dpY2FsLm9yO1xyXG4vKiogYWxpYXMgZm9yIG9yICovXHJcbmxvZ2ljYWwuQXBxID0gbG9naWNhbC5vcjtcclxuLyoqXHJcbiAqIE5PUi4gVGhlIGNvbXBsaW1lbnQgb2YgT1IuIDxjb2RlPiEocCB8fCBxKTwvY29kZT4gPGJyLz5cclxuICogPGltZyBzcmM9XCIuLi8uLi8xMDAwIGpvaW50IGRlbmlhbC5wbmdcIiAvPlxyXG4gKiA8aW1nIHNyYz1cIi4uLy4uLzEwMDAgTk9SX0FOU0kucG5nXCIgLz5cclxuICogQHBhcmFtIHtib29sZWFufSBwXHJcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gcVxyXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gUmV0dXJucyB0aGUgbmVnYXRlZCBkaXNqdW5jdGlvbiBvZiBwIGFuZCBxLlxyXG4gKiBAZXhhbXBsZVxyXG4gKiAgY29uc29sZS5sb2cobG9naWNhbC5ub3IodHJ1ZSwgZmFsc2UpKTtcclxuICogIC8vIGxvZ3MgZmFsc2VcclxuICogQHNlZSA8YSBocmVmPVwiLi4vLi4vTG9naWNhbC5wZGZcIj5Mb2dpY2FsLnBkZjwvYT5cclxuICogIEFydGljbGU6IExvZ2ljYWwgTk9SXHJcbiAqL1xyXG5sb2dpY2FsLm5vciA9IGZ1bmN0aW9uIG5vcihwLCBxKSB7XHJcbiAgICAndXNlIHN0cmljdCc7XHJcbiAgICByZXR1cm4gbG9naWNhbC5ub3QobG9naWNhbC5vcihwLCBxKSk7XHJcbn07XHJcbi8qKiBhbGlhcyBmb3Igbm9yICovXHJcbmxvZ2ljYWwuWHBxID0gbG9naWNhbC5ub3I7XHJcbi8qKiBhbGlhcyBmb3Igbm9yICovXHJcbmxvZ2ljYWwuam9pbnREZW5pYWwgPSBsb2dpY2FsLm5vcjtcclxuLyoqXHJcbiAqIEV4Y2x1c2l2ZSBPUi4gPGNvZGU+KHAgfHwgcSkgJiYgKCEocCAmJiBxKSk8L2NvZGU+IDxici8+XHJcbiAqIDxpbWcgc3JjPVwiLi4vLi4vMDExMCBleGNsdXNpdmUgZGlzanVuY3Rpb24ucG5nXCIgLz5cclxuICogPGltZyBzcmM9XCIuLi8uLi8wMTEwIFhPUl9BTlNJLnBuZ1wiIC8+XHJcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gcFxyXG4gKiBAcGFyYW0ge2Jvb2xlYW59IHFcclxuICogQHJldHVybnMge0Jvb2xlYW59IFJldHVybnMgdGhlIGV4Y2x1c2l2ZSBkaXNqdW5jdGlvbiBvZiBwIGFuZCBxLlxyXG4gKiBAZXhhbXBsZVxyXG4gKiAgY29uc29sZS5sb2cobG9naWNhbC54b3IodHJ1ZSwgZmFsc2UpKTtcclxuICogIC8vIGxvZ3MgdHJ1ZVxyXG4gKiBAc2VlIDxhIGhyZWY9XCIuLi8uLi9Mb2dpY2FsLnBkZlwiPkxvZ2ljYWwucGRmPC9hPlxyXG4gKiAgQXJ0aWNsZTogRXhjbHVzaXZlIG9yXHJcbiAqL1xyXG5sb2dpY2FsLnhvciA9IGZ1bmN0aW9uIHhvcihwLCBxKSB7XHJcbiAgICAndXNlIHN0cmljdCc7XHJcbiAgICByZXR1cm4gbG9naWNhbC5hbmQobG9naWNhbC5vcihwLCBxKSwgbG9naWNhbC5uYW5kKHAsIHEpKTtcclxufTtcclxuLyoqIGFsaWFzIGZvciB4b3IgKi9cclxubG9naWNhbC5leGNsdXNpdmVEaXNqdW5jdGlvbiA9IGxvZ2ljYWwueG9yO1xyXG4vKiogYWxpYXMgZm9yIHhvciAqL1xyXG5sb2dpY2FsLkpwcSA9IGxvZ2ljYWwueG9yO1xyXG4vKipcclxuICogRXhjbHVzaXZlIE5PUi4gVGhlIGNvbXBsZW1lbnQgb2YgZXhjbHVzaXZlIE9SLlxyXG4gKiAgPGNvZGU+ISgocCB8fCBxKSAmJiAoIShwICYmIHEpKSk8L2NvZGU+IDxici8+XHJcbiAqIDxpbWcgc3JjPVwiLi4vLi4vMTAwMSBtYXRlcmlhbCBiaWNvbmRpdGlvbmFsLnBuZ1wiIC8+XHJcbiAqIDxpbWcgc3JjPVwiLi4vLi4vMTAwMSBYTk9SX0FOU0kucG5nXCIgLz5cclxuICogQHBhcmFtIHtib29sZWFufSBwXHJcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gcVxyXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gUmV0dXJucyB0aGUgbmVnYXRlZCBleGNsdXNpdmUgZGlzanVuY3Rpb24gb2YgcCBhbmQgcS5cclxuICogQGV4YW1wbGVcclxuICogIGNvbnNvbGUubG9nKGxvZ2ljYWwueG5vcih0cnVlLCBmYWxzZSkpO1xyXG4gKiAgLy8gbG9ncyBmYWxzZVxyXG4gKiBAc2VlIDxhIGhyZWY9XCIuLi8uLi9Mb2dpY2FsLnBkZlwiPkxvZ2ljYWwucGRmPC9hPlxyXG4gKiAgQXJ0aWNsZTogTG9naWNhbCBiaWNvbmRpdGlvbmFsXHJcbiAqIEBzZWUgPGEgaHJlZj1cIi4uLy4uL0xvZ2ljYWwucGRmXCI+TG9naWNhbC5wZGY8L2E+XHJcbiAqICBBcnRpY2xlOiBMb2dpY2FsIGVxdWFsaXR5XHJcbiAqIEBzZWUgPGEgaHJlZj1cIi4uLy4uL0xvZ2ljYWwucGRmXCI+TG9naWNhbC5wZGY8L2E+XHJcbiAqICBBcnRpY2xlOiBJZiBhbmQgb25seSBpZlxyXG4gKiBAc2VlIDxhIGhyZWY9XCIuLi8uLi9Mb2dpY2FsLnBkZlwiPkxvZ2ljYWwucGRmPC9hPlxyXG4gKiAgQXJ0aWNsZTogTWF0ZXJpYWwgZXF1aXZhbGVuY2VcclxuICovXHJcbmxvZ2ljYWwueG5vciA9IGZ1bmN0aW9uIHhub3IocCwgcSkge1xyXG4gICAgJ3VzZSBzdHJpY3QnO1xyXG4gICAgcmV0dXJuIGxvZ2ljYWwubm90KGxvZ2ljYWwueG9yKHAsIHEpKTtcclxufTtcclxuLyoqIGFsaWFzIGZvciB4bm9yICovXHJcbmxvZ2ljYWwuZXF1YWxpdHkgPSBsb2dpY2FsLnhub3I7XHJcbi8qKiBhbGlhcyBmb3IgeG5vciAqL1xyXG5sb2dpY2FsLmVxdWFscyA9IGxvZ2ljYWwueG5vcjtcclxuLyoqIGFsaWFzIGZvciB4bm9yICovXHJcbmxvZ2ljYWwuaWZBbmRPbmx5SWYgPSBsb2dpY2FsLnhub3I7XHJcbi8qKiBhbGlhcyBmb3IgeG5vciAqL1xyXG5sb2dpY2FsLmlmZiA9IGxvZ2ljYWwueG5vcjtcclxuLyoqIGFsaWFzIGZvciB4bm9yICovXHJcbmxvZ2ljYWwuYmljb25kaXRpb25hbCA9IGxvZ2ljYWwueG5vcjtcclxuLyoqIGFsaWFzIGZvciB4bm9yICovXHJcbmxvZ2ljYWwubWF0ZXJpYWxCaWNvbmRpdGlvbmFsID0gbG9naWNhbC54bm9yO1xyXG4vKiogYWxpYXMgZm9yIHhub3IgKi9cclxubG9naWNhbC5FcHEgPSBsb2dpY2FsLnhub3I7XHJcbi8qKlxyXG4gKiBNYXRlcmlhbCBpbXBsaWNhdGlvbi4gPGNvZGU+IXAgfHwgcTwvY29kZT4gPGJyLz5cclxuICogPGltZyBzcmM9XCIuLi8uLi8xMDExIG1hdGVyaWFsIGltcGxpY2F0aW9uLnBuZ1wiIC8+XHJcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gcFxyXG4gKiBAcGFyYW0ge2Jvb2xlYW59IHFcclxuICogQHJldHVybnMge0Jvb2xlYW59IFJldHVybnMgdGhlIG1hdGVyaWFsIGltcGxpY2F0aW9uIG9mIHAgYW5kIHEuXHJcbiAqIEBleGFtcGxlXHJcbiAqICBjb25zb2xlLmxvZyhsb2dpY2FsLm1hdGVyaWFsSW1wbGljYXRpb24odHJ1ZSwgZmFsc2UpKTtcclxuICogIC8vIGxvZ3MgZmFsc2VcclxuICogQHNlZSA8YSBocmVmPVwiLi4vLi4vTG9naWNhbC5wZGZcIj5Mb2dpY2FsLnBkZjwvYT5cclxuICogIEFydGljbGU6IE1hdGVyaWFsIGNvbmRpdGlvbmFsXHJcbiAqL1xyXG5sb2dpY2FsLm1hdGVyaWFsSW1wbGljYXRpb24gPSBmdW5jdGlvbiBtYXRlcmlhbEltcGxpY2F0aW9uKHAsIHEpIHtcclxuICAgICd1c2Ugc3RyaWN0JztcclxuICAgIHJldHVybiAhcCB8fCBxO1xyXG59O1xyXG4vKiogYWxpYXMgZm9yIG1hdGVyaWFsSW1wbGljYXRpb24gKi9cclxubG9naWNhbC5tYXRlcmlhbENvbmRpdGlvbmFsID0gbG9naWNhbC5tYXRlcmlhbEltcGxpY2F0aW9uO1xyXG4vKiogYWxpYXMgZm9yIG1hdGVyaWFsSW1wbGljYXRpb24gKi9cclxubG9naWNhbC5tYXRlcmlhbENvbnNlcXVlbmNlID0gbG9naWNhbC5tYXRlcmlhbEltcGxpY2F0aW9uO1xyXG4vKiogYWxpYXMgZm9yIG1hdGVyaWFsSW1wbGljYXRpb24gKi9cclxubG9naWNhbC5pbXBsaWNhdGlvbiA9IGxvZ2ljYWwubWF0ZXJpYWxJbXBsaWNhdGlvbjtcclxuLyoqIGFsaWFzIGZvciBtYXRlcmlhbEltcGxpY2F0aW9uICovXHJcbmxvZ2ljYWwuaW1wbGllcyA9IGxvZ2ljYWwubWF0ZXJpYWxJbXBsaWNhdGlvbjtcclxuLyoqIGFsaWFzIGZvciBtYXRlcmlhbEltcGxpY2F0aW9uICovXHJcbmxvZ2ljYWwuY29uZGl0aW9uYWwgPSBsb2dpY2FsLm1hdGVyaWFsSW1wbGljYXRpb247XHJcbi8qKiBhbGlhcyBmb3IgbWF0ZXJpYWxJbXBsaWNhdGlvbiAqL1xyXG5sb2dpY2FsLlhOcCA9IGxvZ2ljYWwubWF0ZXJpYWxJbXBsaWNhdGlvbjtcclxuLyoqIGFsaWFzIGZvciBtYXRlcmlhbEltcGxpY2F0aW9uICovXHJcbmxvZ2ljYWwuQ3BxID0gbG9naWNhbC5tYXRlcmlhbEltcGxpY2F0aW9uO1xyXG4vKipcclxuICogQ29udmVyc2UgbWF0ZXJpYWwgaW1wbGljYXRpb24uIDxjb2RlPnAgfHwgIXE8L2NvZGU+IDxici8+XHJcbiAqIDxpbWcgc3JjPVwiLi4vLi4vMTEwMSBjb252ZXJzZSBtYXRlcmlhbCBpbXBsaWNhdGlvbi5wbmdcIiAvPlxyXG4gKiBAcGFyYW0ge2Jvb2xlYW59IHBcclxuICogQHBhcmFtIHtib29sZWFufSBxXHJcbiAqIEByZXR1cm5zIHtCb29sZWFufSBSZXR1cm5zIHRoZSBjb252ZXJzZSBtYXRlcmlhbCBpbXBsaWNhdGlvbiBvZiBwIGFuZCBxLlxyXG4gKiBAZXhhbXBsZVxyXG4gKiAgY29uc29sZS5sb2cobG9naWNhbC5jb252ZXJzZU1hdGVyaWFsSW1wbGljYXRpb24oZmFsc2UsIHRydWUpKTtcclxuICogIC8vIGxvZ3MgZmFsc2VcclxuICogQHNlZSA8YSBocmVmPVwiLi4vLi4vTG9naWNhbC5wZGZcIj5Mb2dpY2FsLnBkZjwvYT5cclxuICogIEFydGljbGU6IENvbnZlcnNlIGltcGxpY2F0aW9uXHJcbiAqL1xyXG5sb2dpY2FsLmNvbnZlcnNlTWF0ZXJpYWxJbXBsaWNhdGlvbiA9IGZ1bmN0aW9uIGNvbnZlcnNlTWF0ZXJpYWxJbXBsaWNhdGlvbihwLCBxKSB7XHJcbiAgICAndXNlIHN0cmljdCc7XHJcbiAgICByZXR1cm4gcCB8fCAhcTtcclxufTtcclxuLyoqIGFsaWFzIGZvciBjb252ZXJzZU1hdGVyaWFsSW1wbGljYXRpb24gKi9cclxubG9naWNhbC5pc0ltcGxpZWRCeSA9IGxvZ2ljYWwuY29udmVyc2VNYXRlcmlhbEltcGxpY2F0aW9uO1xyXG4vKiogYWxpYXMgZm9yIGNvbnZlcnNlTWF0ZXJpYWxJbXBsaWNhdGlvbiAqL1xyXG5sb2dpY2FsLmdpdmVuID0gbG9naWNhbC5jb252ZXJzZU1hdGVyaWFsSW1wbGljYXRpb247XHJcbi8qKiBhbGlhcyBmb3IgY29udmVyc2VNYXRlcmlhbEltcGxpY2F0aW9uICovXHJcbmxvZ2ljYWwuY29udmVyc2VJbXBsaWNhdGlvbiA9IGxvZ2ljYWwuY29udmVyc2VNYXRlcmlhbEltcGxpY2F0aW9uO1xyXG4vKiogYWxpYXMgZm9yIGNvbnZlcnNlTWF0ZXJpYWxJbXBsaWNhdGlvbiAqL1xyXG5sb2dpY2FsLlhOcSA9IGxvZ2ljYWwuY29udmVyc2VNYXRlcmlhbEltcGxpY2F0aW9uO1xyXG4vKiogYWxpYXMgZm9yIGNvbnZlcnNlTWF0ZXJpYWxJbXBsaWNhdGlvbiAqL1xyXG5sb2dpY2FsLkJwcSA9IGxvZ2ljYWwuY29udmVyc2VNYXRlcmlhbEltcGxpY2F0aW9uO1xyXG4vKipcclxuICogTWF0ZXJpYWwgbm9uaW1wbGljYXRpb24uIDxjb2RlPnAgJiYgIXE8L2NvZGU+IDxici8+XHJcbiAqIDxpbWcgc3JjPVwiLi4vLi4vMDEwMCBtYXRlcmlhbCBub25pbXBsaWNhdGlvbi5wbmdcIiAvPlxyXG4gKiBAcGFyYW0ge2Jvb2xlYW59IHBcclxuICogQHBhcmFtIHtib29sZWFufSBxXHJcbiAqIEByZXR1cm5zIHtCb29sZWFufSBSZXR1cm5zIHRoZSBtYXRlcmlhbCBub25pbXBsaWNhdGlvbiBvZiBwIGFuZCBxLlxyXG4gKiBAZXhhbXBsZVxyXG4gKiAgY29uc29sZS5sb2cobG9naWNhbC5tYXRlcmlhbEltcGxpY2F0aW9uKHRydWUsIGZhbHNlKSk7XHJcbiAqICAvLyBsb2dzIHRydWVcclxuICogQHNlZSA8YSBocmVmPVwiLi4vLi4vTG9naWNhbC5wZGZcIj5Mb2dpY2FsLnBkZjwvYT5cclxuICogIEFydGljbGU6IE1hdGVyaWFsIG5vbmltcGxpY2F0aW9uXHJcbiAqL1xyXG5sb2dpY2FsLm1hdGVyaWFsTm9uSW1wbGljYXRpb24gPSBmdW5jdGlvbiBtYXRlcmlhbE5vbkltcGxpY2F0aW9uKHAsIHEpIHtcclxuICAgICd1c2Ugc3RyaWN0JztcclxuICAgIHJldHVybiBwICYmICFxO1xyXG59O1xyXG4vKiogYWxpYXMgZm9yIG1hdGVyaWFsTm9uSW1wbGljYXRpb24gKi9cclxubG9naWNhbC5hYmRqdW5jdGlvbiA9IGxvZ2ljYWwubWF0ZXJpYWxOb25JbXBsaWNhdGlvbjtcclxuLyoqIGFsaWFzIGZvciBtYXRlcmlhbE5vbkltcGxpY2F0aW9uICovXHJcbmxvZ2ljYWwuZG9lc05vdEltcGx5ID0gbG9naWNhbC5tYXRlcmlhbE5vbkltcGxpY2F0aW9uO1xyXG4vKiogYWxpYXMgZm9yIG1hdGVyaWFsTm9uSW1wbGljYXRpb24gKi9cclxubG9naWNhbC5idXROb3QgPSBsb2dpY2FsLm1hdGVyaWFsTm9uSW1wbGljYXRpb247XHJcbi8qKiBhbGlhcyBmb3IgbWF0ZXJpYWxOb25JbXBsaWNhdGlvbiAqL1xyXG5sb2dpY2FsLlhwID0gbG9naWNhbC5tYXRlcmlhbE5vbkltcGxpY2F0aW9uO1xyXG4vKiogYWxpYXMgZm9yIG1hdGVyaWFsTm9uSW1wbGljYXRpb24gKi9cclxubG9naWNhbC5McHEgPSBsb2dpY2FsLm1hdGVyaWFsTm9uSW1wbGljYXRpb247XHJcbi8qKlxyXG4gKiBDb252ZXJzZSBtYXRlcmlhbCBub25pbXBsaWNhdGlvbi4gPGNvZGU+IXAgJiYgcTwvY29kZT4gPGJyLz5cclxuICogPGltZyBzcmM9XCIuLi8uLi8wMDEwIGNvbnZlcnNlIG1hdGVyaWFsIG5vbmltcGxpY2F0aW9uLnBuZ1wiIC8+XHJcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gcFxyXG4gKiBAcGFyYW0ge2Jvb2xlYW59IHFcclxuICogQHJldHVybnMge0Jvb2xlYW59IFJldHVybnMgdGhlIGNvbnZlcnNlIG1hdGVyaWFsIG5vbmltcGxpY2F0aW9uIG9mIHAgYW5kIHEuXHJcbiAqIEBleGFtcGxlXHJcbiAqICBjb25zb2xlLmxvZyhsb2dpY2FsLmNvbnZlcnNlTWF0ZXJpYWxOb25JbXBsaWNhdGlvbihmYWxzZSwgdHJ1ZSkpO1xyXG4gKiAgLy8gbG9ncyB0cnVlXHJcbiAqIEBzZWUgPGEgaHJlZj1cIi4uLy4uL0xvZ2ljYWwucGRmXCI+TG9naWNhbC5wZGY8L2E+XHJcbiAqICBBcnRpY2xlOiBDb252ZXJzZSBub25pbXBsaWNhdGlvblxyXG4gKi9cclxubG9naWNhbC5jb252ZXJzZU1hdGVyaWFsTm9uSW1wbGljYXRpb24gPSBmdW5jdGlvbiBjb252ZXJzZU1hdGVyaWFsTm9uSW1wbGljYXRpb24ocCwgcSkge1xyXG4gICAgJ3VzZSBzdHJpY3QnO1xyXG4gICAgcmV0dXJuICFwICYmIHE7XHJcbn07XHJcbi8qKiBhbGlhcyBmb3IgY29udmVyc2VNYXRlcmlhbE5vbkltcGxpY2F0aW9uICovXHJcbmxvZ2ljYWwuaXNOb3RJbXBsaWVkQnkgPSBsb2dpY2FsLmNvbnZlcnNlTWF0ZXJpYWxOb25JbXBsaWNhdGlvbjtcclxuLyoqIGFsaWFzIGZvciBjb252ZXJzZU1hdGVyaWFsTm9uSW1wbGljYXRpb24gKi9cclxubG9naWNhbC5ub3RCdXQgPSBsb2dpY2FsLmNvbnZlcnNlTWF0ZXJpYWxOb25JbXBsaWNhdGlvbjtcclxuLyoqIGFsaWFzIGZvciBjb252ZXJzZU1hdGVyaWFsTm9uSW1wbGljYXRpb24gKi9cclxubG9naWNhbC5jb252ZXJzZU5vbkltcGxpY2F0aW9uID0gbG9naWNhbC5jb252ZXJzZU1hdGVyaWFsTm9uSW1wbGljYXRpb247XHJcbi8qKiBhbGlhcyBmb3IgY29udmVyc2VNYXRlcmlhbE5vbkltcGxpY2F0aW9uICovXHJcbmxvZ2ljYWwuWHEgPSBsb2dpY2FsLmNvbnZlcnNlTWF0ZXJpYWxOb25JbXBsaWNhdGlvbjtcclxuLyoqIGFsaWFzIGZvciBjb252ZXJzZU1hdGVyaWFsTm9uSW1wbGljYXRpb24gKi9cclxubG9naWNhbC5NcHEgPSBsb2dpY2FsLmNvbnZlcnNlTWF0ZXJpYWxOb25JbXBsaWNhdGlvbjtcclxuLyoqXHJcbiAqIE5lZ2F0ZXMgcCwgaWdub3JpbmcgcS4gPGNvZGU+IXA8L2NvZGU+IDxici8+XHJcbiAqIDxpbWcgc3JjPVwiLi4vLi4vMTAxMCBub3QgcC5wbmdcIiAvPlxyXG4gKiBAcGFyYW0ge2Jvb2xlYW59IHBcclxuICogQHBhcmFtIHtib29sZWFufSBxXHJcbiAqIEByZXR1cm5zIHtCb29sZWFufSBSZXR1cm5zIHRoZSBuZWdhdGVkIHZhbHVlIG9mIHAuXHJcbiAqIEBleGFtcGxlXHJcbiAqICBjb25zb2xlLmxvZyhsb2dpY2FsLk5wKGZhbHNlLCB0cnVlKSk7XHJcbiAqICAvLyBsb2dzIHRydWVcclxuICogQHNlZSA8YSBocmVmPVwiLi4vLi4vTG9naWNhbC5wZGZcIj5Mb2dpY2FsLnBkZjwvYT5cclxuICogIEFydGljbGU6IE5lZ2F0aW9uXHJcbiAqL1xyXG5sb2dpY2FsLm5vdF9wID0gZnVuY3Rpb24gbm90X3AocCwgcSkge1xyXG4gICAgJ3VzZSBzdHJpY3QnO1xyXG4gICAgcmV0dXJuICFwO1xyXG59O1xyXG4vKiogYWxpYXMgZm9yIG5vdF9wICovXHJcbmxvZ2ljYWwuTnAgPSBsb2dpY2FsLm5vdF9wO1xyXG4vKiogYWxpYXMgZm9yIG5vdF9wICovXHJcbmxvZ2ljYWwuRnBxID0gbG9naWNhbC5ub3RfcDtcclxuLyoqXHJcbiAqIE5lZ2F0ZXMgcSwgaWdub3JpbmcgcC4gPGNvZGU+IXE8L2NvZGU+IDxici8+XHJcbiAqIDxpbWcgc3JjPVwiLi4vLi4vMTEwMCBub3QgcS5wbmdcIiAvPlxyXG4gKiBAcGFyYW0ge2Jvb2xlYW59IHBcclxuICogQHBhcmFtIHtib29sZWFufSBxXHJcbiAqIEByZXR1cm5zIHtCb29sZWFufSBSZXR1cm5zIHRoZSBuZWdhdGVkIHZhbHVlIG9mIHEuXHJcbiAqIEBleGFtcGxlXHJcbiAqICBjb25zb2xlLmxvZyhsb2dpY2FsLk5xKGZhbHNlLCB0cnVlKSk7XHJcbiAqICAvLyBsb2dzIGZhbHNlXHJcbiAqIEBzZWUgPGEgaHJlZj1cIi4uLy4uL0xvZ2ljYWwucGRmXCI+TG9naWNhbC5wZGY8L2E+XHJcbiAqICBBcnRpY2xlOiBOZWdhdGlvblxyXG4gKi9cclxubG9naWNhbC5ub3RfcSA9IGZ1bmN0aW9uIG5vdF9xKHAsIHEpIHtcclxuICAgICd1c2Ugc3RyaWN0JztcclxuICAgIHJldHVybiAhcTtcclxufTtcclxuLyoqIGFsaWFzIGZvciBub3RfcSAqL1xyXG5sb2dpY2FsLk5xID0gbG9naWNhbC5ub3RfcTtcclxuLyoqIGFsaWFzIGZvciBub3RfcSAqL1xyXG5sb2dpY2FsLkdwcSA9IGxvZ2ljYWwubm90X3E7XHJcbi8qKlxyXG4gKiBQcm9qZWN0aW9uIG9mIHAuIDxici8+XHJcbiAqIDxpbWcgc3JjPVwiLi4vLi4vMDEwMSBwcm9wb3NpdGlvbiBwLnBuZ1wiIC8+XHJcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gcFxyXG4gKiBAcGFyYW0ge2Jvb2xlYW59IHFcclxuICogQHJldHVybnMge0Jvb2xlYW59IFJldHVybnMgdGhlIHZhbHVlIG9mIHAuXHJcbiAqIEBleGFtcGxlXHJcbiAqICBjb25zb2xlLmxvZyhsb2dpY2FsLnAoZmFsc2UsIHRydWUpKTtcclxuICogIC8vIGxvZ3MgZmFsc2VcclxuICovXHJcbmxvZ2ljYWwucCA9IGZ1bmN0aW9uIF9wKHAsIHEpIHtcclxuICAgICd1c2Ugc3RyaWN0JztcclxuICAgIHJldHVybiBwO1xyXG59O1xyXG4vKiogYWxpYXMgZm9yIHAgKi9cclxubG9naWNhbC5JcHEgPSBsb2dpY2FsLnA7XHJcbi8qKlxyXG4gKiBQcm9qZWN0aW9uIG9mIHEuIDxici8+XHJcbiAqIDxpbWcgc3JjPVwiLi4vLi4vMDAxMSBwcm9wb3NpdGlvbiBxLnBuZ1wiIC8+XHJcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gcFxyXG4gKiBAcGFyYW0ge2Jvb2xlYW59IHFcclxuICogQHJldHVybnMge0Jvb2xlYW59IFJldHVybnMgdGhlIHZhbHVlIG9mIHEuXHJcbiAqIEBleGFtcGxlXHJcbiAqICBjb25zb2xlLmxvZyhsb2dpY2FsLnAoZmFsc2UsIHRydWUpKTtcclxuICogIC8vIGxvZ3MgdHJ1ZVxyXG4gKi9cclxubG9naWNhbC5xID0gZnVuY3Rpb24gX3EocCwgcSkge1xyXG4gICAgJ3VzZSBzdHJpY3QnO1xyXG4gICAgcmV0dXJuIHE7XHJcbn07XHJcbi8qKiBhbGlhcyBmb3IgcSAqL1xyXG5sb2dpY2FsLkhwcSA9IGxvZ2ljYWwucTtcclxuLyoqXHJcbiAqIENvbmRpdGlvbmVkIGRpc2p1bmN0aW9uLiA8Y29kZT4oIXEgfHwgcCkgJiYgKHEgfHwgcik8L2NvZGU+IFdvcmtzIGp1c3QgbGlrZVxyXG4gKiAgPGNvZGU+aWYocSkgeyByZXR1cm4gcCB9IGVsc2UgeyByZXR1cm4gciB9PC9jb2RlPi4gV29ya3MganVzdCBsaWtlIHRoZVxyXG4gKiAgY29uZGl0aW9uYWwgb3BlcmF0b3IgPGNvZGU+cSA/IHAgOiByPC9jb2RlPlxyXG4gKiBAcGFyYW0ge2Jvb2xlYW59IHBcclxuICogQHBhcmFtIHtib29sZWFufSBxXHJcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gclxyXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gUmV0dXJucyB0aGUgY29uZGl0aW9uZWQgZGlzanVuY3Rpb24gb2YgcCwgcSwgYW5kIHIuXHJcbiAqIEBleGFtcGxlXHJcbiAqICBjb25zb2xlLmxvZyhsb2dpY2FsLmNvbmRpdGlvbmVkRGlzanVuY3Rpb24oZmFsc2UsIHRydWUsIHRydWUpKTtcclxuICogIC8vIGxvZ3MgZmFsc2VcclxuICogQHNlZSA8YSBocmVmPVwiLi4vLi4vTG9naWNhbC5wZGZcIj5Mb2dpY2FsLnBkZjwvYT5cclxuICogIEFydGljbGU6IENvbmRpdGlvbmVkIGRpc2p1bmN0aW9uXHJcbiAqL1xyXG5sb2dpY2FsLmNvbmRpdGlvbmVkRGlzanVuY3Rpb24gPSBmdW5jdGlvbiBjb25kaXRpb25lZERpc2p1bmN0aW9uKHAsIHEsIHIpIHtcclxuICAgICd1c2Ugc3RyaWN0JztcclxuICAgIHJldHVybiBsb2dpY2FsLmFuZChsb2dpY2FsLm1hdGVyaWFsSW1wbGljYXRpb24ocSwgcCksIGxvZ2ljYWwubWF0ZXJpYWxJbXBsaWNhdGlvbighcSwgcikpO1xyXG59O1xyXG4vKiogYWxpYXMgZm9yIGNvbmRpdGlvbmVkIGRpc2p1bmN0aW9uICovXHJcbmxvZ2ljYWwudGhlbklmRWxzZSA9IGxvZ2ljYWwuY29uZGl0aW9uZWREaXNqdW5jdGlvbjtcclxuLyoqIGFsaWFzIGZvciBjb25kaXRpb25lZCBkaXNqdW5jdGlvbiAqL1xyXG5sb2dpY2FsLmNvbmRpdGlvbmFsRGlzanVuY3Rpb24gPSBsb2dpY2FsLmNvbmRpdGlvbmVkRGlzanVuY3Rpb247XHJcbi8qKlxyXG4gKiBDb25kaXRpb25lZCBkaXNqdW5jdGlvbi4gPGNvZGU+KHAgJiYgcSkgfHwgKCFwICYmIHIpPC9jb2RlPiBXb3JrcyBqdXN0IGxpa2VcclxuICogIDxjb2RlPmlmKHApIHsgcmV0dXJuIHEgfSBlbHNlIHsgcmV0dXJuIHIgfTwvY29kZT4uIFdvcmtzIGp1c3QgbGlrZSB0aGVcclxuICogIGNvbmRpdGlvbmFsIG9wZXJhdG9yIDxjb2RlPnAgPyBxIDogcjwvY29kZT5cclxuICogQHBhcmFtIHtib29sZWFufSBwXHJcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gcVxyXG4gKiBAcGFyYW0ge2Jvb2xlYW59IHJcclxuICogQHJldHVybnMge0Jvb2xlYW59IFJldHVybnMgdGhlIGNvbmRpdGlvbmVkIGRpc2p1bmN0aW9uIG9mIHAsIHEsIGFuZCByLlxyXG4gKiBAZXhhbXBsZVxyXG4gKiAgY29uc29sZS5sb2cobG9naWNhbC5pZlRoZW5FbHNlKGZhbHNlLCB0cnVlLCBmYWxzZSkpO1xyXG4gKiAgLy8gbG9ncyBmYWxzZVxyXG4gKiBAc2VlIDxhIGhyZWY9XCIuLi8uLi9Mb2dpY2FsLnBkZlwiPkxvZ2ljYWwucGRmPC9hPlxyXG4gKiAgQXJ0aWNsZTogQ29uZGl0aW9uZWQgZGlzanVuY3Rpb25cclxuICovXHJcbmxvZ2ljYWwuY29uZGl0aW9uZWREaXNqdW5jdGlvbjIgPSBmdW5jdGlvbiBjb25kaXRpb25lZERpc2p1bmN0aW9uMihwLCBxLCByKSB7XHJcbiAgICAndXNlIHN0cmljdCc7XHJcbiAgICByZXR1cm4gbG9naWNhbC5vcihsb2dpY2FsLmFuZChwLCBxKSwgbG9naWNhbC5ub3RCdXQocCwgcikpO1xyXG59O1xyXG4vKiogYWxpYXMgZm9yIGNvbmRpdGlvbmVkIGRpc2p1bmN0aW9uMiAqL1xyXG5sb2dpY2FsLmlmVGhlbkVsc2UgPSBsb2dpY2FsLmNvbmRpdGlvbmVkRGlzanVuY3Rpb24yO1xyXG4vKiogYWxpYXMgZm9yIGNvbmRpdGlvbmVkIGRpc2p1bmN0aW9uMiAqL1xyXG5sb2dpY2FsLmNvbmRpdGlvbmFsRGlzanVuY3Rpb24yID0gbG9naWNhbC5jb25kaXRpb25lZERpc2p1bmN0aW9uMjtcclxuLyoqXHJcbiAqIENvbnRhaW5zIHV0aWxpdGllcyB0byBoZWxwIHdpdGggdXNpbmcgbG9naWNhbC5cclxuICogQG5hbWVzcGFjZSBDb250YWlucyB1dGlsaXRpZXMgdG8gaGVscCB3aXRoIHVzaW5nIGxvZ2ljYWwuXHJcbiAqL1xyXG5sb2dpY2FsLnRvb2xzID0ge307XHJcbi8qKlxyXG4gKiBDb252ZXJ0cyB2YWx1ZXMgaW4gdHJ1dGggdGFibGVzIHRvIGJvb2xlYW4gdmFsdWVzLlxyXG4gKiBAcGFyYW0ge0FycmF5fSB0cnV0aFRhYmxlIEFuIGFycmF5IG9mIGFycmF5cyBjb250YWluaW5nIHRydXRoIHRhYmxlIHZhbHVlcy5cclxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSB0cnV0aCB0YWJsZSB3aXRoIGFsbCB2YWx1ZXMgY29udmVydGVkIHRvIGJvb2xlYW5cclxuICogIHZhbHVlcy5cclxuICogQGV4YW1wbGVcclxuICogIHZhciB0cnV0aCA9IFtcclxuICogICAgICBbMCwgMV0sXHJcbiAqICAgICAgWzEsIDBdXHJcbiAqICBdO1xyXG4gKiAgdHJ1dGggPSBsb2dpY2FsLnRvb2xzLnRydXRoVGFibGVUb0Jvb2xlYW4odHJ1dGgpO1xyXG4gKiAgY29uc29sZS5sb2codHJ1dGgpO1xyXG4gKiAgLy8gbG9nc1xyXG4gKiAgLy8gW1xyXG4gKiAgLy8gICAgIFtmYWxzZSwgdHJ1ZV0sXHJcbiAqICAvLyAgICAgW3RydWUsIGZhbHNlXVxyXG4gKiAgLy8gXVxyXG4gKi9cclxubG9naWNhbC50b29scy50cnV0aFRhYmxlVG9Cb29sZWFuID0gZnVuY3Rpb24gdHJ1dGhUYWJsZVRvQm9vbGVhbih0cnV0aFRhYmxlKSB7XHJcbiAgICAndXNlIHN0cmljdCc7XHJcbiAgICByZXR1cm4gdHJ1dGhUYWJsZS5tYXAoZnVuY3Rpb24gKHJvdykge1xyXG4gICAgICAgIHJldHVybiByb3cubWFwKGZ1bmN0aW9uICh2YWx1ZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gISF2YWx1ZTtcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59O1xyXG4vKipcclxuICogVGVzdHMgdGhlIG91dHB1dCBvZiB0aGUgZ2l2ZW4gbG9naWNhbCBmdW5jdGlvbiBhZ2FpbnN0IHRoZSBnaXZlbiB0cnV0aCB0YWJsZS5cclxuICogQHBhcmFtIHtBcnJheX0gdHJ1dGggVGhlIHRydXRoIHRhYmxlLlxyXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBsb2dpY2FsRnVuY3Rpb24gVGhlIGxvZ2ljYWwgZnVuY3Rpb24gdG8gdGVzdC5cclxuICogQHJldHVybnMge0Jvb2xlYW59IFJldHVybnMgdHJ1ZSBpZiBldmVyeXRoaW5nIGNoZWNrcyBvdXQuXHJcbiAqIEB0aHJvd3Mge0Vycm9yfSBUaHJvd3MgYW4gZXJyb3Igb24gdGhlIGZpcnN0IHJvdyB0aGF0XHJcbiAqICBkb2Vzbid0IG1lZXQgZXhwZWN0YXRpb25zLiBUaGUgZXJyb3Igd2lsbCBjb250YWluIGEgcHJvcGVydHkgbmFtZWQgXCJkYXRhXCJcclxuICogIGNvbnRhaW5pbmcgdGhlIGZhaWxlZCByb3dzIFwiYXJnc1wiLCBcImV4cGVjdGVkXCIsIGFuZCBcImFjdHVhbFwiIHZhbHVlcy5cclxuICogQGV4YW1wbGUgXHJcbiAqICB2YXIgcmVzdWx0ID0gZmFsc2U7XHJcbiAqICB0cnkge1xyXG4gKiAgICAgIHJlc3VsdCA9IGxvZ2ljYWwudG9vbHMudGVzdFRydXRoVGFibGUoXHJcbiAqICAgICAgICAgIFtcclxuICogICAgICAgICAgICAgIFswLDAsMV1cclxuICogICAgICAgICAgICAgIFswLDEsMV1cclxuICogICAgICAgICAgXSxcclxuICogICAgICAgICAgbG9naWNhbC5vclxyXG4gKiAgICAgICk7XHJcbiAqICAgICAgaWYocmVzdWx0KSB7IGNvbnNvbGUubG9nKCdzdWNjZXNzIScpOyB9XHJcbiAqICB9IGNhdGNoIChlKSB7XHJcbiAqICAgICAgY29uc29sZS5sb2coZS5kYXRhKTtcclxuICogIH1cclxuICogIC8vIGxvZ3MgeyBhcmd1bWVudHM6IFsgZmFsc2UsIGZhbHNlIF0sIGV4cGVjdGVkOiB0cnVlLCBhY3R1YWw6IGZhbHNlIH1cclxuICogQGV4YW1wbGUgXHJcbiAqICB2YXIgcmVzdWx0ID0gZmFsc2U7XHJcbiAqICB0cnkge1xyXG4gKiAgICAgIHJlc3VsdCA9IGxvZ2ljYWwudG9vbHMudGVzdFRydXRoVGFibGUoXHJcbiAqICAgICAgICAgIFtcclxuICogICAgICAgICAgICAgIFswLDAsMF1cclxuICogICAgICAgICAgICAgIFswLDEsMV1cclxuICogICAgICAgICAgXSxcclxuICogICAgICAgICAgbG9naWNhbC5vclxyXG4gKiAgICAgICk7XHJcbiAqICAgICAgaWYocmVzdWx0KSB7IGNvbnNvbGUubG9nKCdzdWNjZXNzIScpOyB9XHJcbiAqICB9IGNhdGNoIChlKSB7XHJcbiAqICAgICAgY29uc29sZS5sb2coZS5kYXRhKTtcclxuICogIH1cclxuICogIC8vIGxvZ3MgXCJzdWNjZXNzIVwiXHJcbiAqL1xyXG5sb2dpY2FsLnRvb2xzLnRlc3RUcnV0aFRhYmxlID0gZnVuY3Rpb24gdGVzdFRydXRoVGFibGUodHJ1dGgsIGxvZ2ljYWxGdW5jdGlvbikge1xyXG4gICAgJ3VzZSBzdHJpY3QnO1xyXG4gICAgdHJ1dGggPSBsb2dpY2FsLnRvb2xzLnRydXRoVGFibGVUb0Jvb2xlYW4odHJ1dGgpO1xyXG4gICAgdmFyIHIsIGFyZ3MsIHQsIGVycjtcclxuICAgIHZhciBpID0gdHJ1dGgubGVuZ3RoIC0gMTtcclxuICAgIGZvciAoaTsgaSA+PSAwOyBpIC09IDEpIHtcclxuICAgICAgICByID0gdHJ1dGhbaV0ucG9wKCk7XHJcbiAgICAgICAgYXJncyA9IHRydXRoW2ldO1xyXG4gICAgICAgIHQgPSBsb2dpY2FsRnVuY3Rpb24uYXBwbHkobG9naWNhbCwgYXJncyk7XHJcbiAgICAgICAgaWYgKHQgIT09IHIpIHtcclxuICAgICAgICAgICAgZXJyID0gbmV3IEVycm9yKCdUaGUgdmFsdWVzIGluIHRoZSB0cnV0aCB0YWJsZSBkaWQgbm90IG1hdGNoIHRoZSBvdXRwdXQnKTtcclxuICAgICAgICAgICAgZXJyLmRhdGEgPSB7XHJcbiAgICAgICAgICAgICAgICBhcmdzOiBhcmdzLFxyXG4gICAgICAgICAgICAgICAgZXhwZWN0ZWQ6IHIsXHJcbiAgICAgICAgICAgICAgICBhY3R1YWw6IHRcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgdGhyb3cgZXJyO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiB0cnVlO1xyXG59O1xyXG5tb2R1bGUuZXhwb3J0cyA9IGxvZ2ljYWw7Il19
;