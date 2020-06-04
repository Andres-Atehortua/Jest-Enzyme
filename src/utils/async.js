import { setTimeout } from "timers";

export const getDataCallback = (callback) => {
  const name = "Andrés";

  setTimeout(() => {
    callback(name);
  }, 300);
};

export const getDataPromise = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Andrés desde promesa");
    }, 300);
  });

export const getDataPromiseError = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("Error desde la promesa");
    }, 300);
  });

export const getDataHTTP = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
  const user = await response.json();
  return user;
};
