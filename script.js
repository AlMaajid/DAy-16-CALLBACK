setTimeout(() => {
  document.querySelector('.countdown').innerHTML = 10;
  return setTimeout(() => {
    document.querySelector('.countdown').innerHTML = 09;
    return setTimeout(() => {
      document.querySelector('.countdown').innerHTML = 08;
      return setTimeout(() => {
        document.querySelector('.countdown').innerHTML = 07;
        return setTimeout(() => {
          document.querySelector('.countdown').innerHTML = 06;
          return setTimeout(() => {
            document.querySelector('.countdown').innerHTML = 05;
            return setTimeout(() => {
              document.querySelector('.countdown').innerHTML = 04;
              return setTimeout(() => {
                document.querySelector('.countdown').innerHTML = 03;
                return setTimeout(() => {
                  document.querySelector('.countdown').innerHTML = 02;
                  return setTimeout(() => {
                    document.querySelector('.countdown').innerHTML = 01;
                    return setTimeout(() => {
                      document.querySelector('.countdown').innerHTML = `<span class='firstWord'>happy</span><span class=''secondWord> independence </span><span class='thirdWord'>day</span>`;
                    }, 1000);
                  }, 1000);
                }, 1000);
              }, 1000);
            }, 1000);
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000)