import Logo from './Logo';
import InputField from './InputField';
import Button from './Button';
import Link from 'next/link';

export default function AuthForm({
    title,
    titleColored,
    inputs,
    buttonText,
    buttonAction,
    linkText,
    linkHref,
    extraElement
}) {
    return (
        <form id={title === "LOGIN" ? "formLogin" : undefined}>
            <h1 id="titulo">
                {title} {titleColored && <span className="titulo-color">{titleColored}</span>}
            </h1>

            <Logo />

            {inputs.map((input, index) => (
                <InputField
                    key={index}
                    type={input.type}
                    id={input.id}
                    placeholder={input.placeholder}
                    required={input.required}
                />
            ))}

            <div className="recuperar">
                <Link href={linkHref}>{linkText}</Link>
            </div>

            <Button onClick={buttonAction}>{buttonText}</Button>

            {extraElement && extraElement}
        </form>
    );
}