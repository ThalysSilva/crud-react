import React from 'react';
import { render, screen } from '@testing-library/react';

import { EventView } from '..';

const date = new Date();

const setup = () =>
  render(
    <EventView
      description={'mockDescription'}
      isLoadingSubmit={false}
      onSubmit={jest.fn()}
      setDate={jest.fn()}
      title={'mockTitle'}
      date={date}
    />
  );

describe(EventView.name, () => {
  it('Should be display component  in screen', () => {
    setup();

    expect(screen.getByTestId('eventMinute')).toBeInTheDocument();
    expect(screen.getByTestId('eventColor')).toBeInTheDocument();
    expect(screen.getByTestId('eventHour')).toBeInTheDocument();
    expect(screen.getByTestId('eventData')).toBeInTheDocument();
    expect(screen.getByTestId('eventTitle')).toBeInTheDocument();
  });
});
