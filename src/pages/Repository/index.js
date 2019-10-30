import React, { Component }  from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import api from '../../services/api';

import Container from '../../components/Container';

import { Form, Loading, Owner, IssueList, Select, Search, Nav, Button } from './styles';

export default class Repository extends Component {

  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({
        repository: PropTypes.string,
      }),
    }).isRequired,
  };

  state = {
    repository: {},
    issues: [],
    loading: true,
    issueState: 'all',
    page: 1,
    buttonPrev: false,
    buttonNext: true,
  };

  async componentDidMount(){
    const { match } = this.props;

    const { issueState, page } = this.state;

    const repoName = decodeURIComponent(match.params.repository);

    const [ repository, issues ] = await Promise.all([
      api.get(`/repos/${repoName}`),
      api.get(`/repos/${repoName}/issues?page=${page}`, {
        params: {
          state: issueState,
          per_page: 5
        }
      }),
    ])

    // mostra botão próximo

    this.setState({
      repository: repository.data,
      issues: issues.data,
      loading: false,
    });

    console.log(page);
  }

  handleChange = e => {
    this.setState({ issueState: e.target.value });
  };

  handleSubmit = async e => {
      e.preventDefault();

      const { match } = this.props;

      const { issueState, page, buttonNext, buttonPrev } = this.state;

      let next = buttonNext;
      let prev = buttonPrev;

      const repoName = decodeURIComponent(match.params.repository);

      const issues = await api.get(`/repos/${repoName}/issues?page=${page}`, {
          params: {
            state: issueState,
            per_page: 5,
          }
        });

      if(issues.data.length < 5 || 0){
        next= false;
      }else{
        next= true;
      };

      if (page > 1) {
        prev = true;
      }else{
        prev = false;
      }

      this.setState({
        issues: issues.data,
        buttonNext: next,
        buttonPrev: prev,
      });

      console.log(page);

  }

  handleNext = async e  => {


    const { page } = this.state;
    await this.setState({ page: page+1 });

    this.handleSubmit(e);
  };

  handlePrev = async e  => {


    const { page } = this.state;
    await this.setState({ page: page - 1 });

    this.handleSubmit(e);
  };

  render() {
    const { repository, issues, loading, buttonPrev, buttonNext } = this.state;

    if (loading) {
      return <Loading>Carregando...</Loading>
    }

    return (
      <Container>
        <Owner>
          <Link to="/">Voltar aos repositórios</Link>
          <img src={repository.owner.avatar_url} alt={repository.owner.login} />
          <h1>{repository.name}</h1>
          <p>{repository.description}</p>

          <Form onSubmit={this.handleSubmit}>
            <span>Issues:</span>
            <Select onChange={this.handleChange}>
              <option value="all" selected>Todas</option>
              <option value="open">Aberta</option>
              <option value="closed">Fechada</option>
            </Select>
            <Search>
              Buscar
            </Search>
          </Form>
        </Owner>

        <IssueList>
          {issues.map(issue => (
            <li key={String(issue.id)}>
              <img src={issue.user.avatar_url} alt={issue.user.login} />
              <div>
                <strong>
                  <a href={issue.html_url} target="_blank" rel="noopener noreferrer">{issue.title}</a>
                  { issue.labels.map(label => (
                    <span key={String(label.id)}>{label.name}</span>
                  ))}
                </strong>
                <p>{issue.user.login}</p>
              </div>
            </li>
          ))}
        </IssueList>
        <Nav >
          {buttonPrev ?
          ( <Button onClick={this.handlePrev}>Anterior</Button> ) : ('') }
          {buttonNext ?
          ( <Button onClick={this.handleNext}>Próximo</Button> )  : ('') }
        </Nav>
      </Container>
    );
  }
}
