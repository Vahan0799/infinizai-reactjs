const Input = props => {
	const {
		className,
		id,
		type,
		label,
		value,
		onChange,
		name,
		...rest
	} = props;

	return (
		<div className={`input__wrapper${className ? className : ''}`}>
			{type === 'textarea' ? (
				<textarea id={id}
						  placeholder=" "
						  name={name}
						  onChange={onChange}
						  {...rest}
				>
                </textarea>
			) : (
				<input
					id={id}
					type={type}
					placeholder=" "
					name={name}
					onChange={onChange}
					{...rest}
				/>
			)}
			<label htmlFor={id}>
				{label}
			</label>
		</div>
	)
};

export default Input;
