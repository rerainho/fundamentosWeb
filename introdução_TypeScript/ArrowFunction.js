// Função para calcular o salário líquido
const calcularSalarioLiquido = (salarioBruto, adicionalNoturno, horasExtras, descontos) => {
    const valorHorasExtras = horasExtras * 5; // Valor das horas extras
    const salarioLiquido = salarioBruto + adicionalNoturno + valorHorasExtras - descontos;
    return salarioLiquido;
  };
  
  // Valores para o cálculo
  const salarioBruto = 2000.00;
  const adicionalNoturno = 500.00;
  const horasExtras = 100.00;
  const descontos = 200.00;
  
  // Usando interpolação 
  const resultados = calcularSalarioLiquido(salarioBruto, adicionalNoturno, horasExtras, descontos);
  console.log(`Salário Líquido: R$ ${resultados.toFixed(2)}`);