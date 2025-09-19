export const generateEveningGoldenHour = (sunsetTimeAMPM) => {
  if (!sunsetTimeAMPM) return null;
  
  try {
    const today = new Date();
    const [time, period] = sunsetTimeAMPM.split(' ');
    const [hours, minutes] = time.split(':').map(Number);
    
    // Convert to 24-hour format
    let hour24 = hours;
    if (period === 'PM' && hours !== 12) {
      hour24 += 12;
    } else if (period === 'AM' && hours === 12) {
      hour24 = 0;
    }
    
    // End time = sunset
    const endTime = new Date(today);
    endTime.setHours(hour24, minutes, 0, 0);
    
    // Start time = sunset - 55 minutes
    const startTime = new Date(endTime);
    startTime.setHours(startTime.getHours() - 1);
    
    const formatTime = (date) => date.toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
    });
    
    return {
      type: 'evening',
      startTime: formatTime(startTime),
      endTime: formatTime(endTime),
      range: `${formatTime(startTime)} - ${formatTime(endTime)}`,
      duration: '55 minutes before sunset'
    };
    
  } catch (error) {
    console.error('Error generating evening golden hour:', error);
    return null;
  }
};