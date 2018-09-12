/*-------------------------------------------------------------------
|  SETTINGS
*-------------------------------------------------------------------*/

var debug = false;
var distanceMatrix = false;
var activeRapids = [];
mapboxgl.accessToken = 'pk.eyJ1IjoiYmVuamFtaW5yb3NlbGwiLCJhIjoiY2lxcHFwc3ltMDJqdWdzamZpdTFsemp2YiJ9.dGE3qe8fy-GbI6RSRPZnTg';

/*-------------------------------------------------------------------
|  DATA
|  
|  This can be eventually replaced by an API
*-------------------------------------------------------------------*/

// GeoJSON object to hold our measurement features
if (distanceMatrix) {
    var geojson = {
        "type": "FeatureCollection",
        "features": []
    };

    var geojsonSource = {
        "type": "geojson",
        "data": geojson
    };
}

var videoCoordinates = [
    [-71.35580161612262, 47.143516318026 ], 
    [-71.35411079333707, 47.14407432136596 ], 
    [-71.35364805337296, 47.143475498559496 ], 
    [-71.3552988567141, 47.142898774961424 ]
];

var portages = {
    "type": "geojson",
    "data": {
      "type": "FeatureCollection",
      "features": [{
        "type": "Feature",
        "properties": {
          "title" : "Portage  - 130m",
        },
        "geometry": {
          "type": "LineString",
            "coordinates": [
              [ -71.45917848807323, 47.31406301850163 ],
              [ -71.45934916662863, 47.314049357524766 ],
              [ -71.45945702598777, 47.313997124326846 ],
              [ -71.45949613983039, 47.313940873138876 ],
              [ -71.45974238934778, 47.313870667244345 ],
              [ -71.45997253057662, 47.3138329596072 ],
              [ -71.46012595805679, 47.31374974265543 ],
              [ -71.46013171159325, 47.313715935730386 ]
            ]
          }
        }, {
        "type": "Feature",
        "properties": {
          "title" : "Portage  - 80m",
        },
        "geometry": {
          "type": "LineString",
          "coordinates": [
            [-71.45765442675655, 47.3176175278509 ],
            [-71.45757183442073, 47.31742777642444 ],
            [-71.45736076513982, 47.31719136387741 ],
            [-71.4573653536007, 47.31697361452444 ],
            [-71.45742959208295, 47.31678386078565 ],
            [-71.45754889211565, 47.316650099538066 ],
            [-71.45761771906892, 47.31659099562606 ],
            [-71.45757642290104, 47.31641990497886 ]
          ]
        },
      }, {
        "type": "Feature",
        "properties": {
          "title" : "Portage  - 422m",
        },
        "geometry": {
          "type": "LineString",
          "coordinates": [
            [-71.45994564093218, 47.31234341992655 ],
            [-71.46018167533163, 47.31221612188017 ],
            [-71.46034797228245, 47.312019718581325 ],
            [-71.46031578577777, 47.31193606510365 ],
            [-71.46036942995622, 47.31172147514903 ],
            [-71.46051426924517, 47.31144141575126 ],
            [-71.46058400668191, 47.31128138114914 ],
            [-71.46062692201752, 47.311077700041125 ],
            [-71.46074493921725, 47.31083400910748 ],
            [-71.46075030363262, 47.310535758959475 ],
            [-71.46070202386966, 47.31039390770107 ],
            [-71.46069665945421, 47.31023750715286 ],
            [-71.46054109128968, 47.31001563575532 ],
            [-71.46028896364382, 47.30976102815009 ],
            [-71.46014412435485, 47.309571890271 ],
            [-71.46000464949327, 47.309590076633725 ],
            [-71.45985444578884, 47.30950641931031 ],
            [-71.45963450464764, 47.309451860117065 ],
            [-71.45947893652777, 47.30936092800326 ],
            [-71.45923217329737, 47.30929545678117 ],
            [-71.45877083334126, 47.309284544900265 ]
          ]
        },
      }, {
        "type": "Feature",
        "properties": {
          "title" : "Portage  - 168m",
        },
        "geometry": {
          "type": "LineString",
          "coordinates": [
            [-71.4586405060956, 47.30734245800082 ],
            [-71.45894627791994, 47.30721878535056 ],
            [-71.45920645220089, 47.30694052081935 ],
            [-71.45927082521027, 47.30676228525914 ],
            [-71.45930301172686, 47.30661860512771 ]
          ]
        },
      }, {
        "type": "Feature",
        "properties": {
          "title" : "Portage  - 400m",
        },
        "geometry": {
          "type": "LineString",
          "coordinates": [
            [-71.45897434849788, 47.30421618774173 ], 
            [-71.45906026629328, 47.304067621127615 ], 
            [-71.45895931288327, 47.3038098133687 ], 
            [-71.45889487454764, 47.303532467313374 ], 
            [-71.45869352367104, 47.30313369175599 ], 
            [-71.45854688830717, 47.302692711677025 ], 
            [-71.45861064279875, 47.30225172794863 ], 
            [-71.45857876553707, 47.30188423867668 ], 
            [-71.45769257817282, 47.30163780327206 ], 
            [-71.45708053512327, 47.30146054201623 ], 
            [-71.45634098309966, 47.30133948520316 ], 
            [-71.45592020349739, 47.301287603629675 ], 
            [-71.45537829037386, 47.301067106365 ], 
            [-71.45481087544728, 47.300600167953064 ], 
            [-71.45441559763795, 47.300280226285736 ], 
            [-71.45380993003204, 47.29998190055031 ] 
          ]
        },
      }, {
        "type": "Feature",
        "properties": {
          "title" : "Portage  - 172m",
        },
        "geometry": {
          "type": "LineString",
          "coordinates": [
            [-71.42529668922796, 47.25710925576834 ], 
            [-71.42544074790945, 47.25688782592022 ], 
            [-71.42553819936941, 47.25650247826789 ], 
            [-71.42549159215395, 47.25631267913758 ], 
            [-71.4253348224098, 47.25612863084609 ], 
            [-71.42508907524544, 47.25599059420972 ], 
            [-71.42495772762658, 47.25592157575457 ] 
          ]
        },
      }, {
        "type": "Feature",
        "properties": {
          "title" : "Portage  - 66m",
        },
        "geometry": {
          "type": "LineString",
          "coordinates": [
            [-71.42230257701887, 47.2492020029961 ], 
            [-71.42238572549705, 47.24902539355216 ], 
            [-71.42228375605208, 47.24885615919615 ], 
            [-71.42217110327395, 47.248664982745424 ], 
            [-71.42203699282453, 47.248604898574456 ]
          ]
        },
      }, {
        "type": "Feature",
        "properties": {
          "title" : "Portage  - 270m",
        },
        "geometry": {
          "type": "LineString",
          "coordinates": [
            [-71.41032889968862, 47.228483259235816 ], 
            [-71.4102217075649, 47.22818547438868 ], 
            [-71.40980268382197, 47.22770239763807 ], 
            [-71.40941289429263, 47.22730534495892 ], 
            [-71.40901336002541, 47.22686858357801 ], 
            [-71.40851637837241, 47.22669652507233 ]
          ]
        },
      }, {
        "type": "Feature",
        "properties": {
          "title" : "Portage  - 139m",
        },
        "geometry": {
          "type": "LineString",
          "coordinates": [
            [-71.40674235706952, 47.222230035744445 ], 
            [-71.4068228233407, 47.22207337448077 ], 
            [-71.40661897547727, 47.22175458559036 ], 
            [-71.40651168715121, 47.221535986403154 ], 
            [-71.40636953007312, 47.22131009962209 ], 
            [-71.40618445764474, 47.22130463460624 ]
          ]
        },
      }, {
        "type": "Feature",
        "properties": {
          "title" : "Portage  - 284m",
        },
        "geometry": {
          "type": "LineString",
          "coordinates": [
            [-71.39917271861532, 47.21129989714146 ], 
            [-71.39924245605086, 47.2110411703172 ], 
            [-71.3990600658103, 47.21070956082454 ], 
            [-71.39880793816107, 47.21046176338905 ], 
            [-71.39842170004098, 47.21014837084712 ], 
            [-71.39814811472047, 47.20987141776686 ], 
            [-71.39795499567113, 47.20964912543309 ], 
            [-71.39789062265726, 47.20950700361388 ], 
            [-71.39771896127922, 47.20944505295893 ]
          ]
        },
      }, {
        "type": "Feature",
        "properties": {
          "title" : "Portage  - 185m",
        },
        "geometry": {
          "type": "LineString",
          "coordinates": [
            [-71.39786380058912, 47.211390997779716 ],
            [-71.39766531712583, 47.21107396669231 ],
            [-71.39742928273395, 47.21078973031433 ],
            [-71.39732199436978, 47.21041439020004 ],
            [-71.39731662995581, 47.21035608469799 ]
          ]
        },
      }, {
        "type": "Feature",
        "properties": {
          "title" : "Portage  - 212m",
        },
        "geometry": {
          "type": "LineString",
          "coordinates": [
            [-71.39639068917685, 47.20590545227958 ], 
            [-71.39653001856402, 47.20577189694083 ], 
            [-71.39648992817969, 47.20556572835096 ], 
            [-71.3963425760076, 47.20527970858433 ], 
            [-71.39619101377592, 47.20507949383608 ], 
            [-71.39603945151077, 47.20472768605512 ], 
            [-71.39600577101618, 47.20437587597357 ], 
            [-71.3959720905174, 47.20409555714019 ], 
            [-71.3958499987215, 47.20384957342077 ], 
            [-71.39576158740243, 47.20345199265765 ], 
            [-71.3957363270315, 47.20334044068679 ]
          ]
        },
      }]
    }
};


