export const sendRequest = async () => {
  let response = await fetch('/api/greetings');
  let data = await response.json();
  return data;
}