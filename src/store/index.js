import { createStore } from 'vuex'

export default createStore({
  state: {
    featured: [
      {
        id: 1,
        icon: "ph:video-fill",
        text: "Video Aulas",
      },
      {
        id: 2,
        icon: "ion:book-sharp",
        text: "Materiais em PDF",
      },
      {
        id: 3,
        icon: "lucide:user-cog",
        text: "Suporte 24/7",
      },
      {
        id: 4,
        icon: "ic:outline-verified-user",
        text: "Pagamento Seguro",
      },
    ],
    federal: [
      {
        id: 1,
        name: 'policia-federal',
        img: "pfr.webp",
        slug: 'pfr',
        title: "Polícia Rodoviária Federal",
        subtitle: "(PRF)",
        price: "129,90",
        vagas: " A definir vagas ",
        prova: "A definir",
        category: "Nível médio / superior",
        salary: "R$10.790,00 a R$18.042,00",
        link: "https://pay.hotmart.com/G70336416S?sck=HOTMART_PRODUCT_PAGE&off=smk0k3pd&hotfeature=32&_gl=1*ffylre*_ga*MTEzNDQwMTkzOC4xNjg4NTY3NzQx*_ga_GQH2V1F11Q*MTcwMTI5MjMyMy40My4xLjE3MDEyOTI5NzguNjAuMC4w*_ga_RD9QTHRLPL*MTcwMTI5MjM0My4xMy4xLjE3MDEyOTI5NzkuNjAuMC4w*_ga_TWSDR7HH6D*MTcwMTI5MjM0My42LjEuMTcwMTI5Mjk4MC42MC4wLjA.",
        cardModal: [
          {
            id: 1,
            showCard: false,
            title: "Língua Portuguesa.",
            text:{
              1 : "umLorem ipsum dolor sit amet consectetur adipisicing elit. Vel possimus consectetur dolorem voluptatem dolorum beatae dolore obcaecati quas hic officiis, velit cum, alias quam. Doloribus consectetur accusamus quia ratione ipsa1,",
              2 : "que2Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel possimus consectetur dolorem voluptatem dolorum beatae dolore obcaecati quas hic officiis, velit cum, alias quam. Doloribus consectetur accusamus quia ratione ipsa1,",
    
            },      
            icon: "credit-card",
          },
          {
            id: 2,
            showCard: false,
            title: "RLM",
            text:{
              1 : "00Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel possimus consectetur dolorem voluptatem dolorum beatae dolore obcaecati quas hic officiis, velit cum, alias quam. Doloribus consectetur accusamus quia ratione ipsa1,",
              2 : "2Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel possimus consectetur dolorem voluptatem dolorum beatae dolore obcaecati quas hic officiis, velit cum, alias quam. Doloribus consectetur accusamus quia ratione ipsa1,",
    
            },      
            icon: "credit-card",
          },
          {
            id: 3,
            showCard: false,
            title: "Informática",
            text:{
              1 : "aasLorem ipsum dolor sit amet consectetur adipisicing elit. Vel possimus consectetur dolorem voluptatem dolorum beatae dolore obcaecati quas hic officiis, velit cum, alias quam. Doloribus consectetur accusamus quia ratione ipsa1,",
              2 : "as2Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel possimus consectetur dolorem voluptatem dolorum beatae dolore obcaecati quas hic officiis, velit cum, alias quam. Doloribus consectetur accusamus quia ratione ipsa1,",
    
            },  
            icon: "tv",
          },
          {
            id: 4,
            showCard: false,
            title: "Legislação Específica",
            text:{
              1 : "aasLorem ipsum dolor sit amet consectetur adipisicing elit. Vel possimus consectetur dolorem voluptatem dolorum beatae dolore obcaecati quas hic officiis, velit cum, alias quam. Doloribus consectetur accusamus quia ratione ipsa1,",
              2 : "as2Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel possimus consectetur dolorem voluptatem dolorum beatae dolore obcaecati quas hic officiis, velit cum, alias quam. Doloribus consectetur accusamus quia ratione ipsa1,",
    
            },  
            icon: "tv",
          },
          {
            id: 5,
            showCard: false,
            title: "Direitos Humanos ",
            text:{
              1 : "aasLorem ipsum dolor sit amet consectetur adipisicing elit. Vel possimus consectetur dolorem voluptatem dolorum beatae dolore obcaecati quas hic officiis, velit cum, alias quam. Doloribus consectetur accusamus quia ratione ipsa1,",
              2 : "as2Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel possimus consectetur dolorem voluptatem dolorum beatae dolore obcaecati quas hic officiis, velit cum, alias quam. Doloribus consectetur accusamus quia ratione ipsa1,",
    
            },  
            icon: "tv",
          },
          {
            id: 6,
            showCard: false,
            title: "Física",
            text:{
              1 : "aasLorem ipsum dolor sit amet consectetur adipisicing elit. Vel possimus consectetur dolorem voluptatem dolorum beatae dolore obcaecati quas hic officiis, velit cum, alias quam. Doloribus consectetur accusamus quia ratione ipsa1,",
              2 : "as2Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel possimus consectetur dolorem voluptatem dolorum beatae dolore obcaecati quas hic officiis, velit cum, alias quam. Doloribus consectetur accusamus quia ratione ipsa1,",
    
            },  
            icon: "tv",
          },
          {
            id: 7,
            showCard: false,
            title: "Ética e Cidadânia",
            text:{
              1 : "aasLorem ipsum dolor sit amet consectetur adipisicing elit. Vel possimus consectetur dolorem voluptatem dolorum beatae dolore obcaecati quas hic officiis, velit cum, alias quam. Doloribus consectetur accusamus quia ratione ipsa1,",
              2 : "as2Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel possimus consectetur dolorem voluptatem dolorum beatae dolore obcaecati quas hic officiis, velit cum, alias quam. Doloribus consectetur accusamus quia ratione ipsa1,",
    
            },  
            icon: "tv",
          },
          {
            id: 8,
            showCard: false,
            title: "Ética e CidadâniaGeopolítica ",
            text:{
              1 : "aasLorem ipsum dolor sit amet consectetur adipisicing elit. Vel possimus consectetur dolorem voluptatem dolorum beatae dolore obcaecati quas hic officiis, velit cum, alias quam. Doloribus consectetur accusamus quia ratione ipsa1,",
              2 : "as2Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel possimus consectetur dolorem voluptatem dolorum beatae dolore obcaecati quas hic officiis, velit cum, alias quam. Doloribus consectetur accusamus quia ratione ipsa1,",
    
            },  
            icon: "tv",
          },
          {
            id: 9,
            showCard: false,
            title: "Inglês",
            text:{
              1 : "aasLorem ipsum dolor sit amet consectetur adipisicing elit. Vel possimus consectetur dolorem voluptatem dolorum beatae dolore obcaecati quas hic officiis, velit cum, alias quam. Doloribus consectetur accusamus quia ratione ipsa1,",
              2 : "as2Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel possimus consectetur dolorem voluptatem dolorum beatae dolore obcaecati quas hic officiis, velit cum, alias quam. Doloribus consectetur accusamus quia ratione ipsa1,",
    
            },  
            icon: "tv",
          },
          {
            id: 10,
            showCard: false,
            title: "Legislação de Trânsito",
            text:{
              1 : "aasLorem ipsum dolor sit amet consectetur adipisicing elit. Vel possimus consectetur dolorem voluptatem dolorum beatae dolore obcaecati quas hic officiis, velit cum, alias quam. Doloribus consectetur accusamus quia ratione ipsa1,",
              2 : "as2Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel possimus consectetur dolorem voluptatem dolorum beatae dolore obcaecati quas hic officiis, velit cum, alias quam. Doloribus consectetur accusamus quia ratione ipsa1,",
    
            },  
            icon: "tv",
          },
          {
            id: 11,
            showCard: false,
            title: " Direito Administrativo ",
            text:{
              1 : "aasLorem ipsum dolor sit amet consectetur adipisicing elit. Vel possimus consectetur dolorem voluptatem dolorum beatae dolore obcaecati quas hic officiis, velit cum, alias quam. Doloribus consectetur accusamus quia ratione ipsa1,",
              2 : "as2Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel possimus consectetur dolorem voluptatem dolorum beatae dolore obcaecati quas hic officiis, velit cum, alias quam. Doloribus consectetur accusamus quia ratione ipsa1,",
    
            },  
            icon: "tv",
          },
          {
            id: 12,
            showCard: false,
            title: "Direito Constitucional",
            text:{
              1 : "aasLorem ipsum dolor sit amet consectetur adipisicing elit. Vel possimus consectetur dolorem voluptatem dolorum beatae dolore obcaecati quas hic officiis, velit cum, alias quam. Doloribus consectetur accusamus quia ratione ipsa1,",
              2 : "as2Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel possimus consectetur dolorem voluptatem dolorum beatae dolore obcaecati quas hic officiis, velit cum, alias quam. Doloribus consectetur accusamus quia ratione ipsa1,",
    
            },  
            icon: "tv",
          },
          {
            id: 13,
            showCard: false,
            title: "Direito Penal",
            text:{
              1 : "aasLorem ipsum dolor sit amet consectetur adipisicing elit. Vel possimus consectetur dolorem voluptatem dolorum beatae dolore obcaecati quas hic officiis, velit cum, alias quam. Doloribus consectetur accusamus quia ratione ipsa1,",
              2 : "as2Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel possimus consectetur dolorem voluptatem dolorum beatae dolore obcaecati quas hic officiis, velit cum, alias quam. Doloribus consectetur accusamus quia ratione ipsa1,",
    
            },  
            icon: "tv",
          },
          {
            id: 14,
            showCard: false,
            title: "Ebook",
            text:{
              1 : "aasLorem ipsum dolor sit amet consectetur adipisicing elit. Vel possimus consectetur dolorem voluptatem dolorum beatae dolore obcaecati quas hic officiis, velit cum, alias quam. Doloribus consectetur accusamus quia ratione ipsa1,",
              2 : "as2Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel possimus consectetur dolorem voluptatem dolorum beatae dolore obcaecati quas hic officiis, velit cum, alias quam. Doloribus consectetur accusamus quia ratione ipsa1,",
    
            },  
            icon: "tv",
          },
          {
            id: 15,
            showCard: false,
            title: "Simulado",
            text:{
              1 : "aasLorem ipsum dolor sit amet consectetur adipisicing elit. Vel possimus consectetur dolorem voluptatem dolorum beatae dolore obcaecati quas hic officiis, velit cum, alias quam. Doloribus consectetur accusamus quia ratione ipsa1,",
              2 : "as2Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel possimus consectetur dolorem voluptatem dolorum beatae dolore obcaecati quas hic officiis, velit cum, alias quam. Doloribus consectetur accusamus quia ratione ipsa1,",
    
            },  
            icon: "tv",
          },
        ],
      },
      {
        id: 2,
        name: 'policia-federal',
        img: "PF.webp",
        slug: 'pfr',
        title: "Policia Federal",
        subtitle: " Agente de Polícia",
        price: "199.99",
        vagas:"898",
        free: "399,00",
        prova: "A definir",
        category: "Nível médio / Superior",
        salary: "Até R$ 12.522,50",
        link: "https://pay.hotmart.com/G71676863A?sck=HOTMART_PRODUCT_PAGE&off=lrgs5h10&hotfeature=32&_gl=1*1ppfo44*_ga*MTgzMTkzMzQ4OS4xNjg2NDE4ODky*_ga_GQH2V1F11Q*MTcwMjE0MjgyNC4xMS4xLjE3MDIxNDc2NDAuNTAuMC4w&bid=1702147645407",
        cardModal: [
          {
            id: 1,
            showCard: false,
            title: "Língua Portuguesa",
            text:{
              1 : "umLorem ipsum dolor sit amet consectetur adipisicing elit. Vel possimus consectetur dolorem voluptatem dolorum beatae dolore obcaecati quas hic officiis, velit cum, alias quam. Doloribus consectetur accusamus quia ratione ipsa1,",
              2 : "que2Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel possimus consectetur dolorem voluptatem dolorum beatae dolore obcaecati quas hic officiis, velit cum, alias quam. Doloribus consectetur accusamus quia ratione ipsa1,",
    
            },      
            icon: "credit-card",
          },
          {
            id: 2,
            showCard: false,
            title: "Direito Administrativo",
            text:{
              1 : "00Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel possimus consectetur dolorem voluptatem dolorum beatae dolore obcaecati quas hic officiis, velit cum, alias quam. Doloribus consectetur accusamus quia ratione ipsa1,",
              2 : "2Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel possimus consectetur dolorem voluptatem dolorum beatae dolore obcaecati quas hic officiis, velit cum, alias quam. Doloribus consectetur accusamus quia ratione ipsa1,",
    
            },      
            icon: "credit-card",
          },
          {
            id: 3,
            showCard: false,
            title: "Direito Constitucional",
            text:{
              1 : "aasLorem ipsum dolor sit amet consectetur adipisicing elit. Vel possimus consectetur dolorem voluptatem dolorum beatae dolore obcaecati quas hic officiis, velit cum, alias quam. Doloribus consectetur accusamus quia ratione ipsa1,",
              2 : "as2Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel possimus consectetur dolorem voluptatem dolorum beatae dolore obcaecati quas hic officiis, velit cum, alias quam. Doloribus consectetur accusamus quia ratione ipsa1,",
    
            },  
            icon: "tv",
          },
          {
            id: 4,
            showCard: false,
            title: "Direito Penal",
            text:{
              1 : "aasLorem ipsum dolor sit amet consectetur adipisicing elit. Vel possimus consectetur dolorem voluptatem dolorum beatae dolore obcaecati quas hic officiis, velit cum, alias quam. Doloribus consectetur accusamus quia ratione ipsa1,",
              2 : "as2Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel possimus consectetur dolorem voluptatem dolorum beatae dolore obcaecati quas hic officiis, velit cum, alias quam. Doloribus consectetur accusamus quia ratione ipsa1,",
    
            },  
            icon: "tv",
          },
          {
            id: 5,
            showCard: false,
            title: "Direito Proc Penal",
            text:{
              1 : "aasLorem ipsum dolor sit amet consectetur adipisicing elit. Vel possimus consectetur dolorem voluptatem dolorum beatae dolore obcaecati quas hic officiis, velit cum, alias quam. Doloribus consectetur accusamus quia ratione ipsa1,",
              2 : "as2Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel possimus consectetur dolorem voluptatem dolorum beatae dolore obcaecati quas hic officiis, velit cum, alias quam. Doloribus consectetur accusamus quia ratione ipsa1,",
    
            },  
            icon: "tv",
          },
          {
            id: 6,
            showCard: false,
            title: "Legislação Especial",
            text:{
              1 : "aasLorem ipsum dolor sit amet consectetur adipisicing elit. Vel possimus consectetur dolorem voluptatem dolorum beatae dolore obcaecati quas hic officiis, velit cum, alias quam. Doloribus consectetur accusamus quia ratione ipsa1,",
              2 : "as2Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel possimus consectetur dolorem voluptatem dolorum beatae dolore obcaecati quas hic officiis, velit cum, alias quam. Doloribus consectetur accusamus quia ratione ipsa1,",
    
            },  
            icon: "tv",
          },
          {
            id: 7,
            showCard: false,
            title: "Estatística",
            text:{
              1 : "aasLorem ipsum dolor sit amet consectetur adipisicing elit. Vel possimus consectetur dolorem voluptatem dolorum beatae dolore obcaecati quas hic officiis, velit cum, alias quam. Doloribus consectetur accusamus quia ratione ipsa1,",
              2 : "as2Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel possimus consectetur dolorem voluptatem dolorum beatae dolore obcaecati quas hic officiis, velit cum, alias quam. Doloribus consectetur accusamus quia ratione ipsa1,",
    
            },  
            icon: "tv",
          },
          {
            id: 8,
            showCard: false,
            title: "Raciocínio Lógico",
            text:{
              1 : "aasLorem ipsum dolor sit amet consectetur adipisicing elit. Vel possimus consectetur dolorem voluptatem dolorum beatae dolore obcaecati quas hic officiis, velit cum, alias quam. Doloribus consectetur accusamus quia ratione ipsa1,",
              2 : "as2Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel possimus consectetur dolorem voluptatem dolorum beatae dolore obcaecati quas hic officiis, velit cum, alias quam. Doloribus consectetur accusamus quia ratione ipsa1,",
    
            },  
            icon: "tv",
          },
          {
            id: 9,
            showCard: false,
            title: "Informática",
            text:{
              1 : "aasLorem ipsum dolor sit amet consectetur adipisicing elit. Vel possimus consectetur dolorem voluptatem dolorum beatae dolore obcaecati quas hic officiis, velit cum, alias quam. Doloribus consectetur accusamus quia ratione ipsa1,",
              2 : "as2Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel possimus consectetur dolorem voluptatem dolorum beatae dolore obcaecati quas hic officiis, velit cum, alias quam. Doloribus consectetur accusamus quia ratione ipsa1,",
    
            },  
            icon: "tv",
          },
          {
            id: 10,
            showCard: false,
            title: "Contabilidade",
            text:{
              1 : "aasLorem ipsum dolor sit amet consectetur adipisicing elit. Vel possimus consectetur dolorem voluptatem dolorum beatae dolore obcaecati quas hic officiis, velit cum, alias quam. Doloribus consectetur accusamus quia ratione ipsa1,",
              2 : "as2Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel possimus consectetur dolorem voluptatem dolorum beatae dolore obcaecati quas hic officiis, velit cum, alias quam. Doloribus consectetur accusamus quia ratione ipsa1,",
    
            },  
            icon: "tv",
          },
        ],
      },
      {
        id: 3,
        img: "pfadm.png",
        title: "Policia Federal",
        subtitle: "Agente Administrativo",
        price: "199.99",
        vagas:"A definir",
        free: "399,00",
        category: "Superior",
        salary: "Até R$ 4.746,16",
        prova: "A definir",
        link: "https://pay.hotmart.com/S64600290X?sck=HOTMART_PRODUCT_PAGE&off=bitn064b&hotfeature=32&_gl=1*1vgkhpo*_ga*MTgzMTkzMzQ4OS4xNjg2NDE4ODky*_ga_GQH2V1F11Q*MTcwMjE0MjgyNC4xMS4xLjE3MDIxNDc1ODYuMzcuMC4w&bid=1702147591289",
        cardModal: [
          {
            id: 1,
            showCard: false,
            title: "Língua Portuguesa",
            text:{
              1 : "umLorem ipsum dolor sit amet consectetur adipisicing elit. Vel possimus consectetur dolorem voluptatem dolorum beatae dolore obcaecati quas hic officiis, velit cum, alias quam. Doloribus consectetur accusamus quia ratione ipsa1,",
              2 : "que2Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel possimus consectetur dolorem voluptatem dolorum beatae dolore obcaecati quas hic officiis, velit cum, alias quam. Doloribus consectetur accusamus quia ratione ipsa1,",
    
            },      
            icon: "credit-card",
          },
          {
            id: 2,
            showCard: false,
            title: "Informática",
            text:{
              1 : "00Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel possimus consectetur dolorem voluptatem dolorum beatae dolore obcaecati quas hic officiis, velit cum, alias quam. Doloribus consectetur accusamus quia ratione ipsa1,",
              2 : "2Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel possimus consectetur dolorem voluptatem dolorum beatae dolore obcaecati quas hic officiis, velit cum, alias quam. Doloribus consectetur accusamus quia ratione ipsa1,",
    
            },      
            icon: "credit-card",
          },
          {
            id: 3,
            showCard: false,
            title: "Raciocínio Lógico",
            text:{
              1 : "aasLorem ipsum dolor sit amet consectetur adipisicing elit. Vel possimus consectetur dolorem voluptatem dolorum beatae dolore obcaecati quas hic officiis, velit cum, alias quam. Doloribus consectetur accusamus quia ratione ipsa1,",
              2 : "as2Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel possimus consectetur dolorem voluptatem dolorum beatae dolore obcaecati quas hic officiis, velit cum, alias quam. Doloribus consectetur accusamus quia ratione ipsa1,",
    
            },  
            icon: "tv",
          },
          {
            id: 4,
            showCard: false,
            title: "Atualidades",
            text:{
              1 : "aasLorem ipsum dolor sit amet consectetur adipisicing elit. Vel possimus consectetur dolorem voluptatem dolorum beatae dolore obcaecati quas hic officiis, velit cum, alias quam. Doloribus consectetur accusamus quia ratione ipsa1,",
              2 : "as2Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel possimus consectetur dolorem voluptatem dolorum beatae dolore obcaecati quas hic officiis, velit cum, alias quam. Doloribus consectetur accusamus quia ratione ipsa1,",
    
            },  
            icon: "tv",
          },
          {
            id: 5,
            showCard: false,
            title: "Direito Administrativo",
            text:{
              1 : "aasLorem ipsum dolor sit amet consectetur adipisicing elit. Vel possimus consectetur dolorem voluptatem dolorum beatae dolore obcaecati quas hic officiis, velit cum, alias quam. Doloribus consectetur accusamus quia ratione ipsa1,",
              2 : "as2Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel possimus consectetur dolorem voluptatem dolorum beatae dolore obcaecati quas hic officiis, velit cum, alias quam. Doloribus consectetur accusamus quia ratione ipsa1,",
    
            },  
            icon: "tv",
          },
          {
            id: 6,
            showCard: false,
            title: "Direito Constitucional",
            text:{
              1 : "aasLorem ipsum dolor sit amet consectetur adipisicing elit. Vel possimus consectetur dolorem voluptatem dolorum beatae dolore obcaecati quas hic officiis, velit cum, alias quam. Doloribus consectetur accusamus quia ratione ipsa1,",
              2 : "as2Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel possimus consectetur dolorem voluptatem dolorum beatae dolore obcaecati quas hic officiis, velit cum, alias quam. Doloribus consectetur accusamus quia ratione ipsa1,",
    
            },  
            icon: "tv",
          },
          {
            id: 7,
            showCard: false,
            title: "Administração Pública",
            text:{
              1 : "aasLorem ipsum dolor sit amet consectetur adipisicing elit. Vel possimus consectetur dolorem voluptatem dolorum beatae dolore obcaecati quas hic officiis, velit cum, alias quam. Doloribus consectetur accusamus quia ratione ipsa1,",
              2 : "as2Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel possimus consectetur dolorem voluptatem dolorum beatae dolore obcaecati quas hic officiis, velit cum, alias quam. Doloribus consectetur accusamus quia ratione ipsa1,",
    
            },  
            icon: "tv",
          },
          {
            id: 8,
            showCard: false,
            title: "AFO",
            text:{
              1 : "aasLorem ipsum dolor sit amet consectetur adipisicing elit. Vel possimus consectetur dolorem voluptatem dolorum beatae dolore obcaecati quas hic officiis, velit cum, alias quam. Doloribus consectetur accusamus quia ratione ipsa1,",
              2 : "as2Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel possimus consectetur dolorem voluptatem dolorum beatae dolore obcaecati quas hic officiis, velit cum, alias quam. Doloribus consectetur accusamus quia ratione ipsa1,",
    
            },  
            icon: "tv",
          },
          {
            id: 9,
            showCard: false,
            title: "Gestão de Pessoas",
            text:{
              1 : "aasLorem ipsum dolor sit amet consectetur adipisicing elit. Vel possimus consectetur dolorem voluptatem dolorum beatae dolore obcaecati quas hic officiis, velit cum, alias quam. Doloribus consectetur accusamus quia ratione ipsa1,",
              2 : "as2Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel possimus consectetur dolorem voluptatem dolorum beatae dolore obcaecati quas hic officiis, velit cum, alias quam. Doloribus consectetur accusamus quia ratione ipsa1,",
    
            },  
            icon: "tv",
          },
          {
            id: 10,
            showCard: false,
            title: "Administração de Recursos Materiais",
            text:{
              1 : "aasLorem ipsum dolor sit amet consectetur adipisicing elit. Vel possimus consectetur dolorem voluptatem dolorum beatae dolore obcaecati quas hic officiis, velit cum, alias quam. Doloribus consectetur accusamus quia ratione ipsa1,",
              2 : "as2Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel possimus consectetur dolorem voluptatem dolorum beatae dolore obcaecati quas hic officiis, velit cum, alias quam. Doloribus consectetur accusamus quia ratione ipsa1,",
    
            },  
            icon: "tv",
          },
          {
            id: 11,
            showCard: false,
            title: "Arquivologia",
            text:{
              1 : "aasLorem ipsum dolor sit amet consectetur adipisicing elit. Vel possimus consectetur dolorem voluptatem dolorum beatae dolore obcaecati quas hic officiis, velit cum, alias quam. Doloribus consectetur accusamus quia ratione ipsa1,",
              2 : "as2Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel possimus consectetur dolorem voluptatem dolorum beatae dolore obcaecati quas hic officiis, velit cum, alias quam. Doloribus consectetur accusamus quia ratione ipsa1,",
    
            },  
            icon: "tv",
          },
          
          
        ],
      },
      {
        id: 4,
        img: "pc-ba(4).png",
        title: "Polícia Civil de São Paulo",
        subtitle: "Investigador/Escrivão",
        price: " 129,90",
        free: "399,00",
        vagas: "249",
        prova: "A definir",
        category: "Superior",
        salary: "De R$ 10439,00 Até R$ 11225,00",
        link: "https://go.hotmart.com/W89058755X?dp=1",
        cardModal: [
          {
            id: 1,
            showCard: false,
            title: "Língua Portuguesa .",
            text:{
              1 : "umLorem ipsum dolor sit amet consectetur adipisicing elit. Vel possimus consectetur dolorem voluptatem dolorum beatae dolore obcaecati quas hic officiis, velit cum, alias quam. Doloribus consectetur accusamus quia ratione ipsa1,",
              2 : "que2Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel possimus consectetur dolorem voluptatem dolorum beatae dolore obcaecati quas hic officiis, velit cum, alias quam. Doloribus consectetur accusamus quia ratione ipsa1,",
    
            },      
            icon: "credit-card",
          },
          {
            id: 2,
            showCard: false,
            title: "Raciocínio Lógico",
            text:{
              1 : "00Lorem ipsum dolor sit amet consectetur adipisicing elit5. Vel possimus consectetur dolorem voluptatem dolorum beatae dolore obcaecati quas hic officiis, velit cum, alias quam. Doloribus consectetur accusamus quia ratione ipsa1,",
              2 : "2Lorem ipsum dolor sit amet consectetur adipisicing elit6. Vel possimus consectetur dolorem voluptatem dolorum beatae dolore obcaecati quas hic officiis, velit cum, alias quam. Doloribus consectetur accusamus quia ratione ipsa1,",
    
            },      
            icon: "credit-card",
          },
          {
            id: 3,
            showCard: false,
            title: "Informática",
            text:{
              1 : "aasLorem ipsum dolor sit amet consectetur adipisicing elit. Vel possimus consectetur dolorem voluptatem dolorum beatae dolore obcaecati quas hic officiis, velit cum, alias quam. Doloribus consectetur accusamus quia ratione ipsa1,",
              2 : "as2Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel possimus consectetur dolorem voluptatem dolorum beatae dolore obcaecati quas hic officiis, velit cum, alias quam. Doloribus consectetur accusamus quia ratione ipsa1,",
    
            },  
            icon: "tv",
          },
          {
            id: 4,
            showCard: false,
            title: "Direito Constitucional",
            text:{
              1 : "00Lorem ipsum dolor sit amet consectetur adipisicing elit5. Vel possimus consectetur dolorem voluptatem dolorum beatae dolore obcaecati quas hic officiis, velit cum, alias quam. Doloribus consectetur accusamus quia ratione ipsa1,",
              2 : "2Lorem ipsum dolor sit amet consectetur adipisicing elit6. Vel possimus consectetur dolorem voluptatem dolorum beatae dolore obcaecati quas hic officiis, velit cum, alias quam. Doloribus consectetur accusamus quia ratione ipsa1,",
    
            },      
            icon: "credit-card",
          },
          {
            id: 5,
            showCard: false,
            title: "Direitos Humanos",
            text:{
              1 : "aasLorem ipsum dolor sit amet consectetur adipisicing elit. Vel possimus consectetur dolorem voluptatem dolorum beatae dolore obcaecati quas hic officiis, velit cum, alias quam. Doloribus consectetur accusamus quia ratione ipsa1,",
              2 : "as2Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel possimus consectetur dolorem voluptatem dolorum beatae dolore obcaecati quas hic officiis, velit cum, alias quam. Doloribus consectetur accusamus quia ratione ipsa1,",
    
            },  
            icon: "tv",
          },
          {
            id: 6,
            showCard: false,
            title: "Direito Administrativo",
            text:{
              1 : "00Lorem ipsum dolor sit amet consectetur adipisicing elit5. Vel possimus consectetur dolorem voluptatem dolorum beatae dolore obcaecati quas hic officiis, velit cum, alias quam. Doloribus consectetur accusamus quia ratione ipsa1,",
              2 : "2Lorem ipsum dolor sit amet consectetur adipisicing elit6. Vel possimus consectetur dolorem voluptatem dolorum beatae dolore obcaecati quas hic officiis, velit cum, alias quam. Doloribus consectetur accusamus quia ratione ipsa1,",
    
            },      
            icon: "credit-card",
          },
          {
            id: 7,
            showCard: false,
            title: "Criminologia",
            text:{
              1 : "aasLorem ipsum dolor sit amet consectetur adipisicing elit. Vel possimus consectetur dolorem voluptatem dolorum beatae dolore obcaecati quas hic officiis, velit cum, alias quam. Doloribus consectetur accusamus quia ratione ipsa1,",
              2 : "as2Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel possimus consectetur dolorem voluptatem dolorum beatae dolore obcaecati quas hic officiis, velit cum, alias quam. Doloribus consectetur accusamus quia ratione ipsa1,",
    
            },  
            icon: "tv",
          },
          {
            id: 8,
            showCard: false,
            title: "Direito Penal",
            text:{
              1 : "aasLorem ipsum dolor sit amet consectetur adipisicing elit. Vel possimus consectetur dolorem voluptatem dolorum beatae dolore obcaecati quas hic officiis, velit cum, alias quam. Doloribus consectetur accusamus quia ratione ipsa1,",
              2 : "as2Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel possimus consectetur dolorem voluptatem dolorum beatae dolore obcaecati quas hic officiis, velit cum, alias quam. Doloribus consectetur accusamus quia ratione ipsa1,",
    
            },  
            icon: "tv",
          },
          {
            id: 9,
            showCard: false,
            title: "Direito Processual Penal",
            text:{
              1 : "00Lorem ipsum dolor sit amet consectetur adipisicing elit5. Vel possimus consectetur dolorem voluptatem dolorum beatae dolore obcaecati quas hic officiis, velit cum, alias quam. Doloribus consectetur accusamus quia ratione ipsa1,",
              2 : "2Lorem ipsum dolor sit amet consectetur adipisicing elit6. Vel possimus consectetur dolorem voluptatem dolorum beatae dolore obcaecati quas hic officiis, velit cum, alias quam. Doloribus consectetur accusamus quia ratione ipsa1,",
    
            },      
            icon: "credit-card",
          },
          {
            id: 10,
            showCard: false,
            title: "Legislação Penal Especial",
            text:{
              1 : "aasLorem ipsum dolor sit amet consectetur adipisicing elit. Vel possimus consectetur dolorem voluptatem dolorum beatae dolore obcaecati quas hic officiis, velit cum, alias quam. Doloribus consectetur accusamus quia ratione ipsa1,",
              2 : "as2Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel possimus consectetur dolorem voluptatem dolorum beatae dolore obcaecati quas hic officiis, velit cum, alias quam. Doloribus consectetur accusamus quia ratione ipsa1,",
    
            },  
            icon: "tv",
          },
          {
            id: 10,
            showCard: false,
            title: " Material Bonus",
            text:{
              1 : "aasLorem ipsum dolor sit amet consectetur adipisicing elit. Vel possimus consectetur dolorem voluptatem dolorum beatae dolore obcaecati quas hic officiis, velit cum, alias quam. Doloribus consectetur accusamus quia ratione ipsa1,",
              2 : "as2Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel possimus consectetur dolorem voluptatem dolorum beatae dolore obcaecati quas hic officiis, velit cum, alias quam. Doloribus consectetur accusamus quia ratione ipsa1,",
    
            },  
            icon: "tv",
          },
        ],
      },
     
    ],

 

  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
