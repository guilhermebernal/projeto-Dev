import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import * as Yup from 'yup';
import { Formik } from 'formik';
import { Input, Button } from 'antd';
import './Form.css';


const pessoaModelo = {
  nome: '',
  cpf: '',
  rg: '',
  data_nasc: '',
  sexo: ''
}
//formato de data
const datePattern = /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/;


const Form = () => {

  const location = useHistory();
  const { id } = useParams();
  const [pessoa, setPessoa] = useState(pessoaModelo)
  const [erroSalvarPessoa, setErroSalvarPessoa] = useState('');
  const [erroCarregamento, setErroCarregamento] = useState('');


  // Utilizei o ypu para fazer a validação
  const validationSchema = Yup.object().shape({
    nome: Yup.string().required('campo obrigatório'),
    cpf: Yup.string().required('campo obrigatório'),
    rg: Yup.string().required('campo obrigatório'),
    data_nasc: Yup.string().matches(datePattern, 'Data inválida, informar no formato dia/mês/ano').required('campo obrigatório'),
    sexo: Yup.string().required('campo obrigatório')    
  })

  useEffect(() => {
    const carregarPessoa = async () => {     
      if (id) {
        try {
          const response = await fetch('http://localhost:3000/pessoas/' + id);
          const dados = await response.json();
          
          console.log(response);
          if (response.status === 404) {
            setErroCarregamento('Não foi possível encontrar a pessoa solicitada');  
            return;
          }
          setPessoa(dados)
          setErroCarregamento('');
        } catch(error) {
          setErroCarregamento('Problema ao carregar os dados da pessoa');
        }
      }
    }
    carregarPessoa();
  }, [id])

  const formSubmit = async (data) => {
    try {
      const url = `http://localhost:3000/pessoas/${id || ''}`

      await fetch(url, {
          method: !id ? 'POST' : 'PUT',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data),
        });
        // quando clicar em salvar ele vai direto para pagina pesquisa 
      location.push('/pesquisa');
    } catch(error) {
      const mensagem = !id ? 'Erro ao criar uma pessoa' : 'Erro ao alterar a pessoa';
      setErroSalvarPessoa(mensagem);
    }
  }

  return (
    erroCarregamento 
      ? (
        <>
        <h1>{erroCarregamento}</h1>
        <button type="submit" onClick={() => { location.push('/pesquisa') }}>Voltar</button>
        </>
      ) 
      : (
        // Formik porque é um componente que ajuda a construir formulario 
        <Formik
        enableReinitialize
        initialValues={pessoa}
        validationSchema={validationSchema}
        onSubmit={formSubmit}
      >
        {props => {
          return (
          <form onSubmit={props.handleSubmit}>
            {!id ? (<h3>Cadastro</h3>) : (<h3>Alteração</h3>)}
            {erroSalvarPessoa && (<h2>{erroSalvarPessoa}</h2>)}
            <div class="input-container">
              <label htmlFor="nome">Nome</label>
              <Input  
                type="text" 
                id="nome" 
                value={props.values.nome}
                onChange={props.handleChange}
                onBlur={props.handleBlur}
              />
              { 
                props.errors.nome && 
                props.getFieldMeta('nome').touched 
                && <small className="feedback">{props.errors.nome}</small>
              }
            </div>
            <div class="input-container">
              <label htmlFor="cpf">CPF</label>
              <Input 
                id="cpf" 
                type="text"  
                value={props.values.cpf}
                onChange={props.handleChange}
                onBlur={props.handleBlur}
              />
              {
                props.errors.cpf && 
                props.getFieldMeta('cpf').touched && 
                <small className="feedback">{props.errors.cpf}</small>
              }
            </div>
            <div class="input-container">
              <label htmlFor="rg">RG</label>
              <Input 
                id="rg" 
                type="text" 
                mask="99.999.999-9" 
                value={props.values.rg}
                onChange={props.handleChange}
                onBlur={props.handleBlur}
              />
              { props.errors.rg && 
                props.getFieldMeta('rg').touched && 
                <small className="feedback">{props.errors.rg}</small>
              }
            </div>
            <div class="input-container">
              <label htmlFor="data_nasc">Data Nascimento</label>
              <Input 
                id="data_nasc" 
                type="text" 
                mask="99/99/9999" 
                value={props.values.data_nasc}
                onChange={props.handleChange}
                onBlur={props.handleBlur}
                />
                {
                  props.errors.data_nasc && 
                  props.getFieldMeta('data_nasc').touched && 
                  <small className="feedback">{props.errors.data_nasc}</small>
                }
            </div>
            <div class="input-container">
              <label htmlFor="sexo">Sexo</label>
              <select id="sexo" 
                value={props.values.sexo}
                onChange={props.handleChange}
                onBlur={props.handleBlur}
              >
                {!id && (<option value=""></option>)}
                <option value="Feminino">Feminino</option>
                <option value="Masculino">Masculino</option>
              </select>
              {
                props.errors.sexo && 
                props.getFieldMeta('sexo').touched && 
                <small className="feedback">{props.errors.sexo}</small>
              }
            </div>
            <Button htmlType="submit" type="primary">Salvar</Button>
            <Button type="danger" onClick={() => { location.push('/pesquisa') }}>Cancelar</Button>
          </form >)}}
      </Formik>
      )   
  )
};

export default Form;