// Rapids, mainly for display and for fly-to capabilities
var rapids =  [
    {
        id: 1,
        name: "Le Monstre",
        label: [-71.44533433036077, 47.34133345968175],
        class: "R 2-3",
        length: "50 m",
        lon: -71.44598610714151,
        lat: 47.341194417431296,
        video: [
            {
                name: "monstre2",
                sources: [
                    "https://s3.ca-central-1.amazonaws.com/filesproject/monstre2.mp4",
                    "https://s3.ca-central-1.amazonaws.com/filesproject/monstre2.webm"
                ],
                coordinates: [
                    [-71.44518516817452, 47.33899716037854 ], 
                    [-71.44557254447228, 47.33741054276328 ], 
                    [-71.44696880187733, 47.33757209146984 ], 
                    [-71.44658568246939, 47.33910966417821 ]
                ]
            }, {
                name: "monstre",
                sources: [
                    "https://s3.ca-central-1.amazonaws.com/filesproject/monstre.mp4",
                    "https://s3.ca-central-1.amazonaws.com/filesproject/monstre.webm"
                ],
                coordinates: [
                    [-71.44483581733053, 47.34188330639873 ], 
                    [-71.44573649221796, 47.340479241539214 ], 
                    [-71.44688450273992, 47.340814449610235 ], 
                    [-71.44599782794587, 47.34218055859972 ]
                ]
            }, {
                name: "haut",
                sources: [
                    "https://s3.ca-central-1.amazonaws.com/filesproject/haut.mp4",
                    "https://s3.ca-central-1.amazonaws.com/filesproject/haut.webm"
                ],
                coordinates: [
                    [-71.4461236436418, 47.34813116294191 ], 
                    [-71.44493042024199, 47.347374720274246 ], 
                    [-71.4455551007318, 47.34693871540151 ], 
                    [-71.44674149282133, 47.34766489146162 ]
                ]
            },
        ]
    }, {
        id: 2,
        name: "Le dangereux",
        label: [-71.45011932488944, 47.330206955034015],
        class: "R 3",
        length: "90 m",
        lon: -71.45105426190308,
        lat: 47.32971923040378,
        zoom: 16,
    }, {
        id: 3,
        name: "Rapide du Scotora",
        label: [-71.4562996967015, 47.31654784739817],
        class: "R 1",
        length: "30 m",
        lon: -71.45697024894947,
        lat: 47.316608763638015,
        video: [{
                name: "scotora",
                sources: [
                    "https://s3.ca-central-1.amazonaws.com/filesproject/Scotora-.mp4",
                    "https://s3.ca-central-1.amazonaws.com/filesproject/Scotora.webm"
                ],
                coordinates: [
                    [-71.45763007237368, 47.31615507227232],
                    [-71.45725318769601, 47.31713254557346],
                    [-71.45639013809567, 47.31699397006449],
                    [-71.45674320385062, 47.31599173655832]
                ]
            }
        ]
    }, {
        id: 4,
        name: "Rapide du Morillon",
        label: [-71.45869638202967, 47.31338126874013],
        class: "R 1",
        length: "40 m",
        lon: -71.4590611624667,
        lat: 47.313625857155984,
        video : [{
            name: "morillon",
            sources: [
                "https://s3.ca-central-1.amazonaws.com/filesproject/Scotora2.mp4",
                "https://s3.ca-central-1.amazonaws.com/filesproject/Scotora2.webm"
            ],
            coordinates: [
                [-71.45963493302139, 47.31331187227036],
                [-71.45908817485953, 47.314072107684126],
                [-71.45843947872903, 47.31388152627767],
                [-71.45898623689085, 47.31309615609831],
            ]
        }],
    },  {
        id: 5,
        name: "Rapide du Grand Portage",
        label: [-71.45941992794906, 47.31109952307108],
        class: "R 3",
        length: "300 m",
        lon: -71.46004220046696,
        lat: 47.31132684558969,
        zoom: 17,
        video: [
            {
                name: "portage1",
                sources: [
                    "https://s3.ca-central-1.amazonaws.com/filesproject/portage1.mp4",
                    "https://s3.ca-central-1.amazonaws.com/filesproject/portage1.webm"
                ],
                coordinates: [
                    [-71.45886870001681, 47.312393577758144 ], 
                    [-71.45947704948377, 47.31111493208118 ], 
                    [-71.46043737256743, 47.31134473704148 ], 
                    [-71.45980729633449, 47.31256740046794 ] 
                ]
            }, {
                name: "portage2",
                sources: [
                    "https://s3.ca-central-1.amazonaws.com/filesproject/portage2.mp4",
                    "https://s3.ca-central-1.amazonaws.com/filesproject/portage2.webm"
                ],
                coordinates: [
                    [-71.45939454153343, 47.31168005198174 ], 
                    [-71.45985816828487, 47.31048224019111 ], 
                    [-71.4608174975022, 47.31063842689909 ], 
                    [-71.46033345934616, 47.31185205124433 ] 
                ]
            }, {
                name: "portage3",
                sources: [
                    "https://s3.ca-central-1.amazonaws.com/filesproject/portage3.mp4",
                    "https://s3.ca-central-1.amazonaws.com/filesproject/portage3.webm"
                ],
                coordinates: [
                    [-71.46023212393038, 47.31003163639855 ], 
                    [-71.45913301263928, 47.31098595303109 ], 
                    [-71.45828298052922, 47.31057849410425 ], 
                    [-71.45946907184397, 47.309554471623386 ] 
                ]
            },
        ]
    }, {
        id: 6,
        name: "Rapide de la Jetée",
        label: [-71.45777147037379, 47.306787747532894],
        class: "R 1",
        length: "30 m",
        lon: -71.45860027295593,
        lat: 47.30680138801881
    }, {
        id: 7,
        name: "Rapide du ruisseau de Larabelle",
        label: [-71.4570709507976, 47.301290967087084],
        class: "R 1",
        length: "300 m",
        lon: -71.45615363532728,
        lat: 47.30164565560136,
        zoom: 17,
    }, {
        id: 8,
        name: "Rapide des Trois Roches",
        label: [-71.42460424142735, 47.25676471539387],
        class: "R 2",
        length: "18 m",
        lon: -71.4246245514596,
        lat: 47.2564175114334,
        video : [{
            name: "roches",
            sources: [
                "https://s3.ca-central-1.amazonaws.com/filesproject/roches.mp4",
                "https://s3.ca-central-1.amazonaws.com/filesproject/roches.webm"
            ],
            coordinates: [
                [-71.42520765677996, 47.25588207236865 ], 
                [-71.42518698542278, 47.25694635043743 ], 
                [-71.42429783883712, 47.25694339345111 ], 
                [-71.42428435839754, 47.25589425984529 ] 
            ]
        }],
    }, {
        id: 9,
        name: "Rapide des abris",
        label: [-71.42072275591468, 47.24913645731263],
        class: "R 2-3",
        length: "30 m",
        lon: -71.4216829867424,
        lat: 47.2490226624831,
        video : [{
            name: "abris",
            sources: [
                "https://s3.ca-central-1.amazonaws.com/filesproject/abris.mp4",
                "https://s3.ca-central-1.amazonaws.com/filesproject/abris.webm"
            ],
            coordinates: [
                [-71.42146274286468, 47.24967958921539 ], 
                [-71.42089953036124, 47.24877159190538 ], 
                [-71.42177452121724, 47.24854288336314 ], 
                [-71.42229750425768, 47.249508914218836]
            ]
        }],
    }, {
        id: 10,
        name: "Rapide 7 - à la cordelle",
        label: [-71.42028987959966, 47.24766743539567],
        class: "R 1",
        length: "30 m",
        lon: -71.42073780853322,
        lat:47.24745713653698,
        video : [{
            name: "rapide7",
            sources: [
                "https://s3.ca-central-1.amazonaws.com/filesproject/rapide7.mp4",
                "https://s3.ca-central-1.amazonaws.com/filesproject/rapide7.webm"
            ],
            coordinates: [
                [-71.42113527019113, 47.24701741543251 ], 
                [-71.42133449075695, 47.248040833439916 ], 
                [-71.42039467233778, 47.24814052114294 ], 
                [-71.42018224205476, 47.24711244793926 ] 
            ]
        }],
    }, {
        id: 11,
        name: "Rapide des Pins",
        label: [-71.41738503140895, 47.24330562875761],
        class: "R 1",
        length: "150 m",
        lon: -71.41798048182629,
        lat: 47.24323552346493,
    }, {
        id: 12,
        name: "Rapide des Pont-Banc",
        label: [-71.408836525298, 47.22694717321002],
        class: "R 2",
        length: "200 m",
        lon: -71.40837786757679,
        lat: 47.22708833755141,
    }, {
        id: 13,
        name: "Rapide à Bedard",
        label: [-71.40642317380683, 47.22201326022858],
        class: "R 2",
        length: "220 m",
        lon: -71.40611203794406,
        lat: 47.2222655577163,
        video: [{
            name: "bedard",
            sources: [
                "https://s3.ca-central-1.amazonaws.com/filesproject/bedard.mp4",
                "https://s3.ca-central-1.amazonaws.com/filesproject/bedard.webm"
            ],
            coordinates: [
                [-71.40631435522586, 47.222853254193325 ], 
                [-71.4050878380569, 47.22213993120019 ], 
                [-71.40568099584003, 47.221621630729516 ], 
                [-71.40696858223903, 47.222353636559376 ]
            ]
        }],
    }, {
        id: 14,
        name: "Rapide 11",
        label: [-71.39785843136956, 47.209915853334934],
        class: "R 2",
        length: "220 m",
        lon: -71.39780479203961,
        lat: 47.21027044843467,
        zoom: 17,
        video: [{
            name: "r11",
            sources: [
                "https://s3.ca-central-1.amazonaws.com/filesproject/r11.mp4",
                "https://s3.ca-central-1.amazonaws.com/filesproject/r11.webm"
            ],
            coordinates: [
                [-71.39830163851053, 47.2113284093673 ], 
                [-71.39716935068847, 47.210233008148634 ], 
                [-71.39810733026097, 47.209838561429876 ], 
                [-71.39916957378729, 47.2109234827027 ]
            ]
        }, {
            name: "r112",
            sources: [
                "https://s3.ca-central-1.amazonaws.com/filesproject/r112.mp4",
                "https://s3.ca-central-1.amazonaws.com/filesproject/r112.webm"
            ],
            coordinates: [
                [-71.39740069280967, 47.21067322121385 ], 
                [-71.39619304553041, 47.20963298008414 ], 
                [-71.39709313862986, 47.20919802922219 ], 
                [-71.39821310759007, 47.210236650874435 ]
            ]
        }],
    }, {
        id: 15,
        name: "Rapide du Bouleau",
        label: [-71.39456805885219, 47.20489701607903],
        class: "R 2",
        length: "300 m",
        lon: -71.39535316567672,
        lat: 47.20472514333031,
    }, {
        id: 16,
        name: "Rapide le Mouron",
        label: [-71.35442914967624, 47.15214202026877],
        class: "R 1",
        length: "450 m",
        lon: -71.35553371017397,
        lat: 47.152463437426775,
    }, {
        id: 17,
        name: "Rapide le Frappant",
        label: [-71.35522930189478, 47.1440622931826],
        class: "R 2",
        length: "150 m",
        lon: -71.3546767668524,
        lat: 47.14354600695992,
        zoom: 17,
        video: [{
            name: "frappant",
            sources: [
                "https://s3.ca-central-1.amazonaws.com/filesproject/frappant.mp4",
                "https://s3.ca-central-1.amazonaws.com/filesproject/frappant.webm"
            ],
            coordinates: [
                [-71.35580161612262, 47.143516318026 ], 
                [-71.35411079333707, 47.14407432136596 ], 
                [-71.35364805337296, 47.143475498559496 ], 
                [-71.3552988567141, 47.142898774961424 ]
            ]
        }]
    }, {
        id: 18,
        name: "Rapide de l'Épaule",
        label: [-71.36118316649639, 47.132959018116594],
        class: "R 2",
        length: "190 m",
        lon: -71.36032689131522,
        lat: 47.132882201898326,
    }
];

