//token 869a0ae679f58e981ec4832254c6c28eb276f02ab8c1cebef7181970731f9cbd
//https://api.dribbble.com/v2/user/shots?access_token='+this.token
//https://api.dribbble.com/v1/users/'+dribbble+'/shots?access_token='+accessToken
Vue.use(VueStorage);
var app = new Vue({
   el: '#app',
   data: {
    token: 'hPtURsKeMhh77wTjmzfeLxiM07RuDPN9',
    user: 'thomaskauai',
    portfolioJson: [],
    links: {
      behance: 'https://www.behance.net/thomaskauai',
      linkedin: 'https://www.linkedin.com/in/thomaskauai/',
      instagram: 'https://www.instagram.com/thomaskauai/',
      resume: 'assets/curriculo-thomas-2021.pdf',
    }
   },
 
   mounted() {  
    Vue.ls.remove('portfolioJson')
    if (Vue.ls.get('portfolioJson')) {  
     console.log('pegou');
      try {
        this.portfolioJson = JSON.parse(this.$ls.get('portfolioJson'));
      } catch (error) {
        Vue.ls.remove('portfolioJson')
      }
    } else {    
     fetchJsonp('https://behance.net/v2/users/'+this.user+'/projects?api_key='+this.token)
     .then(function(response) {
       return response.json()
     }).then(function(data) {
       app.portfolioJson = data['projects'];
       Vue.ls.set('portfolioJson', JSON.stringify(data['projects']), 60 * 60 * 1000);
      console.log('salvou');
     }).catch(function(ex) {
      console.log('parsing failed', ex)
     })     
    }
   },
 
   methods: {    
   }
});
