import clsx from 'clsx';
import type { HTMLInputTypeAttribute } from 'react';

type InputProps = {
	id: string;
	type: HTMLInputTypeAttribute;
	value: string;
	label: string;
	autofocus?: boolean;
	required?: boolean;
	onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function Input({
	id,
	type,
	value,
	label,
	onChange,
	autofocus = false,
	required = false,
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
				onChange={onChange}
				autoFocus={autofocus}
				required={required}
			/>
		</div>
	);
}
