export const displayMap = (locations) => {
  mapboxgl.accessToken =
    'pk.eyJ1IjoianVtYW5peW96b3YiLCJhIjoiY2tiNTA1cjRiMGgzOTJ4cGR1MG5sYnh1bSJ9.F9hpIhYZuGrGuKPfZj5WXQ';

  var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/jumaniyozov/ckb50i72v20ly1io79mv3jb5y',
    scrollZoom: false,
  });

  const bounds = new mapboxgl.LngLatBounds();

  locations.forEach((loc) => {
    const el = document.createElement('div');
    el.className = 'marker';

    new mapboxgl.Marker({
      element: el,
      anchor: 'bottom',
    })
      .setLngLat(loc.coordinates)
      .addTo(map);

    new mapboxgl.Popup({
      offset: 30,
    })
      .setLngLat(loc.coordinates)
      .setHTML(`<p>Day ${loc.day}: ${loc.description}</p>`)
      .addTo(map);

    bounds.extend(loc.coordinates);
  });

  map.fitBounds(bounds, {
    padding: {
      top: 200,
      bottom: 150,
      right: 100,
      left: 100,
    },
  });
};
