module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend:{
      fontFamily:{
        'oldStandard': 'Old Standard TT, serif',
        'roboto': 'Roboto, sans-serif',
        'robotoMono':"Roboto Mono, monospace",
        'montSerrat':"Montserrat, sans-serif",
        'libre':"Libre Baskerville, serif",
        'garamond': "EB Garamond, serif",
        'fastHand': "Fasthand, cursive",
        'cursive':"Cookie, cursive",
        'dafoe': "Mr Dafoe, cursive",
        'norican' : "Norican, cursive",
        'oswald' : "Oswald, sans-serif"
      },
      backgroundImage:{
        'backgr': "url('/public/Imagini/background.jpeg')",
        'backCourse': "url('/src/Components/Courses/Imagini/bgmain.jpeg')",
        'bgHero':"url('/public/Imagini/bgHero.jpeg')",
        'teamBg':"url('/public/Imagini/Team.jpeg')",
        'teamMobileBg':"url('/public/Imagini/Team_1.jpeg')",
        'sol':"url('/public/Imagini/SOL.svg')",
        'sal':"url('/public/Imagini/SAL.svg')",
        'stripe':"url('/public/Imagini/Stripe.png')",
        'visa':"url('/public/Imagini/VISA.png')",
        'masterCard':"url('/public/Imagini/mastercard.png')"
      }
    },
    keyframes: {
      showList:{
        '0%':{
          height: '0rem'
        },
        '100%':{
          height:'17rem'
        }
      },
      showListReverse:{
        '0%':{
          height: '17rem'
        },
        '100%':{
          height:'0rem'
        }
      },
      showListMobile:{
        '0%':{
          height: '0rem'
        },
        '100%':{
          height:'12rem'
        }
      },
      showListMobileReverse:{
        '0%':{
          height: '12rem'
        },
        '100%':{
          height:'0rem'
        }
      },
      rotateArrow:{
        '0%':{
          rotate:"-90deg"
        },
        '100%':{
          rotate:"0"
        }
      },
      rotateArrowReverse:{
        '0%':{
          rotate:"0"
        },
        '100%':{
          rotate:"-90deg"
        }
      },
      underlineAnim:{
        '0%':{
          width:"0"
        },
        '100%':{
          width:"100%"
        }
      },
      underlineAnimReverse:{
        '0%':{
          width:"100%"
        },
        '100%':{
          width:"0"
        }
      },
      aboutBtn:{
        '0%':{
          background:"transparent",
          color:"white"
        },
        '100%':{
          background:"white",
          color:"black"
        }
      },
      aboutBtnReverse:{
        '0%':{
      
          background:"white",
          color:"black"
        },
        '100%':{
          background:"transparent",
          color:"white"
        }
      },
      topLine:{
        '0%':{
          top:"0.3rem",
          rotate:"0deg"
        },
        '100%':{
          top:"0.6rem",
          rotate:"45deg"
        }
      },
      bottomLine:{
        '0%':{
          top:"0.9rem",
          rotate:"0deg"
        },
        '100%':{
          top:"0.35rem",
          rotate:"-45deg"
        }
      },
      topLineReverse:{
        '0%':{
      
          top:"0.6rem",
          rotate:"45deg"
        },
        '100%':{
          top:"0.3rem",
          rotate:"0deg"
        }
      },
      bottomLineReverse:{
        '0%':{
        
          top:"0.35rem",
          rotate:"-45deg"
        },
        '100%':{
          top:"0.9rem",
          rotate:"0deg"
        }
      },
      appear:{
        '0%':{
          opacity:"0"
        },
        '100%':{
          opacity:"100%"
        }
      },
      disappear:{
        '0%':{
          opacity:"100%"
        },
        '100%':{
          opacity:"0"
        }
      },
      buyBtn:{
        '0%':{
          background:"transparent",
          color:"black"
        },
        '100%':{
          background:"black",
          color:"white"
        }
      },
      buyBtnReverse:{
        '0%':{
          background:"black",
          color:"white"
        },
        '100%':{
          background:"transparent",
          color:"black"
        }
      },
      menuAppear:{
        '0%':{
         width:"0",
         opacity:"0"
        },
        '100%':{
          width:"20rem",
          opacity:"1"
        }
      },
      menuAppearReverse:{
        '0%':{
         width:"20rem",
         opacity:"1"
        },
        '100%':{
          width:"0",
          opacity:"0"
        }
      },
    },
  },
  plugins: [],
}