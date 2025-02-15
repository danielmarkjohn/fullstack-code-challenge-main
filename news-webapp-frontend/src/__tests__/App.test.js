import { cleanup, render, screen } from '@testing-library/react';
import App from '../App';

describe('Tests on App root component', ()=>{
  beforeAll(()=>{
    render(<App />);
  })
  afterAll(()=>{
    cleanup()
  })
  it('renders page heading', async () => {
    
    const linkElement = screen.getByText(/DAILY NEWS/);
    expect(linkElement).toBeInTheDocument();
  });
})