// Used to draw a line between points
var linestring = {
    "type": "Feature",
    "geometry": {
        "type": "LineString",
        "coordinates": []
    }
};

var labels = {
    "type": "FeatureCollection",
    "features": []
}

for (var i = 0; i < rapids.length; i++) {
    rapids[i];
    var feature = {
        "type": "Feature",
        "properties": {
            "name": rapids[i].name,
            "class": rapids[i].class,
            "length": rapids[i].length
        },
        "geometry": {
            "type": "Point",
            "coordinates": rapids[i].label
        }
    }

    labels.features.push(feature);
}

/*-------------------------------------------------------------------
|  INITIALIZING THE MAP
|  
|  This can be eventually replaced by an API
*-------------------------------------------------------------------*/

var map = new mapboxgl.Map({
    container: 'map', // container id
    style: {
        "version": 8,
        "glyphs": "mapbox://fonts/mapbox/{fontstack}/{range}.pbf",
        "sources": {
            "ortho": {
                // Au dela
                "type": "raster",
                "url": "mapbox://benjaminrosell.5178zn3k",
                "tileSize": 256
            },
            "ortho90": {
                // Delta
                "type": "raster",
                "url": "mapbox://benjaminrosell.2omfqox1",
                "tileSize": 256
            },
            "the_end": {
                // The End
                "type": "raster",
                "url": "mapbox://benjaminrosell.bv07axqb",
                "tileSize": 256
            },
            "ortho92": {
                // Ekwatek
                "type": "raster",
                "url": "mapbox://benjaminrosell.1jioqzbu",
                "tileSize": 256
            },
            "ortho93": {
                // Orignal
                "type": "raster",
                "url": "mapbox://benjaminrosell.ceq06kkw",
                "tileSize": 256
            },
            "ortho94": {
                // Scotora
                "type": "raster",
                "url": "mapbox://benjaminrosell.9qwiy2ig",
                "tileSize": 256
            },
            "ortho95": {
                // Home
                "type": "raster",
                "url": "mapbox://benjaminrosell.1na3mitm",
                "tileSize": 256
            },
            "ortho96": {
                // Raqueteur
                "type": "raster",
                "url": "mapbox://benjaminrosell.5q7ugdq8",
                "tileSize": 256
            },
            "ortho97": {
                // The Wall + Manual Flight
                "type": "raster",
                "url": "mapbox://benjaminrosell.b205lcj4",
                "tileSize": 256
            },
            "ortho98": {
                // The Pont Banc
                "type": "raster",
                "url": "mapbox://benjaminrosell.3oagn0oo",
                "tileSize": 256
            },
            "orignal": {
                // The Pont Banc
                "type": "raster",
                "url": "mapbox://benjaminrosell.aecdi6dg",
                "tileSize": 256
            },
            "camps3": {
                // The Pont Banc
                "type": "raster",
                "url": "mapbox://benjaminrosell.3mgsvmbv",
                "tileSize": 256
            },
            "begin": {
                // The Pont Banc
                "type": "raster",
                "url": "mapbox://benjaminrosell.1wguz01r",
                "tileSize": 256
            },
            "satellite" : {
                "type": "raster",
                //"url" : "mapbox://mapbox.run-bike-hike",
                "url" : "mapbox://mapbox.satellite",
                //"url" : "mapbox://mapbox.streets-satellite",
                "tileSize": 256
            },
            // "video": {
            //     "type": "video",
            //     "urls": [
            //         "https://s3.ca-central-1.amazonaws.com/filesproject/haut.mp4",
            //         "https://s3.ca-central-1.amazonaws.com/filesproject/haut.webm"
            //     ],
            //     "coordinates": videoCoordinates,
            // },
        },
        "layers": [
        {
            "id": "background",
            "type": "background",
            "paint": {
                "background-color": "rgb(4,7,14)"
            }
        }, {
            "id": "satellite",
            "type": "raster",
            "source": "satellite",
            "minzoom": 0,
            "maxzoom": 24
        }, {
            "id": "ortho",
            "type": "raster",
            "source": "ortho",
            "minzoom": 0,
            "maxzoom": 24
        },  {
            "id": "ortho90",
            "type": "raster",
            "source": "ortho90",
            "minzoom": 0,
            "maxzoom": 24
        }, {
            "id": "the_end",
            "type": "raster",
            "source": "the_end",
            "minzoom": 0,
            "maxzoom": 24
        }, {
            "id": "ortho92",
            "type": "raster",
            "source": "ortho92",
            "minzoom": 0,
            "maxzoom": 24
        }, {
            "id": "orignal",
            "type": "raster",
            "source": "orignal",
            "minzoom": 0,
            "maxzoom": 24
        }, {
            "id": "ortho93",
            "type": "raster",
            "source": "ortho93",
            "minzoom": 0,
            "maxzoom": 24
        }, {
            "id": "ortho94",
            "type": "raster",
            "source": "ortho94",
            "minzoom": 0,
            "maxzoom": 24
        }, {
            "id": "ortho95",
            "type": "raster",
            "source": "ortho95",
            "minzoom": 0,
            "maxzoom": 24
        }, {
            "id": "ortho96",
            "type": "raster",
            "source": "ortho96",
            "minzoom": 0,
            "maxzoom": 24
        }, {
            "id": "ortho97",
            "type": "raster",
            "source": "ortho97",
            "minzoom": 0,
            "maxzoom": 24
        }, {
            "id": "begin",
            "type": "raster",
            "source": "begin",
            "minzoom": 0,
            "maxzoom": 24
        }, {
            "id": "camps3",
            "type": "raster",
            "source": "camps3",
            "minzoom": 0,
            "maxzoom": 24
        }, {
            "id": "ortho98",
            "type": "raster",
            "source": "ortho98",
            "minzoom": 0,
            "maxzoom": 24
        // }, {
        //     "id": "video",
        //     "type": "raster",
        //     "source": "video",
        }]
    },
    center: [-71.36532381254334, 47.17412513772712], // starting position
    zoom: 15,
    hash: false,
    bearing: 0,
    /*pitch: 50*/
});


