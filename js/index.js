// JavaScript goes here
const navBar = document.querySelector('nav');
const menu = document.querySelector('.menu');
const cancel = document.querySelector('.cancel');

menu.addEventListener('click', () => {
  menu.classList.toggle('hidden');
  navBar.classList.toggle('hidden');
});

cancel.addEventListener('click', () => {
  navBar.classList.toggle('hidden');
  menu.classList.toggle('hidden');
});

// Dynamic Feature Section

const feature = [
  {
    name: 'Dixon Afred',
    title: 'Director of Development IITA',
    description: 'Alfred Gilbert Dixon is the Director of the Development and Delivery Office. Alfred served as the Director General of the Sierra Leone Agricultural Research Institute (SLARI), Freetown, Sierra Leone, after leaving IITA in 2008.',
    speakerImage: '../images/Dixon-Alfred-2.jpg',
    alt: 'Dixon',
  },

  {
    name: 'Abebe Menkir ',
    title: 'Maize Breeder-Geneticist IITA',
    description: 'Abebe Menkir holds BSc-in Plant Science, MSc and PhD in Plant Breeding from Addis Ababa University (Ethiopia), University of Manitoba (Canada), and Kansas State University (USA), respectively. ',
    speakerImage: '../images/Abebe-Menkir.jpg',
    alt: 'Abebe',
  },
  {
    name: 'Richard Keith Downey',
    title: 'Canadian Agricultural Scientist',
    description: 'Keith Downey, known as the “Father of CANOLA,” is a plant breeder who was largely responsible for transforming rapeseed into canola. This crop, first grown on the PRAIRIES during WORLD WAR II for industrial oil, now is a major VEGETABLE oil crop, ',
    speakerImage: '../images/Richard-Keith-Downey.jpeg',
    alt: 'Richard',
  },
  {
    name: 'Agbabiaka Abdulquadri',
    title: 'CEO JustAgric',
    description: 'As a young, agriculturist, I provide farmers and aspiring farmers basic guides towards achieving profitable farming practises through my blog, justagric.com.',
    speakerImage: '../images/Agbabiaka.jpeg',
    alt: 'Agbabiaka',
  },
  {
    name: 'John Derera',
    title: 'Head of Breeding IITA',
    description: 'John Derera, a Zimbabwean, is currently the Head of Breeding in IITA. He is a specialist in Maize Breeding, Quantitative & Biometrical Genetics and R&D.',
    speakerImage: '../images/John-Derera.jpg',
    alt: 'Derera',
  },
  {
    name: 'Monty Jones',
    title: 'Agricultural & Nutritional Scientist',
    description: 'He began his professional research career at the National Rice Research Station at Rokupr in Sierra Leone in 1975 where he pioneered research in rice breeding and rice varietal improvement program',
    speakerImage: '../images/monty_jones.jpg',
    alt: 'Monty',
  },
];

const cardWrapper = document.querySelector('.card-wrapper');

feature.forEach((speaker, index) => {
  const speakersCards = document.createElement('div');
  speakersCards.classList.add('test');
  const featureContent = `<div id="card${index + 1}">
          <div class="dot-photo">
            <img src="./images/rectdot.png" alt="" class="dot">
            <img src="./images/${speaker.speakerImage}" alt="${speaker.alt}" class="speaker-img">
          </div>
          <div class="speaker-details">
            <h4 class="speaker-name">${speaker.name}</h4>
            <p class="speaker-title"><em>${speaker.title}</em></p>
            <div class="speaker-line"></div>
            <p class="speaker-text">${speaker.description}</p>
          </div>
        </div>
        </div>
        </div>`;

  speakersCards.innerHTML = featureContent;
  cardWrapper.appendChild(speakersCards);
});
