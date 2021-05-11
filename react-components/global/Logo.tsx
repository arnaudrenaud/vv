import Link from 'next/link';
import styled from 'styled-components';

export const StyledLogo = styled.img`
  display: block;
  height: 1.0625rem;
  margin-bottom: 30px;
`;

const Logo = ({ isOnIndexPage }: { isOnIndexPage?: boolean }) => {
  const logo = <StyledLogo src={'/logo.svg'} />;
  return isOnIndexPage ? (
    logo
  ) : (
    <Link href="/" passHref>
      <a>{logo}</a>
    </Link>
  );
};

export default Logo;
