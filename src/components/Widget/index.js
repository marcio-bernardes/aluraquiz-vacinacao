import styled from 'styled-components';

const Widget = styled.div`
  margin-top: 24px;
  margin-bottom: 24px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => theme.colors.mainBg};
  border-radius: 4px;
  overflow: hidden;
  h1, h2, h3 {
    font-size: 16px;
    font-weight: 700;
    line-height: 1;
    margin-bottom: 0;
    color: ${({ theme }) => theme.colors.defaultText};
  }
  p {
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.2;
  }
`;

Widget.Header = styled.header`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 18px 32px;
  background-color: ${({ theme }) => theme.colors.primary};
  * {
    margin: 0;
  }
`;

Widget.Content = styled.div`
  padding: 24px 32px 32px 32px;
  & > *:first-child {
    margin-top: 0;
  }
  & > *:last-child {
    margin-bottom: 0;
  }
  ul {
    list-style: none;
    padding: 0;
  }
`;

Widget.Topic = styled.a`
  outline: 0;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.contrastText};
  color: ${(prop) => (prop.isDisabled ? ({ theme }) => `${theme.colors.contrastText}70` : ({ theme }) => `${theme.colors.contrastText}`)};
  background-color: ${(prop) => (prop.isDisabled ? ({ theme }) => `${theme.colors.primary}15` : ({ theme }) => `${theme.colors.primary}40`)};
  padding: 10px 15px;
  margin-bottom: 8px;
  border-radius: ${({ theme }) => theme.borderRadius};
  transition: .3s;
  display: block;
  cursor: ${(prop) => (prop.isDisabled ? 'not-allowed' : 'pointer')};
  &:hover,
  &:focus {
    opacity: ${(prop) => (prop.isDisabled ? 1 : 0.5)};
  }
`;

Widget.QuestionTitle = styled.h2`
  color: ${({ theme }) => theme.colors.contrastText} !important;
`;

export default Widget;
