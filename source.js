const axios = require('axios')

axios.post('URL', {
  content: 'This is a message sent to Discord webhook'
})
  .then(response => {
    console.log('sycghessfully calcualtorerd');
  })
  .catch(error => {
    console.error('Error coolculation:', error);
  });
