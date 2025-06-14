import PhoneticForm from '../Components/PhoneticForm.tsx';

export default function HomePage() {
	return (
		<>
			<div className="prose dark:prose-invert pb-8">
				<h1>Buchstabiertafel</h1>
			</div>

			<PhoneticForm />
		</>
	);
}
