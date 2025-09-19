export const convertToLocalAMPM = (utcTimeString) => {
  if (!utcTimeString) return '';
  
  try {
    const date = new Date(utcTimeString);
    
    // Check if date is valid
    if (isNaN(date.getTime())) {
      console.error('Invalid date string:', utcTimeString);
      return '';
    }
    
    return date.toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
    });
  } catch (error) {
    console.error('Error converting time:', error);
    return '';
  }
};