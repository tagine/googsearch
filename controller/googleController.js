const axios = require('axios').default;
 
// Make a request for a user with a given ID
axios.request({
          method: 'get',
          url: 'https://www.googleapis.com/books/v1/volumes?q=' + this.state.text
        }).then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });

//   getBooks() {
//     axios.request({
//       method: 'get',
//       url: 'https://www.googleapis.com/books/v1/volumes?q=' + this.state.text
//     }).then((response) => {
//       this.setState({books: response.data.items}, () => {
//         console.log(this.state);
//       })
//     }).catch((error) => {
//       console.log(error);
//     });
//   }