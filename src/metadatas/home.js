export default [
  {
    type: 'carousel',
    image_urls: [
      'https://global-uploads.webflow.com/58b05372820eae3152b7065a/59255ebeff1fae220896167b_reception.jpg',
      'https://global-uploads.webflow.com/58b05372820eae3152b7065a/592560566e5daf2bfe680e0a_coworking1-slider3.jpg',
      'https://global-uploads.webflow.com/58b05372820eae3152b7065a/5925608101df07424a7ce805_coworking1-slider4.jpg',
      'https://global-uploads.webflow.com/58b05372820eae3152b7065a/592560a501df07424a7ce80d_coworking1-slider2.jpg'
    ]
  },
  {
    type: 'title',
    title: 'Sightglass Cofee',
    starts_at: 'Sun, Sept 24, 7:00PM'
  },
  {
    type: 'action',
    actions: [
      {
        title: 'Call',
        type: 'call',
        value: '00000000'
      },
      {
        title: 'Website',
        type: 'website',
        value: 'https://www.betahaus.com'
      }
    ]
  },
  {
    type: 'map',
    address: '1234 Main Street',
    url: 'https://maps.googleapis.com/maps/api/staticmap?center=Brooklyn+Bridge,New+York,NY&zoom=13&size=600x300&maptype=roadmap&markers=color:blue%7Clabel:S%7C40.702147,-74.015794&markers=color:green%7Clabel:G%7C40.711614,-74.012318&markers=color:red%7Clabel:C%7C40.718217,-73.998284&key=AIzaSyDIJ9XX2ZvRKCJcFRrl-lRanEtFUow4piM&signature=pgcz8_2FdcdBqftd6BrlxesXTjA='
  },
  {
    type: 'more',
    title: 'More',
    action: ''
  }
]
