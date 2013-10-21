/*jslint
    white : true,
    vars : true
*/
/*globals
    logical,
    describe,
    it,
    expect
*/
/*
License gpl-3.0 http://www.gnu.org/licenses/gpl-3.0-standalone.html
*/
describe('logical', function () {
    "use strict";
    describe('tools.truthTableToBoolean', function () {
        it('should convert the truth table values to boolean', function () {
            var truth = [
                [0, 1],
                [1, 0]
            ];
            truth = logical.tools.truthTableToBoolean(truth);
            expect(truth).toEqual([
                [false, true],
                [true, false]
            ]);
        });
    });
    describe('tools.testTruthTable', function () {
        it('should throw on failing truth table', function () {
            function x () {
                logical.tools.testTruthTable(
                    [[0,0,1]],
                    logical.or
                );
            }
            expect(x).toThrow(
                'The values in the truth table did not match the output');
        });
        it('should return true on valid truth table', function () {
            var result = logical.tools.testTruthTable(
                [[0,1,1]],
                logical.or
            );
            expect(result).toEqual(true);
        });
    });
    describe('not', function () {
        it('should contradict the value', function () {
            var truth = [
                [0, 1],
                [1, 0]
            ];
            expect(
                logical.tools.testTruthTable(truth, logical.not)
            ).toEqual(
                true
            );
        });
    });
    describe('and', function () {
        it('should logically and one or more values', function () {
            var truth = [
                [0, 0, 0],
                [0, 1, 0],
                [1, 0, 0],
                [1, 1, 1]
            ];
            expect(
                logical.tools.testTruthTable(truth, logical.and)
            ).toEqual(
                true
            );
        });
    });
    describe('nand', function () {
        it('should logically nand one or more values', function () {
            var truth = [
                [0, 0, 1],
                [0, 1, 1],
                [1, 0, 1],
                [1, 1, 0]
            ];
            expect(
                logical.tools.testTruthTable(truth, logical.nand)
            ).toEqual(
                true
            );
        });
    });
    describe('or', function () {
        it('should logically or one or more values', function () {
            var truth = [
                [0, 0, 0],
                [0, 1, 1],
                [1, 0, 1],
                [1, 1, 1]
            ];
            expect(
                logical.tools.testTruthTable(truth, logical.or)
            ).toEqual(
                true
            );
        });
    });
    describe('nor', function () {
        it('should logically nor one or more values', function () {
            var truth = [
                [0, 0, 1],
                [0, 1, 0],
                [1, 0, 0],
                [1, 1, 0]
            ];
            expect(
                logical.tools.testTruthTable(truth, logical.nor)
            ).toEqual(
                true
            );
        });
    });
    describe('xor', function () {
        it('should logically xor one or more values', function () {
            var truth = [
                [0, 0, 0],
                [0, 1, 1],
                [1, 0, 1],
                [1, 1, 0]
            ];
            expect(
                logical.tools.testTruthTable(truth, logical.xor)
            ).toEqual(
                true
            );
        });
    });
    describe('xnor', function () {
        it('should logically xnor one or more values', function () {
            var truth = [
                [0, 0, 1],
                [0, 1, 0],
                [1, 0, 0],
                [1, 1, 1]
            ];
            expect(
                logical.tools.testTruthTable(truth, logical.xnor)
            ).toEqual(
                true
            );
        });
    });
    describe('identity', function () {
        it('should return the given value', function () {
            var truth = [
                [0, 0],
                [1, 1]
            ];
            expect(
                logical.tools.testTruthTable(truth, logical.identity)
            ).toEqual(
                true
            );
        });
    });
    describe('f', function () {
        it('should always return false', function () {
            var truth = [
                [0, 0, 0],
                [0, 1, 0],
                [1, 0, 0],
                [1, 1, 0]
            ];
            expect(
                logical.tools.testTruthTable(truth, logical.f)
            ).toEqual(
                true
            );
        });
    });
    describe('t', function () {
        it('should always return true', function () {
            var truth = [
                [0, 0, 1],
                [0, 1, 1],
                [1, 0, 1],
                [1, 1, 1]
            ];
            expect(
                logical.tools.testTruthTable(truth, logical.t)
            ).toEqual(
                true
            );
        });
    });
    describe('materialImplication', function () {
        it('should implicate values', function () {
            var truth = [
                [0, 0, 1],
                [0, 1, 1],
                [1, 0, 0],
                [1, 1, 1]
            ];
            expect(
                logical.tools.testTruthTable(truth, logical.materialImplication)
            ).toEqual(
                true
            );
        });
    });
    describe('converseMaterialImplication', function () {
        it('should conversely implicate values', function () {
            var truth = [
                [0, 0, 1],
                [0, 1, 0],
                [1, 0, 1],
                [1, 1, 1]
            ];
            expect(
                logical.tools.testTruthTable(truth, logical.converseMaterialImplication)
            ).toEqual(
                true
            );
        });
    });
    describe('materialNonImplication', function () {
        it('should return non implication results for values', function () {
            var truth = [
                [0, 0, 0],
                [0, 1, 0],
                [1, 0, 1],
                [1, 1, 0]
            ];
            expect(
                logical.tools.testTruthTable(truth, logical.materialNonImplication)
            ).toEqual(
                true
            );
        });
    });
    describe('converseMaterialNonImplication', function () {
        it('should return converse non implication results for values', function () {
            var truth = [
                [0, 0, 0],
                [0, 1, 1],
                [1, 0, 0],
                [1, 1, 0]
            ];
            expect(
                logical.tools.testTruthTable(truth, logical.converseMaterialNonImplication)
            ).toEqual(
                true
            );
        });
    });
    describe('not_p', function () {
        it('should negate p', function () {
            var truth = [
                [0, 0, 1],
                [0, 1, 1],
                [1, 0, 0],
                [1, 1, 0]
            ];
            expect(
                logical.tools.testTruthTable(truth, logical.not_p)
            ).toEqual(
                true
            );
        });
    });
    describe('not_q', function () {
        it('should negate q', function () {
            var truth = [
                [0, 0, 1],
                [0, 1, 0],
                [1, 0, 1],
                [1, 1, 0]
            ];
            expect(
                logical.tools.testTruthTable(truth, logical.not_q)
            ).toEqual(
                true
            );
        });
    });
    describe('p', function () {
        it('should identify p', function () {
            var truth = [
                [0, 0, 0],
                [0, 1, 0],
                [1, 0, 1],
                [1, 1, 1]
            ];
            expect(
                logical.tools.testTruthTable(truth, logical.p)
            ).toEqual(
                true
            );
        });
    });
    describe('q', function () {
        it('should identify q', function () {
            var truth = [
                [0, 0, 0],
                [0, 1, 1],
                [1, 0, 0],
                [1, 1, 1]
            ];
            expect(
                logical.tools.testTruthTable(truth, logical.q)
            ).toEqual(
                true
            );
        });
    });
    describe('conditioned disjunction', function () {
        it('should identify q', function () {
            var truth = [
                [0, 0, 0, 0],
                [0, 0, 1, 1],
                [0, 1, 0, 0],
                [0, 1, 1, 0],
                [1, 0, 0, 0],
                [1, 0, 1, 1],
                [1, 1, 0, 1],
                [1, 1, 1, 1]
            ];
            expect(
                logical.tools.testTruthTable(truth, logical.conditionedDisjunction)
            ).toEqual(
                true
            );
        });
    });
    describe('conditioned disjunction2', function () {
        it('should identify q', function () {
            var truth = [
                [0, 0, 0, 0],
                [0, 0, 1, 1],
                [0, 1, 0, 0],
                [0, 1, 1, 1],
                [1, 0, 0, 0],
                [1, 0, 1, 0],
                [1, 1, 0, 1],
                [1, 1, 1, 1]
            ];
            expect(
                logical.tools.testTruthTable(truth, logical.conditionedDisjunction2)
            ).toEqual(
                true
            );
        });
    });
});
