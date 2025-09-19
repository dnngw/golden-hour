export const generateMorningGoldenHour = (sunriseTimeAMPM) => {
  if (!sunriseTimeAMPM) return null;
  
  try {
    const today = new Date();
    const [time, period] = sunriseTimeAMPM.split(' ');
    const [hours, minutes] = time.split(':').map(Number);
    
    // Convert to 24-hour format
    let hour24 = hours;
    if (period === 'PM' && hours !== 12) {
      hour24 += 12;
    } else if (period === 'AM' && hours === 12) {
      hour24 = 0;
    }
    
    // Start time = sunrise
    const startTime = new Date(today);
    startTime.setHours(hour24, minutes, 0, 0);
    
    // End time = sunrise + 55 minutes
    const endTime = new Date(startTime);
    endTime.setHours(endTime.getHours() + 1);
    
    const formatTime = (date) => date.toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
    });
    
    return {
      type: 'morning',
      startTime: formatTime(startTime),
      endTime: formatTime(endTime),
      range: `${formatTime(startTime)} - ${formatTime(endTime)}`,
      duration: '55 minutes after sunrise'
    };
    
  } catch (error) {
    console.error('Error generating morning golden hour:', error);
    return null;
  }
};