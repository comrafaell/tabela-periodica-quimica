const elementos01 = [
        {numAtomico: 1, simbQuimico: 'H', nome: "Hidrogênio", pesoAtomico: '1.008', cor: 'bg-lime-500', imagem: 'src/assets/gold-not-background-.png'},
        {numAtomico: 3, simbQuimico: 'Li', nome: "Lítio", pesoAtomico: '6.94', cor: 'bg-amber-500', imagem: 'src/assets/gold-not-background-.png'},
        {numAtomico: 11, simbQuimico: 'Na', nome: "Sódio", pesoAtomico: '22.990', cor:'bg-amber-500', imagem:'src/assets/gold-not-background-.png'},
        {numAtomico: 19, simbQuimico: 'K', nome: "Potássio", pesoAtomico: '30.098', cor:'bg-amber-500', imagem:'src/assets/gold-not-background-.png'},
        {numAtomico: 37, simbQuimico: 'Rb', nome: "Rubídio", pesoAtomico: '5.468', cor:'bg-amber-500', imagem:'src/assets/gold-not-background-.png'},
        {numAtomico: 55, simbQuimico: 'Cs', nome: "Césio", pesoAtomico: '132.91', cor:'bg-amber-500', imagem:'src/assets/gold-not-background-.png'},
        {numAtomico: 87, simbQuimico: 'Fr', nome: "Frâncio", pesoAtomico: '[223]', cor:'bg-amber-500', imagem:'src/assets/gold-not-background-.png'},
        

        {numAtomico: 0, simbQuimico: 'cc3', nome: " ", pesoAtomico: ' ', cor: '', imagem: ''},
        {numAtomico: 4, simbQuimico: 'Be', nome: "Berílio", pesoAtomico: '9.0122', cor: 'bg-yellow-400', imagem: 'src/assets/gold-not-background-.png'},
        {numAtomico: 12, simbQuimico: 'Mg', nome: "Magnésio", pesoAtomico: '24.305', cor:'bg-yellow-400', imagem:'https://s3.static.brasilescola.uol.com.br/be/2022/03/magnesita.jpg'},
        {numAtomico: 20, simbQuimico: 'Ca', nome: "Cálcio", pesoAtomico: '40.078(4)', cor:'bg-yellow-400', imagem:'src/assets/gold-not-background-.png'},
        {numAtomico: 38, simbQuimico: 'Sr', nome: "Estrôncio", pesoAtomico: '87.62', cor:'bg-yellow-400', imagem:'src/assets/gold-not-background-.png'},
        {numAtomico: 56, simbQuimico: 'Ba', nome: "Bário", pesoAtomico: '137.33', cor:'bg-yellow-400', imagem:'src/assets/gold-not-background-.png'},
        {numAtomico: 88, simbQuimico: 'Ra', nome: "Rádio", pesoAtomico: '[226]', cor:'bg-yellow-400', imagem:'https://s1.static.brasilescola.uol.com.br/be/2022/03/1-elemento-radio.jpg'},


        {numAtomico: 0, simbQuimico: 'dd4', nome: " ", pesoAtomico: ' ', cor: '', imagem: ''}, 
        {numAtomico: 0, simbQuimico: 'ee5', nome: " ", pesoAtomico: ' ', cor: '', imagem: ''}, 
        {numAtomico: 0, simbQuimico: 'ff6', nome: " ", pesoAtomico: ' ', cor: '', imagem: ''},
        {numAtomico: 21, simbQuimico: 'Sc', nome: "Escândio", pesoAtomico: '44.956', cor:'bg-rose-400', imagem:'src/assets/gold-not-background-.png'}, 
        {numAtomico: 39, simbQuimico: 'Y', nome: "Ítrio", pesoAtomico: '88.906', cor:'bg-rose-400', imagem:'src/assets/gold-not-background-.png'},
        {numAtomico: 222, simbQuimico: 'aaza', nome: " ", pesoAtomico: ' ', cor: '', imagem: ''},
        {numAtomico: 333, simbQuimico: 'aaza', nome: " ", pesoAtomico: ' ', cor: '', imagem: ''},


        {numAtomico: 0, simbQuimico: 'gg7', nome: " ", pesoAtomico: ' ', cor: '', imagem: ''}, 
        {numAtomico: 0, simbQuimico: 'hh8', nome: " ", pesoAtomico: ' ', cor: '', imagem: ''}, 
        {numAtomico: 0, simbQuimico: 'ii9', nome: " ", pesoAtomico: ' ', cor: '', imagem: ''},
        {numAtomico: 22, simbQuimico: 'Ti', nome: "Titânio", pesoAtomico: '47.867', cor:'bg-rose-400', imagem:'data:image/jpeg;base64,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'},
        {numAtomico: 40, simbQuimico: 'Zr', nome: "Zircônio", pesoAtomico: '91.224(2)', cor:'bg-rose-400', imagem:'src/assets/gold-not-background-.png'},
        {numAtomico: 72, simbQuimico: 'Hf', nome: "Háfnio", pesoAtomico: '178.49(2)', cor:'bg-rose-400', imagem:'src/assets/gold-not-background-.png'},
        {numAtomico: 104, simbQuimico: 'Rf', nome: "Rutherfórdio", pesoAtomico: '[267]', cor:'bg-rose-400', imagem:'src/assets/gold-not-background-.png'},


        {numAtomico: 0, simbQuimico: 'jj10', nome: " ", pesoAtomico: ' ', cor: '', imagem: ''}, 
        {numAtomico: 0, simbQuimico: 'kk11', nome: " ", pesoAtomico: ' ', cor: '', imagem: ''}, 
        {numAtomico: 0, simbQuimico: 'll12', nome: " ", pesoAtomico: ' ', cor: '', imagem: ''},
        {numAtomico: 23, simbQuimico: 'V', nome: "Vanádio", pesoAtomico: '50.942', cor:'bg-rose-400', imagem:'src/assets/gold-not-background-.png'},
        {numAtomico: 41, simbQuimico: 'Nb', nome: "Nióbio", pesoAtomico: '92.906', cor:'bg-rose-400', imagem:'src/assets/gold-not-background-.png'},
        {numAtomico: 73, simbQuimico: 'Ta', nome: "Tântalo", pesoAtomico: '180.95', cor:'bg-rose-400', imagem:'src/assets/gold-not-background-.png'},
        {numAtomico: 105, simbQuimico: 'Db', nome: "Dúbnio", pesoAtomico: '[268]', cor:'bg-rose-400', imagem:'src/assets/gold-not-background-.png'},


        {numAtomico: 0, simbQuimico: 'mm13', nome: " ", pesoAtomico: ' ', cor: '', imagem: ''}, 
        {numAtomico: 0, simbQuimico: 'nn14', nome: " ", pesoAtomico: ' ', cor: '', imagem: ''}, 
        {numAtomico: 0, simbQuimico: 'oo15', nome: " ", pesoAtomico: ' ', cor: '', imagem: ''},
        {numAtomico: 24, simbQuimico: 'Cr', nome: "Crômio", pesoAtomico: '51.996', cor:'bg-rose-400', imagem:'src/assets/gold-not-background-.png'},
        {numAtomico: 42, simbQuimico: 'Mo', nome: "Molibdênio", pesoAtomico: '95,95', cor:'bg-rose-400', imagem:'src/assets/gold-not-background-.png'},
        {numAtomico: 74, simbQuimico: 'W', nome: "Tungstênio", pesoAtomico: '183.84', cor:'bg-rose-400', imagem:'src/assets/gold-not-background-.png'},
        {numAtomico: 106, simbQuimico: 'Sg', nome: "Seabórgio", pesoAtomico: '[269]', cor:'bg-rose-400', imagem:'src/assets/gold-not-background-.png'},


        {numAtomico: 0, simbQuimico: 'pp16', nome: " ", pesoAtomico: ' ', cor: '', imagem: ''}, 
        {numAtomico: 0, simbQuimico: 'aa1', nome: " ", pesoAtomico: ' ', cor: '', imagem: ''},
        {numAtomico: 0, simbQuimico: 'aaa', nome: " ", pesoAtomico: ' ', cor: '', imagem: ''},
        {numAtomico: 25, simbQuimico: 'Mn', nome: "Manganês", pesoAtomico: '54.938', cor:'bg-rose-400', imagem:'src/assets/gold-not-background-.png'},
        {numAtomico: 43, simbQuimico: 'Tc', nome: "Tecnécio", pesoAtomico: '[98]', cor:'bg-rose-400', imagem:'src/assets/gold-not-background-.png'},
        {numAtomico: 75, simbQuimico: 'Re', nome: "Rênio", pesoAtomico: '186.21', cor:'bg-rose-400', imagem:'src/assets/gold-not-background-.png'},
        {numAtomico: 107, simbQuimico: 'Bh', nome: "Bóhrio", pesoAtomico: '[270]', cor:'bg-rose-400', imagem:'src/assets/gold-not-background-.png'},


        {numAtomico: 0, simbQuimico: 'bbb', nome: " ", pesoAtomico: ' ', cor: '', imagem: ''}, 
        {numAtomico: 0, simbQuimico: 'ccc', nome: " ", pesoAtomico: ' ', cor: '', imagem: ''}, 
        {numAtomico: 0, simbQuimico: 'ddd', nome: " ", pesoAtomico: ' ', cor: '', imagem: ''},
        {numAtomico: 26, simbQuimico: 'Fe', nome: "Ferro", pesoAtomico: '55.854(2)', cor:'bg-rose-400', imagem:'https://s1.static.brasilescola.uol.com.br/be/2021/09/vergalhao-de-ferro.jpg'},
        {numAtomico: 44, simbQuimico: 'Ru', nome: "Rutênio", pesoAtomico: '101.07(2)', cor:'bg-rose-400', imagem:'src/assets/gold-not-background-.png'},
        {numAtomico: 76, simbQuimico: 'Os', nome: "Ósmio", pesoAtomico: '190.23(3)', cor:'bg-rose-400', imagem:'src/assets/gold-not-background-.png'},
        {numAtomico: 108, simbQuimico: 'Hs', nome: "Hássio", pesoAtomico: '[269]', cor:'bg-rose-400', imagem:'src/assets/gold-not-background-.png'},


        {numAtomico: 0, simbQuimico: 'eee', nome: " ", pesoAtomico: ' ', cor: '', imagem: ''}, 
        {numAtomico: 0, simbQuimico: 'fff', nome: " ", pesoAtomico: ' ', cor: '', imagem: ''}, 
        {numAtomico: 0, simbQuimico: 'ggg', nome: " ", pesoAtomico: ' ', cor: '', imagem: ''},
        {numAtomico: 27, simbQuimico: 'Co', nome: "Cobalto", pesoAtomico: '58.933', cor:'bg-rose-400', imagem:'src/assets/gold-not-background-.png'},
        {numAtomico: 45, simbQuimico: 'Rh', nome: "Ródio", pesoAtomico: '102.91', cor:'bg-rose-400', imagem:'src/assets/gold-not-background-.png'},
        {numAtomico: 77, simbQuimico: 'Ir', nome: "Irídio", pesoAtomico: '192.22', cor:'bg-rose-400', imagem:'src/assets/gold-not-background-.png'},
        {numAtomico: 109, simbQuimico: 'Mt', nome: "Meitnério", pesoAtomico: '[278]', cor:'bg-rose-400', imagem:'src/assets/gold-not-background-.png'},


        {numAtomico: 0, simbQuimico: 'hhh', nome: " ", pesoAtomico: ' ', cor: '', imagem: ''}, 
        {numAtomico: 0, simbQuimico: 'jjj', nome: " ", pesoAtomico: ' ', cor: '', imagem: ''}, 
        {numAtomico: 0, simbQuimico: 'kkk', nome: " ", pesoAtomico: ' ', cor: '', imagem: ''},
        {numAtomico: 28, simbQuimico: 'Ni', nome: "Níquel", pesoAtomico: '58.693', cor:'bg-rose-400', imagem:'https://static.manualdaquimica.com/2020/11/niquel-prateado.jpg'},
        {numAtomico: 46, simbQuimico: 'Pd', nome: "Paládio", pesoAtomico: '106.42', cor:'bg-rose-400', imagem:'src/assets/gold-not-background-.png'},
        {numAtomico: 78, simbQuimico: 'Pt', nome: "Platina", pesoAtomico: '195.08', cor:'bg-rose-400', imagem:'src/assets/gold-not-background-.png'},
        {numAtomico: 110, simbQuimico: 'Ds', nome: "Darmstádtio", pesoAtomico: '[281]', cor:'bg-rose-400', imagem:'src/assets/gold-not-background-.png'},


        {numAtomico: 0, simbQuimico: 'bb2', nome: " ", pesoAtomico: ' ', cor: '', imagem: ''}, 
        {numAtomico: 0, simbQuimico: 'aaaa', nome: " ", pesoAtomico: ' ', cor: '', imagem: ''}, 
        {numAtomico: 0, simbQuimico: 'bbbb', nome: " ", pesoAtomico: ' ', cor: '', imagem: ''},
        {numAtomico: 29, simbQuimico: 'Cu', nome: "Cobre", pesoAtomico: '63.546(3)', cor:'bg-rose-400', imagem:'https://banner2.cleanpng.com/20180519/epc/kisspng-copper-mineral-precious-metal-mining-5affe697677515.3811569515267201514238.jpg'},
        {numAtomico: 47, simbQuimico: 'Ag', nome: "Prata", pesoAtomico: '107.87', cor:'bg-rose-400', imagem:'src/assets/gold-not-background-.png'},
        {numAtomico: 79, simbQuimico: 'Au', nome: "Ouro", pesoAtomico: '196.97', cor:'bg-rose-400', imagem:'src/assets/gold-not-background-.png'},
        {numAtomico: 111, simbQuimico: 'Rg', nome: "Roentgênio", pesoAtomico: '[281]', cor:'bg-rose-400', imagem:'src/assets/gold-not-background-.png'},


        {numAtomico: 0, simbQuimico: 'cccc', nome: " ", pesoAtomico: ' ', cor: '', imagem: ''}, 
        {numAtomico: 0, simbQuimico: 'dddd', nome: " ", pesoAtomico: ' ', cor: '', imagem: ''}, 
        {numAtomico: 0, simbQuimico: 'eeee', nome: " ", pesoAtomico: ' ', cor: '', imagem: ''}, 
        {numAtomico: 30, simbQuimico: 'Zn', nome: "Zinco", pesoAtomico: '65.38(2)', cor:'bg-rose-400', imagem:'src/assets/gold-not-background-.png'},  
        {numAtomico: 48, simbQuimico: 'Cd', nome: "Cádmio", pesoAtomico: '112.41', cor:'bg-rose-400', imagem:'src/assets/gold-not-background-.png'},
        {numAtomico: 80, simbQuimico: 'Hg', nome: "Mercúrio", pesoAtomico: '200.59', cor:'bg-rose-400', imagem:'https://s5.static.brasilescola.uol.com.br/be/2023/01/mercurio-metalico.jpg'},
        {numAtomico: 112, simbQuimico: 'Cn', nome: "Copernício", pesoAtomico: '[285]', cor:'bg-rose-400', imagem:'src/assets/gold-not-background-.png'},

        
        {numAtomico: 0, simbQuimico: 'vvvv', nome: " ", pesoAtomico: ' ', cor: '', imagem: ''}, 
        {numAtomico: 5, simbQuimico: 'B', nome: "Boro", pesoAtomico: '10.81', cor: 'bg-teal-600', imagem: 'src/assets/gold-not-background-.png'},
        {numAtomico: 13, simbQuimico: 'Al', nome: "Alumínio", pesoAtomico: '26.982', cor:'bg-sky-500', imagem:'src/assets/gold-not-background-.png'}, 
        {numAtomico: 31, simbQuimico: 'Ga', nome: "Gálio", pesoAtomico: '69.723', cor:'bg-sky-500', imagem:'src/assets/gold-not-background-.png'},
        {numAtomico: 49, simbQuimico: 'In', nome: "Índio", pesoAtomico: '114.82', cor:'bg-sky-500', imagem:'src/assets/gold-not-background-.png'},
        {numAtomico: 81, simbQuimico: 'Tl', nome: "Tálio", pesoAtomico: '204.38', cor:'bg-sky-500', imagem:'src/assets/gold-not-background-.png'},    
        {numAtomico: 113, simbQuimico: 'Nh', nome: "Nihônio", pesoAtomico: '[286]', cor:'bg-sky-500', imagem:'src/assets/gold-not-background-.png'}, 


        {numAtomico: 0, simbQuimico: 'mmmm', nome: " ", pesoAtomico: ' ', cor: '', imagem: ''},
        {numAtomico: 6, simbQuimico: 'C', nome: "Carbono", pesoAtomico: '12.011', cor: 'bg-lime-500', imagem: 'src/assets/gold-not-background-.png'},
        {numAtomico: 14, simbQuimico: 'Si', nome: "Silício", pesoAtomico: '28.085', cor:'bg-teal-600', imagem:'src/assets/gold-not-background-.png'},
        {numAtomico: 32, simbQuimico: 'Ge', nome: "Germânio", pesoAtomico: '72.630(8).', cor:'bg-teal-600', imagem:'src/assets/gold-not-background-.png'},
        {numAtomico: 50, simbQuimico: 'Sn', nome: "Estanho", pesoAtomico: '118.71', cor:'bg-sky-500', imagem:'https://img.lojadomecanico.com.br/IMAGENS/19/193/129094/Estanho-em-fio-10-mm-60-x-40-com-500-g-VONDER-7893946052997-1.JPG'},
        {numAtomico: 82, simbQuimico: 'Pb', nome: "Chumbo", pesoAtomico: '207.2', cor:'bg-sky-500', imagem:'src/assets/gold-not-background-.png'},
        {numAtomico: 114, simbQuimico: 'Fl', nome: "Fleróvio", pesoAtomico: '[289]', cor:'bg-sky-500', imagem:'src/assets/gold-not-background-.png'},  


        {numAtomico: 0, simbQuimico: 'pppp', nome: " ", pesoAtomico: ' ', cor: '', imagem: ''}, 
        {numAtomico: 7, simbQuimico: 'N', nome: "Nitrogênio", pesoAtomico: '14.007', cor: 'bg-lime-500', imagem: 'src/assets/gold-not-background-.png'},
        {numAtomico: 15, simbQuimico: 'P', nome: "Fósforo", pesoAtomico: '30.974', cor:'bg-lime-500', imagem:'src/assets/gold-not-background-.png'}, 
        {numAtomico: 33, simbQuimico: 'As', nome: "Arsênio", pesoAtomico: '74.922', cor:'bg-teal-600', imagem:'src/assets/gold-not-background-.png'},
        {numAtomico: 51, simbQuimico: 'Sb', nome: "Antimônio", pesoAtomico: '121.76', cor:'bg-teal-600', imagem:'src/assets/gold-not-background-.png'},
        {numAtomico: 83, simbQuimico: 'Bi', nome: "Bismuto", pesoAtomico: '208.98', cor:'bg-sky-500', imagem:'src/assets/gold-not-background-.png'},
        {numAtomico: 115, simbQuimico: 'Mc', nome: "Moscóvio", pesoAtomico: '[288]', cor:'bg-sky-500', imagem:'src/assets/gold-not-background-.png'},


        {numAtomico: 0, simbQuimico: 'wwww', nome: " ", pesoAtomico: ' ', cor: '', imagem: ''}, 
        {numAtomico: 8, simbQuimico: 'O', nome: "Oxigênio", pesoAtomico: '15.999', cor: 'bg-lime-500', imagem: 'src/assets/gold-not-background-.png'},
        {numAtomico: 16, simbQuimico: 'S', nome: "Enxofre", pesoAtomico: '32.06', cor:'bg-lime-500', imagem:'src/assets/gold-not-background-.png'},
        {numAtomico: 34, simbQuimico: 'Se', nome: "Selênio", pesoAtomico: '78.971(8)', cor:'bg-lime-500', imagem:'src/assets/gold-not-background-.png'},
        {numAtomico: 52, simbQuimico: 'Te', nome: "Telúrio", pesoAtomico: '127.60(3)', cor:'bg-teal-600', imagem:'src/assets/gold-not-background-.png'},
        {numAtomico: 84, simbQuimico: 'Po', nome: "Polônio", pesoAtomico: '[209]', cor:'bg-teal-600', imagem:'src/assets/gold-not-background-.png'},
        {numAtomico: 116, simbQuimico: 'Lv', nome: "Livermório", pesoAtomico: '[293]', cor:'bg-sky-500', imagem:'src/assets/gold-not-background-.png'},

        
        {numAtomico: 0, simbQuimico: 'qqqq', nome: " ", pesoAtomico: ' ', cor: '', imagem: ''},
        {numAtomico: 9, simbQuimico: 'F', nome: "Flúor", pesoAtomico: '18.998', cor: 'bg-cyan-500', imagem: 'src/assets/gold-not-background-.png'},
        {numAtomico: 17, simbQuimico: 'Cl', nome: "Cloro", pesoAtomico: '35,45', cor:'bg-cyan-500', imagem:'https://s4.static.brasilescola.uol.com.br/be/2022/07/cloro-desinfeccao.jpg'}, 
        {numAtomico: 35, simbQuimico: 'Br', nome: "Bromo", pesoAtomico: '79.904', cor:'bg-cyan-500', imagem:'src/assets/gold-not-background-.png'},
        {numAtomico: 53, simbQuimico: 'I', nome: "Iodo", pesoAtomico: '126.90', cor:'bg-cyan-500', imagem:'src/assets/gold-not-background-.png'},
        {numAtomico: 85, simbQuimico: 'At', nome: "Astato", pesoAtomico: '[210]', cor:'bg-cyan-500', imagem:'src/assets/gold-not-background-.png'},
        {numAtomico: 117, simbQuimico: 'Ts', nome: "Tenessino", pesoAtomico: '[294]', cor:'bg-cyan-500', imagem:'src/assets/gold-not-background-.png'},


        {numAtomico: 2, simbQuimico: 'He', nome: "Hélio", pesoAtomico: '4.0026', cor: 'bg-blue-500', imagem: 'src/assets/gold-not-background-.png'},
        {numAtomico: 10, simbQuimico: 'Ne', nome: "Neônio", pesoAtomico: '20.180', cor: 'bg-blue-500', imagem: 'src/assets/gold-not-background-.png'},          
        {numAtomico: 18, simbQuimico: 'Ar', nome: "Argônio", pesoAtomico: '39.948', cor:'bg-blue-500', imagem:'src/assets/gold-not-background-.png'}, 
        {numAtomico: 36, simbQuimico: 'Kr', nome: "Criptônio", pesoAtomico: '83.798(2)', cor:'bg-blue-500', imagem:'src/assets/gold-not-background-.png'}, 
        {numAtomico: 54, simbQuimico: 'Xe', nome: "Xenônio", pesoAtomico: '131.29', cor:'bg-blue-500', imagem:'src/assets/gold-not-background-.png'},
        {numAtomico: 86, simbQuimico: 'Rn', nome: "Radônio", pesoAtomico: '[222]', cor:'bg-blue-500', imagem:'src/assets/gold-not-background-.png'},
        {numAtomico: 118, simbQuimico: 'Og', nome: "Organessônio", pesoAtomico: '[294]', cor:'bg-blue-500', imagem:'src/assets/gold-not-background-.png'},
] 

