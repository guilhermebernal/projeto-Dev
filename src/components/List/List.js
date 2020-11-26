import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import './List.css';

function App() {

  const location = useHistory();
  const [termoBusca, setTermoBusca] = useState('');
  const [pessoas, setPessoas] = useState([]);
  const [pessoasFiltradas, setPessoasFiltradas] = useState([]);
  const [carregando, setCarregando] = useState(false);
  const [erroConsulta, setErroConsulta] = useState(false);
  const [erroExclusao, setErroExclusao] = useState(false);

  // Executa sempre que o termoBusca mudar
  useEffect(() => {
    const filtroPessoas = pessoas.filter((pessoa) => {
      //toLowerCase() => transformar uma string para minúsculo ABCD => abcd
      return pessoa.nome.toLocaleLowerCase().includes(termoBusca.toLocaleLowerCase()) ||
        pessoa.cpf.includes(termoBusca)
    });
    setPessoasFiltradas(filtroPessoas);
  }, [termoBusca,pessoas])

  // Somente é executado no carregamento do componente
  useEffect(() => {
    const carregarPessoas = async () => {
      try {
        setCarregando(true);
        const response = await fetch('http://localhost:3333/pessoas');
        const dados = await response.json()

        setPessoas(dados);
        setPessoasFiltradas(dados);
        setErroConsulta(false);
      } catch(error) {
        setErroConsulta(true);
      } finally {
        setCarregando(false);
      }
    }
    carregarPessoas();
  }, [])

  const removerPessoa = async (id) => {
    if (!window.confirm('Deseja realmente excluir essa pesoa?')) {
      return;
    }

    try{
      const url = 'http://localhost:3333/pessoas/' + id;

      await fetch(url, {
        method: 'DELETE',
      });

      const pessoasSemAPessoaRemovida = pessoas.filter((pessoa) => {
        return pessoa.id !== id;
      });

      setPessoas(pessoasSemAPessoaRemovida);
      setPessoasFiltradas(pessoasSemAPessoaRemovida);
      setErroExclusao(false);
    } catch(error) {
      setErroExclusao(true);
    }
  }

  return (
    <div className="list-container">
      {carregando === true
        ? (<h1>Carregando...</h1>)
        : (
          <>
            <div className="list-controls-container">
              <input
                className="input-search"
                type="text"
                placeholder="Informe o nome ou o CPF (999.999.999-99)"
                onChange={(event) => {
                  setTermoBusca(event.target.value);
                }}
                value={termoBusca}
              />
              <button type="button" onClick={() => location.push('/cadastro')}>Adicionar</button>
            </div>

            {erroExclusao && (<h1>Problema ao remover uma pessoa</h1>)}

            {erroConsulta 
              ? (<h1>Problema ao carregar as pessoas do banco de dados</h1>)
              : (
              <>
              <div className="person-count">Total de pessoas: {pessoasFiltradas.length}</div>
              <table className="person-table">
                <thead>
                  <tr>
                    <th>Nome</th>
                    <th>Data Nascimento</th>
                    <th>RG</th>
                    <th>CPF</th>
                    <th>Sexo</th>
                    <th>Alterar / Excluir</th>
                  </tr>
                </thead>
                <tbody>
                  {pessoasFiltradas.length === 0
                    ? (<tr>
                      <td colSpan="6" className="not-found">Não foram encontradas pessoas para o filtro.</td>
                    </tr>)
                    : pessoasFiltradas.map((pessoa) => {
                      return (
                        <tr>
                          <td>{pessoa.nome}</td>
                          <td>{pessoa.cpf}</td>
                          <td>{pessoa.rg}</td>
                          <td>{pessoa.data_nasc}</td>
                          <td>{pessoa.sexo}</td>
                          <td className="list-row-action">
                            <button type="button" onClick={() => {
                              location.push('/form/' + pessoa.id)
                            }}>Alterar</button>
                            <button type="button" onClick={() => {
                              removerPessoa(pessoa.id)
                            }}
                            >
                              Remover
                            </button>
                          </td>
                        </tr>
                      )
                    })}
                </tbody>
              </table>
              </>
              )
            }
          </>
        )
      }
    </div >
  );
}

export default App;
