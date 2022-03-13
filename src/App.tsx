import React, { useState, ChangeEvent } from 'react';
import { levels, CalculateImc, Level } from './helpers/imc'
import { GridLayout } from './components/gridItem'

import style from './App.module.css';
import GlobalStyles from './style/GlobalStyle';
import poweredImage from './assets/images/powered.png'
import LeftArrowImage from './assets/images/leftarrow.png'

const App = () => {
  const [Height, setHeight] = useState<number>(0);
  const [Weight, setWeight] = useState<number>(0);
  const [ToShow, setToShow] = useState<Level | null>(null);

  const handleAdDHeight = (e: ChangeEvent<HTMLInputElement>) => {
    setHeight(parseFloat(e.target.value))
  }

  const handleAdDWeight = (e: ChangeEvent<HTMLInputElement>) => {
    setWeight(parseFloat(e.target.value))
    // porque não o parseInt() nesse caso a altur pode ser decimal
    // o value sempre é uma string, para resolver isso, usamos o parseFloat
  }

  const handleCalculateIMC = () => {
    if (Height && Weight) {
      setToShow(CalculateImc(Height, Weight));
    }
    else {
      console.log(` Campos Precisam Estar Preenchidos ${Height} ${Weight}`)
    }
  }

  const handleBackPage = () => {
    setToShow(null)
    setHeight(0)
    setWeight(0)
  }

  return <>
    <GlobalStyles />
    <div className={style.main}>
      <header>
        <div className={style.HeaderContainer}>
          <img src={poweredImage} alt="poweredImage - logo" width={150} />
        </div>
      </header>
      <div className={style.container}>
        <div className={style.leftSide}>
          <h1>Calcule seu IMC.</h1>
          <p>Созданный в 19 веке математиком Ламбером Кетле, индекс массы тела, известный под аббревиатурой ИМТ, представляет собой простой расчет, который позволяет вам измерить, имеет ли кто-то идеальный вес.</p>

          <input
            type="number"
            placeholder='Digite a sua altura. Ex: 1.5 (em M)'
            value={Height > 0 ? Height : ''}
            onChange={handleAdDHeight}
            disabled={ToShow ? true : false}
          />
          <input
            type="number"
            placeholder='Digite o seu peso. Ex: 68 (em Kg)'
            value={Weight > 0 ? Weight : ''}
            onChange={handleAdDWeight}
            disabled={ToShow ? true : false}/>
          <button 
          onClick={handleCalculateIMC}
          disabled={ToShow ? true : false}
          >calcular</button>
        </div>

        <div className={style.rightSide}>
          {!ToShow &&
            <div className={style.grid}>
              {levels.map((item, index) => (
                <GridLayout key={index} item={item} />
              ))}
            </div>
          }
          {ToShow &&
            <div className={style.rightBigItem}>
              <div className={style.rightArrow} onClick={handleBackPage}>
                <img src={LeftArrowImage} alt="" width="25" className={style.backbuton}/>
              </div>
              <GridLayout item={ToShow} />
            </div>
          }
        </div>
      </div>
    </div>
  </>;
}

export default App;
