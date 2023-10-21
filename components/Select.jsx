'use client';


const Select = ({ options, selectedValue, onChange }) => {
  return (
    <select
   value={selectedValue}
      className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
      onChange={(e) => onChange(e)}
      name="typeOfRecommendation"
    
        
    >
      {options.map((option, index) => (
        <option key={index} value={option}     >
          {option}
        </option>
      ))}
    </select>
  );
};

export default Select;
