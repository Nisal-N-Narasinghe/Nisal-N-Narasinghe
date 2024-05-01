import React, { useState } from "react";
import PropTypes from "prop-types";

const Dropdown = ({ options, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (option) => {
    setSelectedOption(option);
    onSelect(option.value);
    setIsOpen(false);
  };

  return (
    <div className='relative inline-block  text-left w-full md:w-serchSortmd lg:w-serchSortlg xl:w-serchSortxl'>
      <div>
        <span className='shadow-sm  bg-gray-900 text-white'>
          <button
            type='button'
            onClick={handleToggle}
            className={`inline-flex justify-between items-center w-full h-10 rounded-md  border border-gray-900 px-4 py-2 bg-gray-900 text-sm font-medium text-gray-400 outline-none hover:border-blue-500 focus:outline-none  focus:ring focus:border-blue-500 relative ${
              isOpen ? "border-blue-500" : ""
            }`}
            id='options-menu'
            aria-haspopup='true'
            aria-expanded={isOpen}>
            {selectedOption ? (
              <span className='truncate'>{selectedOption.label}</span>
            ) : (
              <span className='text-gray-500'>Select an option</span>
            )}

            <span className='ml-2'>
              <svg
                className={`w-5 h-5 ${
                  isOpen ? "transform rotate-180" : ""
                } text-gray-500`}
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M4 6h16M4 12h16m-7 6h7'
                />
              </svg>
            </span>
          </button>
        </span>
      </div>

      {isOpen && (
        <div
          className='origin-top-right absolute right-0 mt-2 w-full rounded-md shadow-lg border border-gray-200 bg-gray-900 ring-1 ring-blue-500 ring-opacity-5 '
          role='menu'
          aria-orientation='vertical'
          aria-labelledby='options-menu'>
          <div className='py-1' role='none'>
            {options.map((option) => (
              <button
                key={option.value}
                className='block px-4 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-900 w-full text-left'
                onClick={() => handleSelect(option)}>
                {option.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

Dropdown.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
  onSelect: PropTypes.func.isRequired,
};

export default Dropdown;
