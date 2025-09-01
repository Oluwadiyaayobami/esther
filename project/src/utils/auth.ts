// Authentication utilities for the diary

export const checkAuthentication = (): boolean => {
  try {
    const isAuthenticated = localStorage.getItem('diaryAuthenticated');
    const authTime = localStorage.getItem('diaryAuthTime');
    
    if (!isAuthenticated || !authTime) {
      return false;
    }
    
    // Check if authentication is still valid (24 hours)
    const authTimestamp = parseInt(authTime);
    const now = Date.now();
    const twentyFourHours = 24 * 60 * 60 * 1000;
    
    if (now - authTimestamp > twentyFourHours) {
      // Authentication expired, clear it
      clearAuthentication();
      return false;
    }
    
    return isAuthenticated === 'true';
  } catch {
    return false;
  }
};

export const clearAuthentication = (): void => {
  localStorage.removeItem('diaryAuthenticated');
  localStorage.removeItem('diaryAuthTime');
};

export const setAuthentication = (): void => {
  localStorage.setItem('diaryAuthenticated', 'true');
  localStorage.setItem('diaryAuthTime', Date.now().toString());
};