export default function Button({ onClick, type = "submit", children }) {
    return (
      <button 
        onClick={onClick} 
        type={type}
        className="auth-button"
      >
        {children}
      </button>
    );
  }