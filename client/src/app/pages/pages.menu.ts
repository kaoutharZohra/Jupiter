export const PAGES_MENU = [
  {
    path: 'pages',
    children: [
      {
        path: 'Tests',
        data: {
          menu: {
            title: 'Tests',
            icon: 'ion-play',
            selected: true,
            expanded: false,
            order: 0
          }
        }
      },
      {
        path: 'Ressources',
        data: {
          menu: {
            title: 'Ressources',
            icon: 'ion-filing',
            selected: false,
            expanded: false,
            order: 100,
          }
        }
      },   {
      path: 'Methodes',
  data: {
  menu: {
    title: 'Méthodes',
      icon: 'ion-document-text',
      selected: false,
      expanded: false,
      order: 0
  }
}
}, {
        path: 'Results',
        data: {
          menu: {
            title: 'Résultats',
            icon: 'ion-stats-bars',
            selected: false,
            expanded: false,
            order: 0
          }
        }
      }, {
        path: 'Logs',
        data: {
          menu: {
            title: 'Historiques',
            icon: 'ion-clock',
            selected: false,
            expanded: false,
            order: 0
          }
        }
      },
    ]
  }
];
