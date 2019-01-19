var assert = require('assert');

describe('JS Basics', function () {
    describe('Numbers', function () {
        it('should be able define variables and add them', function () {
            // define variables and add them
            var x = 1;
            var y =1;
            return x+y;

            assert.equal(x + y, 2);
        });

        it('should be able to divide and multiply number', function () {
            var a = 42.94;
            var b = 0;
            var c = b+1;
            var d = Math.trunc(a);
            
            // change first parameter to expected number
            assert.equal(42, d / c);
        });

        it('should be able to round numbers', function () {
            var a = 42.94;
            a = Math.trunc(42.94);
            // do something to round the number
            assert.equal(a, 42);
        });

        it('should be able to find sin^2(x) * cos^2(x)', function () {
            var a = 42;
            a = (Math.cos(42)*Math.cos(42))+(Math.sin(42)*Math.sin(42));

            // instead of a write equasion sin^2(x) * cos^2(x)
            assert.equal(a, 1);
        });
    });

    describe('Objects', function () {
        it('should be find object value by key', function () {
            var obj = { a: { b: { d: "foo" } }, c: 42 }
            return obj.a.b.d
            // find key by dot obj.<put relevant keys here>
            assert.equal(obj, "foo");
        });

        it('should be find object value by dynamic key', function () {
            var obj = { a: { b: { d: "foo" } }, c: 42 }
            return obj.c
            assert.equal(obj["select Key by name"], 42);
        });

        it('should be parse object from json', function () {
            var json = '{"ok":true, "metadata": {"date_start": 1533108640} }';
            var a = JSON.parse(json);
            return a.metadata.date_start;
            // see JSON.parse function, use it and find key date_start
            assert.equal(a, 1533108640);
        });

        it('should be set objet key', function () {
            var obj = { a: { b: { d: "foo" } }, c: 42 }
            return obj.a.b = "JS Rocks!";
            // set instead as value to key b new value to make test pass
            assert.equal(obj.a.b, "Js Rocks!")
        });
    });


    describe('Arrays', function () {
        it('should be access array by index', function () {
            var arrray = [1, 5, 3, 4, 5, 6, 7, 8, 9]
            return arrray[1];
            // select correct index
            assert.equal(arrray[1], 5);
        });

        it('should to push and pop from array', function () {
            var array = [1, 2, 3, 4, 5, 6, 7, 8, 9]
            return array.length;
            // read about push method on array
            assert.equal(array.length, 10);
        });

        it('should be able to sort array', function () {
            var arr = [23, 23, 4, 5, 123, 7, 32, 13, 13, 9];
        arr = arr.sort(function (a,b){
                return a-b;
            });
            // read about .sort function
            assert.deepEqual(arr, [4, 5, 7, 9, 13, 13, 23, 23, 32, 123]);
        });
    });

    describe('Functions', function () {
        it('should define function that returns number 1', function (){
            // define function test here that returns 1
       
        function test(){
            return 1;
        }
         assert.equal(test(), 1);
        });

        it('should assign function to another variable', function () {
            function square(x) { 
                return x * x }


            // var sq = ??

            // make this line work
            assert.equal(square(4), 16);
        });

        it('should implement function currying ', function () {
            function add(a){
                // hint return function that takes another argument

                return (b)=>{
                    return a+b;
                }
            }

            assert.equal(add(4)(4), 8);
        });
    });
});