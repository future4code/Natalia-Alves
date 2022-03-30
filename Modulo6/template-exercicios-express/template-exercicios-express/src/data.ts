type Pirate = {
   id:number;
   name:string;
   phone:number;
   email:string;
   website:string;
   post: Posts []
};

type Posts = {
   id: number;
   title: string;
   body: string;
   userId: number
}

export const pirates: Pirate[] = [
   {
      id: 1,
      name: "Luffy",
      phone: 258963,
      email: "nika@onemail.com",
      website: "www.gomugomu.no.pistol",
      post: [
         {
         id: 1.1,
         title: "ababuble",
         body: "bledeblabluble",
         userId: 1
         },
         {
         id: 1.2,
         title: "ababubleble",
         body: "bledeblablubleblauble",
         userId: 1
         }
            
      ]
   },
   {
      id: 2,
      name: "Brooke",
      phone: 741258,
      email: "yohoho@onemail.com",
      website: "www.mayisee.your.underwear",
      post: [
         {
         id: 2.1,
         title: "ababuble",
         body: "bledeblabluble",
         userId: 2
         },
         {
         id: 2.2,
         title: "ababubleble",
         body: "bledeblablubleblauble",
         userId: 2
         }
            
      ]
   },
   {
      id: 3,
      name: "Franky",
      phone: 528645,
      email: "super@onemail.com",
      website: "www.coupdeboo.furanky.au",
      post: [
         {
         id: 3.1,
         title: "ababuble",
         body: "bledeblabluble",
         userId: 3
         },
         {
         id: 3.2,
         title: "ababubleble",
         body: "bledeblablubleblauble",
         userId: 3
         }
            
      ]
   },

];



// export const users = [
//   {
//      id: 'tayanne-novais-gebru',
//      playlists: [
//         {
//            id: '28e07ef5-4c6f-4478-9998-1fae4c6d4745',
//            name: 'mpb',
//            tracks: [
//               {
//                  id: '8b4215f1-950b-4c06-bfd6-80c2f8d1bb19',
//                  name: 'Oração',
//                  artist: 'Linn da Quebrada',
//                  url: 'https://www.youtube.com/watch?v=y5rY2N1XuLI',
//               },
//               {
//                  id: '8b4215f1-950b-4c06-bfd6-80c2f8d1bc49',
//                  name: 'Mulher do Fim do Mundo',
//                  artist: 'Elza Soares',
//                  url: 'https://www.youtube.com/watch?v=6SWIwW9mg8s',
//               },
//            ],
//         },
//         {
//            id: '28e07ef5-4c6f-4478-9998-1fae4c6d4543',
//            name: 'Rock',
//            tracks: [
//               {
//                  id: '8b4215f1-950b-4c06-bfd6-80c2f8d1cc08',
//                  name: 'Céu Azul',
//                  artist: 'Charlie Brown Jr.',
//                  url: 'https://www.youtube.com/watch?v=0dLX40UMUKo',
//               },
//               {
//                  id: '8b4215f1-950b-4c06-bfd6-80c2f8d1bc75',
//                  name: 'By The Way',
//                  artist: 'Red Hot Chili Peppers',
//                  url: 'https://www.youtube.com/watch?v=YXdOAUKCc0k',
//               },
//            ],
//         },
//      ],
//   },
// ];
