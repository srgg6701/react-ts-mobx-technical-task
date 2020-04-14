interface appStore {
  people: Array<any>
  employees: Array<any>
}

const appStore = {

  people: [],
  employees: [],

  fetchData(url: string) {
    return window.fetch(url).then(response => {
      if (response.status !== 200) {
        console.log(`Looks like there was a problem. Status Code: ${response.status}`);
        return;
      }
      return response.json();
    });
  },

  getData(url: string, name: string){
    if (this[name].length) {
      // if have data stored, return them
      return Promise.resolve(this[name]);
    } else {
      // otherwise, make HTTP-request
      return this.fetchData(url, name).then(result => {
        this[name] = name === 'employees' ? result.data : result;
        return this[name];
      });
    }
  }
}

export default appStore;