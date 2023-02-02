//Topics:
// -> Describe and Context
// -> It and Specify
// -> Unit test Demo


let sumar = (a,b) => a + b;
let restar = (a, b) => a - b;
let dividir = (a, b) => a / b;
let multiplicar = (a, b) => a * b;

// Describe o context, son un alias
describe('Prueba unitaria para aplicación dummy', () => {

  context('Math con números POSITIVOS', () => {
    // It -Specify - Test individuales - es lo mismo poner it o specify
    it('Debería agregar números POSITIVOS',()=>{
      expect(sumar(1,2)).to.eq(3);  //Cuando sume 1 + 2 el debería ser igual a 3
    });
    specify('Debería restar números POSITIVOS',()=>{
      expect(restar(3,2)).to.eq(1);
    });
    it('Debería dividir números POSITIVOS',()=>{
      expect(dividir(8,2)).to.eq(4);
    });
    it('Debería multiplicar números POSITIVOS',()=>{
      expect(multiplicar(2,2)).to.eq(4);
    });
  }),


  context('Math con números DECIMALES', () => {
    it('Debería multiplicar números DECIMALES',()=>{
      expect(sumar(2.2,2.2)).to.eq(4.4); 
    });
    it('Debería multiplicar números DECIMALES',()=>{
      expect(restar(4.4,2.2)).to.eq(2.2);
    });
  })
})
















