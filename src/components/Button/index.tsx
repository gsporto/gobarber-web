import React, { ButtonHTMLAttributes } from 'react';

import { Container } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  loading?: boolean;
};

const Input: React.FC<ButtonProps> = ({ children, loading, ...props }) => (
  <Container type="button" disabled={loading} {...props}>
    {loading ? 'Aguarde...' : children}
  </Container>
);

export default Input;
