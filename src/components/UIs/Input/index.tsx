'use client';
import { CSSProperties, useRef, useState } from 'react';
//= Components
import { Icon } from '@iconify/react';
//= Styles
import clsx from 'clsx';
import cls from './input.module.scss';

type Props = {
  type?: string
  icon?: string
  label?: string
  placeholder?: string
  name: string
  value?: string
  disabled?: boolean
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  style?: CSSProperties;
  ref?: React.RefObject<HTMLInputElement>;
}

function Input({ type, icon, style, label, placeholder, disabled, name, value, onChange, ref }: Props) {
  const [inputType, setInputType] = useState(type || 'text');
  const inputRef = useRef<HTMLInputElement>(null);

  function toggleInputType() {
    setInputType(prevType => prevType === 'password' ? 'text' : 'password');
  }

  return (
    <div className={cls.formGroup} style={style || {}}>
      {label && <label htmlFor={`input-${name}`}>
        {
          label.includes('/*/')
            ?
            <>
              {label.replace('/*/', '')}
              <span style={{ color: 'red' }}>*</span>
            </>
            :
            label
        }
      </label>}
      <div className={cls.field}>
        {icon && <div className={cls.icon} onClick={() => inputRef.current?.focus()}>{<Icon icon={icon} />}</div>}
        <input className={icon ? cls.with_icon : ''} type={inputType || "text"} id={`input-${name}`} name={name} placeholder={placeholder || ""} ref={ref || inputRef} value={value || ''} onChange={onChange} disabled={disabled} />
        {type === 'password' && value?.length ?
          <div className={cls.pass_icon} onClick={toggleInputType}>
            <Icon icon="solar:eye-linear" />
          </div>
          :
          null
        }
      </div>
    </div>
  )
}

export default Input
