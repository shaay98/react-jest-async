import "testing-library/jest-dom";
import {render, screen} from '@testing-library/react';
import {beforeEach, describe, expect, it, vi} from "vitest";
import { weather } from "./api.jsx";
 
import { render, screen, waitFor } from '@testing-library/react';

describe('weather', () => {
  beforeEach(() => {
    vi.spyOn(global, 'fetch').mockResolvedValueOnce({
      ok: true,
      status: 200,
      statusText: 'OK',
      text: () => Promise.resolve({ city: 'Hammond', Temperature: 80 }),
    });
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('renders weather data on the page', async () => {
    render(<weather url="https://api.openweathermap.org/data" />);

    await waitFor(() => screen.getByText('Hammond'));
    expect(screen.getByText('Temperature: 80°F')).toBeInTheDocument();
  });
});
