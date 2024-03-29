import styled from 'styled-components';

export const Form = styled.form`
  margin-top: 30px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  span {
    color: #999;
  }

  select {
    border-radius: 5px;
    padding: 5px 8px;
  }


`;

export const Loading = styled.div`
  color: #FFF;
  font-size: 30px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const Owner = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;

  a {
    color: #7159c1;
    font-size: 16px;
    text-decoration: none;
  }

  img {
    width: 120px;
    border-radius: 50%;
    margin-top: 20px;
  }

  h1 {
    font-size: 24px;
    margin-top: 10px;
  }

  p {
    margin-top: 5px;
    font-size: 14px;
    color: #666;
    line-height: 1.4;
    text-align: center;
    max-width: 400px;
  }
`;

export const IssueList = styled.ul`
padding-top: 30px;
margin-top: 30px;
border-top: 1px solid #EEE;
list-style: none;

li {
  display: flex;
  padding: 15px 10px;
  border: 1px solid #EEE;
  border-radius: 4px;

  & + li {
    margin-top: 10px;
  }

  img {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    border: 2px solid #EEE;
  }

  div {
    flex: 1;
    margin-left: 15px;

    strong {
      font-size: 16px;

      a {
        text-decoration: none;
        color: #333;

        &:hover {
          color: #7159c1;
        }

      }

      span {
        background: #EEE;
        color: #333;
        border-radius: 2px;
        font-size: 12px;
        font-weight: 600;
        height: 20px;
        padding: 3px 4px;
        margin-left: 10px;
      }
    }

    p {
      margin-top: 5px;
      font-size: 12px;
      color: #999;
    }

  }
}
`;

export const Select = styled.select`
  display: flex;
  margin-left: 10px;
`;


export const Search = styled.button.attrs(props => ({
  type: 'submit',
}))`

  border: 0;
  padding: 7px 15px;
  margin-left: 10px;
  border-radius: 4px;
  background: #7159c1;
  color: #FFF;

  display: flex;
  justify-content: center;
  align-items: center;

  &:hover{
    background:  #9159c1;
  }
`;

export const Nav  = styled.nav`
  padding-top: 10px;
  display:flex;
  justify-content: center;
  align-items: center;
`;

export const Button = styled.button`
  border: 0;
  color: #FFF;
  background: #7159c1;
  padding: 10px 15px;
  margin-left: 10px;
  border-radius: 4px;

  &:hover{
    background:  #9159c1;
  }
`;
