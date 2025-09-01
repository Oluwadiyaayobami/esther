// Simple localStorage-based message storage
// In a production app, you'd want to use a proper database

export const getUserMessage = (date: string): string => {
  try {
    const messages = JSON.parse(localStorage.getItem('diaryMessages') || '{}');
    return messages[date] || '';
  } catch {
    return '';
  }
};

export const saveUserMessage = (date: string, message: string): void => {
  try {
    const messages = JSON.parse(localStorage.getItem('diaryMessages') || '{}');
    if (message.trim()) {
      messages[date] = message.trim();
    } else {
      delete messages[date];
    }
    localStorage.setItem('diaryMessages', JSON.stringify(messages));
  } catch (error) {
    console.error('Failed to save message:', error);
  }
};

export const getAllUserMessages = (): Record<string, string> => {
  try {
    return JSON.parse(localStorage.getItem('diaryMessages') || '{}');
  } catch {
    return {};
  }
};

export const deleteUserMessage = (date: string): void => {
  try {
    const messages = JSON.parse(localStorage.getItem('diaryMessages') || '{}');
    delete messages[date];
    localStorage.setItem('diaryMessages', JSON.stringify(messages));
  } catch (error) {
    console.error('Failed to delete message:', error);
  }
};