import { useForm, ValidationError } from '@formspree/react';

export default function ContactForm() {
	const [state, handleSubmit] = useForm('xrgvlzay');
	if (state.succeeded) {
		return <p className='text-green-700'>Message sent! We'll be in touch.</p>;
	}
	return (
		<form
			method='POST'
			onSubmit={handleSubmit}
			className='flex flex-col gap-2 w-full relative'
		>
			<input
				id='name'
				type='text'
				name='name'
				placeholder='Name'
				className=' border-b-2'
			/>
			<ValidationError prefix='Name' field='name' errors={state.errors} />
			<input
				id='email'
				type='email'
				name='email'
				placeholder='Email'
				className=' border-b-2'
			/>
			<ValidationError prefix='Email' field='email' errors={state.errors} />
			<textarea placeholder='Message' name='textarea' className=' border-b-2' />
			<ValidationError prefix='Message' field='message' errors={state.errors} />
			<button
				type='submit'
				value='Submit'
				disabled={state.submitting}
				className='flex p-8 mt-4 bg-black text-white text-[24px] h-2 w-56 items-center justify-center place-self-end'
			>
				SEND
			</button>
		</form>
	);
}
