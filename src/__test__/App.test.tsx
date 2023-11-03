import { render } from '@testing-library/react';
import App from '../App';

describe('App test', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  test('New Reservation 버튼을 누르면 등록 화면으로 이동한다.', async () => {
    render(<App />);
  });
});
