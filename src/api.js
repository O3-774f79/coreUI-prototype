import axios from 'axios'

export default axios.create({
    baseURL: `http://localhost:5000/api/`,
        headers: {
          Authorization: 'Bearer ' + "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoidXNlciIsImV4cCI6MTU0Mjg4MDY1NCwiaXNzIjoiaHR0cDovL2xvY2FsaG9zdDo1MDAwIiwiYXVkIjoiaHR0cDovL2xvY2FsaG9zdDo1MDAwIn0.PjSehngn4Xn7-PH6QeRYKAqEEgjaSTCApsEQHErT5Uk" 
        }
  });