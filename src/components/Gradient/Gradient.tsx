import vector1 from '../../assets/gradient/Vector1.svg';
import vector2 from '../../assets/gradient/Vector2.svg';
import vector3 from '../../assets/gradient/Vector3.svg';
import vector4 from '../../assets/gradient/Vector4.svg';
import vector5 from '../../assets/gradient/Vector5.svg';
import vector6 from '../../assets/gradient/Vector6.svg';

import styles from './Gradient.module.scss';
export const Gradient = () => {
	return (
		<>
			<div className={styles.gr1}>
				<div className={styles.vector1}>
					<img src={vector1} alt='vector1' />
				</div>
				<div className={styles.vector2}>
					<img src={vector2} alt='vector2' />
				</div>
				<div className={styles.vector3}>
					<img src={vector3} alt='vector3' />
				</div>
			</div>
			<div className={styles.gr2}>
				<div className={styles.vector4}>
					<img src={vector4} alt='vector4' />
				</div>
				<div className={styles.vector5}>
					<img src={vector5} alt='vector5' />
				</div>
				<div className={styles.vector6}>
					<img src={vector6} alt='vector6' />
				</div>
			</div>
		</>
	);
};
