import styled from 'styled-components';
import Button from '../common/Button';
import palette from './../../lib/styles/palette';
import { Link } from 'react-router-dom';

// 회원가입 또는 로그인 폼을 보여 줍니다.

const AuthFormBlock = styled.div`
  h3 {
    margin: 0;
    /* color: ${palette.gray[8]}; */
    color: whitesmoke;
    margin-bottom: 1rem;
  }
`;
/**
 * 스타일린 된 input
 */

const StyledInput = styled.input`
  font-size: 1rem;
  border: none;
  border-bottom: 1px solid ${palette.gray[3]};
  padding-bottom: 0.5rem;
  outline: none;
  width: 100%;
  background: coral;
  ::placeholder {
    color: whitesmoke;
  }
  &:focus {
    color: $oc-teal-7;
    border-bottom: 1px solid ${palette.gray[0]};
  }
  & + & {
    margin-top: 1rem;
  }
`;

/**
 * 폼 하단에 로그인 혹은 회원가입 링크를 보여줌
 */

const Footer = styled.div`
  margin-top: 2rem;
  text-align: right;
  a {
    font-weight: bold;
    color: ${palette.gray[1]};
    text-decoration: none;
    &:hover {
      color: ${palette.gray[9]};
    }
  }
`;
const ButtonWitdhMarginTop = styled(Button)`
  margin-top: 2rem;
`;

const textMap = {
  login: '로그인',
  register: '회원가입',
};

const AuthForm = ({ type }) => {
  const text = textMap[type];
  return (
    <AuthFormBlock>
      <h3>{text}</h3>
      <form>
        <StyledInput
          autoComplate="username"
          name="username"
          placeholder="아이디"
        />
        <StyledInput
          autoComplete="new-password"
          name="password"
          placeholder="비밀번호"
          type="password"
        />
        {type === 'register' && (
          <StyledInput
            autoComplete="new-password"
            name="passwordConfirm"
            placeholder="비밀번호 확인"
            type="password"
          />
        )}
        <ButtonWitdhMarginTop cyan fullWidth>
          {text}
        </ButtonWitdhMarginTop>
      </form>
      <Footer>
        {type === 'login' ? (
          <Link to="/register">회원가입</Link>
        ) : (
          <Link to="login">로그인</Link>
        )}
      </Footer>
    </AuthFormBlock>
  );
};

export default AuthForm;
