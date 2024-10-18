import React, { useState } from 'react';

interface FormCodigosProps {
  onSubmit: (formData: { country: string; zipCode: string }) => void;
  onClearHistory: () => void;
}

const FormCodigos: React.FC<FormCodigosProps> = ({ onSubmit, onClearHistory }) => {
  const [country, setCountry] = useState<string>('US');
  const [zipCode, setZipCode] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (zipCode) {
      onSubmit({ country, zipCode });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="centered-div" style={{textAlign:'center', backgroundColor:'lightblue'}}>
      <div>
        <label>Pais:</label>
        <select value={country} onChange={(e) => setCountry(e.target.value)}>
          <option value="US">United States</option>
          <option value="MX">México</option>
          <option value="CA">Canada</option>
        </select>
      </div>
      <div>
        <label>Código Zip :</label>
        <input
          type="text"
          value={zipCode}
          onChange={(e) => setZipCode(e.target.value)}
          required
        />
      </div>
      <button type="submit">Buscar</button>
      <button type="button" onClick={onClearHistory}>
        Limpiar Historial
      </button>
    </form>
  );
};

export default FormCodigos;
