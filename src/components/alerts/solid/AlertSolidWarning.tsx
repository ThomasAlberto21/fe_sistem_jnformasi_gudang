import React from 'react';
import IconX from '../../Icons/IconX';

interface AlertSolidWarningProps {
  title: string;
  text: string;
  onClick?: () => void;
}

const AlertSolidWarning: React.FC<AlertSolidWarningProps> = ({ title, text, onClick }) => {
  return (
    <>
      <div className="flex items-center border p-3.5 rounded text-white bg-warning">
        <span className="ltr:pr-2 rtl:pl-2">
          <strong className="ltr:mr-1 rtl:ml-1">{title}</strong>
          {text}
        </span>
        <button type="button" className="ltr:ml-auto rtl:mr-auto hover:opacity-80" onClick={onClick}>
          <IconX className="w-5 h-5" />
        </button>
      </div>
    </>
  );
};

export default AlertSolidWarning;