var distanceContainer = document.getElementById('distance');

map.on('dblclick', function(event) {
    var mySource = map.getSource('video');
    var corner = document.querySelector('input[name="corner"]:checked').value;
    videoCoordinates[corner] = [event.lngLat.lng, event.lngLat.lat];
    mySource.setCoordinates(videoCoordinates);
    console.log(videoCoordinates);
});

map.on('load', function() {
    map['doubleClickZoom'].disable();

    if (distanceMatrix) {
        map.addSource('geojson', geojsonSource);

        map.addLayer({
            id: 'measure-points',
            type: 'circle',
            source: 'geojson',
            paint: {
                'circle-radius': 5,
                'circle-color': '#3887be'
            },
            filter: ['in', '$type', 'Point']
        });
        
        map.addLayer({
            id: 'measure-lines',
            type: 'line',
            source: 'geojson',
            layout: {
                'line-cap': 'round',
                'line-join': 'round'
            },
            paint: {
                'line-color': '#3887be',
                'line-width': 2.5
            },
            filter: ['in', '$type', 'LineString']
        });

        map.on('click', function(e) {
            var features = map.queryRenderedFeatures(e.point, { layers: ['measure-points'] });
            // Remove the linestring from the group
            // So we can redraw it based on the points collection
            if (geojson.features.length > 1) geojson.features.pop();

            // Clear the Distance container to populate it with a new value
            distanceContainer.innerHTML = '';

            // If a feature was clicked, remove it from the map
            if (features.length) {
                var id = features[0].properties.id;
                geojson.features = geojson.features.filter(function(point) {
                    return point.properties.id !== id;
                });
            } else {
                var point = {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [
                            e.lngLat.lng,
                            e.lngLat.lat
                        ]
                    },
                    "properties": {
                        "id": String(new Date().getTime())
                    }
                };

                geojson.features.push(point);
            }

            if (geojson.features.length > 1) {
                linestring.geometry.coordinates = geojson.features.map(function(point) {
                    return point.geometry.coordinates;
                });

                geojson.features.push(linestring);

                // Populate the distanceContainer with total distance
                var value = document.createElement('pre');
                value.textContent = 'Total distance: ' + turf.lineDistance(linestring).toLocaleString() + 'km';
                distanceContainer.appendChild(value);
            }

            map.getSource('geojson').setData(geojson);
        });
    }


    map.addSource("portages", portages);

    map.addLayer({
        "id": "portages-names",
        "type": "symbol",
        "source": "portages",
        "layout": {
            "symbol-placement": "line",
            "text-font": ["Open Sans Regular"],
            "text-field": '{title}',
            "text-size": 14
        },
        "paint": {
            "text-color": "#fff"
        }
    });

    map.addLayer({
        "id": "portages",
        "type": "line",
        "source": "portages",
        "layout": {
            "line-join": "round",
            "line-cap": "round",
        },
        "paint": {
            "line-color": "#ff2400",
            "line-width": 4,
            "line-opacity": 0.6
        }
    }, "portages-names");


    map.addLayer({
        'id': 'labels',
        'type': 'symbol',
        'source': {
            'type': 'geojson',
            'data': labels
        },
        "layout": {
            "icon-image": 'dog-park-11',
            "text-field": ['format',
                ['get', 'name'], { 'font-scale': 1.2 },
                '\n', {},
                ['get', 'class'], { 'font-scale': .9 },
                '\n', {},
                ['get', 'length'], { 'font-scale': .7 }],
            "text-font": ["Open Sans Semibold", "Arial Unicode MS Bold"],
            "text-offset": [0, 0],
            "text-anchor": "top"
        },
        "paint": {
            "text-color": "#F8F714"
        }  
    }, "portages");

    map.resize();
});

