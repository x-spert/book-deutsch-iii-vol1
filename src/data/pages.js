module.exports = function() {
  return {
    '04': {
      toc: [
        {
          route: '04-05',
          trigger: {
              top: '15%',
              bottom: '80%',
              left: '8%',
              width: '64%'
          }
        },
        {
          route: '14-15',
          trigger: {
              top: '21%',
              bottom: '74%',
              left: '8%',
              width: '64%'
          }
        },
        {
          route: '28-29',
          trigger: {
              top: '27%',
              bottom: '68%',
              left: '8%',
              width: '64%'
          }
        },
        {
          route: '46-47',
          trigger: {
              top: '33%',
              bottom: '62%',
              left: '8%',
              width: '64%'
          }
        },
        {
          route: '70-71',
          trigger: {
              top: '39%',
              bottom: '56%',
              left: '8%',
              width: '64%'
          }
        },
        {
          route: '72-73',
          trigger: {
              top: '45%',
              bottom: '50%',
              left: '8%',
              width: '64%'
          }
        },
        {
          route: '78-79',
          trigger: {
              top: '51%',
              bottom: '44%',
              left: '8%',
              width: '64%'
          }
        },
        {
          route: '82-83',
          trigger: {
              top: '57%',
              bottom: '38%',
              left: '8%',
              width: '64%'
          }
        }
      ]
    },
    '05': {
      static: [
        {
          image: 'pg5static1',
          audio: {
            source: 'pg5ex1-1',
            state: 'stopped'
          },
          trigger: {
            button: {
              top: '47%'
            },
            zone: {
              top: '47%',
              bottom: '26%',
              left: '10%',
              width: '39%'
            }
          }
        },
        {
          image: 'pg5static2',
          audio: {
            source: 'pg5ex1-2',
            state: 'stopped'
          },
          trigger: {
            button: {
              top: '20%'
            },
            zone: {
              top: '20%',
              bottom: '54%',
              left: '10%',
              width: '39%'
            }
          }
        },
        {
          image: 'pg5static3',
          audio: {
            source: 'pg5ex1-3',
            state: 'stopped'
          },
          trigger: {
            button: {
              top: '30%'
            },
            zone: {
              top: '20%',
              bottom: '54%',
              left: '50%',
              width: '39%'

            }
          }
        }
      ]
    },
    '06': {
      video: [
        {
          video: {
            source: 'p6_v1'
          },
          trigger: {
            button: {
              top: '7%'
            },
            zone: {
              top: '7%',
              bottom: '6%'
            }
          }
        }
      ]
    },
    '07': {
      video: [
        {
          video: {
            source: 'p7_v1'
          },
          trigger: {
            button: {
              top: '7%'
            },
            zone: {
              top: '7%',
              bottom: '6%'
            }
          }
        }
      ]
    },
    '09': {
      static: [
        {
          image: 'pg9ex5',
          audio: {
            source: 'fundal',
            state: 'stopped'
          },
          trigger: {
            button: {
              top: '8%'
            },
            zone: {
              top: '8%',
              bottom: '29%'
            }
          }
        }
      ]
    },
    '10': {
      static: [
        {
          image: 'pg10nicht',
          audio: {
            source: 'fundal',
            state: 'stopped'
          },
          trigger: {
            button: {
              top: '60%'
            },
            zone: {
              top: '60%',
              bottom: '3%'
            }
          }
        }
      ],
      video: [
        {
          video: {
            source: 'p10_v1'
          },
          trigger: {
            button: {
              top: '7%'
            },
            zone: {
              top: '7%',
              bottom: '41%'
            }
          }
        }
      ]
    },
    '11': {
      exercise: [
        {
          type: 'typer',
          title: 'Wo sind die Spinnen?  Finde sie und schreib, wo sie sind!',
          image: 'pg11ex8',
          trigger: {
            button: {
              top: '7%'
            },
            zone: {
              top: '7%',
              bottom: '3%'
            }
          },
          help: {
            toggle: false,
            text: 'Unde sunt paianjenii? Cauta-i si completeaza. Cand ai terminat apasa pe cheita si verifica. Succes!'
          },
          data: [
            {
              identifier: 'one',
              position: {
                top: '69.6%',
                left: '25%',
                width: '12%'
              },
              model: '',
              solution: 'über'
            },
            {
              identifier: 'two',
              position: {
                top: '73%',
                left: '10%',
                width: '42%'
              },
              model: '',
              solution: 'Eine Spinne ist im'
            },
            {
              identifier: 'three',
              position: {
                top: '76.1%',
                left: '10%',
                width: '34%'
              },
              model: '',
              solution: 'Eine Spinne ist hinter'
            },
            {
              identifier: 'four',
              position: {
                top: '79.2%',
                left: '10%',
                width: '42%'
              },
              model: '',
              solution: 'Eine Spinne ist unter'
            },
            {
              identifier: 'five',
              position: {
                top: '82.3%',
                left: '10%',
                width: '42%'
              },
              model: '',
              solution: 'Eine Spinne ist vor'
            },
            {
              identifier: 'six',
              position: {
                top: '85.3%',
                left: '10%',
                width: '37%'
              },
              model: '',
              solution: 'Eine Spinne ist neben'
            },
            {
              identifier: 'seven',
              position: {
                top: '88.4%',
                left: '10%',
                width: '42%'
              },
              model: '',
              solution: 'Eine Spinne ist auf'
            }
          ]
        }
      ]
    },
    '12': {
      exercise: [
        {
          type: 'type',
          title: 'Hör zu, sing und ergänze die Diagramme!',
          image: 'pg12ex9',
          trigger: {
            button: {
              top: '7%'
            },
            zone: {
              top: '7%',
              bottom: '32%'
            }
          },
          audio: {
            source: 'pg12ex9',
            state: 'stopped'
          },
          help: {
            toggle: false,
            text: 'Asculta si completeaza diagrama. Cand ai terminat apasa pe cheita si verifica. Succes!'
          },
          data: [
            {
              identifier: 'one',
              position: {
                top: '38.4%',
                left: '28.8%',
                width: '3.1%',
                height: '2.5%'
              },
              model: '',
              solution: 'a'
            },
            {
              identifier: 'two',
              position: {
                top: '38.4%',
                left: '32%',
                width: '3.1%',
                height: '2.5%'
              },
              model: '',
              solution: 'n'
            },
            {
              identifier: 'three',
              position: {
                top: '38.4%',
                left: '35.2%',
                width: '3.1%',
                height: '2.5%'
              },
              model: '',
              solution: 'u'
            },
            {
              identifier: 'four',
              position: {
                top: '38.4%',
                left: '38.4%',
                width: '3.1%',
                height: '2.5%'
              },
              model: '',
              solution: 'a'
            },
            {
              identifier: 'five',
              position: {
                top: '38.4%',
                left: '41.7%',
                width: '3.1%',
                height: '2.5%'
              },
              model: '',
              solution: 'r'
            },
            {
              identifier: 'six',
              position: {
                top: '41.2%',
                left: '25.3%',
                width: '3.1%',
                height: '2.5%'
              },
              model: '',
              solution: 'u'
            },
            {
              identifier: 'seven',
              position: {
                top: '43.7%',
                left: '25.3%',
                width: '3.1%',
                height: '2.5%'
              },
              model: '',
              solution: 'l'
            },
            {
              identifier: 'eight',
              position: {
                top: '46.2%',
                left: '25.3%',
                width: '3.1%',
                height: '2.5%'
              },
              model: '',
              solution: 'i'
            },
            {
              identifier: 'nine',
              position: {
                top: '41.2%',
                left: '28.8%',
                width: '3.1%',
                height: '2.5%'
              },
              model: '',
              solution: 'u'
            },
            {
              identifier: 'ten',
              position: {
                top: '43.7%',
                left: '32%',
                width: '3.1%',
                height: '2.5%'
              },
              model: '',
              solution: 'n'
            },
            {
              identifier: 'eleven',
              position: {
                top: '46.2%',
                left: '35.3%',
                width: '3.1%',
                height: '2.5%'
              },
              model: '',
              solution: 'i'
            },
            {
              identifier: 'twelve',
              position: {
                top: '35.1%',
                left: '65.1%',
                width: '3.1%',
                height: '2.5%'
              },
              model: '',
              solution: 'a'
            },
            {
              identifier: 'thirteen',
              position: {
                top: '37.6%',
                left: '65.1%',
                width: '3.1%',
                height: '2.5%'
              },
              model: '',
              solution: 'i'
            },
            {
              identifier: 'fourteen',
              position: {
                top: '32.3%',
                left: '68.7%',
                width: '3.1%',
                height: '2.5%'
              },
              model: '',
              solution: 'ä'
            },
            {
              identifier: 'fifteen',
              position: {
                top: '32.3%',
                left: '71.9%',
                width: '3.1%',
                height: '2.5%'
              },
              model: '',
              solution: 'r'
            },
            {
              identifier: 'sixteen',
              position: {
                top: '32.3%',
                left: '75.1%',
                width: '3.1%',
                height: '2.5%'
              },
              model: '',
              solution: 'z'
            },
            {
              identifier: 'seventeen',
              position: {
                top: '44.5%',
                left: '73.5%',
                width: '3.1%',
                height: '2.5%'
              },
              model: '',
              solution: 'p'
            },
            {
              identifier: 'eighteen',
              position: {
                top: '44.5%',
                left: '76.7%',
                width: '3.1%',
                height: '2.5%'
              },
              model: '',
              solution: 'r'
            },
            {
              identifier: 'nineteen',
              position: {
                top: '44.5%',
                left: '79.9%',
                width: '3.1%',
                height: '2.5%'
              },
              model: '',
              solution: 'i'
            },
            {
              identifier: 'twenty',
              position: {
                top: '44.5%',
                left: '83.1%',
                width: '3.1%',
                height: '2.5%'
              },
              model: '',
              solution: 'l'
            },
            {
              identifier: 'twentyone',
              position: {
                top: '47.2%',
                left: '69.9%',
                width: '3.1%',
                height: '2.5%'
              },
              model: '',
              solution: 'u'
            },
            {
              identifier: 'twentytwo',
              position: {
                top: '49.7%',
                left: '69.9%',
                width: '3.1%',
                height: '2.5%'
              },
              model: '',
              solution: 'g'
            },
            {
              identifier: 'twentythree',
              position: {
                top: '52.2%',
                left: '69.9%',
                width: '3.1%',
                height: '2.5%'
              },
              model: '',
              solution: 'u'
            },
            {
              identifier: 'twentyfour',
              position: {
                top: '54.8%',
                left: '69.9%',
                width: '3.1%',
                height: '2.5%'
              },
              model: '',
              solution: 's'
            },
            {
              identifier: 'twentyfive',
              position: {
                top: '57.3%',
                left: '69.9%',
                width: '3.1%',
                height: '2.5%'
              },
              model: '',
              solution: 't'
            },
            {
              identifier: 'twentysix',
              position: {
                top: '45.9%',
                left: '51.9%',
                width: '3.1%',
                height: '2.5%'
              },
              model: '',
              solution: 's'
            },
            {
              identifier: 'twentyseven',
              position: {
                top: '48.4%',
                left: '51.9%',
                width: '3.1%',
                height: '2.5%'
              },
              model: '',
              solution: 'e'
            },
            {
              identifier: 'twentyeight',
              position: {
                top: '51%',
                left: '51.9%',
                width: '3.1%',
                height: '2.5%'
              },
              model: '',
              solution: 'p'
            },
            {
              identifier: 'twentynine',
              position: {
                top: '53.5%',
                left: '51.9%',
                width: '3.1%',
                height: '2.5%'
              },
              model: '',
              solution: 't'
            },
            {
              identifier: 'thirty',
              position: {
                top: '56%',
                left: '51.9%',
                width: '3.1%',
                height: '2.5%'
              },
              model: '',
              solution: 'e'
            },
            {
              identifier: 'thirtyone',
              position: {
                top: '58.5%',
                left: '51.9%',
                width: '3.1%',
                height: '2.5%'
              },
              model: '',
              solution: 'm'
            },
            {
              identifier: 'thirtytwo',
              position: {
                top: '51.1%',
                left: '36.8%',
                width: '3.1%',
                height: '2.5%'
              },
              model: '',
              solution: 'o'
            },
            {
              identifier: 'thirtythree',
              position: {
                top: '53.5%',
                left: '40%',
                width: '3.1%',
                height: '2.5%'
              },
              model: '',
              solution: 'k'
            },
            {
              identifier: 'thirtyfour',
              position: {
                top: '56%',
                left: '43.2%',
                width: '3.1%',
                height: '2.5%'
              },
              model: '',
              solution: 't'
            },
            {
              identifier: 'thirtyfive',
              position: {
                top: '58.6%',
                left: '46.5%',
                width: '3.1%',
                height: '2.5%'
              },
              model: '',
              solution: 'o'
            },
            {
              identifier: 'thirtysix',
              position: {
                top: '61.5%',
                left: '33.6%',
                width: '3.1%',
                height: '2.5%'
              },
              model: '',
              solution: 'n'
            },
            {
              identifier: 'thirtyseven',
              position: {
                top: '61.5%',
                left: '36.8%',
                width: '3.1%',
                height: '2.5%'
              },
              model: '',
              solution: 'o'
            },
            {
              identifier: 'thirtyeight',
              position: {
                top: '61.5%',
                left: '40%',
                width: '3.1%',
                height: '2.5%'
              },
              model: '',
              solution: 'v'
            },
            {
              identifier: 'thirtynine',
              position: {
                top: '61.5%',
                left: '43.2%',
                width: '3.1%',
                height: '2.5%'
              },
              model: '',
              solution: 'e'
            },
            {
              identifier: 'fourty',
              position: {
                top: '61.5%',
                left: '46.4%',
                width: '3.1%',
                height: '2.5%'
              },
              model: '',
              solution: 'm'
            },
            {
              identifier: 'fourtyone',
              position: {
                top: '74.4%',
                left: '33.6%',
                width: '3.1%',
                height: '2.5%'
              },
              model: '',
              solution: 'd'
            },
            {
              identifier: 'fourtytwo',
              position: {
                top: '71.8%',
                left: '36.8%',
                width: '3.1%',
                height: '2.5%'
              },
              model: '',
              solution: 'e'
            },
            {
              identifier: 'fourtythree',
              position: {
                top: '69.4%',
                left: '40%',
                width: '3.1%',
                height: '2.5%'
              },
              model: '',
              solution: 'z'
            },
            {
              identifier: 'fourtyfour',
              position: {
                top: '66.8%',
                left: '43.2%',
                width: '3.1%',
                height: '2.5%'
              },
              model: '',
              solution: 'e'
            },
            {
              identifier: 'fourtyfive',
              position: {
                top: '64.3%',
                left: '46.5%',
                width: '3.1%',
                height: '2.5%'
              },
              model: '',
              solution: 'm'
            },
            {
              identifier: 'fourtysix',
              position: {
                top: '69.1%',
                left: '60.6%',
                width: '3.1%',
                height: '2.5%'
              },
              model: '',
              solution: 'e'
            },
            {
              identifier: 'fourtyseven',
              position: {
                top: '69.1%',
                left: '63.8%',
                width: '3.1%',
                height: '2.5%'
              },
              model: '',
              solution: 'b'
            },
            {
              identifier: 'fourtyeight',
              position: {
                top: '69.1%',
                left: '67%',
                width: '3.1%',
                height: '2.5%'
              },
              model: '',
              solution: 'r'
            },
            {
              identifier: 'fourtynine',
              position: {
                top: '69.1%',
                left: '70.2%',
                width: '3.1%',
                height: '2.5%'
              },
              model: '',
              solution: 'u'
            },
            {
              identifier: 'fifty',
              position: {
                top: '69.1%',
                left: '73.4%',
                width: '3.1%',
                height: '2.5%'
              },
              model: '',
              solution: 'a'
            },
            {
              identifier: 'fiftyone',
              position: {
                top: '69.1%',
                left: '76.6%',
                width: '3.1%',
                height: '2.5%'
              },
              model: '',
              solution: 'r'
            }
          ]
        }
      ],
      video: [
        {
          video: {
            source: 'p12_v1'
          },
          trigger: {
            button: {
              top: '68%'
            },
            zone: {
              top: '68%',
              bottom: '3%'
            }
          }
        }
      ]
    },
    '13': {
      static: [
        {
          image: 'pg13ex2',
          audio: {
            source: 'fundal',
            state: 'stopped'
          },
          trigger: {
            button: {
              top: '40%'
            },
            zone: {
              top: '40%',
              bottom: '3%'
            }
          }
        }
      ],
      exercise: [
        {
          type: 'typer',
          title: '„sch“ oder „ch“? Ergänze!',
          image: 'pg13ex1',
          trigger: {
            button: {
              top: '11%'
            },
            zone: {
              top: '11%',
              bottom: '66%'
            }
          },
          help: {
            toggle: false,
            text: 'Completeaza cu  “sch” sau “ch”. Cand ai terminat apasa pe cheita si verifica. Succes!'
          },
          data: [
            {
              identifier: 'one',
              position: {
                top: '38.9%',
                left: '10.5%',
                width: '4%'
              },
              model: '',
              solution: 'sch'
            },
            {
              identifier: 'two',
              position: {
                top: '38.9%',
                left: '20.3%',
                width: '4%'
              },
              model: '',
              solution: 'sch'
            },
            {
              identifier: 'three',
              position: {
                top: '38.9%',
                left: '29.7%',
                width: '4%'
              },
              model: '',
              solution: 'sch'
            },
            {
              identifier: 'four',
              position: {
                top: '43.7%',
                left: '19.3%',
                width: '4%'
              },
              model: '',
              solution: 'ch'
            },
            {
              identifier: 'five',
              position: {
                top: '43.7%',
                left: '45.5%',
                width: '4%'
              },
              model: '',
              solution: 'ch'
            },
            {
              identifier: 'six',
              position: {
                top: '48%',
                left: '2.5%',
                width: '4%'
              },
              model: '',
              solution: 'Sch'
            },
            {
              identifier: 'seven',
              position: {
                top: '48%',
                left: '18.3%',
                width: '4%'
              },
              model: '',
              solution: 'sch'
            },
            {
              identifier: 'eight',
              position: {
                top: '52.2%',
                left: '32.7%',
                width: '4%'
              },
              model: '',
              solution: 'ch'
            },
            {
              identifier: 'nine',
              position: {
                top: '52.2%',
                left: '41.3%',
                width: '4%'
              },
              model: '',
              solution: 'sch'
            },
            {
              identifier: 'ten',
              position: {
                top: '56.2%',
                left: '3.7%',
                width: '4%'
              },
              model: '',
              solution: 'ch'
            },
            {
              identifier: 'eleven',
              position: {
                top: '56.2%',
                left: '18%',
                width: '4%'
              },
              model: '',
              solution: 'ch'
            },
            {
              identifier: 'twelve',
              position: {
                top: '56.2%',
                left: '26.3%',
                width: '4%'
              },
              model: '',
              solution: 'sch'
            }
          ]
        }
      ]
    },
    '14': {
      exercise: [
        {
          type: 'typer',
          title: 'Wo ist was? Ergänze!',
          image: 'pg14ex5',
          trigger: {
            button: {
              top: '71%'
            },
            zone: {
              top: '71%',
              bottom: '3%'
            }
          },
          help: {
            toggle: false,
            text: 'Priveste imaginea si completeaza propozitiile. Cand ai terminat apasa pe cheita si verifica. Succes!'
          },
          data: [
            {
              identifier: 'one',
              position: {
                top: '62.8%',
                left: '41%',
                width: '18%'
              },
              model: '',
              solution: 'im'
            },
            {
              identifier: 'two',
              position: {
                top: '65.8%',
                left: '42%',
                width: '14%'
              },
              model: '',
              solution: 'auf'
            },
            {
              identifier: 'three',
              position: {
                top: '68.8%',
                left: '42%',
                width: '14%'
              },
              model: '',
              solution: 'in'
            },
            {
              identifier: 'four',
              position: {
                top: '71.8%',
                left: '42%',
                width: '14%'
              },
              model: '',
              solution: 'auf'
            },
            {
              identifier: 'five',
              position: {
                top: '74.8%',
                left: '46%',
                width: '12%'
              },
              model: '',
              solution: 'unter'
            },
            {
              identifier: 'six',
              position: {
                top: '77.8%',
                left: '44%',
                width: '13%'
              },
              model: '',
              solution: 'vor'
            },
            {
              identifier: 'seven',
              position: {
                top: '80.8%',
                left: '43%',
                width: '16%'
              },
              model: '',
              solution: 'über'
            }
          ]
        }
      ]
    },
    '15': {
      static: [
        {
          image: 'pg15static1',
          audio: {
            source: 'fundal',
            state: 'stopped'
          },
          trigger: {
            button: {
              top: '15%'
            },
            zone: {
              top: '20%',
              bottom: '56%',
              left: '18%',
              width: '36%'
            }
          }
        },
        {
          image: 'pg15static2',
          audio: {
            source: 'fundal',
            state: 'stopped'
          },
          trigger: {
            button: {
              top: '20%'
            },
            zone: {
              top: '20%',
              bottom: '61%',
              left: '59%',
              width: '36%'
            }
          }
        },
        {
          image: 'pg15static3',
          audio: {
            source: 'fundal',
            state: 'stopped'
          },
          trigger: {
            button: {
              top: '49%'
            },
            zone: {
              top: '44%',
              bottom: '40%',
              left: '48%',
              width: '40%'
            }
          }
        },
        {
          image: 'pg15static4',
          audio: {
            source: 'fundal',
            state: 'stopped'
          },
          trigger: {
            button: {
              top: '61%'
            },
            zone: {
              top: '61%',
              bottom: '21%',
              left: '67%',
              width: '27%'
            }
          }
        }
      ]
    },
    '16': {
      video: [
        {
          video: {
            source: 'p16_v1'
          },
          trigger: {
            button: {
              top: '8%'
            },
            zone: {
              top: '8%',
              bottom: '3%'
            }
          }
        }
      ]
    },
    '17': {
      video: [
        {
          video: {
            source: 'p17_v1'
          },
          trigger: {
            button: {
              top: '8%'
            },
            zone: {
              top: '8%',
              bottom: '3%'
            }
          }
        }
      ]
    },
    '18': {
      static: [
        {
          image: 'pg18ex3',
          audio: {
            source: 'fundal',
            state: 'stopped'
          },
          trigger: {
            button: {
              top: '69%'
            },
            zone: {
              top: '69%',
              bottom: '3%'
            }
          }
        }
      ],
      video: [
        {
          video: {
            source: 'p18_v1'
          },
          trigger: {
            button: {
              top: '7%'
            },
            zone: {
              top: '7%',
              bottom: '32%'
            }
          }
        }
      ]
    },
    '19': {
      static: [
        {
          image: 'pg19nicht',
          audio: {
            source: 'fundal',
            state: 'stopped'
          },
          trigger: {
            button: {
              top: '67%'
            },
            zone: {
              top: '67%',
              bottom: '3%'
            }
          }
        }
      ],
      video: [
        {
          video: {
            source: 'p19_v1'
          },
          trigger: {
            button: {
              top: '7%'
            },
            zone: {
              top: '7%',
              bottom: '34%'
            }
          }
        }
      ]
    },
    '20': {
      static: [
        {
          image: 'pg20ex5',
          audio: {
            source: 'fundal',
            state: 'stopped'
          },
          trigger: {
            button: {
              top: '12%'
            },
            zone: {
              top: '12%',
              bottom: '17%'
            }
          }
        }
      ]
    },
    '21': {
      static: [
        {
          image: 'pg21ex7',
          audio: {
            source: 'fundal',
            state: 'stopped'
          },
          trigger: {
            button: {
              top: '21%'
            },
            zone: {
              top: '21%',
              bottom: '46%'
            }
          }
        }
      ],
      exercise: [
        {
          type: 'typer',
          title: 'Ergänze!',
          image: 'pg21ex8',
          trigger: {
            button: {
              top: '58%'
            },
            zone: {
              top: '58%',
              bottom: '3%'
            }
          },
          help: {
            toggle: false,
            text: 'Completeaza facand comparatie. Cand ai terminat apasa pe cheita si verifica. Succes!'
          },
          data: [
            {
              identifier: 'one',
              position: {
                top: '42.3%',
                left: '59%',
                width: '28%'
              },
              model: '',
              solution: 'Fisch'
            },
            {
              identifier: 'two',
              position: {
                top: '48.8%',
                left: '59%',
                width: '28%'
              },
              model: '',
              solution: 'Känguru'
            },
            {
              identifier: 'three',
              position: {
                top: '55.3%',
                left: '59%',
                width: '28%'
              },
              model: '',
              solution: 'Leopard'
            },
            {
              identifier: 'four',
              position: {
                top: '61.8%',
                left: '59%',
                width: '28%'
              },
              model: '',
              solution: 'Affe'
            },
            {
              identifier: 'five',
              position: {
                top: '68.2%',
                left: '59%',
                width: '28%'
              },
              model: '',
              solution: 'Vogel'
            }
          ]
        }
      ]
    },
    '22': {
      static: [
        {
          image: 'pg22-23ex9',
          audio: {
            source: 'fundal',
            state: 'stopped'
          },
          trigger: {
            button: {
              top: '13%'
            },
            zone: {
              top: '13%',
              bottom: '3%'
            }
          }
        }
      ]
    },
    '23': {
      static: [
        {
          image: 'pg22-23ex9',
          audio: {
            source: 'fundal',
            state: 'stopped'
          },
          trigger: {
            button: {
              top: '13%'
            },
            zone: {
              top: '13%',
              bottom: '3%'
            }
          }
        }
      ]
    },
    '24': {
      static: [
        {
          image: 'pg24ex10static1',
          audio: {
            source: 'fundal',
            state: 'stopped'
          },
          trigger: {
            button: {
              top: '14%'
            },
            zone: {
              top: '14%',
              bottom: '7%',
              left: '7%',
              width: '49%'
            }
          }
        },
        {
          image: 'pg24ex10static2',
          audio: {
            source: 'fundal',
            state: 'stopped'
          },
          trigger: {
            button: {
              top: '20%'
            },
            zone: {
              top: '16%',
              bottom: '31%',
              left: '57%',
              width: '39%'
            }
          }
        }
      ]
    },
    '25': {
      exercise: [
        {
          type: 'typer',
          title: 'Wie viele Tiere gibt es im Safaripark? Zähl und schreib!',
          image: 'pg25ex1',
          trigger: {
            button: {
              top: '14%'
            },
            zone: {
              top: '14%',
              bottom: '4%'
            }
          },
          help: {
            toggle: false,
            text: 'Priveste imaginea si numara animalele. Cand ai terminat apasa pe cheita si verifica. Succes!'
          },
          data: [
            {
              identifier: 'one',
              position: {
                top: '68%',
                left: '22%',
                width: '66%'
              },
              model: '',
              solution: 'sechs Giraffen.'
            },
            {
              identifier: 'two',
              position: {
                top: '70.9%',
                left: '22%',
                width: '66%'
              },
              model: '',
              solution: 'vier Elefanten.'
            },
            {
              identifier: 'three',
              position: {
                top: '73.8%',
                left: '22%',
                width: '66%'
              },
              model: '',
              solution: 'zwei Krokodile.'
            },
            {
              identifier: 'four',
              position: {
                top: '76.7%',
                left: '22%',
                width: '66%'
              },
              model: '',
              solution: 'fünf Löwen.'
            },
            {
              identifier: 'five',
              position: {
                top: '79.6%',
                left: '22%',
                width: '66%'
              },
              model: '',
              solution: 'zwei Tiger.'
            },
            {
              identifier: 'six',
              position: {
                top: '82.5%',
                left: '22%',
                width: '66%'
              },
              model: '',
              solution: 'drei Nilpferde.'
            },
            {
              identifier: 'seven',
              position: {
                top: '85.4%',
                left: '22%',
                width: '66%'
              },
              model: '',
              solution: 'acht Schlangen.'
            }
          ]
        }
      ]
    },
    '26': {
      video: [
        {
          video: {
            source: 'p26_v1'
          },
          trigger: {
            button: {
              top: '8%'
            },
            zone: {
              top: '8%',
              bottom: '3%'
            }
          }
        }
      ]
    },
    '27': {
      exercise: [
        {
          type: 'checker',
          title: 'Kreuze RICHTIG oder FALSCH an!',
          image: 'pg27ex3',
          trigger: {
            button: {
              top: '6%'
            },
            zone: {
              top: '6%',
              bottom: '35%'
            }
          },
          help: {
            toggle: false,
            text: 'Citeste propozitiile si bifeaza R(corect) sau F(gresit). Cand ai terminat apasa pe cheita si verifica. Succes!'
          },
          data: [
            {
              identifier: 'one',
              model: '',
              position: {
                top: '58.2%',
                left: '38.6%',
                width: '8.4%',
                height: '2.5%'
              },
              answerTrue: {
                top: '9%',
                left: '54%'
              },
              answerFalse: {
                top: '9%',
                left: '8%'
              }
            },
            {
              identifier: 'two',
              model: '',
              position: {
                top: '62.2%',
                left: '38.6%',
                width: '8.4%',
                height: '2.5%'
              },
              answerFalse: {
                top: '9%',
                left: '8%'
              },
              answerTrue: {
                top: '9%',
                left: '54%'
              }
            },
            {
              identifier: 'three',
              model: '',
              position: {
                top: '65.9%',
                left: '38.6%',
                width: '8.4%',
                height: '2.5%'
              },
              answerTrue: {
                top: '9%',
                left: '8%'
              },
              answerFalse: {
                top: '9%',
                left: '54%'
              }
            },
            {
              identifier: 'four',
              model: '',
              position: {
                top: '69.8%',
                left: '38.6%',
                width: '8.4%',
                height: '2.5%'
              },
              answerTrue: {
                top: '9%',
                left: '54%'
              },
              answerFalse: {
                top: '9%',
                left: '8%'
              }
            },
            {
              identifier: 'five',
              model: '',
              position: {
                top: '73.7%',
                left: '38.6%',
                width: '8.4%',
                height: '2.5%'
              },
              answerFalse: {
                top: '9%',
                left: '54%'
              },
              answerTrue: {
                top: '9%',
                left: '8%'
              }
            },
            {
              identifier: 'six',
              model: '',
              position: {
                top: '58.2%',
                left: '82.3%',
                width: '8.4%',
                height: '2.5%'
              },
              answerFalse: {
                top: '9%',
                left: '54%'
              },
              answerTrue: {
                top: '9%',
                left: '8%'
              }
            },
            {
              identifier: 'seven',
              model: '',
              position: {
                top: '62.2%',
                left: '82.3%',
                width: '8.4%',
                height: '2.5%'
              },
              answerTrue: {
                top: '9%',
                left: '54%'
              },
              answerFalse: {
                top: '9%',
                left: '8%'
              }
            },
            {
              identifier: 'eight',
              model: '',
              position: {
                top: '65.9%',
                left: '82.3%',
                width: '8.4%',
                height: '2.5%'
              },
              answerFalse: {
                top: '9%',
                left: '54%'
              },
              answerTrue: {
                top: '9%',
                left: '8%'
              }
            },
            {
              identifier: 'nine',
              model: '',
              position: {
                top: '69.8%',
                left: '82.3%',
                width: '8.4%',
                height: '2.5%'
              },
              answerFalse: {
                top: '9%',
                left: '54%'
              },
              answerTrue: {
                top: '9%',
                left: '8%'
              }
            },
            {
              identifier: 'ten',
              model: '',
              position: {
                top: '73.7%',
                left: '82.3%',
                width: '8.4%',
                height: '2.5%'
              },
              answerTrue: {
                top: '9%',
                left: '54%'
              },
              answerFalse: {
                top: '9%',
                left: '8%'
              }
            }
          ]
        }
      ]
    },
    '29': {
      static: [
        {
          image: 'pg29static1',
          audio: {
            source: 'fundal',
            state: 'stopped'
          },
          trigger: {
            button: {
              top: '27%'
            },
            zone: {
              top: '27%',
              bottom: '37%',
              left: '12%',
              width: '31%'
            }
          }
        },
        {
          image: 'pg29static2',
          audio: {
            source: 'fundal',
            state: 'stopped'
          },
          trigger: {
            button: {
              top: '33%'
            },
            zone: {
              top: '31%',
              bottom: '42%',
              left: '45%',
              width: '48%'
            }
          }
        },
        {
          image: 'pg29static3',
          audio: {
            source: 'fundal',
            state: 'stopped'
          },
          trigger: {
            button: {
              top: '64%'
            },
            zone: {
              top: '64%',
              bottom: '1%',
              left: '8%',
              width: '39%'
            }
          }
        }
      ]
    },
    '30': {
      video: [
        {
          video: {
            source: 'p30_v1'
          },
          trigger: {
            button: {
              top: '7%'
            },
            zone: {
              top: '7%',
              bottom: '4%'
            }
          }
        }
      ]
    },
    '31': {
      video: [
        {
          video: {
            source: 'p31_v1'
          },
          trigger: {
            button: {
              top: '7%'
            },
            zone: {
              top: '7%',
              bottom: '4%'
            }
          }
        }
      ]
    },
    '32': {
      exercise: [
        {
          type: 'checker',
          title: 'Hör zu, lies und kreuze RICHTIG oder FALSCH an!',
          image: 'pg32ex3',
          audio: {
            source: 'pg32ex3',
            state: 'stopped'
          },
          trigger: {
            button: {
              top: '73%'
            },
            zone: {
              top: '73%',
              bottom: '2%'
            }
          },
          help: {
            toggle: false,
            text: 'Citeste propozitiile si bifeaza R(corect) sau F(gresit). Cand ai terminat apasa pe cheita si verifica. Succes!'
          },
          data: [
            {
              identifier: 'one',
              model: '',
              position: {
                top: '75.4%',
                left: '55.2%',
                width: '8.4%',
                height: '2.5%'
              },
              answerFalse: {
                top: '9%',
                left: '54%'
              },
              answerTrue: {
                top: '9%',
                left: '8%'
              }
            },
            {
              identifier: 'two',
              model: '',
              position: {
                top: '78.2%',
                left: '55.2%',
                width: '8.4%',
                height: '2.5%'
              },
              answerTrue: {
                top: '9%',
                left: '54%'
              },
              answerFalse: {
                top: '9%',
                left: '8%'
              }
            },
            {
              identifier: 'three',
              model: '',
              position: {
                top: '80.9%',
                left: '55.2%',
                width: '8.4%',
                height: '2.5%'
              },
              answerFalse: {
                top: '9%',
                left: '54%'
              },
              answerTrue: {
                top: '9%',
                left: '8%'
              }
            },
            {
              identifier: 'four',
              model: '',
              position: {
                top: '83.6%',
                left: '55.2%',
                width: '8.4%',
                height: '2.5%'
              },
              answerFalse: {
                top: '9%',
                left: '54%'
              },
              answerTrue: {
                top: '9%',
                left: '8%'
              }
            },
            {
              identifier: 'five',
              model: '',
              position: {
                top: '86.3%',
                left: '55.2%',
                width: '8.4%',
                height: '2.5%'
              },
              answerFalse: {
                top: '9%',
                left: '54%'
              },
              answerTrue: {
                top: '9%',
                left: '8%'
              }
            },
            {
              identifier: 'six',
              model: '',
              position: {
                top: '89.1%',
                left: '55.2%',
                width: '8.4%',
                height: '2.5%'
              },
              answerTrue: {
                top: '9%',
                left: '54%'
              },
              answerFalse: {
                top: '9%',
                left: '8%'
              }
            },
            {
              identifier: 'seven',
              model: '',
              position: {
                top: '91.8%',
                left: '55.2%',
                width: '8.4%',
                height: '2.5%'
              },
              answerFalse: {
                top: '9%',
                left: '54%'
              },
              answerTrue: {
                top: '9%',
                left: '8%'
              }
            }
          ]
        }
      ],
      video: [
        {
          video: {
            source: 'p32_v1'
          },
          trigger: {
            button: {
              top: '7%'
            },
            zone: {
              top: '7%',
              bottom: '27%'
            }
          }
        }
      ]
    },
    '33': {
      static: [
        {
          image: 'pg33nicht',
          audio: {
            source: 'fundal',
            state: 'stopped'
          },
          trigger: {
            button: {
              top: '60%'
            },
            zone: {
              top: '60%',
              bottom: '3%'
            }
          }
        }
      ],
      video: [
        {
          video: {
            source: 'p33_v1'
          },
          trigger: {
            button: {
              top: '18%'
            },
            zone: {
              top: '18%',
              bottom: '41%'
            }
          }
        }
      ]
    },
    '34': {
      video: [
        {
          video: {
            source: 'p34_v1'
          },
          trigger: {
            button: {
              top: '7%'
            },
            zone: {
              top: '7%',
              bottom: '3%'
            }
          }
        }
      ]
    },
    '35': {
      static: [
        {
          image: 'pg35nicht',
          audio: {
            source: 'fundal',
            state: 'stopped'
          },
          trigger: {
            button: {
              top: '60%'
            },
            zone: {
              top: '60%',
              bottom: '3%'
            }
          }
        }
      ],
      video: [
        {
          video: {
            source: 'p35_v1'
          },
          trigger: {
            button: {
              top: '7%'
            },
            zone: {
              top: '7%',
              bottom: '41%'
            }
          }
        }
      ]
    },
    '36': {
      exercise: [
        {
          type: 'type',
          title: 'Hör zu und schreib die Nummern!',
          image: 'pg36ex8',
          audio: {
            source: 'pg36ex8',
            state: 'stopped'
          },
          trigger: {
            button: {
              top: '7%'
            },
            zone: {
              top: '7%',
              bottom: '56%'
            }
          },
          help: {
            toggle: false,
            text: 'Asculta si scrie numarul. Cand ai terminat apasa pe cheita si verifica. Succes!'
          },
          data: [
            {
              identifier: 'one',
              position: {
                top: '36.9%',
                left: '13%',
                width: '5%',
                height: '4%'
              },
              model: '',
              solution: '2'
            },
            {
              identifier: 'two',
              position: {
                top: '35.9%',
                left: '39%',
                width: '5%',
                height: '4%'
              },
              model: '',
              solution: '4'
            },
            {
              identifier: 'three',
              position: {
                top: '36.9%',
                left: '63.1%',
                width: '5%',
                height: '4%'
              },
              model: '',
              solution: '3'
            },
            {
              identifier: 'four',
              position: {
                top: '49.9%',
                left: '12.5%',
                width: '5%',
                height: '4%'
              },
              model: '',
              solution: '1'
            },
            {
              identifier: 'five',
              position: {
                top: '48.3%',
                left: '45.8%',
                width: '5%',
                height: '4%'
              },
              model: '',
              solution: '6'
            },
            {
              identifier: 'six',
              position: {
                top: '57.8%',
                left: '69.8%',
                width: '5%',
                height: '4%'
              },
              model: '',
              solution: '5'
            }
          ]
        }
      ],
      video: [
        {
          video: {
            source: 'p36_v1'
          },
          trigger: {
            button: {
              top: '44%'
            },
            zone: {
              top: '44%',
              bottom: '3%'
            }
          }
        }
      ]
    },
    '37': {
      video: [
        {
          video: {
            source: 'p37_v1'
          },
          trigger: {
            button: {
              top: '7%'
            },
            zone: {
              top: '7%',
              bottom: '21%'
            }
          }
        }
      ]
    },
    '38': {
      static: [
        {
          image: 'pg38ex12',
          audio: {
            source: 'fundal',
            state: 'stopped'
          },
          trigger: {
            button: {
              top: '15%'
            },
            zone: {
              top: '15%',
              bottom: '27%'
            }
          }
        }
      ]
    },
    '39': {
      static: [
        {
          image: 'pg39nicht',
          audio: {
            source: 'fundal',
            state: 'stopped'
          },
          trigger: {
            button: {
              top: '69%'
            },
            zone: {
              top: '69%',
              bottom: '3%'
            }
          }
        }
      ],
      video: [
        {
          video: {
            source: 'p39_v1'
          },
          trigger: {
            button: {
              top: '9%'
            },
            zone: {
              top: '9%',
              bottom: '32%'
            }
          }
        }
      ]
    },
    '40': {
      static: [
        {
          image: 'pg40ex15',
          audio: {
            source: 'fundal',
            state: 'stopped'
          },
          trigger: {
            button: {
              top: '18%'
            },
            zone: {
              top: '18%',
              bottom: '18%'
            }
          }
        }
      ]
    },
    '41': {
      static: [
        {
          image: 'pg41ex17',
          audio: {
            source: 'fundal',
            state: 'stopped'
          },
          trigger: {
            button: {
              top: '12%'
            },
            zone: {
              top: '12%',
              bottom: '48%'
            }
          }
        },
        {
          image: 'pg41marions',
          audio: {
            source: 'fundal',
            state: 'stopped'
          },
          trigger: {
            button: {
              top: '54%'
            },
            zone: {
              top: '54%',
              bottom: '3%'
            }
          }
        }
      ]
    },
    '42': {
      static: [
        {
          image: 'pg42ichhabe',
          audio: {
            source: 'fundal',
            state: 'stopped'
          },
          trigger: {
            button: {
              top: '74%'
            },
            zone: {
              top: '74%',
              bottom: '3%'
            }
          }
        }
      ],
      video: [
        {
          video: {
            source: 'p42_v1'
          },
          trigger: {
            button: {
              top: '6%'
            },
            zone: {
              top: '6%',
              bottom: '27%'
            }
          }
        }
      ]
    },
    '44': {
      video: [
        {
          video: {
            source: 'p44_v1'
          },
          trigger: {
            button: {
              top: '7%'
            },
            zone: {
              top: '7%',
              bottom: '3%'
            }
          }
        }
      ]
    },
    '46': {
      exercise: [
        {
          type: 'picker',
          title: 'Finde acht Kleidungsstücke.',
          image: 'pg46ex6-1',
          trigger: {
            button: {
              top: '9%'
            },
            zone: {
              top: '9%',
              bottom: '49%'
            }
          },
          help: {
            toggle: false,
            text: 'Gaseste opt piese de imbracaminte. Cand ai terminat apasa pe cheita si verifica. Succes!'
          },
          data: [
            {
              identifier: 'one',
              model: '',
              position: {
                top: '32.5%',
                left: '62.5%',
                width: '19.6%',
                height: '4.1%'
              },
              answer: {
                left: '0'
              }
            },
            {
              identifier: 'two',
              model: '',
              position: {
                top: '36.4%',
                left: '57.5%',
                width: '24.6%',
                height: '4.1%'
              },
              answer: {
                left: '0'
              }
            },
            {
              identifier: 'three',
              model: '',
              position: {
                top: '40.2%',
                left: '52.6%',
                width: '39.4%',
                height: '4.1%'
              },
              answer: {
                left: '0'
              }
            },
            {
              identifier: 'four',
              model: '',
              position: {
                top: '44%',
                left: '57.5%',
                width: '29.6%',
                height: '4.1%'
              },
              answer: {
                left: '0'
              }
            },
            {
              identifier: 'five',
              model: '',
              position: {
                top: '47.9%',
                left: '62.5%',
                width: '29.5%',
                height: '4.1%'
              },
              answer: {
                left: '0'
              }
            },
            {
              identifier: 'six',
              model: '',
              position: {
                top: '51.8%',
                left: '57.5%',
                width: '24.6%',
                height: '4.1%'
              },
              answer: {
                left: '0'
              }
            },
            {
              identifier: 'seven',
              model: '',
              position: {
                top: '55.5%',
                left: '57.5%',
                width: '34.6%',
                height: '4.1%'
              },
              answer: {
                left: '0'
              }
            },
            {
              identifier: 'eight',
              model: '',
              position: {
                top: '59.5%',
                left: '57.5%',
                width: '29.6%',
                height: '4.1%'
              },
              answer: {
                left: '0'
              }
            }
          ]
        },
        {
          type: 'type',
          title: ' Was übrig bleibt bildet Fluffys Aussage. Schreib sie in die Sprechblase!',
          image: 'pg46ex6-2',
          trigger: {
            button: {
              top: '52%'
            },
            zone: {
              top: '52%',
              bottom: '6%',
              left: '46%'
            }
          },
          help: {
            toggle: false,
            text: 'Cu literele ramase afli ce a spus Fluffy. Cand ai terminat apasa pe cheita si verifica. Succes!'
          },
          data: [
            {
              identifier: 'one',
              position: {
                top: '31.4%',
                left: '54%',
                width: '1.9%',
                height: '2.2%'
              },
              model: '',
              solution: 'i'
            },
            {
              identifier: 'two',
              position: {
                top: '31.4%',
                left: '55.8%',
                width: '1.9%',
                height: '2.2%'
              },
              model: '',
              solution: 'c'
            },
            {
              identifier: 'three',
              position: {
                top: '31.4%',
                left: '57.6%',
                width: '1.9%',
                height: '2.2%'
              },
              model: '',
              solution: 'h'
            },
            {
              identifier: 'four',
              position: {
                top: '31.4%',
                left: '60.6%',
                width: '1.9%',
                height: '2.2%'
              },
              model: '',
              solution: 'm'
            },
            {
              identifier: 'five',
              position: {
                top: '31.4%',
                left: '62.5%',
                width: '1.9%',
                height: '2.2%'
              },
              model: '',
              solution: 'a'
            },
            {
              identifier: 'six',
              position: {
                top: '31.4%',
                left: '64.3%',
                width: '1.9%',
                height: '2.2%'
              },
              model: '',
              solution: 'g'
            },
            {
              identifier: 'seven',
              position: {
                top: '35.1%',
                left: '50.5%',
                width: '1.9%',
                height: '2.2%'
              },
              model: '',
              solution: 'm'
            },
            {
              identifier: 'eight',
              position: {
                top: '35.1%',
                left: '52.4%',
                width: '1.9%',
                height: '2.2%'
              },
              model: '',
              solution: 'e'
            },
            {
              identifier: 'nine',
              position: {
                top: '35.1%',
                left: '54.2%',
                width: '1.9%',
                height: '2.2%'
              },
              model: '',
              solution: 'i'
            },
            {
              identifier: 'ten',
              position: {
                top: '35.1%',
                left: '55.9%',
                width: '1.9%',
                height: '2.2%'
              },
              model: '',
              solution: 'n'
            },
            {
              identifier: 'eleven',
              position: {
                top: '35.1%',
                left: '57.7%',
                width: '1.9%',
                height: '2.2%'
              },
              model: '',
              solution: 'e'
            },
            {
              identifier: 'twelve',
              position: {
                top: '35.1%',
                left: '59.4%',
                width: '1.9%',
                height: '2.2%'
              },
              model: '',
              solution: 'n'
            },
            {
              identifier: 'thirteen',
              position: {
                top: '35.1%',
                left: '62.3%',
                width: '1.9%',
                height: '2.2%'
              },
              model: '',
              solution: 's'
            },
            {
              identifier: 'fourteen',
              position: {
                top: '35.1%',
                left: '64.1%',
                width: '1.9%',
                height: '2.2%'
              },
              model: '',
              solution: 'c'
            },
            {
              identifier: 'fifteen',
              position: {
                top: '35.1%',
                left: '65.8%',
                width: '1.9%',
                height: '2.2%'
              },
              model: '',
              solution: 'h'
            },
            {
              identifier: 'sixteen',
              position: {
                top: '35.1%',
                left: '67.6%',
                width: '1.9%',
                height: '2.2%'
              },
              model: '',
              solution: 'a'
            },
            {
              identifier: 'seventeen',
              position: {
                top: '35.1%',
                left: '69.4%',
                width: '1.9%',
                height: '2.2%'
              },
              model: '',
              solution: 'l'
            }
          ]
        },
        {
          type: 'linker',
          image: '02',
          title: 'Verbinde die Gegensätze!',
          trigger: {
            button: {
              top: '78%'
            },
            zone: {
              top: '76%',
              bottom: '7%'
            }
          },
          help: {
            toggle: false,
            text: 'Uneste fiecare adjectiv cu opusul lui. Cand ai terminat apasa pe cheita si verifica. Succes!'
          },
          data: [
            {
              identifier: 'lang',
              style: {
                top: '15%',
                left: '10%',
                width: '20%',
                height: 'auto',
                color: '#8BCB6A'
              },
              image: {
                src: '46-lang.png'
              },
              sourceAnchors: ["RightMiddle"],
              targetAnchors: []
            },
            {
              identifier: 'alt',
              style: {
                top: '35%',
                left: '10%',
                width: '20%',
                height: 'auto',
                color: '#8BCB6A'
              },
              image: {
                src: '46-alt.png'
              },
              sourceAnchors: ["RightMiddle"],
              targetAnchors: []
            },
            {
              identifier: 'grob',
              style: {
                top: '55%',
                left: '10%',
                width: '20%',
                height: 'auto',
                color: '#8BCB6A'
              },
              image: {
                src: '46-grob.png'
              },
              sourceAnchors: ["RightMiddle"],
              targetAnchors: []
            },
            {
              identifier: 'neu',
              style: {
                top: '15%',
                left: '65%',
                width: '25%',
                height: 'auto'
              },
              image: {
                src: '46-neu.png'
              },
              solution: 'alt',
              solutionImg: {
                src: '46-neu.png'
              },
              sourceAnchors: [],
              targetAnchors: ["LeftMiddle"]
            },
            {
              identifier: 'klein',
              style: {
                top: '35%',
                left: '65%',
                width: '25%',
                height: 'auto'
              },
              image: {
                src: '46-klein.png'
              },
              solution: 'grob',
              solutionImg: {
                src: '46-klein.png'
              },
              sourceAnchors: [],
              targetAnchors: ["LeftMiddle"]
            },
            {
              identifier: 'kurz',
              style: {
                top: '55%',
                left: '65%',
                width: '25%',
                height: 'auto'
              },
              image: {
                src: '46-kurz.png'
              },
              solution: 'lang',
              solutionImg: {
                src: '46-kurz.png'
              },
              sourceAnchors: [],
              targetAnchors: ["LeftMiddle"]
            },
          ]
        }
      ]
    },
    '47': {
      static: [
        {
          image: 'pg47static1',
          audio: {
            source: 'fundal',
            state: 'stopped'
          },
          trigger: {
            button: {
              top: '22%'
            },
            zone: {
              top: '22%',
              bottom: '48%',
              left: '10%',
              width: '40%'
            }
          }
        },
        {
          image: 'pg47static2',
          audio: {
            source: 'fundal',
            state: 'stopped'
          },
          trigger: {
            button: {
              top: '28%'
            },
            zone: {
              top: '22%',
              bottom: '48%',
              left: '51%',
              width: '40%'
            }
          }
        },
        {
          image: 'pg47static3',
          audio: {
            source: 'fundal',
            state: 'stopped'
          },
          trigger: {
            button: {
              top: '58%'
            },
            zone: {
              top: '58%',
              bottom: '5%',
              left: '8%',
              width: '38%'
            }
          }
        }
      ]
    },
    '48': {
      video: [
        {
          video: {
            source: 'p48_v1'
          },
          trigger: {
            button: {
              top: '8%'
            },
            zone: {
              top: '8%',
              bottom: '4%'
            }
          }
        }
      ]
    },
    '49': {
      video: [
        {
          video: {
            source: 'p49_v1'
          },
          trigger: {
            button: {
              top: '8%'
            },
            zone: {
              top: '8%',
              bottom: '4%'
            }
          }
        }
      ]
    },
    '50': {
      static: [
        {
          image: 'pg50nicht',
          audio: {
            source: 'fundal',
            state: 'stopped'
          },
          trigger: {
            button: {
              top: '46%'
            },
            zone: {
              top: '46%',
              bottom: '3%'
            }
          }
        }
      ],
      video: [
        {
          video: {
            source: 'p50_v1'
          },
          trigger: {
            button: {
              top: '7%'
            },
            zone: {
              top: '7%',
              bottom: '55%'
            }
          }
        }
      ]
    },
    '51': {
      video: [
        {
          video: {
            source: 'p51_v1'
          },
          trigger: {
            button: {
              top: '7%'
            },
            zone: {
              top: '7%',
              bottom: '4%'
            }
          }
        }
      ]
    },
    '52': {
      static: [
        {
          image: 'pg52ex4static1',
          audio: {
            source: 'pg52ex4-1',
            state: 'stopped'
          },
          trigger: {
            button: {
              top: '15%'
            },
            zone: {
              top: '15%',
              bottom: '54%'
            }
          }
        },
        {
          image: 'pg52ex4static2',
          audio: {
            source: 'pg52ex4-2',
            state: 'stopped'
          },
          trigger: {
            button: {
              top: '47%'
            },
            zone: {
              top: '47%',
              bottom: '28%'
            }
          }
        },
        {
          image: 'pg52ex4static3',
          audio: {
            source: 'pg52ex4-3',
            state: 'stopped'
          },
          trigger: {
            button: {
              top: '73%'
            },
            zone: {
              top: '73%',
              bottom: '4%'
            }
          }
        }
      ]
    },
    '53': {
      static: [
        {
          image: 'pg53nicht',
          audio: {
            source: 'fundal',
            state: 'stopped'
          },
          trigger: {
            button: {
              top: '46%'
            },
            zone: {
              top: '46%',
              bottom: '3%'
            }
          }
        }
      ],
      video: [
        {
          video: {
            source: 'p53_v1'
          },
          trigger: {
            button: {
              top: '8%'
            },
            zone: {
              top: '8%',
              bottom: '55%'
            }
          }
        }
      ]
    },
    '54': {
      video: [
        {
          video: {
            source: 'p54_v1'
          },
          trigger: {
            button: {
              top: '10%'
            },
            zone: {
              top: '10%',
              bottom: '3%'
            }
          }
        }
      ]
    },
    '55': {
      video: [
        {
          video: {
            source: 'p55_v1'
          },
          trigger: {
            button: {
              top: '10%'
            },
            zone: {
              top: '10%',
              bottom: '3%'
            }
          }
        }
      ]
    },
    '56': {
      video: [
        {
          video: {
            source: 'p56_v1'
          },
          trigger: {
            button: {
              top: '6%'
            },
            zone: {
              top: '6%',
              bottom: '3%'
            }
          }
        }
      ]
    },
    '57': {
      video: [
        {
          video: {
            source: 'p57_v1'
          },
          trigger: {
            button: {
              top: '6%'
            },
            zone: {
              top: '6%',
              bottom: '3%'
            }
          }
        }
      ]
    },
    '58': {
      static: [
        {
          image: 'pg58nicht',
          audio: {
            source: 'fundal',
            state: 'stopped'
          },
          trigger: {
            button: {
              top: '3%'
            },
            zone: {
              top: '3%',
              bottom: '3%'
            }
          }
        }
      ]
    },
    '60': {
      static: [
        {
          image: 'pg60ex12static1',
          audio: {
            source: 'pg60ex12',
            state: 'stopped'
          },
          trigger: {
            button: {
              top: '12%'
            },
            zone: {
              top: '12%',
              bottom: '42%'
            }
          }
        },
        {
          image: 'pg60ex12static2',
          audio: {
            source: 'fundal',
            state: 'stopped'
          },
          trigger: {
            button: {
              top: '59%'
            },
            zone: {
              top: '59%',
              bottom: '3%'
            }
          }
        }
      ]
    },
    '61': {
      static: [
        {
          image: 'pg61nicht',
          audio: {
            source: 'fundal',
            state: 'stopped'
          },
          trigger: {
            button: {
              top: '59%'
            },
            zone: {
              top: '59%',
              bottom: '18%'
            }
          }
        }
      ],
      video: [
        {
          video: {
            source: 'p61_v1'
          },
          trigger: {
            button: {
              top: '8%'
            },
            zone: {
              top: '8%',
              bottom: '42%'
            }
          }
        }
      ]
   },
   '62': {
      video: [
        {
          video: {
            source: 'p62_v1'
          },
          trigger: {
            button: {
              top: '11%'
            },
            zone: {
              top: '11%',
              bottom: '4%'
            }
          }
        }
      ]
    },
    '63': {
      video: [
        {
          video: {
            source: 'p63_v1'
          },
          trigger: {
            button: {
              top: '11%'
            },
            zone: {
              top: '11%',
              bottom: '4%'
            }
          }
        }
      ]
    },
    '64': {
      static: [
        {
          image: 'pg64ex16',
          audio: {
            source: 'fundal',
            state: 'stopped'
          },
          trigger: {
            button: {
              top: '14%'
            },
            zone: {
              top: '14%',
              bottom: '40%'
            }
          }
        }
      ]
    },
    '65': {
      static: [
        {
          image: 'pg65ex2',
          audio: {
            source: 'fundal',
            state: 'stopped'
          },
          trigger: {
            button: {
              top: '35%'
            },
            zone: {
              top: '35%',
              bottom: '50%'
            }
          }
        }
      ]
    },
    '66': {
      exercise: [
        {
          type: 'typer',
          title: 'Antworte!',
          image: 'pg66ex4',
          trigger: {
            button: {
              top: '9%'
            },
            zone: {
              top: '9%',
              bottom: '42%'
            }
          },
          help: {
            toggle: false,
            text: 'Raspunde la intrebari. Cand ai terminat apasa pe cheita si verifica. Succes!'
          },
          data: [
            {
              identifier: 'one',
              position: {
                top: '46%',
                left: '61%',
                width: '27%'
              },
              model: '',
              solution: 'vier Jahreszeiten.'
            },
            {
              identifier: 'two',
              position: {
                top: '50%',
                left: '44%',
                width: '44%'
              },
              model: '',
              solution: 'Ein Jahr hat zwölf Monate.'
            },
            {
              identifier: 'three',
              position: {
                top: '54%',
                left: '47%',
                width: '41%'
              },
              model: '',
              solution: 'Ein Monat hat vier Wochen.'
            },
            {
              identifier: 'four',
              position: {
                top: '58.2%',
                left: '46%',
                width: '42%'
              },
              model: '',
              solution: 'Eine Woche hat sieben Tage.'
            },
            {
              identifier: 'five',
              position: {
                top: '62.2%',
                left: '44%',
                width: '44%'
              },
              model: '',
              solution: 'Ein Tag hat vierundzwanzig Stunden.'
            },
            {
              identifier: 'six',
              position: {
                top: '66.3%',
                left: '48%',
                width: '40%'
              },
              model: '',
              solution: 'Eine Stunde hat sechzig Minuten.'
            },
            {
              identifier: 'seven',
              position: {
                top: '70.3%',
                left: '54%',
                width: '44%'
              },
              model: '',
              solution: 'Eine halbe Stunde hat dreißig Minuten.'
            },
            {
              identifier: 'eight',
              position: {
                top: '74.4%',
                left: '54%',
                width: '45%'
              },
              model: '',
              solution: 'Eine Viertelstunde hat fünfzehn Minuten.'
            }
          ]
        }
      ]
    },
    '67': {
      exercise: [
       {
          type: 'linker',
          image: '02',
          title: 'VERBINDE!',
          trigger: {
            button: {
              top: '10%'
            },
            zone: {
              top: '8%',
              bottom: '50%'
            }
          },
          help: {
            toggle: false,
            text: 'Uneste propozitiile cu imaginile corespunzatoare. Cand ai terminat apasa pe cheita si verifica. Succes! '
          },
          data: [
            {
              identifier: 'opa-steht-auf',
              style: {
                top: '15%',
                left: '42%',
                width: '15%',
                height: 'auto',
                color: '#8BCB6A'
              },
              image: {
                src: '67-opa-steht-auf.png'
              },
              sourceAnchors: ["LeftMiddle","RightMiddle"],
              targetAnchors: []
            },
            {
              identifier: 'die-lehrerin-fruhstuckt',
              style: {
                top: '28%',
                left: '37%',
                width: '25%',
                height: 'auto',
                color: '#8BCB6A'
              },
              image: {
                src: '67-die-lehrerin-fruhstuckt.png'
              },
              sourceAnchors: ["LeftMiddle","RightMiddle"],
              targetAnchors: []
            },
            {
              identifier: 'das-madchen-isst',
              style: {
                top: '41%',
                left: '39%',
                width: '20%',
                height: 'auto',
                color: '#8BCB6A'
              },
              image: {
                src: '67-das-madchen-isst.png'
              },
              sourceAnchors: ["LeftMiddle","RightMiddle"],
              targetAnchors: []
            },
            {
              identifier: 'der-schuler-macht-hausaufgaben',
              style: {
                top: '52%',
                left: '34%',
                width: '32%',
                height: 'auto',
                color: '#8BCB6A'
              },
              image: {
                src: '67-der-schuler-macht-hausaufgaben.png'
              },
              sourceAnchors: ["LeftMiddle","RightMiddle"],
              targetAnchors: []
            },
            {
              identifier: 'das-monster-sieht-fern',
              style: {
                top: '65%',
                left: '37%',
                width: '25%',
                height: 'auto',
                color: '#8BCB6A'
              },
              image: {
                src: '67-das-monster-sieht-fern.png'
              },
              sourceAnchors: ["LeftMiddle","RightMiddle"],
              targetAnchors: []
            },
            {
              identifier: 'oma-geht-ins-bett',
              style: {
                top: '78%',
                left: '39.5%',
                width: '20%',
                height: 'auto',
                color: '#8BCB6A'
              },
              image: {
                src: '67-oma-geht-ins-bett.png'
              },
              sourceAnchors: ["LeftMiddle","RightMiddle"],
              targetAnchors: []
            },
            {
              identifier: 'der-schuler',
              style: {
                top: '10%',
                left: '5%',
                width: '20%',
                height: 'auto'
              },
              image: {
                src: '67-der-schuler.png'
              },
              solution: 'der-schuler-macht-hausaufgaben',
              solutionImg: {
                src: '67-der-schuler.png'
              },
              sourceAnchors: [],
              targetAnchors: ["RightMiddle"]
            },
            {
              identifier: 'das-madchen',
              style: {
                top: '10%',
                left: '78%',
                width: '15%',
                height: 'auto'
              },
              image: {
                src: '67-das-madchen.png'
              },
              solution: 'das-madchen-isst',
              solutionImg: {
                src: '67-das-madchen.png'
              },
              sourceAnchors: [],
              targetAnchors: ["LeftMiddle"]
            },
            {
              identifier: 'die-lehrerin',
              style: {
                top: '38%',
                left: '5%',
                width: '20%',
                height: 'auto'
              },
              image: {
                src: '67-die-lehrerin.png'
              },
              solution: 'die-lehrerin-fruhstuckt',
              solutionImg: {
                src: '67-die-lehrerin.png'
              },
              sourceAnchors: [],
              targetAnchors: ["RightMiddle"]
            },
            {
              identifier: 'opa',
              style: {
                top: '38%',
                left: '75%',
                width: '20%',
                height: 'auto'
              },
              image: {
                src: '67-opa.png'
              },
              solution: 'opa-steht-auf',
              solutionImg: {
                src: '67-opa.png'
              },
              sourceAnchors: [],
              targetAnchors: ["LeftMiddle"]
            },
            {
              identifier: 'oma',
              style: {
                top: '65%',
                left: '5%',
                width: '20%',
                height: 'auto'
              },
              image: {
                src: '67-oma.png'
              },
              solution: 'oma-geht-ins-bett',
              solutionImg: {
                src: '67-oma.png'
              },
              sourceAnchors: [],
              targetAnchors: ["RightMiddle"]
            },
            {
              identifier: 'das-monster',
              style: {
                top: '65%',
                left: '75%',
                width: '20%',
                height: 'auto'
              },
              image: {
                src: '67-das-monster.png'
              },
              solution: 'das-monster-sieht-fern',
              solutionImg: {
                src: '67-das-monster.png'
              },
              sourceAnchors: [],
              targetAnchors: ["LeftMiddle"]
            }
          ]
        }
      ]
    },
    '69': {
      exercise: [
        {
          type: 'typer',
          title: 'Ergänze!',
          image: 'pg69ex10',
          trigger: {
            button: {
              top: '65%'
            },
            zone: {
              top: '62%',
              bottom: '7%'
            }
          },
          help: {
            toggle: false,
            text: 'Completeaza cu forma corecta. Cand ai terminat apasa pe cheita si verifica. Succes!'
          },
          data: [
            {
              identifier: 'one',
              position: {
                top: '35.7%',
                left: '9.5%',
                width: '7%'
              },
              model: '',
              solution: 'Am'
            },
            {
              identifier: 'two',
              position: {
                top: '35.7%',
                left: '25.5%',
                width: '7%'
              },
              model: '',
              solution: 'um'
            },
            {
              identifier: 'three',
              position: {
                top: '38.5%',
                left: '9.5%',
                width: '7%'
              },
              model: '',
              solution: 'Im'
            },
            {
              identifier: 'four',
              position: {
                top: '41.5%',
                left: '19.5%',
                width: '7%'
              },
              model: '',
              solution: 'im'
            },
            {
              identifier: 'five',
              position: {
                top: '41.5%',
                left: '48.5%',
                width: '7%'
              },
              model: '',
              solution: 'am'
            },
            {
              identifier: 'six',
              position: {
                top: '43.7%',
                left: '9.5%',
                width: '7%'
              },
              model: '',
              solution: 'Um'
            },
            {
              identifier: 'seven',
              position: {
                top: '43.7%',
                left: '50.5%',
                width: '7%'
              },
              model: '',
              solution: 'um'
            },
            {
              identifier: 'eight',
              position: {
                top: '49.3%',
                left: '9.5%',
                width: '7%'
              },
              model: '',
              solution: 'Im'
            },
            {
              identifier: 'nine',
              position: {
                top: '51.9%',
                left: '9.5%',
                width: '7%'
              },
              model: '',
              solution: 'Am'
            },
            {
              identifier: 'ten',
              position: {
                top: '51.9%',
                left: '58.5%',
                width: '7%'
              },
              model: '',
              solution: 'am'
            },
            {
              identifier: 'eleven',
              position: {
                top: '57.4%',
                left: '9.5%',
                width: '7%'
              },
              model: '',
              solution: 'Am'
            },
            {
              identifier: 'twelve',
              position: {
                top: '60.1%',
                left: '9.5%',
                width: '7%'
              },
              model: '',
              solution: 'Von'
            },
            {
              identifier: 'thirteen',
              position: {
                top: '60.1%',
                left: '19.5%',
                width: '7%'
              },
              model: '',
              solution: 'bis'
            },
          ]
        }
      ]
    },
    '71': {
      static: [
        {
          image: 'pg71static1',
          audio: {
            source: 'fundal',
            state: 'stopped'
          },
          trigger: {
            button: {
              top: '20%'
            },
            zone: {
              top: '20%',
              bottom: '40%'
            }
          }
        },
        {
          image: 'pg71static2',
          audio: {
            source: 'fundal',
            state: 'stopped'
          },
          trigger: {
            button: {
              top: '61%'
            },
            zone: {
              top: '61%',
              bottom: '3%'
            }
          }
        }
      ]
    },
    '72': {
      exercise: [
        {
          type: 'typer',
          title: 'Schreib die Tiernamen korrekt, hör dann zu und überprüfe!',
          image: 'pg72ex1',
          audio: {
            source: 'pg72ex1',
            state: 'stopped'
          },
          trigger: {
            button: {
              top: '16%'
            },
            zone: {
              top: '16%',
              bottom: '64%'
            }
          },
          help: {
            toggle: false,
            text: 'Scrie corect numele animalelor. Cand ai terminat apasa pe cheita si verifica. Succes!'
          },
          data: [
            {
              identifier: 'one',
              position: {
                top: '42.7%',
                left: '23%',
                width: '28%'
              },
              model: '',
              solution: 'LÖWEN'
            },
            {
              identifier: 'two',
              position: {
                top: '45.7%',
                left: '28%',
                width: '22%'
              },
              model: '',
              solution: 'SCHLANGEN'
            },
            {
              identifier: 'three',
              position: {
                top: '48.7%',
                left: '27%',
                width: '24%'
              },
              model: '',
              solution: 'ELEFANTEN'
            },
            {
              identifier: 'four',
              position: {
                top: '51.7%',
                left: '22%',
                width: '30%'
              },
              model: '',
              solution: 'AFFEN'
            },
            {
              identifier: 'five',
              position: {
                top: '54.7%',
                left: '27%',
                width: '24%'
              },
              model: '',
              solution: 'KROKODILE'
            },
            {
              identifier: 'six',
              position: {
                top: '42.7%',
                left: '64%',
                width: '30%'
              },
              model: '',
              solution: 'TIGER'
            },
            {
              identifier: 'seven',
              position: {
                top: '45.7%',
                left: '69%',
                width: '24%'
              },
              model: '',
              solution: 'NILPFERDE'
            },
            {
              identifier: 'eight',
              position: {
                top: '48.7%',
                left: '66%',
                width: '28%'
              },
              model: '',
              solution: 'BÄREN'
            },
            {
              identifier: 'nine',
              position: {
                top: '51.7%',
                left: '68%',
                width: '25%'
              },
              model: '',
              solution: 'GIRAFFEN'
            },
            {
              identifier: 'ten',
              position: {
                top: '54.7%',
                left: '66%',
                width: '28%'
              },
              model: '',
              solution: 'ZEBRAS'
            }
          ]
        },
        {
          type: 'linker',
          image: '02',
          title: 'VERBINDE!',
          trigger: {
            button: {
              top: '38%'
            },
            zone: {
              top: '36%',
              bottom: '35%'
            }
          },
          help: {
            toggle: false,
            text: 'Uneste intrebarea cu raspunsul corect. Cand ai terminat apasa pe cheita si verifica. Succes!'
          },
          data: [
            {
              identifier: '1',
              style: {
                top: '10%',
                left: '5%',
                width: '20%',
                height: 'auto',
                color: '#8BCB6A'
              },
              image: {
                src: '72-1.png'
              },
              sourceAnchors: ["RightMiddle"],
              targetAnchors: []
            },
            {
              identifier: '2',
              style: {
                top: '20%',
                left: '5%',
                width: '30%',
                height: 'auto',
                color: '#8BCB6A'
              },
              image: {
                src: '72-2.png'
              },
              sourceAnchors: ["RightMiddle"],
              targetAnchors: []
            },
            {
              identifier: '3',
              style: {
                top: '30%',
                left: '5%',
                width: '35%',
                height: 'auto',
                color: '#8BCB6A'
              },
              image: {
                src: '72-3.png'
              },
              sourceAnchors: ["RightMiddle"],
              targetAnchors: []
            },
            {
              identifier: '4',
              style: {
                top: '40%',
                left: '5%',
                width: '35%',
                height: 'auto',
                color: '#8BCB6A'
              },
              image: {
                src: '72-4.png'
              },
              sourceAnchors: ["RightMiddle"],
              targetAnchors: []
            },
            {
              identifier: '5',
              style: {
                top: '50%',
                left: '5%',
                width: '18%',
                height: 'auto',
                color: '#8BCB6A'
              },
              image: {
                src: '72-5.png'
              },
              sourceAnchors: ["RightMiddle"],
              targetAnchors: []
            },
            {
              identifier: '6',
              style: {
                top: '60%',
                left: '5%',
                width: '30%',
                height: 'auto',
                color: '#8BCB6A'
              },
              image: {
                src: '72-6.png'
              },
              sourceAnchors: ["RightMiddle"],
              targetAnchors: []
            },
            {
              identifier: '7',
              style: {
                top: '70%',
                left: '5%',
                width: '40%',
                height: 'auto',
                color: '#8BCB6A'
              },
              image: {
                src: '72-7.png'
              },
              sourceAnchors: ["RightMiddle"],
              targetAnchors: []
            },
            {
              identifier: '8',
              style: {
                top: '80%',
                left: '5%',
                width: '27%',
                height: 'auto',
                color: '#8BCB6A'
              },
              image: {
                src: '72-8.png'
              },
              sourceAnchors: ["RightMiddle"],
              targetAnchors: []
            },
            {
              identifier: 'a',
              style: {
                top: '10%',
                left: '60%',
                width: '35%',
                height: 'auto'
              },
              image: {
                src: '72-a.png'
              },
              solution: '7',
              solutionImg: {
                src: '72-a.png'
              },
              sourceAnchors: [],
              targetAnchors: ["LeftMiddle"]
            },
            {
              identifier: 'b',
              style: {
                top: '20%',
                left: '60%',
                width: '27%',
                height: 'auto'
              },
              image: {
                src: '72-b.png'
              },
              solution: '5',
              solutionImg: {
                src: '72-b.png'
              },
              sourceAnchors: [],
              targetAnchors: ["LeftMiddle"]
            },
            {
              identifier: 'c',
              style: {
                top: '30%',
                left: '60%',
                width: '30%',
                height: 'auto'
              },
              image: {
                src: '72-c.png'
              },
              solution: '3',
              solutionImg: {
                src: '72-c.png'
              },
              sourceAnchors: [],
              targetAnchors: ["LeftMiddle"]
            },
            {
              identifier: 'd',
              style: {
                top: '40%',
                left: '60%',
                width: '22%',
                height: 'auto'
              },
              image: {
                src: '72-d.png'
              },
              solution: '1',
              solutionImg: {
                src: '72-d.png'
              },
              sourceAnchors: [],
              targetAnchors: ["LeftMiddle"]
            },
            {
              identifier: 'e',
              style: {
                top: '50%',
                left: '60%',
                width: '31%',
                height: 'auto'
              },
              image: {
                src: '72-e.png'
              },
              solution: '2',
              solutionImg: {
                src: '72-e.png'
              },
              sourceAnchors: [],
              targetAnchors: ["LeftMiddle"]
            },
            {
              identifier: 'f',
              style: {
                top: '60%',
                left: '60%',
                width: '30%',
                height: 'auto'
              },
              image: {
                src: '72-f.png'
              },
              solution: '4',
              solutionImg: {
                src: '72-f.png'
              },
              sourceAnchors: [],
              targetAnchors: ["LeftMiddle"]
            },
            {
              identifier: 'g',
              style: {
                top: '70%',
                left: '60%',
                width: '25%',
                height: 'auto'
              },
              image: {
                src: '72-g.png'
              },
              solution: '8',
              solutionImg: {
                src: '72-g.png'
              },
              sourceAnchors: [],
              targetAnchors: ["LeftMiddle"]
            },
            {
              identifier: 'h',
              style: {
                top: '80%',
                left: '60%',
                width: '25%',
                height: 'auto'
              },
              image: {
                src: '72-h.png'
              },
              solution: '6',
              solutionImg: {
                src: '72-h.png'
              },
              sourceAnchors: [],
              targetAnchors: ["LeftMiddle"]
            }
          ]
        }
      ]
    },
    '73': {
      exercise: [
        {
          type: 'checker',
          title: 'Hör zu und kreuze RICHTIG oder FALSCH an!',
          image: 'pg73ex4',
          audio: {
            source: 'pg73ex4',
            state: 'stopped'
          },
          trigger: {
            button: {
              top: '9%'
            },
            zone: {
              top: '9%',
              bottom: '58%'
            }
          },
          help: {
            toggle: false,
            text: 'Asculta si bifeaza R(corect) si F (fals). Cand ai terminat apasa pe cheita si verifica. Succes!'
          },
          data: [
            {
              identifier: 'one',
              model: '',
              position: {
                top: '38.6%',
                left: '47.2%',
                width: '11.7%',
                height: '2.5%'
              },
              answerFalse: {
                top: '9%',
                left: '70%'
              },
              answerTrue: {
                top: '9%',
                left: '7%'
              }
            },
            {
              identifier: 'two',
              model: '',
              position: {
                top: '43%',
                left: '47.2%',
                width: '11.7%',
                height: '2.5%'
              },
              answerFalse: {
                top: '9%',
                left: '70%'
              },
              answerTrue: {
                top: '9%',
                left: '7%'
              }
            },
            {
              identifier: 'three',
              model: '',
              position: {
                top: '47.3%',
                left: '47.2%',
                width: '11.7%',
                height: '2.5%'
              },
              answerTrue: {
                top: '9%',
                left: '70%'
              },
              answerFalse: {
                top: '9%',
                left: '7%'
              }
            },
            {
              identifier: 'four',
              model: '',
              position: {
                top: '51.6%',
                left: '47.2%',
                width: '11.7%',
                height: '2.5%'
              },
              answerTrue: {
                top: '9%',
                left: '70%'
              },
              answerFalse: {
                top: '9%',
                left: '7%'
              }
            },
            {
              identifier: 'five',
              model: '',
              position: {
                top: '56%',
                left: '47.2%',
                width: '11.7%',
                height: '2.5%'
              },
              answerFalse: {
                top: '9%',
                left: '70%'
              },
              answerTrue: {
                top: '9%',
                left: '7%'
              }
            },
            {
              identifier: 'six',
              model: '',
              position: {
                top: '60.4%',
                left: '47.2%',
                width: '11.7%',
                height: '2.5%'
              },
              answerTrue: {
                top: '9%',
                left: '70%'
              },
              answerFalse: {
                top: '9%',
                left: '7%'
              }
            }
          ]
        }
      ]
    },
    '75': {
      exercise: [
        {
          type: 'painter',
          title: 'Lies die Uhrzeiten und zeichne die Uhrzeiger!',
          image: 'pg75ex8',
          trigger: {
            button: {
              top: '72%'
            },
            zone: {
              top: '72%',
              bottom: '4%'
            }
          },
          help: {
            toggle: false,
            text: 'Citeste propozitiile si deseneaza limbile ceasului. Cand ai terminat apasa pe cheita si verifica. Succes!'
          },
          data: [
            {
              identifier: 'one',
              position: {
                top: '41%',
                left: '10.3%',
                width: '18%',
                height: '13.9%'
              },
              solution: 'pg75ex8-1'
            },
            {
              identifier: 'two',
              position: {
                top: '41%',
                left: '31.2%',
                width: '18%',
                height: '13.9%'
              },
              solution: 'pg75ex8-2'
            },
            {
              identifier: 'three',
              position: {
                top: '41%',
                left: '50.6%',
                width: '18%',
                height: '13.9%'
              },
              solution: 'pg75ex8-3'
            },
            {
              identifier: 'four',
              position: {
                top: '41%',
                left: '71.3%',
                width: '18%',
                height: '13.9%'
              },
              solution: 'pg75ex8-4'
            }
          ]
        }
      ]
    },
    '77': {
      static: [
        {
          image: 'pg77ex8static1',
          audio: {
            source: 'fundal',
            state: 'stopped'
          },
          trigger: {
            button: {
              top: '12%'
            },
            zone: {
              top: '12%',
              bottom: '71%'
            }
          }
        },
        {
          image: 'pg77ex8static2',
          audio: {
            source: 'fundal',
            state: 'stopped'
          },
          trigger: {
            button: {
              top: '30%'
            },
            zone: {
              top: '30%',
              bottom: '54%'
            }
          }
        },
        {
          image: 'pg77ex8static3',
          audio: {
            source: 'fundal',
            state: 'stopped'
          },
          trigger: {
            button: {
              top: '47%'
            },
            zone: {
              top: '47%',
              bottom: '37%'
            }
          }
        },
        {
          image: 'pg77ex8static4',
          audio: {
            source: 'fundal',
            state: 'stopped'
          },
          trigger: {
            button: {
              top: '64%'
            },
            zone: {
              top: '64%',
              bottom: '20%'
            }
          }
        },
        {
          image: 'pg77ex8static5',
          audio: {
            source: 'fundal',
            state: 'stopped'
          },
          trigger: {
            button: {
              top: '81%'
            },
            zone: {
              top: '81%',
              bottom: '3%'
            }
          }
        }
      ]
    }
  }
}
