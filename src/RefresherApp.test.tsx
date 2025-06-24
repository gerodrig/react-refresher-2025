import { render, screen } from '@testing-library/react';
import { afterEach, describe, expect, test, vi } from 'vitest';
import RefresherApp from './RefresherApp';

const mockItemCounter = vi.fn((_props: unknown) => {
  console.log('Mocked ItemCounter called with props:', _props);
  return <div data-testid="ItemCounter" />;
});

vi.mock('./shopping-cart/ItemCounter', () => ({
  ItemCounter: (props: unknown) => mockItemCounter(props),
}));


// vi.mock('./shopping-cart/ItemCounter', () => ({
// ItemCounter: (props: unknown) => (
// <div
//   data-testid="ItemCounter"
//   name={props.name}
//   quantity={props.quantity}
// />
// ),
// }));

describe('RefresherApp', () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  test('should match snapshot', () => {
    const { container } = render(<RefresherApp />);

    expect(container).toMatchSnapshot();
  });

  test('should render the correct number of ItemCounter components', () => {
    render(<RefresherApp />);

    const itemCounters = screen.getAllByTestId('ItemCounter');

    expect(itemCounters.length).toBe(3);
  });

  test('should render ItemCounter with correct props', () => {
    render(<RefresherApp />);

    expect(mockItemCounter).toHaveBeenCalledTimes(3);
  });

  test('should render ItemCounter with correct props', () => {
    render(<RefresherApp />);

    expect(mockItemCounter).toHaveBeenCalledTimes(3);
    expect(mockItemCounter).toHaveBeenCalledWith({
      name: 'Nintendo Switch 2',
      quantity: 1,
    });
    expect(mockItemCounter).toHaveBeenCalledWith({
      name: 'Controller',
      quantity: 2,
    });
    expect(mockItemCounter).toHaveBeenCalledWith({
      name: 'SSB Ultimate',
      quantity: 1,
    });
  });
});