/*-------------------------------------------------------------------
|  FLYTO MENU
|
|  Purpose:  Adds capability for rapids navigation on the flyTo meny
|  It also allows for vidos to be displayed on the move.
*-------------------------------------------------------------------*/
 
// Create a navigation menu on the sidebar to fly from rapid to rapid 
for (var i = 0; i < rapids.length; i++) {
    var rapid = rapids[i];

    var listItem = document.createElement('li');
    if (i == 0) {
        listItem.className = 'active';
    }

    var link = document.createElement('a');
    link.href = '#';
    link.className = 'canFly';
    link.setAttribute('data-rapid', rapid.id);
    link.textContent = rapid.name;

    var layers = document.getElementById('flyMenu');
    listItem.appendChild(link);
    layers.appendChild(listItem);
}

$('.canFly').click(function(event) {
    event.preventDefault;
    $('.canFly').parent().removeClass('active');

    //Get the rapid coordonates
    var rapid = rapids[$(this).data('rapid') - 1 ];
    $(this).parent().toggleClass('active');
    var zoom = rapid.zoom ? rapid.zoom : 18;

    map.flyTo({
        center: [ rapid.lon, rapid.lat],
        zoom: zoom
    });

    if (activeRapids.length >= 1) {
        for (var i = 0; i < activeRapids.length; i++) {
            map.removeLayer(activeRapids[i]);
            map.removeSource(activeRapids[i]);
            activeRapids.splice(i, 1);
        }
    }

    if (rapid.video !== null && rapid.video !== undefined && rapid.video.length >= 1) {
        for (var i = 0; i < rapid.video.length; i++) {
            var video = rapid.video[i];
            //console.log(video.coordinates);
            map.addSource(video.name, {
                "type": "video",
                "urls": video.sources,
                "coordinates": video.coordinates,
            });

            map.addLayer({
                "id": video.name,
                "type": "raster",
                "source": video.name,
                "visibility" : "visible"
            }, "labels");

            activeRapids.push(video.name);
        }
    }
});