const elementos02 = [

        {numAtomico: 0, simbQuimico: 'aaza', nome: " ", pesoAtomico: ' ', cor: '', imagem: ''}, 
        {numAtomico: 0, simbQuimico: 'aaza', nome: " ", pesoAtomico: ' ', cor: '', imagem: ''},

        {numAtomico: 0, simbQuimico: 'aaza', nome: " ", pesoAtomico: ' ', cor: '', imagem: ''},
        {numAtomico: 0, simbQuimico: 'aaza', nome: " ", pesoAtomico: ' ', cor: '', imagem: ''},

        {numAtomico: 0, simbQuimico: 'aaza', nome: " ", pesoAtomico: ' ', cor: '', imagem: ''}, 
        {numAtomico: 0, simbQuimico: 'aaza', nome: " ", pesoAtomico: ' ', cor: '', imagem: ''},
        
        
       

        {numAtomico: 57, simbQuimico: 'La', nome: "Lantânio", pesoAtomico: '138.91', cor:'bg-cyan-400', imagem:'src/assets/gold-not-background-.png'},
        {numAtomico: 89, simbQuimico: 'Ac', nome: "Actínio", pesoAtomico: '[227]', cor:'bg-pink-400', imagem:'src/assets/gold-not-background-.png'}, 
        
        {numAtomico: 58, simbQuimico: 'Ce', nome: "Cério", pesoAtomico: '140.12', cor:'bg-cyan-400', imagem:'src/assets/gold-not-background-.png'},
        {numAtomico: 90, simbQuimico: 'Th', nome: "Tório", pesoAtomico: '232.04', cor:'bg-pink-400', imagem:'src/assets/gold-not-background-.png'},

        {numAtomico: 59, simbQuimico: 'Pr', nome: "Praseodímio", pesoAtomico: '140.91', cor:'bg-cyan-400', imagem:'src/assets/gold-not-background-.png'},
        {numAtomico: 91, simbQuimico: 'Pa', nome: "Protactínio", pesoAtomico: '231.04', cor:'bg-pink-400', imagem:'src/assets/gold-not-background-.png'},

        {numAtomico: 60, simbQuimico: 'Nd', nome: "Neodímio", pesoAtomico: '144.24', cor:'bg-cyan-400', imagem:'src/assets/gold-not-background-.png'},
        {numAtomico: 92, simbQuimico: 'U', nome: "Urânio", pesoAtomico: '238.03', cor:'bg-pink-400', imagem:'src/assets/gold-not-background-.png'},

        {numAtomico: 61, simbQuimico: 'Pm', nome: "Promécio", pesoAtomico: '[145]', cor:'bg-cyan-400', imagem:'src/assets/gold-not-background-.png'},
        {numAtomico: 93, simbQuimico: 'Np', nome: "Netúnio", pesoAtomico: '[237]', cor:'bg-pink-400', imagem:'src/assets/gold-not-background-.png'},

        {numAtomico: 62, simbQuimico: 'Sm', nome: "Samário", pesoAtomico: '150.36(2)', cor:'bg-cyan-400', imagem:'src/assets/gold-not-background-.png'},
        {numAtomico: 94, simbQuimico: 'Pu', nome: "Plutônio", pesoAtomico: '[244]', cor:'bg-pink-400', imagem:'src/assets/gold-not-background-.png'},

        {numAtomico: 63, simbQuimico: 'Eu', nome: "Európio", pesoAtomico: '151.96', cor:'bg-cyan-400', imagem:'src/assets/gold-not-background-.png'},
        {numAtomico: 95, simbQuimico: 'Am', nome: "Amerício", pesoAtomico: '[243]', cor:'bg-pink-400', imagem:'src/assets/gold-not-background-.png'},

        {numAtomico: 64, simbQuimico: 'Gd', nome: "Gadolínio", pesoAtomico: '157.25(3)', cor:'bg-cyan-400', imagem:'src/assets/gold-not-background-.png'},
        {numAtomico: 96, simbQuimico: 'Cm', nome: "Cúrio", pesoAtomico: '[247]', cor:'bg-pink-400', imagem:'src/assets/gold-not-background-.png'},

        {numAtomico: 65, simbQuimico: 'Tb', nome: "Térbio", pesoAtomico: '158.93', cor:'bg-cyan-400', imagem:'src/assets/gold-not-background-.png'},
        {numAtomico: 97, simbQuimico: 'Bk', nome: "Berquélio", pesoAtomico: '[247]', cor:'bg-pink-400', imagem:'src/assets/gold-not-background-.png'},

        {numAtomico: 66, simbQuimico: 'Dy', nome: "Disprósio", pesoAtomico: '162.50', cor:'bg-cyan-400', imagem:'src/assets/gold-not-background-.png'},
        {numAtomico: 98, simbQuimico: 'Cf', nome: "Califórnio", pesoAtomico: '[251]', cor:'bg-pink-400', imagem:'src/assets/gold-not-background-.png'},

        {numAtomico: 67, simbQuimico: 'Ho', nome: "Hólmio", pesoAtomico: '164.93', cor:'bg-cyan-400', imagem:'src/assets/gold-not-background-.png'},
        {numAtomico: 99, simbQuimico: 'Es', nome: "Einstênio", pesoAtomico: '[252]', cor:'bg-pink-400', imagem:'src/assets/gold-not-background-.png'},

        {numAtomico: 68, simbQuimico: 'Er', nome: "Érbio", pesoAtomico: '167.26', cor:'bg-cyan-400', imagem:'src/assets/gold-not-background-.png'},
        {numAtomico: 100, simbQuimico: 'Fm', nome: "Férmio", pesoAtomico: '[257]', cor:'bg-pink-400', imagem:'src/assets/gold-not-background-.png'},

        {numAtomico: 69, simbQuimico: 'Tm', nome: "Túlio", pesoAtomico: '168.93', cor:'bg-cyan-400', imagem:'src/assets/gold-not-background-.png'},
        {numAtomico: 101, simbQuimico: 'Md', nome: "Mendelévio", pesoAtomico: '[258]', cor:'bg-pink-400', imagem:'src/assets/gold-not-background-.png'},

        {numAtomico: 70, simbQuimico: 'Yb', nome: "Itérbio", pesoAtomico: '173.05', cor:'bg-cyan-400', imagem:'src/assets/gold-not-background-.png'},
        {numAtomico: 102, simbQuimico: 'No', nome: "Nobélio", pesoAtomico: '[259]', cor:'bg-pink-400', imagem:'src/assets/gold-not-background-.png'},

        {numAtomico: 71, simbQuimico: 'Lu', nome: "Lutécio", pesoAtomico: '174.97', cor:'bg-cyan-400', imagem:'src/assets/gold-not-background-.png'},
        {numAtomico: 103, simbQuimico: 'Lr', nome: "Laurêncio", pesoAtomico: '[262]', cor:'bg-pink-400', imagem:'src/assets/gold-not-background-.png'},
        
]



export const getElementos1 = () => elementos01.map((elemento1) => elemento1)
export const getElementos2 = () => elementos02.map((elemento2) => elemento2)