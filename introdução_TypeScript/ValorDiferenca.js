// Função para calcular a diferença entre os produtos
const calcularDiferencaProdutos = (n1, n2, n3, n4) => {
    const produto1 = n1 * n2; //pode ser usado x e y também
    const produto2 = n3 * n4;
    const diferenca = produto1 - produto2;
    return diferenca;
  };
  
   const num1 = 5.0;
  const num2 = 6.0;
  const num3 = 7.0;
  const num4 = 8.0;
  
  // resultado com interpolação
  const resultado1 = calcularDiferencaProdutos(num1, num2, num3, num4);
  console.log(`Diferença: ${resultado1}`);
  
  const num5 = 5.0;
  const num6 = 6.0;
  const num7 = -7.0;
  const num8 = 8.0;
  
  const resultado2 = calcularDiferencaProdutos(num5, num6, num7, num8);
  console.log(`Diferença: ${resultado2}`);