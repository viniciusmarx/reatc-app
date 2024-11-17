const Button = ({ label }) => {
	const showsAlert = () => alert(`A label desse botão é ${label}`);
	return <button onClick={showsAlert}>{label}</button>;
};

export default Button;
