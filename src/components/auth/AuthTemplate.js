import styled from 'styled-components';
import palette from './../../lib/styles/palette';
import { Link } from 'react-router-dom';

//회원가입/로그인 페이지의 레이아웃을 담당하는 컴포넌트 입니다.

/** 화면 전체를 채움 */
const AuthTemplateBlock = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  background: ${palette.gray[2]};
  /** flex로 내부 내용 중앙 정렬 */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

/** 흰색 박스 */
const WhiteBox = styled.div`
  .logo-area {
    display: block;
    padding-bottom: 2rem;
    text-align: center;
    font-weight: bold;
    letter-spacing: 2px;
  }
  box-shadow: 0 0 8px rgba(0, 0, 0, 1);
  padding: 2rem;
  width: 360px;
  background: coral;
  opacity: 0.8;
  border-radius: 2.5rem;
`;

const AuthTemplate = ({ children }) => {
  return (
    <AuthTemplateBlock>
      <WhiteBox>
        <div className="logo-area">
          <Link
            style={{
              color: 'white',
              fontWeight: 'bold',
              fontSize: '2rem',
            }}
            to="/"
          >
            BlueChip C&S
          </Link>
        </div>
        {children}
      </WhiteBox>
    </AuthTemplateBlock>
  );
};

export default AuthTemplate;
