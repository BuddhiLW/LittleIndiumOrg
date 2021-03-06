// 馃嚙馃嚪 Let's Emacs like it's the 80's.:emacs:

const F =
      x => (y => (x + y));

console.log(F(5)(10));

const True = a => (b => a);
const False = a => (b => b);

var x = 5;
var y = x ** 2;
log.console(y);

var z = x + y;
log.console(z);

var v = x + u;
console.log(v);

var u = x ** 2;
console.log(u);

var Esq = x => x ** 2;
var SumY = x => x + y;
// comment
console.log(Esq(5)); //=>25 
console.log(SumY(5,5)); //=>30

var EsqSum = Esq(SumY);
var SumEsq = SumY(Esq);

var 位Esq = 位 => 位 ** 2;
var 位SumY = 位 => ((位1) => 位 + 位1);

var 位EsqSum = 位 => 位1 => 位Esq(位SumY(位)(位1));
var 位SumEsq = 位 => 位1 => 位SumY(位Esq(位))(位1);

var ImperativeEsqSum = (x + y)**2;
console.log(ImperativeEsqSum);
var ImperativeSumEsq = (x**2 + y);
console.log(ImperativeSumEsq);
