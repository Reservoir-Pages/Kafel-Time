// Yandex map
// Инициализация карты
if (document.getElementById('map')) {
  ymaps.ready(init);
    function init() {
      var myMap = new ymaps.Map("map", {
        center: [50.00, 90.00],
        zoom: 3
      });
      // Создание точки главного оффиса
      var geoPointOffice = new ymaps.Placemark([59.830341, 30.512006], {}, {
        preset: 'islands#redStarCircleIcon',
      });
      // Добавление точки главного офиса на карту
      myMap.geoObjects.add(geoPointOffice);
      // Добавление и создание точки на карте
      myMap.geoObjects
        .add(new ymaps.Placemark([55.755864, 37.617698], {}, {
          preset: 'islands#blueDeliveryCircleIcon',
        }))
        .add(new ymaps.Placemark([55.796127, 49.106414], {}, {
          preset: 'islands#blueDeliveryCircleIcon',
        }))
        .add(new ymaps.Placemark([54.735152, 55.958736], {}, {
          preset: 'islands#blueDeliveryCircleIcon',
        }))
        .add(new ymaps.Placemark([58.010455, 56.229443], {}, {
          preset: 'islands#blueDeliveryCircleIcon',
        }))
        .add(new ymaps.Placemark([43.115542, 131.885494], {}, {
          preset: 'islands#blueDeliveryCircleIcon',
        }));
        // Отключение элементов управления Яндекса
        // myMap.controls.remove('zoomControl');
        myMap.controls.remove('geolocationControl');
        myMap.controls.remove('searchControl');
        myMap.controls.remove('trafficControl');
        myMap.controls.remove('typeSelector');
        myMap.controls.remove('fullscreenControl');
        myMap.controls.remove('rulerControl');
        // Отключение скрола колесом мыши
        myMap.behaviors.disable('scrollZoom');
        // Центрирование и приближение маркера
        myMap.geoObjects.events.add('click', function (e) {
          var placemark = e.get('target');
          myMap.panTo([placemark.geometry.getCoordinates()], {
            delay: 0,
            flying: true,
        }).then(function() {
            myMap.setZoom(17);
        });
        });
    }
  }