/*-------------------------------------------------------------------
|  TOGGLING MENU
|
|  Purpose:  Adds the capacity to toggle the maps, videos or portages
*-------------------------------------------------------------------*/

var toggleableLayersCollection = {
    "portages" : [ 'portages', 'portages-names' ],
    "video": [ 'video' ],
    "labels": [ 'labels' ],
    "videos": [],
    "orthomaps": [ "ortho", "ortho90", "the_end", "ortho92", "ortho93", "ortho94", "ortho95", "ortho96", "ortho97", "ortho98" ],
};

$('.toggler').click(function(event) {
    event.preventDefault();
    var $this = $(this);
    var category = $this.data('toggler');

    layers = toggleableLayersCollection[category];

    if (category == 'videos') {
        layers = [] ;
        layers = activeRapids;
    }

    for (var i = 0; i < layers.length; i++) {
        var visibility = map.getLayoutProperty(layers[i], 'visibility');

        if (visibility === 'visible') {
            map.setLayoutProperty(layers[i], 'visibility', 'none');
        } else {
            map.setLayoutProperty(layers[i], 'visibility', 'visible');
        }
    }

    $this.toggleClass('active');
});

/*-------------------------------------------------------------------
|  DEBUG COORDINATES
|
|  Purpose:  Adds the cooridates if the cursor on the map on top
*-------------------------------------------------------------------*/

if (debug) {
    map.on('mousemove', function (e) {
        document.getElementById('info').innerHTML =
            JSON.stringify(e.point) + '<br />' + JSON.stringify(e.lngLat);
        var features = map.queryRenderedFeatures(e.point, { layers: ['measure-points'] });
        // UI indicator for clicking/hovering a point on the map
        map.getCanvas().style.cursor = (features.length) ? 'pointer' : 'crosshair';
    });
}

$(document).ready(function () {
    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
        $(this).toggleClass('active');
        map.resize();
    });

    $('.collapse').collapse();
});
