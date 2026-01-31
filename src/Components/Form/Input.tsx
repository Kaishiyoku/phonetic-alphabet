import clsx from 'clsx';
import type { HTMLInputTypeAttribute } from 'react';
import Button from './Button.tsx';

type InputProps = {
	id: string;
	type: HTMLInputTypeAttribute;
	value: string;
	label: string;
	autofocus?: boolean;
	required?: boolean;
    clearable?: boolean;
	onChange: (value: string) => void;
};

export default function Input({
	id,
	type,
	value,
	label,
	onChange,
	autofocus = false,
	required = false,
    clearable = false,
}: InputProps) {
	return (
		<div className="pb-4">
			<div className="pb-1">
				<label
					htmlFor={id}
					className={clsx({
						"after:content-['*'] after:pl-1 after:text-red-600": required,
					})}
				>
					{label}
				</label>
			</div>

			<input
				className="px-4 py-2 border-zinc-400 focus:border-indigo-500 ring-indigo-500 dark:bg-zinc-800 rounded-md"
				id={id}
				type={type}
				value={value}
				onChange={(event) => onChange(event.target.value)}
				autoFocus={autofocus}
				required={required}
			/>

            {clearable && value.length > 0 && (
                <Button
                    type="button"
                    aria-label="Zurücksetzen"
                    onClick={() => onChange('')}
                    className="absolute right-0"
                    plain
                >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6" aria-hidden>
                        <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                    </svg>
                </Button>
            )}
		</div>
	);
}
