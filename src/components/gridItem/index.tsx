import { Level } from '../../helpers/imc'
import styles from './Grid.module.css'
import UpImage from '../../assets/images/up.png'
import DownImage from '../../assets/images/down.png'


interface Props {
    item: Level
}

export const GridLayout = ({ item }: Props) => {
    return (
        <div className={styles.main} style={{ backgroundColor: item.color }}>
            <div className={styles.GridIcon}>
                <img src={item.icon === 'up' ? UpImage : DownImage} alt={item.title} width="30" />
            </div>
            <div className={styles.GridTitle}>{item.title}</div>
            {item.yourImc &&
                <div className={styles.yourImc}>Seu IMC é de {item.yourImc} Kg/m²</div>
            }
            <div className={styles.GridInfo}>
                <>
                    IMC está entre <strong>{item.imc[0]}</strong> e <strong>{item.imc[1]}</strong>
                </>
            </div>
        </div>
    )
}
