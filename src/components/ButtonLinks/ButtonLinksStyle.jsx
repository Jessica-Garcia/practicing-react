import styled from 'styled-components'

export const Button = styled.button `
    background: ${props => props.blue ? '#102b3e' : '#1ec69f'};
    border-radius: 60px;
    min-width: 4rem;
    max-height: 2rem;
    text-align: center;
    padding: 6px 15px;
    border: none;
    text-decoration: none;
    color: var(--gray-100);
    border-radius: 20px;
    font-size: .9rem;
`