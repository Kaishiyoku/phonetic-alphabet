import {ChangeEvent, useState} from 'react';
import Input from './Form/Input.tsx';
import Button from './Form/Button.tsx';
import PhoneticAlphabet from '../Enums/PhoneticAlphabet.ts';

export default function PhoneticForm() {
	const [text, setText] = useState('');
	const [phonetics, setPhonetics] = useState<string[]>([]);

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setText(event.target.value);

        setPhonetics(() =>
            event.target.value
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
            <Input
                id="text"
                type="text"
                label="Text"
                value={text}
                onChange={handleChange}
                autofocus
                required
            />

            <Button type="button" plain onClick={handleReset}>
                Zurücksetzen
            </Button>

			{phonetics.length > 0 && (
				<div className="pt-4 prose dark:prose-invert">
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
