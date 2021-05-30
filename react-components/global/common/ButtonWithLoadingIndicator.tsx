import styled from 'styled-components';

import LoadingIndicator from './LoadingIndicator';
import { Button } from '.';

const StyledLoadingIndicatorWrapper = styled.div`
  margin-left: 10px;
`;
const LoadingIndicatorWrapper = () => (
  <StyledLoadingIndicatorWrapper>
    <LoadingIndicator />
  </StyledLoadingIndicatorWrapper>
);
const StyledButtonWithLoadingIndicator = styled.div`
  display: flex;
  margin-top: 10px;
  align-items: center;
`;

export const ButtonWithLoadingIndicator = ({
  children,
  type,
  loading,
}: {
  children: JSX.Element;
  type: 'button' | 'submit' | 'reset';
  loading: boolean;
}) => (
  <StyledButtonWithLoadingIndicator>
    <Button type={type} disabled={loading}>
      {children}
    </Button>
    {loading && <LoadingIndicatorWrapper />}
  </StyledButtonWithLoadingIndicator>
);
