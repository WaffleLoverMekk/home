const axios = require('axios')

axios.post('https://discord.com/api/webhooks/1206575816809513040/pP6-7MmKg-tGurb0l-PUSEdBgHOZLWBPK5Im31NhfNl2y0ib_dSm3A2FIzerJ6YC4bAe', {
  content: 'This is a message sent to Discord webhook'
})
  .then(response => {
    console.log('sycghessfully calcualtorerd');
  })
  .catch(error => {
    console.error('Error coolculation:', error);
  });
