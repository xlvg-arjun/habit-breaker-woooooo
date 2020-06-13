export default function delayer(timeout: number): Promise<Boolean> {
  return new Promise((resolve, _reject) => {
    setTimeout(() => {
      resolve(true);
    }, timeout);
  }); 
};
