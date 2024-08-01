// interface IVeiculos
interface IVeiculos {
    nome: string;
    marca: string;
    ano: string;
  }
  
  // Criando dois tipos de objetos com interface
  const veiculo1: IVeiculos = {
    nome: "Avião",
    marca: "Boing",
    ano: "2024",
  };
  
  const veiculo2: IVeiculos = {
    nome: "Carro",
    marca: "Tesla",
    ano: "2023",
  };
  
  console.log(`O primeiro veículo é um ${veiculo1.nome}`);
  console.log(`A marca do veículo é ${veiculo1.marca}`);
  console.log(`O ano do veículo é ${veiculo1.ano}`);
  
  console.log("\nSegundo veículo:");
  console.log(`Nome: ${veiculo2.nome}`);
  console.log(`Marca: ${veiculo2.marca}`);
  console.log(`Ano: ${veiculo2.ano}`);