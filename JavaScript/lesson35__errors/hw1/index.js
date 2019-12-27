  export const parseUser = data => {
      try {
          const result = JSON.parse(data);
          return result;
      } catch (e) {
          return null;
      }
  };