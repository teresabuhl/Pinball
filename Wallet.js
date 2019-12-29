class Wallet {
  constructor(money) {
    let _money = money;
    //pobiera aktualną zawartości portfela
    this.getWalletValue = () => _money;

    //sprawdza, czy użytkownik ma odpowiednią ilość środków
    this.checkCanPlay = value => {
      if (_money >= value) return true;
      return false;
    }

    //zmienia zawartość portfela
    this.changeWallet = (value, type = '+') => {
      if (typeof value === 'number' && !isNaN(value)) {
        if (type === '+') {
          return _money += value;
        } else if (type === '-') {
          return _money -= value;
        } else {
          throw new Error('nieprawidłowy typ działania')
        }
      } else {
        console.log(typeof value);
        throw new Error('nieprawodłowa liczba')
      }
    }
  }
}

//const wallet = new Wallet(100)