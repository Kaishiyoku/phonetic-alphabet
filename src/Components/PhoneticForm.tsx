import {useState} from 'react';
import Input from './Form/Input.tsx';
import PhoneticAlphabet from '../Enums/PhoneticAlphabet.ts';

export default function PhoneticForm() {
	const [text, setText] = useState('');
	const [phonetics, setPhonetics] = useState<string[]>([]);

    const handleChange = (value: string) => {
        setText(value);

        setPhonetics(() =>
            value
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

	return (
		<div>
            <div className="relative w-fit">
                <Input
                    id="text"
                    type="text"
                    label="Text"
                    value={text}
                    onChange={handleChange}
                    autofocus
                    required
                    clearable
                />
            </div>

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
