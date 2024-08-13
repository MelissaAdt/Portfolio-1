import projetImage1 from '../src/assets/projet1.webp';
import projetImage2 from '../src/assets/projet2.webp';
import projetImage3 from '../src/assets/projet3.webp';
import projetImage4 from '../src/assets/projet4.webp';
import projetImage5 from '../src/assets/projet5.webp';
import modalImage1 from '../src/assets/booki_ordi.webp';
import modalImage2 from '../src/assets/sophie_ordi.webp';
import modalImage3 from '../src/assets/nina_ordi.webp';
import modalImage4 from '../src/assets/kasa_mac.webp';
import modalImage5 from '../src/assets/monvieuxgrimoire_ordi.webp';
import resume1 from '../src/assets/Melissa_Andremont_CV.pdf';

const header = {

  homepage: 'MelissaAdt/Portfolio',
  title: 'MA.',
}

const about = {
  name: 'Mélissa',
  
}

const apropos = { 
  description: "Après avoir terminé la formation OpenClassrooms en développement web, je suis désormais spécialisée dans ce domaine. Cette formation m’a permis de maîtriser les technologies front-end. Je suis enthousiaste à l'idée d'appliquer ces compétences pour créer des projets web fonctionnels et esthétiques, tout en cherchant continuellement à apprendre et évoluer dans ce secteur dynamique.",
  social: {
    linkedin: 'https://www.linkedin.com/in/melissa-andremont-203647294/',
    github: 'https://github.com/MelissaAdt',
  },
  resume: resume1
}

const projets = [

  {
    name: 'Booki',
    description: "Page d'accueil d'une agence de voyage",
    stack: ['HTML', 'CSS'],
    sourceCode: 'https://github.com/MelissaAdt/P2',
    livePreview: 'https://melissaadt.github.io/P2/',
    image: projetImage1,
    modalImage: modalImage1,
    year: '2024',
    mission: `Projet réalisé dans le cadre de ma formation OpenClassrooms de développeuse front-end :
              - Intégration de contenu conformément à une maquette avec HTML et CSS.
              - Implémentation d'une interface responsive avec HTML et CSS.\n
              La problématique que j'ai rencontrée sur ce projet était pour faire les cartes en CSS, j'ai pu la surmonter en recherchant des ressources explicatives sur le sujet.
              `,
  
  },
  {
    name: 'Sophie Bluel',
    description:
      "Page web dynamique d'une architecte d'intérieur",
    stack: ['Javascript', 'HTML', 'CSS'],
    sourceCode: 'https://github.com/MelissaAdt/P3',
    image: projetImage2,
    modalImage: modalImage2,
    year: '2024',
    mission:`Projet réalisé dans le cadre de ma formation OpenClassrooms de développeuse front-end : 
                 - Récupération des données provenant du back-end de manière dynamique via fetch.
                  - Ajout de filtres pour séléctionner une catégorie.
                  - Formulaire d'authentification pour l'administrateur.
                  - Création d'une fenêtre modale pour ajouter ou supprimer des projets dynamiquement.\n
                  Les problématiques que j'ai rencontrées sur ce projet étaient la création des filtres, ainsi que les requêtes fetch, grâce à plusieurs ressources, j'ai pu mieux comprendre ces deux principes.
                  `,
 
  },
  {
    name: 'Nina Carducci',
    description: "Débogage et optimisation d'un site de photographe",
    stack: ['SEO', 'Accessibilité', 'Débug'],
    sourceCode: 'https://github.com/MelissaAdt/Projet-4',
    livePreview: 'https://melissaadt.github.io/Projet-4/',
    image: projetImage3,
    modalImage: modalImage3,
    year: '2024',
    mission:`Projet réalisé dans le cadre de ma formation OpenClassrooms de développeuse front-end :
                 - Débogage du site grâce aux Chrome Devtools.
                  - Optimisation des images du site pour améliorer la performance.
                  - Optimisation du code et de sa structure pour améliorer l'accessibilité et le SEO.\n
                  La problématique que j'ai rencontrée pour ce projet, était l'optimisation des images, j'ai pu la surmonter grâce à des ressources trouvées sur internet, ainsi que Lighthouse qui donnait quelques informations.
                  `,
  
  },
  {
    name: 'Kasa',
    description: 'Site de location immobilière',
    stack: ['React', 'SASS'],
    sourceCode: 'https://github.com/MelissaAdt/Projet-5',
    image: projetImage4,
    modalImage: modalImage4,
    year: '2024',
    mission: `Projet réalisé dans le cadre de ma formation OpenClassrooms de développeuse front-end : 
                 - Développement du front d’un site de location d’hébergement avec React.
                  - Création de composants React et gestion des états.
                  - Développement d'une interface web avec Sass.\n
                  La problématique que j'ai rencontrée concernait l'utilisation de Sass, où les styles entraient en conflit si les sélecteurs n'étaient pas bien structurés. En regardant de vidéos, et autres ressources j'ai pu mieux comprendre le fonctionnement de Sass et mieux structurer mon code.`,
    
  },
  {
    name: 'Mon vieux grimoire',
    description: "Back-end d'un site de notation de livre",
    stack: ['MongoDB', 'Mongoose', 'Node.js', 'Express.js'],
    sourceCode: 'https://github.com/MelissaAdt/Projet-6',
    image: projetImage5,
    modalImage: modalImage5,
    year: '2024',
    mission:`Projet réalisé dans le cadre de ma formation OpenClassrooms de développeuse front-end :
                 - Mise en place d'une API REST avec Node.js et MongoDB.
                  - Implémentation d'un système d'authentification (stockage des informations utilisateurs dans la base de données, implémentation du cryptage de mot de passe, création et envoides tokens au front-end pour authentifier les requêtes avec JWT).
                  - Mise en œuvre des opérations CRUD de manière sécurisée.
                  - Gestion des différentes fonctionnalités pour la notation des livres.\n
                  Etant mon premier projet back-end, j'ai dû être plus attentive pour bien comprendre les différentes fonctionnalités, notamment pour les controllers, grâce à des cours et d'autres ressources, j'ai pu bien comprendre leur fonctionnement. `,
   
  }
]

const compétences = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'React dev tools',
  'SASS',
  'Notions SEO',
  'MongoDB',
  'Mongoose',
  'Node.js',
  'Express.js'
]

const contact = {
  
  email: 'melissaamdt@gmail.com',
}

export { header, about, apropos, projets, compétences, contact }
