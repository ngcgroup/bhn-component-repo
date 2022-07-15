import React from 'react';
import './SecurityWidget.css';

export interface SecurityWidgetProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const SecurityWidget = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  ...props
}: SecurityWidgetProps) => {
  const mode = primary ? 'storybook-security--primary' : 'storybook-security--secondary';
  return (
    <button
      type="button"
      className={['storybook-security', `storybook-security--${size}`, mode].join(' ')}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};
