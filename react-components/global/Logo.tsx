import Link from 'next/link';
import styled from 'styled-components';

export const StyledLogo = styled.img<{ isOnIndexPage: boolean }>`
  height: 1.0625rem;
  margin-bottom: ${({ isOnIndexPage }) => (isOnIndexPage ? '18px' : '12px')};
`;

const Logo = ({ isOnIndexPage }: { isOnIndexPage?: boolean }) => {
  const logo = <StyledLogo src={'/logo.svg'} isOnIndexPage={isOnIndexPage} />;
  return isOnIndexPage ? (
    logo
  ) : (
    <div>
      <Link href="/" passHref>
        <a>{logo}</a>
      </Link>
    </div>
  );
};

export default Logo;
