import { useState } from 'react';
import Input from './Form/Input.tsx';
import Button from './Form/Button.tsx';
import PhoneticAlphabet from '../Enums/PhoneticAlphabet.ts';

export default function PhoneticForm() {
	const [text, setText] = useState('');
	const [phonetics, setPhonetics] = useState<string[]>([]);

	const handleSubmit = (event?: React.FormEvent<HTMLFormElement>) => {
		event?.preventDefault();

		setPhonetics(() =>
			text
				.trim()
				.split('')
				.map(
					(char) =>
						PhoneticAlphabet[
							char.toLowerCase() as keyof typeof PhoneticAlphabet
						] || char,
				),
		);
	};

	const handleReset = () => {
		setText('');
		setPhonetics([]);
	};

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<Input
					id="text"
					type="text"
					label="Text"
					value={text}
					onChange={(event) => setText(event.target.value)}
					autofocus
					required
				/>

				<div className="space-x-4">
					<Button type="button" color="black" onClick={() => handleSubmit()}>
						Submit
					</Button>

					<Button type="button" plain onClick={handleReset}>
						Reset
					</Button>
				</div>
			</form>

			{phonetics.length > 0 && (
				<div className="pt-4 prose">
					<ol>
						{phonetics.map((phonetic, index) => (
							<li key={`${index}-${phonetic}`}>{phonetic}</li>
						))}
					</ol>
				</div>
			)}
		</div>
	);
}
