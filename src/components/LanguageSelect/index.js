const LanguageSelect = ({language, onLanguageChange}) => (
  <div>
    <select value={language} onChange={onLanguageChange}>
      <option value="en">English</option>
      <option value="es">Spanish</option>
      <option value="fr">French</option>
      {/* Add other languages here */}
    </select>
  </div>
)

export default LanguageSelect
