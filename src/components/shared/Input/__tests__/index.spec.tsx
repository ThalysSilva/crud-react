import React from 'react';

import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Input, InputProps } from '..';
import LockIcon from '../../../../assets/icon/Lock';
import useValidator from '../../../../validators/hooks/useValidator';

const mockInputDefaultConfig: InputProps = {
  handleRightIconClick: undefined,
  handleLeftIconClick: undefined,
  placeholder: 'mockPlaceholder',
  hideMessageValidation: false,
  dataTestId: 'dataTestIdInputMock',
  highlightBorderError: false,
  hideValidationBar: false,
  onRightIcon: undefined,
  onLeftIcon: undefined,
  name: 'InputNameMock',
  onChange: undefined,
  onFocus: undefined,
  id: 'idInputMock',
  onBlur: undefined,
  required: false,
  maxLength: 100
};

const setup = (props: InputProps) => render(<Input {...props} />);

describe(Input.name, () => {
  it('Should be display component input in screen', () => {
    setup(mockInputDefaultConfig);

    expect(screen.getByTestId('dataTestIdInputMock')).toBeInTheDocument();
  });

  it('Should display left icon', () => {
    const mockInputConfigToTest: InputProps = {
      ...mockInputDefaultConfig,
      onLeftIcon: <LockIcon />
    };

    setup(mockInputConfigToTest);

    expect(screen.getByTestId('leftIcon')).toBeInTheDocument();
  });

  it('Should NOT display left icon', () => {
    const mockInputConfigToTest: InputProps = { ...mockInputDefaultConfig };

    setup(mockInputConfigToTest);

    expect(screen.queryByTestId('leftIcon')).not.toBeInTheDocument();
  });

  it('Should display right icon', () => {
    const mockInputConfigToTest: InputProps = {
      ...mockInputDefaultConfig,
      onRightIcon: <LockIcon />
    };

    setup(mockInputConfigToTest);

    expect(screen.getByTestId('rightIcon')).toBeInTheDocument();
  });

  it('Should NOT display right icon', () => {
    const mockInputConfigToTest: InputProps = { ...mockInputDefaultConfig };

    setup(mockInputConfigToTest);

    expect(screen.queryByTestId('rightIcon')).not.toBeInTheDocument();
  });

  it('Should call function handleLeftIconClick', async () => {
    const mockInputConfigToTest: InputProps = {
      ...mockInputDefaultConfig,
      onLeftIcon: <LockIcon />,
      handleLeftIconClick: jest.fn()
    };

    setup(mockInputConfigToTest);

    const leftIcon = screen.getByTestId('leftIcon');

    userEvent.click(leftIcon);

    await waitFor(() => expect(mockInputConfigToTest.handleLeftIconClick).toHaveBeenCalled());
  });

  it('Should call function handleRightIconClick', async () => {
    const mockInputConfigToTest: InputProps = {
      ...mockInputDefaultConfig,
      onRightIcon: <LockIcon />,
      handleRightIconClick: jest.fn()
    };

    setup(mockInputConfigToTest);

    const rightIcon = screen.getByTestId('rightIcon');

    userEvent.click(rightIcon);

    await waitFor(() => expect(mockInputConfigToTest.handleRightIconClick).toHaveBeenCalled());
  });

  it('Should display validationBar if is required', () => {
    const mockInputConfigToTest: InputProps = { ...mockInputDefaultConfig, required: true };

    setup(mockInputConfigToTest);

    expect(screen.getByTestId('validationBar')).toBeInTheDocument();
  });

  it('Should NOT display validationBar if is not required', () => {
    const mockInputConfigToTest: InputProps = { ...mockInputDefaultConfig };

    setup(mockInputConfigToTest);

    expect(screen.queryByTestId('validationBar')).not.toBeInTheDocument();
  });

  it('Should display border red if hightlightBorderError is enabled if has something in validateResponse.reason ', async () => {
    const mockInputConfigToTest: InputProps = {
      ...mockInputDefaultConfig,
      highlightBorderError: true,
      required: true
    };

    setup(mockInputConfigToTest);

    const inputContainer = screen.getByTestId('inputContainer');
    const input = screen.getByTestId('dataTestIdInputMock') as HTMLInputElement;

    input.focus();
    input.blur();

    await waitFor(() => expect(inputContainer.classList.contains('border-red-800')).toBe(true));
    await waitFor(() => expect(!!input.validationMessage).toBe(true));
  });

  it('Should NOT display border red if hightlightBorderError is disabled if has something in validateResponse.reason ', async () => {
    const mockInputConfigToTest: InputProps = {
      ...mockInputDefaultConfig,
      highlightBorderError: false,
      required: true
    };

    setup(mockInputConfigToTest);

    const inputContainer = screen.getByTestId('inputContainer');
    const input = screen.getByTestId('dataTestIdInputMock') as HTMLInputElement;

    input.focus();
    input.blur();

    await waitFor(() =>
      expect(inputContainer.classList.contains('border-red-800')).not.toBe(true)
    );
    await waitFor(() => expect(!!input.validationMessage).toBe(true));
  });

  it('Should call function onBlur', async () => {
    const mockInputConfigToTest: InputProps = {
      ...mockInputDefaultConfig,
      onBlur: jest.fn()
    };

    setup(mockInputConfigToTest);

    const input = screen.getByTestId('dataTestIdInputMock') as HTMLInputElement;
    input.focus();
    input.blur();

    await waitFor(() => expect(mockInputConfigToTest.onBlur).toHaveBeenCalled());
  });

  it('Should call function onFocus', async () => {
    const mockInputConfigToTest: InputProps = {
      ...mockInputDefaultConfig,
      onFocus: jest.fn()
    };

    setup(mockInputConfigToTest);

    const input = screen.getByTestId('dataTestIdInputMock') as HTMLInputElement;

    input.focus();

    await waitFor(() => expect(mockInputConfigToTest.onFocus).toHaveBeenCalled());
  });

  it('Should call function onChange', async () => {
    const mockInputConfigToTest: InputProps = {
      ...mockInputDefaultConfig,
      onChange: jest.fn()
    };

    setup(mockInputConfigToTest);

    const input = screen.getByTestId('dataTestIdInputMock') as HTMLInputElement;

    input.focus();
    await userEvent.keyboard('12345');

    await waitFor(() => expect(mockInputConfigToTest.onChange).toHaveBeenCalled());
  });

  it('Should display ValidationBar if required is true and hideValidationBar is false', () => {
    const mockInputConfigToTest: InputProps = {
      ...mockInputDefaultConfig,
      required: true,
      hideValidationBar: false
    };

    setup(mockInputConfigToTest);

    expect(screen.getByTestId('validationBar')).toBeInTheDocument();
  });

  it('Should NOT display ValidationBar if required is true and hideValidationBar is true', () => {
    const mockInputConfigToTest: InputProps = {
      ...mockInputDefaultConfig,
      required: true,
      hideValidationBar: true
    };

    setup(mockInputConfigToTest);

    expect(screen.queryByTestId('validationBar')).not.toBeInTheDocument();
  });

  it('Should display message validation error if required is true and MessageValidation is false', async () => {
    const mockInputConfigToTest: InputProps = {
      ...mockInputDefaultConfig,
      required: true,
      hideMessageValidation: false
    };

    setup(mockInputConfigToTest);

    const input = screen.getByTestId('dataTestIdInputMock') as HTMLInputElement;

    input.focus();
    input.blur();

    await waitFor(() => expect(screen.getByTestId('messageValidation')).toBeInTheDocument());
  });

  it('Should NOT display message validation error if required is true and MessageValidation is true', async () => {
    const mockInputConfigToTest: InputProps = {
      ...mockInputDefaultConfig,
      required: true,
      hideMessageValidation: true
    };

    setup(mockInputConfigToTest);

    const input = screen.getByTestId('dataTestIdInputMock') as HTMLInputElement;

    input.focus();
    input.blur();

    await waitFor(() => expect(screen.queryByTestId('messageValidation')).not.toBeInTheDocument());
  });

  it('Should NOT display validation bar if required is false and ValidatorFunctions is empty', async () => {
    const mockInputConfigToTest: InputProps = {
      ...mockInputDefaultConfig,
      required: false,
      validateFunctions: undefined
    };

    setup(mockInputConfigToTest);

    const input = screen.getByTestId('dataTestIdInputMock') as HTMLInputElement;

    const validationBar = screen.queryByTestId('validationBar');

    input.focus();
    input.blur();

    await waitFor(() => expect(validationBar).not.toBeInTheDocument());
  });

  it('Should display validation bar if required is false and ValidatorFunctions has function', async () => {
    const { validateEmail } = useValidator();

    const mockInputConfigToTest: InputProps = {
      ...mockInputDefaultConfig,
      required: false,
      validateFunctions: [validateEmail]
    };

    setup(mockInputConfigToTest);

    const validationBar = screen.queryByTestId('validationBar');

    await waitFor(() => expect(validationBar).toBeInTheDocument());
  });

  it('Should display validation bar if required is false and ValidatorFunctions has function', async () => {
    const { validateEmail } = useValidator();

    const mockInputConfigToTest: InputProps = {
      ...mockInputDefaultConfig,
      required: false,
      validateFunctions: [validateEmail]
    };

    setup(mockInputConfigToTest);

    const validationBar = screen.queryByTestId('validationBar');

    await waitFor(() => expect(validationBar).toBeInTheDocument());
  });

  it('Should display MessageError if minLength is lower than expect ', async () => {
    const mockInputConfigToTest: InputProps = {
      ...mockInputDefaultConfig,
      highlightBorderError: true,
      required: true,
      minLength: 6
    };

    setup(mockInputConfigToTest);

    const input = screen.getByTestId('dataTestIdInputMock') as HTMLInputElement;

    input.focus();
    await userEvent.keyboard('12345');
    input.blur();

    await waitFor(() => expect(!!input.validationMessage).toBe(true));
  });

  it('Should display MessageError if maxLength is upper than expect ', async () => {
    const mockInputConfigToTest: InputProps = {
      ...mockInputDefaultConfig,
      highlightBorderError: true,
      required: true,
      maxLength: 6
    };

    setup(mockInputConfigToTest);

    const input = screen.getByTestId('dataTestIdInputMock') as HTMLInputElement;

    input.focus();
    await userEvent.keyboard('12345678');
    input.blur();

    await waitFor(() => expect(input.value.length === mockInputConfigToTest.maxLength).toBe(true));
  });
});
