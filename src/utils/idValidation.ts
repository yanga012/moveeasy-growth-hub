
// South African ID number validation function
export const validateSouthAfricanID = (idNumber: string): boolean => {
  // Check basic format: 13 digits
  if (!/^\d{13}$/.test(idNumber)) {
    return false;
  }

  // Extract date of birth (YYMMDD)
  const year = parseInt(idNumber.substring(0, 2));
  const month = parseInt(idNumber.substring(2, 4));
  const day = parseInt(idNumber.substring(4, 6));
  
  // Validate month and day
  if (month < 1 || month > 12) {
    return false;
  }
  
  // Simple day validation (not accounting for varying days per month)
  if (day < 1 || day > 31) {
    return false;
  }
  
  // Check control digit using Luhn algorithm
  const digits = idNumber.split('').map(Number);
  let sum = 0;
  let alternate = false;
  
  for (let i = digits.length - 1; i >= 0; i--) {
    let digit = digits[i];
    
    if (alternate) {
      digit *= 2;
      if (digit > 9) {
        digit -= 9;
      }
    }
    
    sum += digit;
    alternate = !alternate;
  }
  
  return (sum % 10 === 0);
};
