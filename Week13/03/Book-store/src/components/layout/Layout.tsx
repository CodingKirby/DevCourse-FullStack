import styled from "styled-components";
import Footer from "../common/Footer";
import Header from "../common/Header";

interface LayoutProps {
  children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <>
      <Header />
      <LayoutStyle>{children}</LayoutStyle>
      <Footer />
    </>
  );
}

const LayoutStyle = styled.div`
  width: 100%;
  margin: 0 auto;
  max-width: ${({ theme }) => theme.layoutWidth.large};
  padding: 20px 0;
`;

export default Layout;
