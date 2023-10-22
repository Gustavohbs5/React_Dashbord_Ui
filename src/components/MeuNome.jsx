export default function MeuNome({ name, idade, profissao }) {
  return (
    <>
      <p className="text-white">Olá, {name}</p>
      <p className="text-white">Idade, {idade}</p>
      <p className="text-white">profissao, {profissao}</p>
    </>
  );
}
