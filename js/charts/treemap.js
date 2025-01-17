$(function () {

//function to return color for each season
function colors(i) {
  switch(i) {
    case 0:
      return "#F4A460"; // beverage
      break;
    case 1:
      return "#FFD867"; // cheese
      break;
    case 2:
      return "#CCCCFF"; // fruit
      break;
    case 3:
      return "#FF9898";  // protein
      break;
    case 4:
      return "#B79268"; // starch
      break;
    case 5:
      return "#FFBCD9"; // sweet
      break;
    case 6:
      return "#98FF98"; // vegetable
      break;
    };
}

var data = {
    'beverage': {
      'apollinaris': {
        'apollinaris':  '1466',
        'apollinarismineralwater':  '86',
        'apollinarispints':   '18',
        'apollinarissmallwater':  '21',
        'apollinariswater':   '297',
      },
      'cocoa': {
        '1cocoaportionpot':   '14',
        '2cocoaportionspot':  '14',
        'chocolatecocoacuporper':   '23',
        'chocolatecocoaor':   '67',
        'chocolatecocoaorpot':  '15',
        'cocoa':  '1657',
        'cocoacup':   '73',
        'cocoacupof':   '33',
        'cocoacupper':  '119',
        'cocoaforonepot':   '15',
        'cocoaofpot':   '51',
        'cocoaperpot':  '140',
        'cocoapot':   '102',
      },
      'coffee': {
        'allblendbreakfastcoffeeofordersourownpotspecialwith':  '14',
        'ambassadorcoffeecreamwith':  '24',
        'americancoffee':   '150',
        'americancoffeeitalianor':  '10',
        'andcoffeecream':   '57',
        'andcoffeecreamfleischmannsspecial':  '13',
        'andcoffeemilk':  '15',
        'blackcoffee':  '40',
        'coffee':   '8042',
        'coffeecreamcupinperpotservedwith':   '42',
        'coffeecreamcupofwith':   '43',
        'coffeecreamcupperwith':  '15',
        'coffeecreamdemifrenchtassewith':   '16',
        'coffeecreamfiltrewith':  '52',
        'coffeecreamicedwith':  '42',
        'coffeecreamofpotwith':   '46',
        'coffeecreampotwith':   '24',
        'coffeecreampurewith':  '13',
        'coffeecreamwith':  '343',
        'coffeecuban':  '30',
        'coffeecup':  '169',
        'coffeecupcustard':   '11',
        'coffeecupfrench':  '26',
        'coffeecupfrenchsmall':   '14',
        'coffeecupof':  '88',
        'coffeecuporderperspecialto':   '26',
        'coffeecupper':   '197',
        'coffeedecaffeinated':  '44',
        'coffeedecaffeinatedpot':   '22',
        'coffeedemifrenchtasse':  '59',
        'coffeedemitasse':  '153',
        'coffeeforofonepot':  '19',
        'coffeeforofpottwo':  '14',
        'coffeeforonepot':  '18',
        'coffeefrench':   '454',
        'coffeeglassiced':  '16',
        'coffeeglassicedper':   '16',
        'coffeehag':  '11',
        'coffeehot':  '37',
        'coffeehoticedor':  '29',
        'coffeeice':  '30',
        'coffeeiced':   '812',
        'coffeelargepot':   '45',
        'coffeeofpot':  '161',
        'coffeeperpot':   '247',
        'coffeepot':  '281',
        'coffeepotsanka':   '12',
        'coffeepotsingle':  '12',
        'coffeepotsmall':   '37',
        'coffeesanka':  '223',
        'coffeespecial':  '143',
        'coffeetea':  '11',
        'coffeeturkish':  '628',
      },
      'milk': {
        'agradehalfmilkpint':   '36',
        'agrademilk':   '33',
        'agrademilkpint':   '26',
        'bottleindividualmilk':   '57',
        'bottleindmilk':  '11',
        'bottlemilk':   '78',
        'bottlemilkof':   '12',
        'bottlemilkpasteurizedper':   '74',
        'bottlemilkper':  '60',
        'bowlmilkper':  '22',
        'certifiedhalfmilkpint':  '41',
        'certifiedmilkpasteurized':   '14',
        'freshglassmilk':   '11',
        'freshmilk':  '256',
        'glassmilk':  '115',
        'glassmilkof':  '177',
        'glassmilkper':   '296',
        'glassmilkperpure':   '24',
        'gobletmilkof':   '49',
        'homogenizedmilk':  '10',
        'individualmilk':   '46',
        'milk':   '1938',
        'milkofpitcher':  '10',
        'milkpasteurized':  '25',
        'milkskim':   '17',
      },
      'tea': {
        'allkindsperpottea':  '13',
        'andcoffeetea':   '12',
        'andcreamtea':  '41',
        'beefcupoftea':   '28',
        'beeftea':  '110',
        'beefteacupsin':  '14',
        'blackcupgreenmixedorpertea':   '25',
        'blacktea':   '67',
        'blendchildsperpottea':   '11',
        'breakfastcreamenglishteawith':   '34',
        'breakfastcupenglishpertea':  '9',
        'breakfastenglishofpottea':   '22',
        'breakfastenglishperpottea':  '40',
        'breakfastenglishpottea':   '34',
        'breakfastenglishtea':  '403',
        'camomiletea':  '94',
        'camomilletea':   '15',
        'caravanflowerofrussiatea':   '39',
        'ceyloncreamteawith':   '42',
        'ceylonpottea':   '14',
        'ceylontea':  '343',
        'chinatea':   '133',
        'chinateas':  '11',
        'coffeeicedortea':  '76',
        'coffeemilkortea':  '20',
        'coffeeortea':  '63',
        'coffeetea':  '11',
        'creamicedteawith':   '17',
        'creamoolongteawith':   '41',
        'creamteawith':   '113',
        'cupgreenpertea':   '17',
        'cupoftea':   '53',
        'darjeelingtea':  '15',
        'earlgreytea':  '13',
        'formosaoolongtea':   '93',
        'forofpotteatwo':   '18',
        'glassicedpertea':  '27',
        'glassicedtea':   '22',
        'greenofpottea':  '21',
        'greenpottea':  '24',
        'greentea':   '244',
        'hoticedortea':   '28',
        'hottea':   '79',
        'hysonpotteayoung':   '15',
        'hysonteayoung':  '61',
        'icedtea':  '1128',
        'icetea':   '45',
        'indiantea':  '33',
        'indianteas':   '11',
        'indiatea':   '11',
        'japanofpottea':  '19',
        'japantea':   '44',
        'jasminetea':   '12',
        'javatea':  '10',
        'lemonteawith':   '66',
        'lindentea':  '134',
        'milkteawith':  '17',
        'minttea':  '89',
        'mixedtea':   '52',
        'ofoolongpottea':   '26',
        'ofpotsingletea':   '23',
        'ofpottea':   '208',
        'ofppottea':  '32',
        'oolongperpottea':  '12',
        'oolongpottea':   '26',
        'oolongtea':  '327',
        'orangepekoepottea':  '13',
        'orangepekoetea':   '341',
        'pepperminttea':  '17',
        'perpottea':  '30',
        'pottea':   '120',
        'sherrytea':  '27',
        'teavervain':   '52',
      }
    },
    'cheese': {
      'americancheese': {
        'americancheese':   '1893',
        'americancheeseyoung':  '61',
      },
      'cheese': {
        'andassortedcheesecrackers':  '15',
        'andassortedcheesecrackersonsaltinesservedtraywith':  '10',
        'andcheesecrackers':  '299',
        'andcheesecrackerstoasted':   '13',
        'assortedcheese':   '227',
        'assortedcheeses':  '26',
        'cheese':   '1628',
        'cheeses':  '12',
      },
      'roquefort': {
        'cheeseimportedroquefort':  '51',
        'cheeseroquefort':  '1928',
        'defromageroquefort':   '16',
        'fromageroquefort':   '18',
        'importedroquefort':  '24',
        'perpersonroquefort':   '11',
        'roquefort':  '1329',
      }
    },
    'fruit': {
      'fruit': {
        'assortedfreshfruit':   '156',
        'assortedfreshfruitstewed':   '33',
        'assortedfruit':  '189',
        'assortedfruitinseason':  '14',
        'assortedfruitofplate':   '43',
        'assortedfruits':   '70',
        'assortedfruitsstewed':   '25',
        'assortedfruitstewed':  '116',
        'assortisfruits':   '24',
        'californiacocktailfruit':  '15',
        'californiafruit':  '11',
        'cocktailfreshfruit':   '153',
        'cocktailfruit':  '446',
        'cupfreshfruit':  '136',
        'defruitsmelange':  '12',
        'defruitssalade':   '17',
        'fraisfruits':  '26',
        'freshfruit':   '390',
        'freshfruitinseason':   '77',
        'freshfruits':  '44',
        'freshfruitsalad':  '428',
        'freshfruitsinseason':  '24',
        'freshfruitssalad':   '29',
        'freshfruitsstewed':  '24',
        'freshfruitstewed':   '37',
        'fruit':  '11',
        'fruitinseason':  '197',
        'fruitmelange':   '49',
        'fruitmixed':   '22',
        'fruits':   '882',
        'fruitsalad':   '770',
        'fruitsinseason':   '145',
        'fruitssalad':  '41',
      },
      'oranges': {
        '1orange':  '25',
        '2oranges':   '12',
        'californiaorange':   '207',
        'californiaoranges':  '37',
        'californiaorangesliced':   '14',
        'eachoranges':  '55',
        'floridaorange':  '35',
        'floridaoranges':   '18',
        'orange':   '37',
        'oranges':  '1450',
        'orangesliced':   '353',
        'orangessliced':  '274',
        'orangestwo':   '14',
        'orangewhole':  '149',
        'ororangeslicedwhole':  '16',
      }
    },
    'protein': {
      'chickensalad': {
        'allchickenmeatsaladwhite':   '37',
        'chickendarkmeatsalad':   '15',
        'chickendarkmeatsaladwith':   '15',
        'chickendressingmayonnaisesalad':   '13',
        'chickenmayonnaisemeatonlysaladwhite':  '18',
        'chickenmayonnaisesalad':   '94',
        'chickenmayonnaisesaladwith':   '48',
        'chickenmeatonlysaladwhite':  '10',
        'chickenmeatsaladwhite':  '10',
        'chickensalad':   '2264',
        'chickensaladsmall':  '18',
      },
      'lobstersalad': {
        'freshlobstersalad':  '95',
        'largelobstersalad':  '15',
        'lobstermayonnaisesalad':   '31',
        'lobstersalad':   '1880',
        'lobstersaladsmall':  '36',
      },
      'sardines': {
        '4frenchsardines':  '18',
        'ahuilelsardines':  '47',
        'bonelesssardines':   '62',
        'boxfrenchpersardines':   '35',
        'boxpersardines':   '13',
        'boxsardines':  '19',
        'boxsardinessmall':   '13',
        'coldsardines':   '69',
        'domesticsardines':   '28',
        'frenchsardines':   '144',
        'fumeessardines':   '13',
        'importedsardines':   '121',
        'inoilsardines':  '84',
        'inoilsardinessmoked':  '19',
        'sardines':   '1450',
        'sardinessmoked':   '38',
      }
    },
    'potato': {
      'boiledpotatoes': {
        '2boiledpotatoes':  '36',
        'bermudaboiledpotatoes':  '19',
        'boiledhotpotatoes':  '2',
        'boilednewpotatoes':  '56',
        'boiledplainpotatoes':  '12',
        'boiledpotatoes':   '2444',
      },
      'frenchfriedpotatoes': {
        'frenchfriedorderpotatoesto':   '54',
        'frenchfriedpotatoes':  '1683',
        'frenchfriedpotatoesraw':   '20',
        'frenchfries':  '51',
      },
      'mashedpotatoes': {
        'mashedpotato':   '21',
        'mashedpotatoes':   '2934',
      }
    },
    'sweets': {
      'applepie': {
        'appledeepdishpie':   '19',
        'appledutchpie':  '14',
        'applefreshpie':  '61',
        'applegreenpie':  '439',
        'applehomemadepie':   '87',
        'applehotpie':  '12',
        'applenewpie':  '24',
        'applepie':   '1732',
        'applepies':  '27',
        'applepiesliced':   '33',
      },
      'chocolate': {
        'chocolate':  '1509',
      },
      'creamicevanilla': {
        'americancreamicevanilla':  '36',
        'creamfrenchglassiceinvanilla':   '16',
        'creamfrenchicevanilla':  '248',
        'creamicevanilla':  '2185',
      }
    },
    'vegetable': {
      'beanstrings': {
        'aubeansbeurrestring':  '17',
        'aubeansgratinstring':  '54',
        'beansbeurrestring':  '10',
        'beansbutteredstring':  '37',
        'beansbutterinstring':  '33',
        'beansfrenchstring':  '396',
        'beansfreshstring':   '199',
        'beansnewstring':   '790',
        'beansstring':  '1844',
      },
      'celery': {
        'auceleryjus':  '31',
        'bordelaisebraisedcelery':  '22',
        'braisecelery':   '14',
        'braisedcelery':  '155',
        'branchceleryin':   '84',
        'brancheceleryen':  '27',
        'branchescelery':   '13',
        'celery':   '4470',
        'celerycrisphearts':  '10',
        'celerydressed':  '13',
        'celeryfresh':  '13',
        'celeryheartof':  '97',
        'celeryhearts':   '74',
        'celeryheartsof':   '296',
        'celeryicedpascal':   '14',
        'celeryknob':   '15',
        'celeryknobsalad':  '19',
        'celeryplain':  '44',
        'celerysalad':  '644',
        'celerystewed':   '108',
        'celerytable':  '350',
      },
      'greenpeas': {
        'americanpeas':   '94',
        'aubeurrefrenchpeas':   '17',
        'aubeurrenewpeas':  '28',
        'butteredgreenpeas':  '15',
        'butterinnewpeas':  '50',
        'earlyjunepeas':  '43',
        'frenchgreenpeas':  '30',
        'frenchnewpeasstyle':   '9',
        'frenchpeas':   '1270',
        'freshgardenpeas':  '24',
        'freshgreenpeas':   '48',
        'freshpeas':  '41',
        'gardennewpeas':  '20',
        'greennewpeas':   '396',
        'greenpeas':  '1983',
        'junepeas':   '42',
        'newparisiennepeas':  '13',
        'newpeas':  '521',
      },
      'lettucesalad': {
        'headlettucesalad':   '42',
        'heartlettuceofsalad':  '235',
        'heartslettuceofsalad':   '321',
        'lettucesalad':   '1964',
        'lettucesalade':  '20',
      },
      'olives': {
        'andgreenolivesripe':   '110',
        'andolivesqueenripe':   '17',
        'blackolives':  '19',
        'californianfarciegreenolivesripe':   '10',
        'californiaolives':   '93',
        'californiaolivesripe':   '94',
        'colossalolivesripe':   '14',
        'farciesolives':  '70',
        'frencholives':   '72',
        'greenolives':  '553',
        'greenolivesorripe':  '12',
        'mixedolives':  '75',
        'olive':  '20',
        'olives':   '4552',
        'olivesqueen':  '1020',
        'olivesqueenspanish':   '14',
        'olivesripe':   '976',
        'olivesspanish':  '193',
        'olivesvertes':   '110',
      },
      'radishes': {
        'newradishes': '16',
        'radishes': '3363',
        'radishesrose': '27',
      }
    }
};
  var points = [],
    category_p,
    category_val,
    category_i,
    megaCluster_p,
    megaCluster_i,
    fingerprint_p,
    fingerprint_i,
    fingerprint_name = [];
  category_i = 0;
  for (var category in data) {
    category_val = 0;
    category_p = {
      id: "id_" + category_i,
      name: category,
      //color: Highcharts.getOptions().colors[category_i]
      color: colors(category_i)
    };
    //console.log(category)
    //console.log(colors(category_i))
    megaCluster_i = 0;
    for (var megaCluster in data[category]) {
      megaCluster_p = {
        id: category_p.id + "_" + megaCluster_i,
        name: megaCluster,
        parent: category_p.id
      };
      points.push(megaCluster_p);
      fingerprint_i = 0;
      for (var fingerprint in data[category][megaCluster]) {
        // fingerprint_name[fingerprint] = String(fingerprint)
        // console.log(fingerprint_name[fingerprint])
        fingerprint_p = {
          id: megaCluster_p.id + "_" + fingerprint_i,
          name: fingerprint,
          parent: megaCluster_p.id,
          value: +data[category][megaCluster][fingerprint],
          url: 'http://menus.nypl.org/search/showing/menus?utf8=%E2%9C%93&query=' + String(fingerprint)
        };
        category_val += fingerprint_p.value;
        points.push(fingerprint_p);
        fingerprint_i++;
      }
      megaCluster_i++;
    }
    category_p.value = Math.round(category_val);
    points.push(category_p);
    category_i++; 
  }
  //console.log(fingerprint_p)
  var chart = new Highcharts.Chart({
    chart: {
      renderTo: 'container3',
      backgroundColor:"#78b7b8"
    },

    series: [{
      type: "treemap",
      layoutAlgorithm: 'squarified',
      allowDrillToNode: true,
      dataLabels: {
        enabled: false
      },
      levelIsConstant: false,
      levels: [{
        level: 1,
        dataLabels: {
          useHTML: true,
          enabled: true,
          formatter:function() {
            if(this.point.isLeaf) {
                this_url = this.point.url
                // return '<a href="http://www.google.com" target="_blank">' + this.key + '</div>';
                return '<a href='+this_url + ' target="_blank">' + this.key + '</div>'
            } else {
                return this.key
            }
          }
        },
        borderWidth: 3
      }],
      data: points
    }],

    subtitle: {
      text: 'Click points to drill down. Source: <a href="http://menus.nypl.org/data/">NYPL</a>.',
      style: {
                color: '#FFFFFF'
            }
    },
    title: {
      text: 'Menu Item Clustering into Food Groups',
      style: {
                color: '#FFFFFF'
            }
    }
  });

});
