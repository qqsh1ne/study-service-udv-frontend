import { FC } from 'react';
import Layout from '../../../../components/Layout/ui/Layout.tsx';
import Status from '../../../../components/ui/Status/Status.tsx';
import { StatusNames } from '../../../../components/ui/Status/StatusNames.ts';
import styles from './ApplicationConfirm.module.scss';
import { NavLink } from 'react-router-dom';
import { Path } from '../../../../const/path.ts';
import { useAppSelector } from '../../../../hooks/hooks.ts';
import { getApplicationId } from '../../model/selectors/applicationSelector.ts';

const ApplicationConfirmation: FC = () => {
	// @ts-ignore
	const applicationId = useAppSelector(getApplicationId);
	return (
		<Layout>
			<div className={styles.confirmation}>
				<h1>Заявка {applicationId} успешно заполнена!</h1>
				<div className={styles.wrapper}>
					<p className={styles.statusDesc}>Статус заявки</p>
					<Status name={StatusNames.New} />
				</div>
				<div className={styles.btnsWrapper}>
					<NavLink to={Path.home} className={styles.toHome} reloadDocument={true}>
						На главную
					</NavLink>
					<NavLink to={`${Path.applications}/${applicationId}`} className={styles.toApplication} reloadDocument={true}>
						К заявке
					</NavLink>
				</div>
			</div>
		</Layout>
	);
};

export default ApplicationConfirmation;
