export default function InputField({ type, id, placeholder, required = true }) {
    return (
        <div className="input">
            <input
                type={type}
                id={id}
                name={id}
                placeholder={placeholder}
                required={required}
            />
        </div>
    );
}