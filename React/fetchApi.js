fetch('https://examle.com/api/things')
  .then(res => res.json())
  .then(res => console.log(res.results)) 
  .catch(err => console.log(err));


  // This exmaple assuems that the 'things' requested in the URl are in an array whose key is results. This s typical fo list requests