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
    },
    experiencias: [
        {
          cargo: "Product Designer Senior",
          empresa: "Blip",
          periodo: "Fev 2022 – Hoje",
          descricao:
            "Durante mais de 3 anos na Blip, atuei em diversas squads estratégicas, participando desde o discovery e definição de visão de novos produtos, passando pela validação de experimentos até a evolução contínua com base em métricas de sucesso. Com detaque para produtos como Blip Store, Ai Agents e Blip Go.",
        },
        {
          cargo: "Product Designer Senior",
          empresa: "Banco Bari",
          periodo: "Ago 2021 – Fev 2022",
          descricao:
            "Atuei em produtos de crédito, em especial crédito consignado e crédito com garantia de imóvel. Tinha como foco aumentar a atratividade dos produtos, melhorar a experiência de contratação, aumentando a taxa de sucesso e a satisfação dos clientes.",
        },
        {
          cargo: "UX/UI Designer Senior",
          empresa: "Consulta Remédios",
          periodo: "Fev 2021 – Ago 2021",
          descricao:
            "Trabalhei no site que é uma das maiores plataformas brasileiras de comparação e compra de medicamentos. Atuei para aumentar as taxas de engajamento e conversão na compra de medicamentos no marketplace, com forte foco em análise de dados e identificação de padrões de comportamento dos usuários.",
        },
        {
          cargo: "+ 4 outras experiências",
          empresa: "Me chama e posso contar mais!",
          periodo: "",
          descricao: "",
        },
      ],
      formacoes: [
        {
          periodo: "2017–2019",
          titulo: "Especialização em Design Centrado no Usuário - Design de Interação",
          instituicao: "Universidade Positivo – Curitiba",
        },
        {
          periodo: "2013-2017",
          titulo: "Bacharelado em Design",
          instituicao: "Centro Universitário do Norte - Manaus",
        },
      ],
      cursos: [
        {
          data: "Jun 2023",
          nome: "Product Discovery",
          instituicao: "PM3",
        },
        {
          data: "Dez 2019",
          nome: "Gestão de Produtos",
          instituicao: "Aldeia Coworking",
        },
      ],
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